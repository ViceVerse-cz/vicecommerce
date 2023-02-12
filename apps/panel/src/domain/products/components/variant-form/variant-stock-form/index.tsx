import React from "react";
import { Controller } from "react-hook-form";
import Switch from "../../../../../components/atoms/switch";
import InputField from "../../../../../components/molecules/input";
import { NestedForm } from "../../../../../utils/nested-form";

export type VariantStockFormType = {
  manage_inventory: boolean;
  allow_backorder: boolean;
  inventory_quantity: number | null;
  sku: string | null;
  ean: string | null;
  upc: string | null;
  barcode: string | null;
};

type Props = {
  form: NestedForm<VariantStockFormType>;
};

const VariantStockForm = ({ form }: Props) => {
  const {
    path,
    control,
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <p className='inter-base-regular text-grey-50'>Konfigurace zásob a skladových zásob pro tuto variantu.</p>
      <div className='pt-large flex flex-col gap-y-xlarge'>
        <div className='flex flex-col gap-y-2xsmall'>
          <div className='flex items-center justify-between'>
            <h3 className='inter-base-semibold mb-2xsmall'>Správa zásob</h3>
            <Controller
              control={control}
              name={path("manage_inventory")}
              render={({ field: { value, onChange } }) => {
                return <Switch checked={value} onCheckedChange={onChange} />;
              }}
            />
          </div>
          <p className='inter-base-regular text-grey-50'>
            Pokud je zaškrtnuto, bude Medusa regulovat zásoby při objednávkách a vracení zboží.
          </p>
        </div>
        <div className='flex flex-col gap-y-2xsmall'>
          <div className='flex items-center justify-between'>
            <h3 className='inter-base-semibold mb-2xsmall'>Povolení zpětných objednávek</h3>
            <Controller
              control={control}
              name={path("allow_backorder")}
              render={({ field: { value, onChange } }) => {
                return <Switch checked={value} onCheckedChange={onChange} />;
              }}
            />
          </div>
          <p className='inter-base-regular text-grey-50'>
            Po zaškrtnutí bude produkt k dispozici ke koupi, přestože je vyprodaný.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-large'>
          <InputField label='Skladová jednotka (SKU)' placeholder='SUN-G, JK1234...' {...register(path("sku"))} />
          <InputField
            label='Množství na skladě'
            type='number'
            placeholder='100...'
            errors={errors}
            {...register(path("inventory_quantity"), {
              valueAsNumber: true,
            })}
          />
          <InputField label='EAN (čárový kód)' placeholder='123456789102...' {...register(path("ean"))} />
          <InputField label='UPC (čárový kód)' placeholder='023456789104...' {...register(path("upc"))} />
          <InputField label='Čárový kód' placeholder='123456789104...' {...register(path("barcode"))} />
        </div>
      </div>
    </div>
  );
};

export default VariantStockForm;
