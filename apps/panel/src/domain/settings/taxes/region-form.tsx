import { Region } from "@medusajs/medusa";
import { useAdminStoreTaxProviders, useAdminUpdateRegion } from "medusa-react";
import React, { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import Checkbox from "../../../components/atoms/checkbox";
import Button from "../../../components/fundamentals/button";
import IconTooltip from "../../../components/molecules/icon-tooltip";
import Select from "../../../components/molecules/select";
import useNotification from "../../../hooks/use-notification";
import { Option } from "../../../types/shared";
import { getErrorMessage } from "../../../utils/error-messages";

type RegionTaxFormProps = {
  region: Region;
};

type TaxProviderOption = Option | { label: string; value: null };

type RegionTaxFormData = {
  automatic_taxes: boolean;
  gift_cards_taxable: boolean;
  tax_provider_id: TaxProviderOption;
};

export const RegionTaxForm = ({ region }: RegionTaxFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<RegionTaxFormData>({
    defaultValues: {
      automatic_taxes: region.automatic_taxes,
      gift_cards_taxable: region.gift_cards_taxable,
      tax_provider_id: {
        label: region.tax_provider_id === null ? "Poskytovatel systémové daně" : region.tax_provider_id,
        value: region.tax_provider_id,
      },
    },
  });
  const notification = useNotification();

  useEffect(() => {
    reset({
      automatic_taxes: region.automatic_taxes,
      gift_cards_taxable: region.gift_cards_taxable,
      tax_provider_id: {
        label: region.tax_provider_id === null ? "Poskytovatel systémové daně" : region.tax_provider_id,
        value: region.tax_provider_id,
      },
    });
  }, [region]);

  const { isLoading: isProvidersLoading, tax_providers } = useAdminStoreTaxProviders();

  const updateRegion = useAdminUpdateRegion(region.id);

  const providerOptions = useMemo(() => {
    if (tax_providers) {
      return [
        {
          label: "Poskytovatel systémové daně",
          value: null,
        },
        ...tax_providers.map((tp) => ({
          label: tp.id,
          value: tp.id,
        })),
      ];
    }

    return [
      {
        label: "Poskytovatel systémové daně",
        value: null,
      },
    ];
  }, [tax_providers]);

  const onSubmit = (data) => {
    const toSubmit = {
      ...data,
      tax_provider_id: data.tax_provider_id.value,
    };

    updateRegion.mutate(toSubmit, {
      onSuccess: () => {
        notification("Úspěch", "Nastavení regionální daně bylo úspěšně aktualizováno.", "success");
      },
      onError: (error) => {
        notification("Chyba", getErrorMessage(error), "error");
      },
    });
  };

  return (
    <form className='flex flex-col flex-1' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-base flex-1'>
        <Controller
          name='tax_provider_id'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <Select
              disabled={isProvidersLoading}
              label='Poskytovatel daňových služeb'
              options={providerOptions}
              value={value}
              onChange={onChange}
              className='mb-base'
            />
          )}
        />
        <div className='flex item-center gap-x-1.5'>
          <Checkbox
            className='inter-base-regular'
            {...register("automatic_taxes")}
            label='Vypočítat daně automaticky?'
          />
          <IconTooltip
            content={
              "Pokud je zaškrtnuto, Vicecommerce automaticky použije výpočet daně na vozíky v této oblasti. Pokud není zaškrtnuto, budete muset daně vypočítat ručně při placení. Pokud používáte poskytovatele daní třetí strany, doporučujeme ruční výběr daní, abyste se vyhnuli provádění příliš mnoha požadavků."
            }
          />
        </div>
        <div className='flex item-center gap-x-1.5'>
          <Checkbox
            className='inter-base-regular'
            {...register("gift_cards_taxable")}
            label='Uplatnit daň na dárkové karty?'
          />
          <IconTooltip
            content={
              "Pokud je zaškrtnuto, daně se na dárkové karty uplatní při placení. V některých zemích je podle daňových předpisů nutné dárkové karty při nákupu zdanit."
            }
          />
        </div>
      </div>
      <div className='flex justify-end'>
        {isDirty && (
          <Button loading={updateRegion.isLoading} variant='primary' size='medium' type='submit'>
            Uložit
          </Button>
        )}
      </div>
    </form>
  );
};
