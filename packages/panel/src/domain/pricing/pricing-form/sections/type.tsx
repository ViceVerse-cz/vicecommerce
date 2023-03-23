import React from "react";
import { Controller } from "react-hook-form";
import Accordion from "../../../../components/organisms/accordion";
import RadioGroup from "../../../../components/organisms/radio-group";
import { usePriceListForm } from "../form/pricing-form-context";
import { PriceListType } from "../types";

const Type = () => {
  const { control } = usePriceListForm();

  return (
    <Accordion.Item
      forceMountContent
      required
      value='type'
      title='Typ ceníku'
      description='Vyberte typ ceníku'
      tooltip='Na rozdíl od prodejních cen nebude přepis ceny zákazníkovi sdělovat, že cena je součástí prodeje.'
    >
      <Controller
        name='type'
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => {
          return (
            <RadioGroup.Root
              value={value ?? undefined}
              onValueChange={onChange}
              className='flex items-center gap-base group-radix-state-open:mt-5 accordion-margin-transition'
            >
              <RadioGroup.Item
                value={PriceListType.SALE}
                className='flex-1'
                label='Prodej'
                description='Tuto možnost použijte, pokud vytváříte ceny pro prodej.'
              />
              <RadioGroup.Item
                value={PriceListType.OVERRIDE}
                className='flex-1'
                label='Přepsat'
                description='Použijte ji k přepsání cen.'
              />
            </RadioGroup.Root>
          );
        }}
      />
    </Accordion.Item>
  );
};

export default Type;
