import moment from "moment";
import React, { useMemo } from "react";
import Tooltip from "../../atoms/tooltip";

const useCollectionTableColumn = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Název",
        accessor: "title",
        Cell: ({ row: { original } }) => {
          return <div className='flex items-center'>{original.title}</div>;
        },
      },
      {
        Header: "Manipulace",
        accessor: "handle",
        Cell: ({ cell: { value } }) => <div>/{value}</div>,
      },
      {
        Header: "Vytvořeno v",
        accessor: "created_at",
        Cell: ({ cell: { value } }) => (
          <Tooltip content={moment(value).format("DD MMM YYYY hh:mm A")}>{moment(value).format("DD MMM YYYY")}</Tooltip>
        ),
      },
      {
        Header: "Aktualizováno na",
        accessor: "updated_at",
        Cell: ({ cell: { value } }) => (
          <Tooltip content={moment(value).format("DD MMM YYYY hh:mm A")}>{moment(value).format("DD MMM YYYY")}</Tooltip>
        ),
      },
      {
        Header: "Produkty",
        accessor: "products",
        Cell: ({ cell: { value } }) => {
          return <div>{value?.length || "-"}</div>;
        },
      },
    ],
    [],
  );

  return [columns];
};

export default useCollectionTableColumn;
