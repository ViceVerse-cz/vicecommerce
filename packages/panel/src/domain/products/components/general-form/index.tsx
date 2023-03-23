import React from "react";
import InputField from "../../../../components/molecules/input";
import TextArea from "../../../../components/molecules/textarea";
import FormValidator from "../../../../utils/form-validator";
import { NestedForm } from "../../../../utils/nested-form";

export type GeneralFormType = {
  title: string;
  subtitle: string | null;
  handle: string;
  material: string | null;
  description: string | null;
};

type Props = {
  form: NestedForm<GeneralFormType>;
  requireHandle?: boolean;
};

const GeneralForm = ({ form, requireHandle = true }: Props) => {
  const {
    register,
    path,
    formState: { errors },
  } = form;

  return (
    <div>
      <div className='grid grid-cols-2 gap-x-large mb-small'>
        <InputField
          label='Title'
          placeholder='Winter Jacket'
          required
          {...register(path("title"), {
            required: "Vyžaduje se název",
            minLength: {
              value: 1,
              message: "Název musí mít alespoň 1 znak",
            },
            pattern: FormValidator.whiteSpaceRule("Title"),
          })}
          errors={errors}
        />
        <InputField
          label='Podtitul'
          placeholder='Teplé a útulné...'
          {...register(path("subtitle"), {
            pattern: FormValidator.whiteSpaceRule("Subtitle"),
          })}
          errors={errors}
        />
      </div>
      <p className='inter-base-regular text-grey-50 mb-large'>
        Dejte svému produktu krátký a jasný název.
        <br />
        Pro vyhledávače je doporučená délka 50-60 znaků.
      </p>
      <div className='grid grid-cols-2 gap-x-large mb-large'>
        <InputField
          label='Rukojeť'
          tooltipContent={
            !requireHandle
              ? "Údaj handle je část adresy URL, která identifikuje produkt. Pokud není zadán, bude vygenerován z názvu."
              : undefined
          }
          placeholder='winter-jacket'
          required={requireHandle}
          {...register(path("handle"), {
            required: requireHandle ? "Je vyžadována rukojeť" : undefined,
            minLength: FormValidator.minOneCharRule("Handle"),
            pattern: FormValidator.whiteSpaceRule("Handle"),
          })}
          prefix='/'
          errors={errors}
        />
        <InputField
          label='Materiál'
          placeholder='100% bavlna'
          {...register(path("material"), {
            minLength: FormValidator.minOneCharRule("Material"),
            pattern: FormValidator.whiteSpaceRule("Material"),
          })}
          errors={errors}
        />
      </div>
      <TextArea
        label='Popis'
        placeholder='Teplá a útulná bunda...'
        rows={3}
        className='mb-small'
        {...register(path("description"))}
        errors={errors}
      />
      <p className='inter-base-regular text-grey-50'>
        Uveďte krátký a jasný popis svého produktu.
        <br />
        Pro vyhledávače je doporučená délka 120-160 znaků.
      </p>
    </div>
  );
};

export default GeneralForm;
