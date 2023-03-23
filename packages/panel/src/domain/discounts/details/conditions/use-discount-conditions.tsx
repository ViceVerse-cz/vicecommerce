import { Discount } from "@medusajs/medusa";
import { useAdminDiscount, useAdminDiscountRemoveCondition, useAdminGetDiscountCondition } from "medusa-react";
import React, { useState } from "react";
import EditIcon from "../../../../components/fundamentals/icons/edit-icon";
import TrashIcon from "../../../../components/fundamentals/icons/trash-icon";
import { ActionType } from "../../../../components/molecules/actionables";
import useNotification from "../../../../hooks/use-notification";
import { getErrorMessage } from "../../../../utils/error-messages";
import { DiscountConditionType } from "../../types";

export const useDiscountConditions = (discount: Discount) => {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const { refetch } = useAdminDiscount(discount.id);
  const { discount_condition } = useAdminGetDiscountCondition(
    discount.id,
    selectedCondition!,
    {
      expand: "product_collections,product_tags,product_types,customer_groups,products",
    },
    { enabled: !!selectedCondition, cacheTime: 0 },
  );
  const { mutate } = useAdminDiscountRemoveCondition(discount.id);

  const notification = useNotification();

  const removeCondition = (conditionId: string) => {
    mutate(conditionId, {
      onSuccess: () => {
        notification("Úspěch", "Podmínka odstraněna", "success");
        refetch();
      },
      onError: (error) => {
        notification("Chyba", getErrorMessage(error), "error");
      },
    });
  };

  const itemized = discount.rule.conditions.map((condition) => ({
    type: condition.type,
    title: getTitle(condition.type),
    description: getDescription(condition.type),
    actions: [
      {
        label: "Upravit stav",
        icon: <EditIcon size={16} />,
        variant: "ghost",
        onClick: () => setSelectedCondition(condition.id),
      },
      {
        label: "Odstranit podmínku",
        icon: <TrashIcon size={16} />,
        variant: "danger",
        onClick: () => removeCondition(condition.id),
      },
    ] as ActionType[],
  }));

  function deSelectCondition() {
    setSelectedCondition(null);
  }

  return {
    conditions: itemized,
    selectedCondition: discount_condition,
    deSelectCondition,
  };
};

const getTitle = (type: DiscountConditionType) => {
  switch (type) {
    case DiscountConditionType.PRODUCTS:
      return "Produkt";
    case DiscountConditionType.PRODUCT_COLLECTIONS:
      return "Sbírka";
    case DiscountConditionType.PRODUCT_TAGS:
      return "Štítek";
    case DiscountConditionType.PRODUCT_TYPES:
      return "Typ";
    case DiscountConditionType.CUSTOMER_GROUPS:
      return "Skupina zákazníků";
  }
};

const getDescription = (type: DiscountConditionType) => {
  switch (type) {
    case DiscountConditionType.PRODUCTS:
      return "Sleva se vztahuje na konkrétní produkty";
    case DiscountConditionType.PRODUCT_COLLECTIONS:
      return "Sleva se vztahuje na konkrétní sbírky";
    case DiscountConditionType.PRODUCT_TAGS:
      return "Sleva se vztahuje na konkrétní značky produktů";
    case DiscountConditionType.PRODUCT_TYPES:
      return "Sleva se vztahuje na konkrétní typy produktů";
    case DiscountConditionType.CUSTOMER_GROUPS:
      return "Sleva se vztahuje na určité skupiny zákazníků";
  }
};
