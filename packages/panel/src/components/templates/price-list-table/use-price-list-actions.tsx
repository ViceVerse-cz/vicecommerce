import * as React from "react";
import { useAdminDeletePriceList, useAdminUpdatePriceList } from "medusa-react";
import useImperativeDialog from "../../../hooks/use-imperative-dialog";
import useNotification from "../../../hooks/use-notification";
import { getErrorMessage } from "../../../utils/error-messages";
import TrashIcon from "../../fundamentals/icons/trash-icon";
import UnpublishIcon from "../../fundamentals/icons/unpublish-icon";
import { ActionType } from "../../molecules/actionables";
import { isActive } from "./utils";
import PublishIcon from "../../fundamentals/icons/publish-icon";

const usePriceListActions = (priceList) => {
  const dialog = useImperativeDialog();
  const notification = useNotification();
  const updatePrice = useAdminUpdatePriceList(priceList?.id);
  const deletePrice = useAdminDeletePriceList(priceList?.id);

  const onDelete = async () => {
    const shouldDelete = await dialog({
      heading: "Odstranění ceníku",
      text: "Opravdu chcete tento ceník smazat?",
    });
    if (shouldDelete) {
      deletePrice.mutate(undefined, {
        onSuccess: () => {
          notification("Úspěch", "Úspěšně odstraněn ceník", "success");
        },
        onError: (err) => notification("Chyba", getErrorMessage(err), "error"),
      });
    }
  };

  const onUpdate = () => {
    updatePrice.mutate(
      {
        status: isActive(priceList) ? "draft" : "active",
      },
      {
        onSuccess: () => {
          notification("Úspěch", `Úspěšně ${isActive(priceList) ? "unpublished" : "published"} ceník`, "success");
        },
      },
    );
  };

  const getActions = (): ActionType[] => [
    {
      label: isActive(priceList) ? "Zrušení publikování" : "Zveřejnit",
      onClick: onUpdate,
      icon: isActive(priceList) ? <UnpublishIcon size={20} /> : <PublishIcon size={20} />,
    },
    {
      label: "Odstranit",
      onClick: onDelete,
      icon: <TrashIcon size={20} />,
      variant: "danger",
    },
  ];

  return {
    getActions,
  };
};

export default usePriceListActions;
