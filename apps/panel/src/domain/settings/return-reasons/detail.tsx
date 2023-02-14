import { ReturnReason } from "@medusajs/medusa";
import { useAdminDeleteReturnReason, useAdminUpdateReturnReason } from "medusa-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import DuplicateIcon from "../../../components/fundamentals/icons/duplicate-icon";
import TrashIcon from "../../../components/fundamentals/icons/trash-icon";
import Input from "../../../components/molecules/input";
import BodyCard from "../../../components/organisms/body-card";
import DeletePrompt from "../../../components/organisms/delete-prompt";
import useNotification from "../../../hooks/use-notification";
import useToggleState from "../../../hooks/use-toggle-state";
import { getErrorMessage } from "../../../utils/error-messages";
import CreateReturnReasonModal from "./create-reason-modal";

type ReturnReasonDetailsProps = {
  reason: ReturnReason;
};

type ReturnReasonDetailsFormData = {
  label: string;
  description: string | null;
};

const ReturnReasonDetail = ({ reason }: ReturnReasonDetailsProps) => {
  const {
    state: showDuplicateModal,
    open: handleOpenDuplicateModal,
    close: handleCloseDuplicateModal,
  } = useToggleState();
  const { state: showDanger, open: handleOpenPrompt, close: handleClosePrompt } = useToggleState();
  const { register, reset, handleSubmit } = useForm<ReturnReasonDetailsFormData>();
  const notification = useNotification();
  const { mutate: deleteRR } = useAdminDeleteReturnReason(reason?.id);
  const { mutate: update } = useAdminUpdateReturnReason(reason?.id);

  const handleDeletion = async () => {
    deleteRR(undefined);
  };

  const onSave = (data: ReturnReasonDetailsFormData) => {
    update(
      {
        label: data.label,
        description: data.description || undefined,
      },
      {
        onSuccess: () => {
          notification("Úspěch", "Úspěšně aktualizovaný důvod vrácení", "success");
        },
        onError: (error) => {
          notification("Chyba", getErrorMessage(error), "error");
        },
      },
    );
  };

  const handleCancel = () => {
    reset({
      label: reason.label,
      description: reason.description,
    });
  };

  useEffect(() => {
    if (reason) {
      reset({
        label: reason.label,
        description: reason.description,
      });
    }
  }, [reason]);

  return (
    <>
      <BodyCard
        actionables={[
          {
            label: "Duplicitní důvod",
            icon: <DuplicateIcon size={20} />,
            onClick: () => handleOpenDuplicateModal(),
          },
          {
            label: "Odstranit důvod",
            variant: "danger",
            icon: <TrashIcon size={20} />,
            onClick: () => handleOpenPrompt(),
          },
        ]}
        events={[
          {
            label: "Uložit",
            onClick: handleSubmit(onSave),
          },
          {
            label: "Zrušit změny",
            onClick: handleCancel,
          },
        ]}
        title='Podrobnosti'
        subtitle={reason?.value}
      >
        <form onSubmit={handleSubmit(onSave)}>
          <Input {...register("label")} label='Štítek' />
          <Input
            {...register("description")}
            label='Popis'
            className='mt-base'
            placeholder='Zákazník obdržel špatnou velikost'
          />
        </form>
      </BodyCard>
      {showDuplicateModal && <CreateReturnReasonModal initialReason={reason} handleClose={handleCloseDuplicateModal} />}
      {showDanger && (
        <DeletePrompt
          heading='Odstranit důvod vrácení'
          text='Opravdu chcete tento důvod vrácení odstranit?'
          handleClose={handleClosePrompt}
          onDelete={handleDeletion}
        />
      )}
    </>
  );
};

export default ReturnReasonDetail;
