import {
  AdminPostProductsProductReq,
  AdminPostProductsProductVariantsReq,
  AdminPostProductsProductVariantsVariantReq,
} from "@medusajs/medusa";
import {
  useAdminCreateVariant,
  useAdminDeleteProduct,
  useAdminDeleteVariant,
  useAdminProduct,
  useAdminUpdateProduct,
  useAdminUpdateVariant,
} from "medusa-react";
import { useNavigate } from "react-router-dom";
import useImperativeDialog from "../../../../hooks/use-imperative-dialog";
import useNotification from "../../../../hooks/use-notification";
import { getErrorMessage } from "../../../../utils/error-messages";

const useEditProductActions = (productId: string) => {
  const dialog = useImperativeDialog();
  const navigate = useNavigate();
  const notification = useNotification();
  const getProduct = useAdminProduct(productId);
  const updateProduct = useAdminUpdateProduct(productId);
  const deleteProduct = useAdminDeleteProduct(productId);
  const updateVariant = useAdminUpdateVariant(productId);
  const deleteVariant = useAdminDeleteVariant(productId);
  const addVariant = useAdminCreateVariant(productId);

  const onDelete = async () => {
    const shouldDelete = await dialog({
      heading: "Odstranit produkt",
      text: "Jste si jisti, že chcete tento produkt odstranit?",
    });
    if (shouldDelete) {
      deleteProduct.mutate(undefined, {
        onSuccess: () => {
          notification("Úspěch", "Produkt byl úspěšně odstraněn", "success");
          navigate("/a/products/");
        },
        onError: (err) => {
          notification("Chyba", getErrorMessage(err), "error");
        },
      });
    }
  };

  const onAddVariant = (
    payload: AdminPostProductsProductVariantsReq,
    onSuccess: () => void,
    successMessage = "Varianta byla úspěšně vytvořena",
  ) => {
    addVariant.mutate(payload, {
      onSuccess: () => {
        notification("Úspěch", successMessage, "success");
        getProduct.refetch();
        onSuccess();
      },
      onError: (err) => {
        notification("Chyba", getErrorMessage(err), "error");
      },
    });
  };

  const onUpdateVariant = (
    id: string,
    payload: Partial<AdminPostProductsProductVariantsVariantReq>,
    onSuccess: () => void,
    successMessage = "Varianta byla úspěšně aktualizována",
  ) => {
    updateVariant.mutate(
      // @ts-ignore - TODO fix type on request
      { variant_id: id, ...payload },
      {
        onSuccess: () => {
          notification("Úspěch", successMessage, "success");
          getProduct.refetch();
          onSuccess();
        },
        onError: (err) => {
          notification("Chyba", getErrorMessage(err), "error");
        },
      },
    );
  };

  const onDeleteVariant = (
    variantId: string,
    onSuccess?: () => void,
    successMessage = "Varianta byla úspěšně odstraněna",
  ) => {
    deleteVariant.mutate(variantId, {
      onSuccess: () => {
        notification("Úspěch", successMessage, "success");
        getProduct.refetch();
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: (err) => {
        notification("Chyba", getErrorMessage(err), "error");
      },
    });
  };

  const onUpdate = (
    payload: Partial<AdminPostProductsProductReq>,
    onSuccess: () => void,
    successMessage = "Produkt byl úspěšně aktualizován",
  ) => {
    updateProduct.mutate(
      // @ts-ignore TODO fix images being required
      payload,
      {
        onSuccess: () => {
          notification("Úspěch", successMessage, "success");
          onSuccess();
        },
        onError: (err) => {
          notification("Chyba", getErrorMessage(err), "error");
        },
      },
    );
  };

  const onStatusChange = (currentStatus: string) => {
    const newStatus = currentStatus === "published" ? "draft" : "published";
    updateProduct.mutate(
      {
        // @ts-ignore TODO fix update type in API
        status: newStatus,
      },
      {
        onSuccess: () => {
          const pastTense = newStatus === "published" ? "published" : "drafted";
          notification("Úspěch", `Produkt ${pastTense} úspěšně`, "success");
        },
        onError: (err) => {
          notification("Ooops", getErrorMessage(err), "error");
        },
      },
    );
  };

  return {
    getProduct,
    onDelete,
    onStatusChange,
    onUpdate,
    onAddVariant,
    onUpdateVariant,
    onDeleteVariant,
    updating: updateProduct.isLoading,
    deleting: deleteProduct.isLoading,
    addingVariant: addVariant.isLoading,
    updatingVariant: updateVariant.isLoading,
    deletingVariant: deleteVariant.isLoading,
  };
};

export default useEditProductActions;
