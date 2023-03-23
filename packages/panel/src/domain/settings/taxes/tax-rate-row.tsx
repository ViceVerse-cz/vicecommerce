import { useAdminDeleteTaxRate } from "medusa-react";
import EditIcon from "../../../components/fundamentals/icons/edit-icon";
import TrashIcon from "../../../components/fundamentals/icons/trash-icon";
import { ActionType } from "../../../components/molecules/actionables";
import Table from "../../../components/molecules/table";
import useImperativeDialog from "../../../hooks/use-imperative-dialog";
import useNotification from "../../../hooks/use-notification";
import { TaxRateType } from "../../../types/shared";
import { getErrorMessage } from "../../../utils/error-messages";

type TaxRate = {
  id: string;
  name?: string;
  rate: number | null;
  code: string | null;
  type: TaxRateType;
};

export const TaxRateRow = ({ row, onEdit }) => {
  const dialog = useImperativeDialog();
  const notification = useNotification();
  const deleteTaxRate = useAdminDeleteTaxRate(row.original.id);

  const handleDelete = async (rate: TaxRate) => {
    if (!rate || rate.type !== TaxRateType.RATE) {
      return Promise.resolve();
    }

    const shouldDelete = await dialog({
      heading: "Vymazat sazbu daně",
      text: "Opravdu chcete tuto sazbu daně odstranit?",
    });

    if (!shouldDelete) {
      return;
    }

    return deleteTaxRate
      .mutateAsync()
      .then(() => {
        notification("Úspěch", "Sazba daně byla zrušena.", "success");
      })
      .catch((err) => {
        notification("Chyba", getErrorMessage(err), "error");
      });
  };

  const actions: ActionType[] = [
    {
      label: "Upravit",
      onClick: () => onEdit(row.original),
      icon: <EditIcon size={20} />,
    },
  ];

  if (row.original.type === TaxRateType.RATE) {
    actions.push({
      label: "Smazat sazbu daně",
      variant: "danger",
      onClick: () => handleDelete(row.original),
      icon: <TrashIcon size={20} />,
    });
  }

  return (
    <Table.Row color={"inherit"} forceDropdown actions={actions} {...row.getRowProps()} className='group'>
      {row.cells.map((cell) => {
        return <Table.Cell>{cell.render("Cell")}</Table.Cell>;
      })}
    </Table.Row>
  );
};
