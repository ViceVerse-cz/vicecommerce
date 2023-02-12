import React from "react";
import { Controller } from "react-hook-form";
import Switch from "../../../../components/atoms/switch";
import FeatureToggle from "../../../../components/fundamentals/feature-toggle";
import InputField from "../../../../components/molecules/input";
import Accordion from "../../../../components/organisms/accordion";
import { usePriceListForm } from "../form/pricing-form-context";

const General = () => {
  const { control, register } = usePriceListForm();

  return (
    <Accordion.Item forceMountContent required title='Obecné' tooltip='Obecné informace k ceníku.' value='general'>
      <div className='flex flex-col gap-y-small group-radix-state-open:mt-5 accordion-margin-transition'>
        <InputField
          label='Název'
          required
          placeholder='B2B, Black Friday...'
          {...register("name", { required: "Je vyžadováno jméno" })}
        />
        <InputField
          label='Popis'
          required
          placeholder='Pro naše obchodní partnery...'
          {...register("description", { required: "Je vyžadován popis" })}
        />
        <FeatureToggle featureFlag='tax_inclusive_pricing'>
          <div className='mt-3'>
            <div className='flex justify-between'>
              <h2 className='inter-base-semibold'>Ceny včetně daně</h2>
              <Controller
                control={control}
                name='includes_tax'
                render={({ field: { value, onChange } }) => {
                  return <Switch checked={!!value} onCheckedChange={onChange} />;
                }}
              />
            </div>
            <p className='inter-base-regular text-grey-50'>Zvolte, aby všechny ceny v tomto seznamu zahrnovaly daň.</p>
          </div>
        </FeatureToggle>
      </div>
    </Accordion.Item>
  );
};

export default General;
