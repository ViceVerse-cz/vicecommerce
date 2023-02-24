import { ReturnItem } from "@medusajs/medusa";
import { useAdminCancelReturn, useAdminCancelSwap, useAdminOrder, useAdminStore } from "medusa-react";
import React, { useEffect, useState } from "react";

import CreateFulfillmentModal from "../../../domain/orders/details/create-fulfillment";
import { ExchangeEvent } from "../../../hooks/use-build-timeline";
import { ReceiveReturnMenu } from "../../../domain/orders/details/receive-return";
import { orderReturnableFields } from "../../../domain/orders/details/utils/order-returnable-fields";
import useOrdersExpandParam from "../../../domain/orders/details/utils/use-admin-expand-paramter";
import useNotification from "../../../hooks/use-notification";
import Medusa from "../../../services/api";
import { getErrorMessage } from "../../../utils/error-messages";
import CopyToClipboard from "../../atoms/copy-to-clipboard";
import Button from "../../fundamentals/button";
import CancelIcon from "../../fundamentals/icons/cancel-icon";
import DollarSignIcon from "../../fundamentals/icons/dollar-sign-icon";
import RefreshIcon from "../../fundamentals/icons/refresh-icon";
import TruckIcon from "../../fundamentals/icons/truck-icon";
import DeletePrompt from "../../organisms/delete-prompt";
import { ActionType } from "../actionables";
import IconTooltip from "../icon-tooltip";
import { FulfillmentStatus, PaymentStatus, ReturnStatus } from "../order-status";
import EventActionables from "./event-actionables";
import EventContainer, { EventIconColor } from "./event-container";
import EventItemContainer from "./event-item-container";

type ExchangeProps = {
  event: ExchangeEvent;
  refetch: () => void;
};

type ExchangeStatusProps = {
  event: ExchangeEvent;
};

const ExchangeStatus: React.FC<ExchangeStatusProps> = ({ event }) => {
  const divider = <div className='h-11 w-px bg-grey-20' />;

  return (
    <div className='flex items-center inter-small-regular gap-x-base'>
      <div className='flex flex-col gap-y-2xsmall'>
        <span className='text-grey-50'>Platba:</span>
        <PaymentStatus paymentStatus={event.paymentStatus} />
      </div>
      {divider}
      <div className='flex flex-col gap-y-2xsmall'>
        <span className='text-grey-50'>Návrat:</span>
        <ReturnStatus returnStatus={event.returnStatus} />
      </div>
      {divider}
      <div className='flex flex-col gap-y-2xsmall'>
        <span className='text-grey-50'>Doprava:</span>
        <FulfillmentStatus fulfillmentStatus={event.fulfillmentStatus} />
      </div>
    </div>
  );
};

const Exchange: React.FC<ExchangeProps> = ({ event, refetch }) => {
  const [showCancel, setShowCancel] = useState(false);
  const [showCancelReturn, setShowCancelReturn] = useState(false);
  const [showReceiveReturn, setShowReceiveReturn] = useState(false);
  const [showCreateFulfillment, setShowCreateFulfillment] = useState(false);
  const cancelExchange = useAdminCancelSwap(event.orderId);
  const cancelReturn = useAdminCancelReturn(event.returnId);
  const [differenceCardId, setDifferenceCardId] = useState<string | undefined>(undefined);
  const [paymentFormatWarning, setPaymentFormatWarning] = useState<string | undefined>(undefined);
  const [payable, setPayable] = useState(true);
  const { store } = useAdminStore();
  const { orderRelations } = useOrdersExpandParam();
  const { order } = useAdminOrder(event.orderId, {
    expand: orderRelations,
    fields: orderReturnableFields,
  });

  const notification = useNotification();

  useEffect(() => {
    if (!store) {
      return;
    }

    if (event.paymentStatus !== "not_paid") {
      setPayable(false);
      return;
    }

    if (store.swap_link_template?.indexOf("{cart_id}") === -1) {
      setPaymentFormatWarning(
        "Odkaz na platbu obchodu nemá výchozí formát, protože neobsahuje '{cart_id}'. Buď aktualizujte platební odkaz tak, aby obsahoval '{cart_id}', nebo aktualizujte tuto metodu tak, aby odrážela formát vašeho platebního odkazu.",
      );
    }

    if (!store.swap_link_template) {
      setPaymentFormatWarning(
        "Pro tento obchod nebyl nastaven žádný platební odkaz. Aktualizujte prosím nastavení obchodu.",
      );
    }

    if (event.exchangeCartId) {
      setDifferenceCardId(store.swap_link_template?.replace(/\{cart_id\}/, event.exchangeCartId));
    }
  }, [store?.swap_link_template, event.exchangeCartId, event.paymentStatus, store]);

  const paymentLink = getPaymentLink(payable, differenceCardId, paymentFormatWarning, event.exchangeCartId);

  const handleCancelExchange = async () => {
    await cancelExchange.mutateAsync(event.id);
    refetch();
  };

  const handleCancelReturn = async () => {
    await cancelReturn.mutateAsync();
    refetch();
  };

  const handleProcessSwapPayment = () => {
    Medusa.orders
      .processSwapPayment(event.orderId, event.id)
      .then((_res) => {
        notification("Úspěch", "Platba byla úspěšně zpracována", "success");
        refetch();
      })
      .catch((err) => {
        notification("Chyba", getErrorMessage(err), "error");
      });
  };

  const returnItems = getReturnItems(event);
  const newItems = getNewItems(event);

  const actions: ActionType[] = [];

  if (event.paymentStatus === "awaiting") {
    actions.push({
      label: "Zachycení platby",
      icon: <DollarSignIcon size={20} />,
      onClick: handleProcessSwapPayment,
    });
  }

  if (event.returnStatus === "requested") {
    actions.push({
      label: "Zrušit vrácení",
      icon: <TruckIcon size={20} />,
      onClick: () => setShowCancelReturn(!showCancelReturn),
    });
  }

  if (
    !(event.isCanceled || event.canceledAt) &&
    event.fulfillmentStatus !== "fulfilled" &&
    event.fulfillmentStatus !== "shipped"
  ) {
    actions.push({
      label: "Zrušit výměnu",
      icon: <CancelIcon size={20} />,
      onClick: () => setShowCancel(!showCancel),
      variant: "danger",
    });
  }

  const args = {
    title: event.canceledAt ? "Výměna zrušena" : "Požadovaná výměna",
    icon: event.canceledAt ? <CancelIcon size={20} /> : <RefreshIcon size={20} />,
    expandable: !!event.canceledAt,
    iconColor: event.canceledAt ? EventIconColor.DEFAULT : EventIconColor.ORANGE,
    time: event.time,
    noNotification: event.noNotification,
    topNode: getActions(event, actions),
    children: [
      <div className='flex flex-col gap-y-base' key={event.id}>
        {event.canceledAt && (
          <div>
            <span className='mr-2 inter-small-semibold'>Vyžádáno dne:</span>
            <span className='text-grey-50'>{new Date(event.time).toUTCString()}</span>
          </div>
        )}
        {!event.canceledAt && <ExchangeStatus event={event} />}
        {!event.canceledAt && paymentLink}
        {returnItems}
        {newItems}
        <div className='flex items-center gap-x-xsmall'>
          {event.returnStatus === "requested" && (
            <Button variant='secondary' size='small' onClick={() => setShowReceiveReturn(true)}>
              Přijmout návrat
            </Button>
          )}
          {event.fulfillmentStatus === "not_fulfilled" && (
            <Button variant='secondary' size='small' onClick={() => setShowCreateFulfillment(true)}>
              Plnit výměnu
            </Button>
          )}
        </div>
      </div>,
    ],
  };
  return (
    <>
      <EventContainer {...args} />
      {showCancel && (
        <DeletePrompt
          handleClose={() => setShowCancel(!showCancel)}
          onDelete={handleCancelExchange}
          confirmText='Ano, zrušit'
          heading='Zrušit výměnu'
          text='Opravdu chcete tuto výměnu zrušit?'
          successText='Výměna zrušena'
        />
      )}
      {showCancelReturn && (
        <DeletePrompt
          handleClose={() => setShowCancelReturn(!showCancelReturn)}
          onDelete={handleCancelReturn}
          confirmText='Ano, zrušit'
          heading='Zrušit vrácení'
          text='Jste si jisti, že chcete toto vrácení zrušit?'
          successText='Zrušení návratu'
        />
      )}
      {showReceiveReturn && order && (
        <ReceiveReturnMenu
          order={order}
          returnRequest={event.raw.return_order}
          onClose={() => setShowReceiveReturn(false)}
        />
      )}
      {showCreateFulfillment && (
        <CreateFulfillmentModal
          orderId={event.orderId}
          orderToFulfill={event.raw}
          handleCancel={() => setShowCreateFulfillment(false)}
        />
      )}
    </>
  );
};

function getNewItems(event: ExchangeEvent) {
  return (
    <div className='flex flex-col gap-y-small'>
      <span className='inter-small-regular text-grey-50'>Nové položky</span>
      <div>
        {event.newItems.map((i, index) => (
          <EventItemContainer key={index} item={i} />
        ))}
      </div>
    </div>
  );
}

function getPaymentLink(
  payable: boolean,
  differenceCardId: string | undefined,
  paymentFormatWarning: string | undefined,
  exchangeCartId: string | undefined,
) {
  return payable ? (
    <div className='inter-small-regular text-grey-50 flex flex-col gap-y-xsmall'>
      <div className='flex items-center gap-x-xsmall'>
        {paymentFormatWarning && <IconTooltip content={paymentFormatWarning} />}
        <span>Odkaz pro platbu:</span>
      </div>
      {differenceCardId && <CopyToClipboard value={differenceCardId} displayValue={exchangeCartId} />}
    </div>
  ) : null;
}

function getReturnItems(event: ExchangeEvent) {
  return (
    <div className='flex flex-col gap-y-small'>
      <span className='inter-small-regular text-grey-50'>Vrácení položek</span>
      <div>
        {event.returnItems
          .filter((i) => !!i)
          .map((i: ReturnItem) => (
            <EventItemContainer item={{ ...i, quantity: i.requestedQuantity }} key={i.id} />
          ))}
      </div>
    </div>
  );
}

function getActions(event: ExchangeEvent, actions: ActionType[]) {
  if (actions.length === 0) {
    return null;
  }

  return <EventActionables actions={actions} />;
}

export default Exchange;
