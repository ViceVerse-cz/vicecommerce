import React from "react";
import { DisplayTotal } from "./display-total";

export const PaymentDetails = ({
  currency,
  swapAmount,
  manualRefund,
  swapRefund,
  returnRefund,
  paidTotal,
  refundedTotal,
}) => {
  if (swapAmount + manualRefund + swapRefund + returnRefund === 0) {
    return null;
  }

  return (
    <>
      {!!swapAmount && <DisplayTotal currency={currency} totalAmount={swapAmount} totalTitle={"Celkem pro výměnu"} />}
      {!!swapRefund && (
        <DisplayTotal currency={currency} totalAmount={returnRefund} totalTitle={"Vrácené prostředky za výměny"} />
      )}
      {!!returnRefund && (
        <DisplayTotal currency={currency} totalAmount={returnRefund} totalTitle={"Vrácené peníze za vrácení"} />
      )}
      {!!manualRefund && <DisplayTotal currency={currency} totalAmount={manualRefund} totalTitle={"Ručně vrácené"} />}
      <DisplayTotal
        variant={"bold"}
        currency={currency}
        totalAmount={paidTotal - refundedTotal}
        totalTitle={"Čistá hodnota Celkem"}
      />
    </>
  );
};
