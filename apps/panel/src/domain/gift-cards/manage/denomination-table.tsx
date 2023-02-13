import { useAdminDeleteVariant } from "medusa-react";
import React, { useState } from "react";
import EditIcon from "../../../components/fundamentals/icons/edit-icon";
import TrashIcon from "../../../components/fundamentals/icons/trash-icon";
import Table from "../../../components/molecules/table";
import DeletePrompt from "../../../components/organisms/delete-prompt";
import { stringDisplayPrice } from "../../../utils/prices";

type DenominationTableProps = {
  giftCardId: string;
  denominations: any[];
  defaultCurrency: string;
  setEditDenom: (denom) => void;
};

const DenominationTable: React.FC<DenominationTableProps> = ({
  giftCardId,
  denominations,
  defaultCurrency,
  setEditDenom,
}) => {
  const [selectedDenom, setSelectedDenom] = useState<string | null>(null);

  const deleteDenomination = useAdminDeleteVariant(giftCardId);

  const getDenominationPrices = (denomination) => {
    const sortHelper = (p1, p2) => {
      const curr1 = p1.currency_code;
      const curr2 = p2.currency_code;

      if (curr1 < curr2) {
        return -1;
      }
      if (curr1 > curr2) {
        return 1;
      }
      return 0;
    };

    return denomination.prices
      .filter((p) => p.currency_code !== defaultCurrency) // without default
      .sort(sortHelper) // sort by currency code
      .map((p) => stringDisplayPrice({ currencyCode: p.currency_code, amount: p.amount })) // get formatted price
      .join(", "); // concatenate to single comma separated string
  };

  const getDenominationRow = (denomination, index) => {
    let defaultPrice = denomination.prices.find((p) => p.currency_code === defaultCurrency);

    if (!defaultPrice) {
      defaultPrice = denomination.prices[0];
    }

    return (
      <Table.Row
        key={`denomination-${index}`}
        color={"inherit"}
        actions={[
          {
            label: "Upravit pojmenování",
            onClick: () => setEditDenom(denomination),
            icon: <EditIcon size={20} />,
          },
          {
            label: "Vymazat označení",
            variant: "danger",
            onClick: () => setSelectedDenom(denomination.id),
            icon: <TrashIcon size={20} />,
          },
        ]}
      >
        <Table.Cell>
          {stringDisplayPrice({
            currencyCode: defaultPrice.currency_code,
            amount: defaultPrice.amount,
          })}
        </Table.Cell>
        <Table.Cell>{getDenominationPrices(denomination)}</Table.Cell>
      </Table.Row>
    );
  };

  const handleDeleteDenomination = async () => {
    deleteDenomination.mutateAsync(selectedDenom!);
  };

  return (
    <div className='w-full h-full overflow-y-auto'>
      <Table>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCell>Default Value</Table.HeadCell>
            <Table.HeadCell>Other Values</Table.HeadCell>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body className='text-grey-90'>{denominations?.map((d, idx) => getDenominationRow(d, idx))}</Table.Body>
      </Table>
      {selectedDenom && (
        <DeletePrompt
          handleClose={() => setSelectedDenom(null)}
          text='Jste si jisti, že chcete tuto nominální hodnotu z obchodu odstranit?'
          heading='Vymazat označení'
          onDelete={() => handleDeleteDenomination()}
          successText='Úspěšně odstraněný název'
          confirmText='Ano, vymazat'
        />
      )}
    </div>
  );
};

export default DenominationTable;
