import clsx from "clsx";
import { useAdminCancelReturn, useAdminOrder, useAdminReceiveReturn } from "medusa-react";
import React, { useState } from "react";
import ReceiveMenu from "../../../domain/orders/details/returns/receive-menu";
import { ReturnEvent } from "../../../hooks/use-build-timeline";
import Button from "../../fundamentals/button";
import AlertIcon from "../../fundamentals/icons/alert-icon";
import CancelIcon from "../../fundamentals/icons/cancel-icon";
import CheckCircleIcon from "../../fundamentals/icons/check-circle-icon";
import TrashIcon from "../../fundamentals/icons/trash-icon";
import DeletePrompt from "../../organisms/delete-prompt";
import { ActionType } from "../actionables";
import EventActionables from "./event-actionables";
import EventContainer from "./event-container";
import EventItemContainer from "./event-item-container";

type ReturnRequestedProps = {
  event: ReturnEvent;
  refetch: () => void;
};

const Return: React.FC<ReturnRequestedProps> = ({ event, refetch }) => {
  const [showCancel, setShowCancel] = useState(false);
  const [showReceive, setShowReceive] = useState(false);
  const cancelReturn = useAdminCancelReturn(event.id);

  const { order } = useAdminOrder(event.orderId);

  const handleCancel = () => {
    cancelReturn.mutate(undefined, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  const { mutateAsync: receiveReturn } = useAdminReceiveReturn(event.id);

  const handleReceiveReturn = async (items: { item_id: string; quantity: number }[], refund?: number) => {
    await receiveReturn(
      { items, refund },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };

  const args = buildReturn(event, handleCancel, () => setShowReceive(true));

  return (
    <>
      <EventContainer {...args} />
      {showCancel && (
        <DeletePrompt
          handleClose={() => setShowCancel(false)}
          onDelete={async () => handleCancel()}
          heading='Zrušit návrat'
          confirmText='Ano, zrušit'
          successText='Zrušený návrat'
          text='Jste si jisti, že chcete toto vrácení zrušit?'
        />
      )}
      {showReceive && order && (
        <ReceiveMenu
          onDismiss={() => setShowReceive(false)}
          onReceiveReturn={handleReceiveReturn}
          order={order}
          returnRequest={event.raw}
          refunded={event.refunded}
        />
      )}
    </>
  );
};

function buildReturn(event: ReturnEvent, onCancel: () => void, onReceive: () => void) {
  let title: string = "Vratky";
  let icon: React.ReactNode;
  let button: React.ReactNode;
  const actions: ActionType[] = [];

  switch (event.status) {
    case "requested":
      title = "Požadované vrácení";
      icon = <AlertIcon size={20} className='text-orange-40' />;
      if (event.currentStatus === "requested") {
        button = event.currentStatus && event.currentStatus === "requested" && (
          <Button variant='secondary' size='small' className={clsx("mt-large")} onClick={onReceive}>
            Přijmout vratku
          </Button>
        );
        actions.push({
          icon: <TrashIcon size={20} />,
          label: "Zrušit vratku",
          variant: "danger",
          onClick: onCancel,
        });
      }
      break;
    case "received":
      title = "Vratka obdržena";
      icon = <CheckCircleIcon size={20} className='text-emerald-40' />;
      break;
    case "canceled":
      title = "Vratka zrušena";
      icon = <CancelIcon size={20} className='text-grey-50' />;
      break;
    case "requires_action":
      title = "Vratka vyžaduje akci";
      icon = <AlertIcon size={20} className='text-rose-50' />;
      break;
    default:
      break;
  }

  return {
    title,
    icon,
    time: event.time,
    topNode: actions.length > 0 && <EventActionables actions={actions} />,
    noNotification: event.noNotification,
    children:
      event.status === "requested"
        ? [
            event.items.map((i) => {
              return <EventItemContainer item={i} />;
            }),
            button,
          ]
        : event.status === "received"
        ? [event.items.map((i) => <EventItemContainer item={{ ...i, quantity: i.receivedQuantity ?? i.quantity }} />)]
        : null,
  };
}

export default Return;
