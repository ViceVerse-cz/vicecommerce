import React from "react";
import StatusDot from "../../fundamentals/status-indicator";

const isFuture = (date?: string) => {
  const now = new Date();
  return date && new Date(date) > now;
};

const isPast = (date?: string) => {
  const now = new Date();
  return date && new Date(date) < now;
};

const getPriceListStatus = (priceList) => {
  if (priceList.status === "draft") {
    if (isFuture(priceList?.starts_at)) {
      return <StatusDot title='Plánované' variant='warning' />;
    }

    if (isPast(priceList?.ends_at)) {
      return <StatusDot title='Vypršela platnost' variant='danger' />;
    }

    return <StatusDot title='Návrh' variant='default' />;
  } else {
    return <StatusDot title='Aktivní' variant='success' />;
  }
};

const formatPriceListGroups = (groups: string[] = []) => {
  if (!groups?.length) {
    return "";
  }
  const show = groups[0];
  const remainingLength = groups.length - 1;
  const more = remainingLength || "";
  return [show, more];
};

const isDraft = (priceList) => priceList?.status === "draft";
const isActive = (priceList) => priceList?.status === "active";

export { formatPriceListGroups, getPriceListStatus, isDraft, isActive };
