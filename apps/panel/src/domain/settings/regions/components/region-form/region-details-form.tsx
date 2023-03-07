import { Controller } from "react-hook-form";
import Switch from "../../../../../components/atoms/switch";
import FeatureToggle from "../../../../../components/fundamentals/feature-toggle";
import InputField from "../../../../../components/molecules/input";
import { NextSelect } from "../../../../../components/molecules/select/next-select";
import { Option } from "../../../../../types/shared";
import FormValidator from "../../../../../utils/form-validator";
import { NestedForm } from "../../../../../utils/nested-form";
import { useStoreData } from "./use-store-data";

export type RegionDetailsFormType = {
  name: string;
  countries: Option[];
  currency_code: Option;
  tax_rate: number | null;
  tax_code: string | null;
  includes_tax?: boolean;
};

type Props = {
  isCreate?: boolean;
  form: NestedForm<RegionDetailsFormType>;
};

const RegionDetailsForm = ({ form, isCreate = false }: Props) => {
  const {
    control,
    register,
    path,
    formState: { errors },
  } = form;
  const { currencyOptions, countryOptions } = useStoreData();

  return (
    <div>
      <div className='grid grid-cols-2 gap-large'>
        <InputField
          label='Název'
          placeholder='Evropa'
          required
          {...register(path("name"), {
            required: "Vyžaduje se název",
            minLength: FormValidator.minOneCharRule("Title"),
            pattern: FormValidator.whiteSpaceRule("Title"),
          })}
          errors={errors}
        />
        <Controller
          control={control}
          name={path("currency_code")}
          rules={{
            required: "Je vyžadován kód měny",
          }}
          render={({ field }) => {
            return (
              <NextSelect
                label='Měna'
                placeholder='Výběr měny'
                required
                {...field}
                options={currencyOptions}
                name={path("currency_code")}
                errors={errors}
              />
            );
          }}
        />
        {isCreate && (
          <>
            <InputField
              label='Výchozí sazba daně'
              required
              placeholder='25'
              prefix='%'
              step={1}
              type={"number"}
              {...register(path("tax_rate"), {
                required: isCreate ? "Je vyžadována sazba daně" : undefined,
                max: {
                  value: 100,
                  message: "Sazba daně musí být rovna nebo nižší než 100",
                },
                min: FormValidator.nonNegativeNumberRule("Tax rate"),
                valueAsNumber: true,
              })}
              errors={errors}
            />
            <InputField label='Výchozí daňový kód' placeholder='1000' {...register(path("tax_code"))} errors={errors} />
          </>
        )}
        <Controller
          control={control}
          name={path("countries")}
          render={({ field }) => {
            return (
              <NextSelect
                label='Země'
                placeholder='Výběr zemí'
                isMulti
                selectAll
                {...field}
                name={path("countries")}
                errors={errors}
                options={countryOptions}
              />
            );
          }}
        />
      </div>
      <FeatureToggle featureFlag='tax_inclusive_pricing'>
        <div className='flex items-start justify-between mt-xlarge'>
          <div className='flex flex-col gap-y-2xsmall'>
            <h3 className='inter-base-semibold'>Ceny včetně daně</h3>
            <p className='inter-base-regular text-grey-50'>
              Pokud jsou ceny v regionu povoleny, jsou uvedeny včetně daně.
            </p>
          </div>
          <Controller
            control={control}
            name={path("includes_tax")}
            render={({ field: { value, onChange } }) => {
              return <Switch checked={value} onCheckedChange={onChange} />;
            }}
          />
        </div>
      </FeatureToggle>
    </div>
  );
};

export default RegionDetailsForm;
