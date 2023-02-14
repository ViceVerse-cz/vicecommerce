import clsx from "clsx";
import { useEffect, useState } from "react";
import FilterDropdownContainer from "../../../components/molecules/filter-dropdown/container";
import FilterDropdownItem from "../../../components/molecules/filter-dropdown/item";
import SaveFilterItem from "../../../components/molecules/filter-dropdown/save-field";
import TabFilter from "../../../components/molecules/filter-tab";
import PlusIcon from "../../fundamentals/icons/plus-icon";

const statusFilters = ["completed", "pending", "canceled", "archived", "requires_action"];
const paymentFilters = [
  "awaiting",
  "captured",
  "refunded",
  "canceled",
  "partially_refunded",
  "requires_action",
  "not_paid",
];
const fulfillmentFilters = [
  "fulfilled",
  "not_fulfilled",
  "partially_fulfilled",
  "returned",
  "partially_returned",
  "shipped",
  "partially_shipped",
  "requires_action",
  "canceled",
];

const dateFilters = ["je poslední", "je starší než", "je po", "je před", "je roven"];

const OrderFilters = ({
  tabs,
  activeTab,
  onTabClick,
  onSaveTab,
  onRemoveTab,
  filters,
  submitFilters,
  clearFilters,
}) => {
  const [tempState, setTempState] = useState(filters);
  const [name, setName] = useState("");

  const handleRemoveTab = (val) => {
    if (onRemoveTab) {
      onRemoveTab(val);
    }
  };

  const handleSaveTab = () => {
    if (onSaveTab) {
      onSaveTab(name, tempState);
    }
  };

  const handleTabClick = (tabName: string) => {
    if (onTabClick) {
      onTabClick(tabName);
    }
  };

  useEffect(() => {
    setTempState(filters);
  }, [filters]);

  const onSubmit = () => {
    submitFilters(tempState);
  };

  const onClear = () => {
    clearFilters();
  };

  const setSingleFilter = (filterKey, filterVal) => {
    setTempState((prevState) => ({
      ...prevState,
      [filterKey]: filterVal,
    }));
  };

  const numberOfFilters = Object.entries(filters).reduce((acc, [key, value]) => {
    if (value?.open) {
      acc = acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className='flex space-x-1'>
      <FilterDropdownContainer
        submitFilters={onSubmit}
        clearFilters={onClear}
        triggerElement={
          <button
            className={clsx(
              "flex rounded-rounded items-center space-x-1 focus-visible:outline-none focus-visible:shadow-input focus-visible:border-violet-60",
            )}
          >
            <div className='flex rounded-rounded items-center bg-grey-5 border border-grey-20 inter-small-semibold px-2 h-6'>
              Filters
              <div className='text-grey-40 ml-1 flex items-center rounded'>
                <span className='text-violet-60 inter-small-semibold'>{numberOfFilters ? numberOfFilters : "0"}</span>
              </div>
            </div>
            <div className='flex items-center rounded-rounded bg-grey-5 border border-grey-20 inter-small-semibold p-1'>
              <PlusIcon size={14} />
            </div>
          </button>
        }
      >
        <FilterDropdownItem
          filterTitle='Stav'
          options={statusFilters}
          filters={tempState.status.filter}
          open={tempState.status.open}
          setFilter={(val) => setSingleFilter("status", val)}
        />
        <FilterDropdownItem
          filterTitle='Stav platby'
          options={paymentFilters}
          filters={tempState.payment.filter}
          open={tempState.payment.open}
          setFilter={(val) => setSingleFilter("payment", val)}
        />
        <FilterDropdownItem
          filterTitle='Stav plnění'
          options={fulfillmentFilters}
          filters={tempState.fulfillment.filter}
          open={tempState.fulfillment.open}
          setFilter={(val) => setSingleFilter("fulfillment", val)}
        />
        <FilterDropdownItem
          filterTitle='Datum'
          options={dateFilters}
          filters={tempState.date.filter}
          open={tempState.date.open}
          setFilter={(val) => setSingleFilter("date", val)}
        />
        <SaveFilterItem saveFilter={handleSaveTab} name={name} setName={setName} />
      </FilterDropdownContainer>
      {tabs?.map((t) => (
          <TabFilter
            key={t.value}
            onClick={() => handleTabClick(t.value)}
            label={t.label}
            isActive={activeTab === t.value}
            removable={!!t.removable}
            onRemove={() => handleRemoveTab(t.value)}
          />
        ))}
    </div>
  );
};

export default OrderFilters;
