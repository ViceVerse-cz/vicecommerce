import React, { useContext, useMemo } from "react";
import { LayeredModalContext } from "../../../../components/molecules/modal/layered-modal";
import { DiscountConditionType } from "../../types";
import AddCollectionConditionSelector from "./condition-tables/add-condition-tables/collections";
import AddCustomerGroupConditionSelector from "./condition-tables/add-condition-tables/customer-groups";
import AddProductConditionSelector from "./condition-tables/add-condition-tables/products";
import AddTagConditionSelector from "./condition-tables/add-condition-tables/tags";
import AddTypeConditionSelector from "./condition-tables/add-condition-tables/types";
import DetailsCollectionConditionSelector from "./condition-tables/details-condition-tables/collections";
import DetailsCustomerGroupConditionSelector from "./condition-tables/details-condition-tables/customer-groups";
import DetailsProductConditionSelector from "./condition-tables/details-condition-tables/products";
import DetailsTagConditionSelector from "./condition-tables/details-condition-tables/tags";
import DetailsTypeConditionSelector from "./condition-tables/details-condition-tables/types";

export type ConditionItem = {
  label: string;
  value: DiscountConditionType;
  description: string;
  onClick: () => void;
};

type UseConditionModalItemsProps = {
  onClose: () => void;
  isDetails?: boolean;
};

const useConditionModalItems = ({ isDetails, onClose }: UseConditionModalItemsProps) => {
  const layeredModalContext = useContext(LayeredModalContext);

  const items: ConditionItem[] = useMemo(
    () => [
      {
        label: "Produkt",
        value: DiscountConditionType.PRODUCTS,
        description: "Pouze pro konkrétní produkty",
        onClick: () =>
          layeredModalContext.push({
            title: "Výběr produktů",
            onBack: () => layeredModalContext.pop(),
            view: isDetails ? (
              <DetailsProductConditionSelector onClose={onClose} />
            ) : (
              <AddProductConditionSelector onClose={onClose} />
            ),
          }),
      },
      {
        label: "Skupina zákazníků",
        value: DiscountConditionType.CUSTOMER_GROUPS,
        description: "Pouze pro určité skupiny zákazníků",
        onClick: () => {
          layeredModalContext.push({
            title: "Výběr skupin",
            onBack: () => layeredModalContext.pop(),
            view: isDetails ? (
              <DetailsCustomerGroupConditionSelector onClose={onClose} />
            ) : (
              <AddCustomerGroupConditionSelector onClose={onClose} />
            ),
          });
        },
      },
      {
        label: "Štítek",
        value: DiscountConditionType.PRODUCT_TAGS,
        description: "Pouze pro konkrétní značky",
        onClick: () =>
          layeredModalContext.push({
            title: "Výběr značek",
            onBack: () => layeredModalContext.pop(),
            view: isDetails ? (
              <DetailsTagConditionSelector onClose={onClose} />
            ) : (
              <AddTagConditionSelector onClose={onClose} />
            ),
          }),
      },
      {
        label: "Sbírka",
        value: DiscountConditionType.PRODUCT_COLLECTIONS,
        description: "Pouze pro konkrétní kolekce produktů",
        onClick: () =>
          layeredModalContext.push({
            title: "Vyberte si sbírky",
            onBack: () => layeredModalContext.pop(),
            view: isDetails ? (
              <DetailsCollectionConditionSelector onClose={onClose} />
            ) : (
              <AddCollectionConditionSelector onClose={onClose} />
            ),
          }),
      },
      {
        label: "Typ",
        value: DiscountConditionType.PRODUCT_TYPES,
        description: "Pouze pro určité typy výrobků",
        onClick: () =>
          layeredModalContext.push({
            title: "Vyberte si typy",
            onBack: () => layeredModalContext.pop(),
            view: isDetails ? (
              <DetailsTypeConditionSelector onClose={onClose} />
            ) : (
              <AddTypeConditionSelector onClose={onClose} />
            ),
          }),
      },
    ],
    [isDetails],
  );

  return items;
};

export default useConditionModalItems;
