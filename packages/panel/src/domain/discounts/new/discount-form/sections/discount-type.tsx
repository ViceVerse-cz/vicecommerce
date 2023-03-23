import clsx from "clsx";
import React from "react";
import { Controller, useWatch } from "react-hook-form";
import RadioGroup from "../../../../../components/organisms/radio-group";
import { DiscountRuleType } from "../../../types";
import { useDiscountForm } from "../form/discount-form-context";

const DiscountType = () => {
  const { control } = useDiscountForm();

  const regions = useWatch({
    control,
    name: "regions",
  });

  return (
    <Controller
      name='rule.type'
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => {
        return (
          <RadioGroup.Root
            value={value}
            onValueChange={onChange}
            className={clsx("flex items-center gap-base mt-base px-1")}
          >
            <RadioGroup.Item
              value={DiscountRuleType.PERCENTAGE}
              className='flex-1'
              label='Procento'
              description={"Uplatněná sleva v %"}
            />
            <RadioGroup.Item
              value={DiscountRuleType.FIXED}
              className='flex-1'
              label='Pevná částka'
              description={"Sleva v celých číslech"}
              disabled={Array.isArray(regions) && regions.length > 1}
              disabledTooltip='Pokud chcete použít typ pevné částky, můžete vybrat pouze jednu platnou oblast.'
            />
            <RadioGroup.Item
              value={DiscountRuleType.FREE_SHIPPING}
              className='flex-1'
              label='Doprava zdarma'
              description={"Přepsání množství dodávky"}
            />
          </RadioGroup.Root>
        );
      }}
    />
  );
};

export default DiscountType;
