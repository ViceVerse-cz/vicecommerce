import moment from "moment";
import React, { useMemo } from "react";
import { getColor } from "../../../utils/color";
import StatusDot from "../../fundamentals/status-indicator";
import CustomerAvatarItem from "../../molecules/customer-avatar-item";
import Table from "../../molecules/table";

const useDraftOrderTableColumns = () => {
  const decideStatus = (status) => {
    switch (status) {
      case "completed":
        return <StatusDot variant='success' title={"Dokončeno"} />;
      default:
        return <StatusDot variant='primary' title={"Otevřeno"} />;
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Návrh",
        accessor: "display_id",
        Cell: ({ cell: { value, getCellProps } }) => (
          <Table.Cell {...getCellProps()} className='pl-2'>{`#${value}`}</Table.Cell>
        ),
      },
      {
        Header: "Objednávka",
        accessor: "order",
        Cell: ({ cell: { value, getCellProps } }) => {
          return <Table.Cell {...getCellProps()}>{value?.display_id ? `#${value?.display_id}` : "-"}</Table.Cell>;
        },
      },
      {
        Header: "Datum přidání",
        accessor: "created_at",
        Cell: ({ cell: { value, getCellProps } }) => (
          <Table.Cell {...getCellProps()}>{moment(value).format("DD MMM YYYY")}</Table.Cell>
        ),
      },
      {
        Header: "Zákazník",
        accessor: "cart",
        Cell: ({ row, cell: { value, getCellProps } }) => (
          <Table.Cell {...getCellProps()}>
            <CustomerAvatarItem
              customer={{
                first_name: value?.first_name || "",
                last_name: value?.last_name || "",
                email: value.email,
              }}
              color={getColor(row.index)}
            />
          </Table.Cell>
        ),
      },
      {
        Header: "Stav",
        accessor: "status",
        Cell: ({ cell: { value, getCellProps } }) => (
          <Table.Cell {...getCellProps()} className='pr-2'>
            {decideStatus(value)}
          </Table.Cell>
        ),
      },
    ],
    [],
  );

  return [columns];
};

export default useDraftOrderTableColumns;
