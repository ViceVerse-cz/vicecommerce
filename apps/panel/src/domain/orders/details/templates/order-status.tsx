import React from "react";

import StatusDot from "../../../../components/fundamentals/status-indicator";

export const OrderStatusComponent = ({ status }) => {
  switch (status) {
    case "completed":
      return <StatusDot title='Dokončeno' variant='success' />;
    case "pending":
      return <StatusDot title='Zpracování' variant='default' />;
    case "canceled":
      return <StatusDot title='Zrušeno' variant='danger' />;
    case "requires_action":
      return <StatusDot title='Vyžaduje akci' variant='danger' />;
    default:
      return null;
  }
};
