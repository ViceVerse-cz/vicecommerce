import clsx from "clsx";
import { useAdminStore } from "medusa-react";
import React, { useMemo } from "react";
import { defaultChannelsSorter } from "../../../utils/sales-channel-compare-operator";
import Tooltip from "../../atoms/tooltip";
import ListIcon from "../../fundamentals/icons/list-icon";
import TileIcon from "../../fundamentals/icons/tile-icon";
import ImagePlaceholder from "../../fundamentals/image-placeholder";
import StatusIndicator from "../../fundamentals/status-indicator";

const useProductTableColumn = ({ setTileView, setListView, showList }) => {
  const getProductStatus = (status) => {
    switch (status) {
      case "proposed":
        return <StatusIndicator title={"Navrhované"} variant={"warning"} />;
      case "published":
        return <StatusIndicator title={"Zveřejněno"} variant={"success"} />;
      case "rejected":
        return <StatusIndicator title={"Odmítnuto"} variant={"danger"} />;
      case "draft":
        return <StatusIndicator title={"Návrh"} variant={"default"} />;
      default:
        return <StatusIndicator title={status} variant={"default"} />;
    }
  };

  const { store } = useAdminStore();

  const getProductSalesChannels = (salesChannels) => {
    if (salesChannels?.length) {
      salesChannels.sort(defaultChannelsSorter(store?.default_sales_channel_id || ""));
      return (
        <span className='inter-small-regular'>
          {salesChannels[0].name}
          {salesChannels.length > 1 && (
            <Tooltip
              content={
                <div className='flex flex-col'>
                  {salesChannels.slice(1).map((sc) => (
                    <span>{sc.name}</span>
                  ))}
                </div>
              }
            >
              <span className='text-grey-40'> + {salesChannels.length - 1} more</span>
            </Tooltip>
          )}
        </span>
      );
    }
    return <></>;
  };

  const columns = useMemo(
    () => [
      {
        Header: "Název",
        accessor: "title",
        Cell: ({ row: { original } }) => {
          return (
            <div className='flex items-center'>
              <div className='h-[40px] w-[30px] my-1.5 flex items-center mr-4'>
                {original.thumbnail ? (
                  <img src={original.thumbnail} className='h-full object-cover rounded-soft' />
                ) : (
                  <ImagePlaceholder />
                )}
              </div>
              {original.title}
            </div>
          );
        },
      },
      {
        Header: "Sbírka",
        accessor: "collection", // accessor is the "key" in the data
        Cell: ({ cell: { value } }) => {
          return <div>{value?.title || "-"}</div>;
        },
      },
      {
        Header: "Stav",
        accessor: "status",
        Cell: ({ cell: { value } }) => getProductStatus(value),
      },
      {
        Header: "Dostupnost",
        accessor: "sales_channels",
        Cell: ({ cell: { value } }) => getProductSalesChannels(value),
      },
      {
        Header: "Inventura",
        accessor: "variants",
        Cell: ({ cell: { value } }) => (
          <div>
            {value.reduce((acc, next) => acc + next.inventory_quantity, 0)}
            {" na skladě pro "}
            {value.length} variant
          </div>
        ),
      },
      {
        accessor: "col-3",
        Header: (
          <div className='text-right flex justify-end'>
            <span
              onClick={setListView}
              className={clsx("hover:bg-grey-5 cursor-pointer rounded p-0.5", {
                "text-grey-90": showList,
                "text-grey-40": !showList,
              })}
            >
              <ListIcon size={20} />
            </span>
            <span
              onClick={setTileView}
              className={clsx("hover:bg-grey-5 cursor-pointer rounded p-0.5", {
                "text-grey-90": !showList,
                "text-grey-40": showList,
              })}
            >
              <TileIcon size={20} />
            </span>
          </div>
        ),
      },
    ],
    [showList],
  );

  return [columns] as const;
};

export default useProductTableColumn;
