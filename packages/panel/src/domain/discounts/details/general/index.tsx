import { Discount } from "@medusajs/medusa";
import { useAdminDeleteDiscount, useAdminUpdateDiscount } from "medusa-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Badge from "../../../../components/fundamentals/badge";
import EditIcon from "../../../../components/fundamentals/icons/edit-icon";
import TrashIcon from "../../../../components/fundamentals/icons/trash-icon";
import { ActionType } from "../../../../components/molecules/actionables";
import StatusSelector from "../../../../components/molecules/status-selector";
import BodyCard from "../../../../components/organisms/body-card";
import useImperativeDialog from "../../../../hooks/use-imperative-dialog";
import useNotification from "../../../../hooks/use-notification";
import { getErrorMessage } from "../../../../utils/error-messages";
import { formatAmountWithSymbol } from "../../../../utils/prices";
import EditGeneral from "./edit-general";

type GeneralProps = {
  discount: Discount;
};

const General: React.FC<GeneralProps> = ({ discount }) => {
  const dialog = useImperativeDialog();
  const navigate = useNavigate();
  const notification = useNotification();
  const updateDiscount = useAdminUpdateDiscount(discount.id);
  const deletediscount = useAdminDeleteDiscount(discount.id);
  const [showmModal, setShowModal] = useState(false);

  const onDelete = async () => {
    const shouldDelete = await dialog({
      heading: "Odstranit propagaci",
      text: "Opravdu chcete tuto propagaci odstranit?",
    });
    if (shouldDelete) {
      deletediscount.mutate(undefined, {
        onSuccess: () => {
          notification("Úspěch", "Propagace úspěšně odstraněna", "success");
          navigate("/a/discounts/");
        },
        onError: (err) => {
          notification("Chyba", getErrorMessage(err), "error");
        },
      });
    }
  };

  const onStatusChange = async () => {
    updateDiscount.mutate(
      {
        is_disabled: !discount.is_disabled,
      },
      {
        onSuccess: ({ discount: { is_disabled } }) => {
          const pastTense = !is_disabled ? "zveřejněna" : "vypracována";
          notification("Úspěch", `Sleva ${pastTense} úspěšně`, "success");
        },
        onError: (err) => {
          notification("Chyba", getErrorMessage(err), "error");
        },
      },
    );
  };

  const actionables: ActionType[] = [
    {
      label: "Upravit obecné informace",
      onClick: () => setShowModal(true),
      icon: <EditIcon size={20} />,
    },
    {
      label: "Smazat slevu",
      onClick: onDelete,
      variant: "danger",
      icon: <TrashIcon size={20} />,
    },
  ];

  return (
    <>
      <BodyCard
        actionables={actionables}
        title={discount.code}
        subtitle={discount.rule.description}
        forceDropdown
        className='min-h-[200px]'
        status={
          <div className='flex items-center gap-x-2xsmall'>
            {discount.is_dynamic && (
              <span>
                <Badge variant='default'>
                  <span className='text-grey-90 inter-small-regular'>{"Šablona slevy"}</span>
                </Badge>
              </span>
            )}
            <StatusSelector
              isDraft={discount?.is_disabled}
              activeState='Zveřejněno na'
              draftState='Návrh'
              onChange={onStatusChange}
            />
          </div>
        }
      >
        <div className='flex'>
          <div className='border-l border-grey-20 pl-6'>
            {getPromotionDescription(discount)}
            <span className='inter-small-regular text-grey-50'>Výše slevy</span>
          </div>
          <div className='border-l border-grey-20 pl-6 ml-12'>
            <h2 className='inter-xlarge-regular text-grey-90'>{discount.regions.length.toLocaleString("en-US")}</h2>
            <span className='inter-small-regular text-grey-50'>Platné oblasti</span>
          </div>
          <div className='border-l border-grey-20 pl-6 ml-12'>
            <h2 className='inter-xlarge-regular text-grey-90'>{discount.usage_count.toLocaleString("en-US")}</h2>
            <span className='inter-small-regular text-grey-50'>Celkový počet odkupů</span>
          </div>
        </div>
      </BodyCard>
      {showmModal && <EditGeneral discount={discount} onClose={() => setShowModal(false)} />}
    </>
  );
};

const getPromotionDescription = (discount: Discount) => {
  switch (discount.rule.type) {
    case "fixed":
      return (
        <div className='flex items-baseline'>
          <h2 className='inter-xlarge-regular'>
            {formatAmountWithSymbol({
              currency: discount.regions[0].currency_code,
              amount: discount.rule.value,
            })}
          </h2>
          <span className='inter-base-regular text-grey-50 ml-1'>
            {discount.regions[0].currency_code.toUpperCase()}
          </span>
        </div>
      );
    case "percentage":
      return (
        <div className='flex items-baseline'>
          <h2 className='inter-xlarge-regular text-grey-90'>{discount.rule.value}</h2>
          <span className='inter-base-regular text-grey-50 ml-1'>%</span>
        </div>
      );
    case "free_shipping":
      return <h2 className='inter-xlarge-regular text-grey-90'>{"DOPRAVA ZDARMA"}</h2>;
    default:
      return "Neznámý typ slevy";
  }
};

export default General;
