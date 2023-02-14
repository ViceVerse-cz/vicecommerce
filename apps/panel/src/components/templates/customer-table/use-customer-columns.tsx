import moment from "moment";
import React, { useMemo } from "react";
import { getColor } from "../../../utils/color";
import CustomerAvatarItem from "../../molecules/customer-avatar-item";

export const useCustomerColumns = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Datum přidání",
        accessor: "created_at", // accessor is the "key" in the data
        Cell: ({ cell: { value } }) => moment(value).format("DD MMM YYYY"),
      },
      {
        Header: "Název",
        accessor: "customer",
        Cell: ({ row }) => <CustomerAvatarItem customer={row.original} color={getColor(row.index)} />,
      },
      {
        Header: "E-mail",
        accessor: "email",
      },
      {
        Header: "",
        accessor: "col",
      },
      {
        accessor: "orders",
        Header: () => <div className='text-right'>Objednávky</div>,
        Cell: ({ cell: { value } }) => <div className='text-right'>{value?.length || 0}</div>,
      },
      {
        Header: "",
        accessor: "col-2",
      },
    ],
    [],
  );

  return [columns];
};
