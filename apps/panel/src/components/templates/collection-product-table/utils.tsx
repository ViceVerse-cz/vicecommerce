import React from "react";
import StatusIndicator from "../../fundamentals/status-indicator";

export type SimpleProductType = {
  id: string;
  thumbnail?: string;
  title: string;
  status: string;
  created_at: Date;
};

export const decideStatus = (status: string) => {
  switch (status) {
    case "published":
      return <StatusIndicator title='Zveřejněno' variant='success' />;
    case "draft":
      return <StatusIndicator title='Návrh' variant='default' />;
    case "proposed":
      return <StatusIndicator title='Navrhované' variant='warning' />;
    case "rejected":
      return <StatusIndicator title='Odmítnuto' variant='danger' />;
    default:
      return null;
  }
};
