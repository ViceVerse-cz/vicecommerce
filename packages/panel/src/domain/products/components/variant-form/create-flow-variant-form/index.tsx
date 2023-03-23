import React from "react";
import { UseFormReturn } from "react-hook-form";
import InputError from "../../../../../components/atoms/input-error";
import IconTooltip from "../../../../../components/molecules/icon-tooltip";
import Accordion from "../../../../../components/organisms/accordion";
import { nestedForm } from "../../../../../utils/nested-form";
import CustomsForm, { CustomsFormType } from "../../customs-form";
import DimensionsForm, { DimensionsFormType } from "../../dimensions-form";
import { PricesFormType } from "../../prices-form";
import VariantGeneralForm, { VariantGeneralFormType } from "../variant-general-form";
import VariantPricesForm from "../variant-prices-form";
import VariantSelectOptionsForm, {
  VariantOptionValueType,
  VariantSelectOptionsFormType,
} from "../variant-select-options-form";
import VariantStockForm, { VariantStockFormType } from "../variant-stock-form";

export type CreateFlowVariantFormType = {
  /**
   * Used to identify the variant during product create flow. Will not be submitted to the backend.
   */
  _internal_id?: string;
  general: VariantGeneralFormType;
  prices: PricesFormType;
  stock: VariantStockFormType;
  options: VariantSelectOptionsFormType;
  customs: CustomsFormType;
  dimensions: DimensionsFormType;
};

type Props = {
  form: UseFormReturn<CreateFlowVariantFormType, any>;
  options: VariantOptionValueType[];
  onCreateOption: (optionId: string, value: string) => void;
};

/**
 * Re-usable Product Variant form used to add and edit product variants during the product create flow.
 * @example
 * const MyForm = () => {
 *   const form = useForm<CreateFlowVariantFormType>()
 *   const { handleSubmit } = form
 *
 *   const onSubmit = handleSubmit((data) => {
 *     // do something with data
 *   })
 *
 *   return (
 *     <form onSubmit={onSubmit}>
 *       <CreateFlowVariantForm form={form} />
 *       <Button type="submit">Submit</Button>
 *     </form>
 *   )
 * }
 */
const CreateFlowVariantForm = ({ form, options, onCreateOption }: Props) => {
  return (
    <Accordion type='multiple' defaultValue={["general"]}>
      <Accordion.Item title='Obecné' value='general' required>
        <div>
          <VariantGeneralForm form={nestedForm(form, "general")} />
          <div className='mt-xlarge'>
            <div className='flex items-center gap-x-2xsmall mb-base'>
              <h3 className='inter-base-semibold'>Možnosti</h3>
              <IconTooltip type='info' content='Možnosti slouží k určení barvy, velikosti atd. varianty.' />
            </div>
            <VariantSelectOptionsForm
              form={nestedForm(form, "options")}
              options={options}
              onCreateOption={onCreateOption}
            />
            <InputError errors={form.formState.errors} name='options' />
          </div>
        </div>
      </Accordion.Item>
      <Accordion.Item title='Stanovení cen' value='pricing'>
        <VariantPricesForm form={nestedForm(form, "prices")} />
      </Accordion.Item>
      <Accordion.Item title='Zásoby a inventář' value='stock'>
        <VariantStockForm form={nestedForm(form, "stock")} />
      </Accordion.Item>
      <Accordion.Item title='Přeprava' value='shipping'>
        <p className='inter-base-regular text-grey-50'>
          Informace o přepravě mohou být vyžadovány v závislosti na poskytovateli přepravních služeb a na tom, zda jste
          nebo nejste mezinárodní přeprava.
        </p>
        <div className='mt-large'>
          <h3 className='inter-base-semibold mb-2xsmall'>Rozměry</h3>
          <p className='inter-base-regular text-grey-50 mb-large'>
            Konfigurace pro výpočet nejpřesnějších přepravních sazeb.
          </p>
          <DimensionsForm form={nestedForm(form, "dimensions")} />
        </div>
        <div className='mt-xlarge'>
          <h3 className='inter-base-semibold mb-2xsmall'>Celní úřad</h3>
          <p className='inter-base-regular text-grey-50 mb-large'>Konfigurace v případě mezinárodní přepravy.</p>
          <CustomsForm form={nestedForm(form, "customs")} />
        </div>
      </Accordion.Item>
    </Accordion>
  );
};

export default CreateFlowVariantForm;
