import React from "react";
import { Controller } from "react-hook-form";
import { Option } from "../../types/shared";
import FormValidator from "../../utils/form-validator";
import { NestedForm } from "../../utils/nested-form";
import Input from "../molecules/input";
import { NextSelect } from "../molecules/select/next-select";

export type AddressPayload = {
  first_name: string;
  last_name: string;
  company: string | null;
  address_1: string;
  address_2: string | null;
  city: string;
  province: string | null;
  country_code: Option;
  postal_code: string;
  phone: string | null;
};

export enum AddressType {
  SHIPPING = "shipping",
  BILLING = "billing",
}

type AddressFormProps = {
  form: NestedForm<AddressPayload>;
  countryOptions: Option[];
  type: AddressType;
  required?: boolean;
};

const AddressForm = ({ form, countryOptions, type, required = true }: AddressFormProps) => {
  const {
    register,
    path,
    control,
    formState: { errors },
  } = form;

  return (
    <div>
      <span className='inter-base-semibold'>Obecné</span>
      <div className='grid grid-cols-2 gap-large mt-4 mb-8'>
        <Input
          {...register(path("first_name"), {
            required: required ? FormValidator.required("First name") : false,
            pattern: FormValidator.whiteSpaceRule("First name"),
          })}
          placeholder='Jméno'
          label='Jméno'
          required={required}
          errors={errors}
        />
        <Input
          {...form.register(path("last_name"), {
            required: required ? FormValidator.required("Last name") : false,
            pattern: FormValidator.whiteSpaceRule("Last name"),
          })}
          placeholder='Příjmení'
          label='Příjmení'
          required={required}
          errors={errors}
        />
        <Input
          {...form.register(path("company"), {
            pattern: FormValidator.whiteSpaceRule("Company"),
          })}
          placeholder='Společnost'
          label='Společnost'
          errors={errors}
        />
        <Input {...form.register(path("phone"))} placeholder='Telefon' label='Telefon' errors={errors} />
      </div>

      <span className='inter-base-semibold'>{`${
        type === AddressType.BILLING ? "Fakturační adresa" : AddressType.SHIPPING ? "Dodací adresa" : "Adresa"
      }`}</span>
      <div className='grid grid-cols-1 gap-y-large mt-4'>
        <Input
          {...form.register(path("address_1"), {
            required: required ? FormValidator.required("Address 1") : false,
            pattern: FormValidator.whiteSpaceRule("Address 1"),
          })}
          placeholder='Adresa 1'
          label='Adresa 1'
          required={required}
          errors={errors}
        />
        <Input
          {...form.register(path("address_2"), {
            pattern: FormValidator.whiteSpaceRule("Address 2"),
          })}
          placeholder='Adresa 2'
          label='Adresa 2'
          errors={errors}
        />
        <div className='grid grid-cols-[144px_1fr] gap-large'>
          <Input
            {...form.register(path("postal_code"), {
              required: required ? FormValidator.required("Postal code") : false,
              pattern: FormValidator.whiteSpaceRule("Postal code"),
            })}
            placeholder='Poštovní směrovací čísloe'
            label='Poštovní směrovací číslo'
            required={required}
            autoComplete='off'
            errors={errors}
          />
          <Input
            placeholder='Město'
            label='Město'
            {...form.register(path("city"), {
              required: required ? FormValidator.required("City") : false,
              pattern: FormValidator.whiteSpaceRule("City"),
            })}
            required={required}
            errors={errors}
          />
        </div>
        <div className='grid grid-cols-2 gap-large'>
          <Input
            {...form.register(path("province"), {
              pattern: FormValidator.whiteSpaceRule("Province"),
            })}
            placeholder='Provincie'
            label='Provincie'
            errors={errors}
          />
          <Controller
            control={control}
            name={path("country_code")}
            rules={{
              required: required ? FormValidator.required("Country") : false,
            }}
            render={({ field: { value, onChange } }) => {
              return (
                <NextSelect
                  label='Stát'
                  required={required}
                  value={value}
                  options={countryOptions}
                  onChange={onChange}
                  name={path("country_code")}
                  errors={errors}
                />
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default AddressForm;
