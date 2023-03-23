import React from "react";
import { Controller } from "react-hook-form";
import { NextSelect } from "../../../../../components/molecules/select/next-select";
import { Option } from "../../../../../types/shared";
import { NestedForm } from "../../../../../utils/nested-form";
import { useStoreData } from "./use-store-data";

export type RegionProvidersFormType = {
  payment_providers: Option[];
  fulfillment_providers: Option[];
};

type Props = {
  form: NestedForm<RegionProvidersFormType>;
};

const RegionProvidersForm = ({ form }: Props) => {
  const {
    control,
    path,
    formState: { errors },
  } = form;
  const { fulfillmentProviderOptions, paymentProviderOptions } = useStoreData();

  return (
    <div className='grid grid-cols-2 gap-large'>
      <Controller
        control={control}
        name={path("payment_providers")}
        rules={{
          required: "Jsou vyžadováni poskytovatelé plateb",
          minLength: {
            value: 1,
            message: "Jsou vyžadováni poskytovatelé plateb",
          },
        }}
        render={({ field: { value, onBlur, onChange } }) => {
          return (
            <NextSelect
              label='Poskytovatel platebs'
              placeholder='Výběr poskytovatelů platebních služeb...'
              options={paymentProviderOptions}
              isMulti
              isClearable
              required
              selectAll
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name={path("payment_providers")}
              errors={errors}
            />
          );
        }}
      />
      <Controller
        control={control}
        name={path("fulfillment_providers")}
        rules={{
          required: "Poskytovatelé plnění jsou povinni",
          minLength: {
            value: 1,
            message: "Poskytovatelé plnění jsou povinni",
          },
        }}
        render={({ field: { onBlur, onChange, value } }) => {
          return (
            <NextSelect
              label='Poskytovatelé plnění'
              placeholder='Vyberte si poskytovatele plnění...'
              options={fulfillmentProviderOptions}
              required
              isMulti
              isClearable
              selectAll
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name={path("fulfillment_providers")}
              errors={errors}
            />
          );
        }}
      />
    </div>
  );
};

export default RegionProvidersForm;
