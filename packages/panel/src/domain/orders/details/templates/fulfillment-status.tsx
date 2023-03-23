import React from "react";

import StatusDot from "../../../../components/fundamentals/status-indicator";

export const FulfillmentStatusComponent = ({ status }) => {
  switch (status) {
    case "shipped":
      return <StatusDot title='Odesláno' variant='success' />;
    case "fulfilled":
      return <StatusDot title='Splněno' variant='warning' />;
    case "canceled":
      return <StatusDot title='Zrušeno' variant='danger' />;
    case "partially_fulfilled":
      return <StatusDot title='Částečně splněno' variant='warning' />;
    case "requires_action":
      return <StatusDot title='Vyžaduje akci' variant='danger' />;
    case "not_fulfilled":
      return <StatusDot title='Čeká na splnění' variant='danger' />;
    default:
      return null;
  }
};
