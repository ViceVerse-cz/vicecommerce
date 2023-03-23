import { useAdminCustomer, useAdminUser } from "medusa-react";
import React from "react";

import { OrderEditEvent } from "../../../../hooks/use-build-timeline";
import FastDeliveryIcon from "../../../fundamentals/icons/fast-delivery-icon";
import EventContainer from "../event-container";
import { isConfirmedByUser } from "../../../../domain/orders/edit/utils/user";
import { ByLine } from ".";

type ConfirmedProps = {
  event: OrderEditEvent;
};

const EditConfirmed: React.FC<ConfirmedProps> = ({ event }) => {
  const confirmedByAdmin = isConfirmedByUser(event.edit);

  const title = `Úprava objednávky ${!confirmedByAdmin ? "povrzena přijata" : "přijata"}`;

  const { user } = useAdminUser(event.edit.confirmed_by as string, {
    enabled: confirmedByAdmin && !!event.edit.confirmed_by,
  });

  const { customer } = useAdminCustomer(event.edit.confirmed_by as string, {
    enabled: !confirmedByAdmin && !!event.edit.confirmed_by,
  });

  return (
    <EventContainer
      title={title}
      time={event.time}
      isFirst={event.first}
      icon={<FastDeliveryIcon size={20} />}
      midNode={<ByLine user={user || customer} />}
    />
  );
};

export default EditConfirmed;
