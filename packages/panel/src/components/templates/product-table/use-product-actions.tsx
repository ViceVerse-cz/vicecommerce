import { Product } from "@medusajs/medusa";
import { useAdminDeleteProduct, useAdminUpdateProduct } from "medusa-react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import useImperativeDialog from "../../../hooks/use-imperative-dialog";
import useNotification from "../../../hooks/use-notification";
import { getErrorMessage } from "../../../utils/error-messages";
import DuplicateIcon from "../../fundamentals/icons/duplicate-icon";
import EditIcon from "../../fundamentals/icons/edit-icon";
import PublishIcon from "../../fundamentals/icons/publish-icon";
import TrashIcon from "../../fundamentals/icons/trash-icon";
import UnpublishIcon from "../../fundamentals/icons/unpublish-icon";
import { ActionType } from "../../molecules/actionables";
import useCopyProduct from "./use-copy-product";

const useProductActions = (product: Product) => {
  const navigate = useNavigate();
  const notification = useNotification();
  const dialog = useImperativeDialog();
  const copyProduct = useCopyProduct();
  const deleteProduct = useAdminDeleteProduct(product?.id);
  const updateProduct = useAdminUpdateProduct(product?.id);

  const handleDelete = async () => {
    const shouldDelete = await dialog({
      heading: "Odstranit produkt",
      text: "Opravdu chcete tento produkt odstranit?",
    });

    if (shouldDelete) {
      deleteProduct.mutate();
    }
  };

  const getActions = (): ActionType[] => [
    {
      label: "Upravit",
      onClick: () => navigate(`/a/products/${product.id}`),
      icon: <EditIcon size={20} />,
    },
    {
      label: product.status === "published" ? "Zrušení publikování" : "Zveřejnit",
      onClick: () => {
        const newStatus = product.status === "published" ? "návrh" : "zveřejněno";
        updateProduct.mutate(
          {
            status: newStatus,
          },
          {
            onSuccess: () => {
              notification(
                "Úspěch",
                `Úspěšně ${product.status === "published" ? "unpublished" : "published"} produkt`,
                "success",
              );
            },
            onError: (err) => notification("Chyba", getErrorMessage(err), "error"),
          },
        );
      },
      icon: product.status === "published" ? <UnpublishIcon size={20} /> : <PublishIcon size={20} />,
    },
    {
      label: "Duplikovat",
      onClick: () => copyProduct(product),
      icon: <DuplicateIcon size={20} />,
    },
    {
      label: "Odstranit",
      variant: "danger",
      onClick: handleDelete,
      icon: <TrashIcon size={20} />,
    },
  ];

  return {
    getActions,
  };
};

export default useProductActions;
