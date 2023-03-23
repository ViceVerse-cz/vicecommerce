import React from "react";

import StatusDot from "../../../../components/fundamentals/status-indicator";

export const PaymentStatusComponent = ({ status }) => {
  switch (status) {
    case "captured":
      return <StatusDot title='Placené' variant='success' />;
    case "awaiting":
      return <StatusDot title='Čeká se na platbu' variant='danger' />;
    case "canceled":
      return <StatusDot title='Zrušeno' variant='danger' />;
    case "requires_action":
      return <StatusDot title='Vyžaduje akci' variant='danger' />;
    default:
      return null;
  }
};
