import { Product } from "@medusajs/medusa";
import React from "react";
import EditIcon from "../../../../../components/fundamentals/icons/edit-icon";
import { ActionType } from "../../../../../components/molecules/actionables";
import Section from "../../../../../components/organisms/section";
import useToggleState from "../../../../../hooks/use-toggle-state";
import AttributeModal from "./attribute-modal";

type Props = {
  product: Product;
};

const AttributesSection = ({ product }: Props) => {
  const { state, toggle, close } = useToggleState();

  const actions: ActionType[] = [
    {
      label: "Upravit atributy",
      onClick: toggle,
      icon: <EditIcon size={20} />,
    },
  ];

  return (
    <>
      <Section title='Atributy' actions={actions} forceDropdown>
        <div className='flex flex-col gap-y-xsmall mb-large mt-base'>
          <h2 className='inter-base-semibold'>Rozměry</h2>
          <div className='flex flex-col gap-y-xsmall'>
            <Attribute attribute='Výška' value={product.height} />
            <Attribute attribute='Šířka' value={product.width} />
            <Attribute attribute='Délka' value={product.length} />
            <Attribute attribute='Hmotnost' value={product.weight} />
          </div>
        </div>
        <div className='flex flex-col gap-y-xsmall'>
          <h2 className='inter-base-semibold'>Clo</h2>
          <div className='flex flex-col gap-y-xsmall'>
            <Attribute attribute='Kód MID' value={product.mid_code} />
            <Attribute attribute='Kód HS' value={product.hs_code} />
            <Attribute attribute='Země původu' value={product.origin_country} />
          </div>
        </div>
      </Section>

      <AttributeModal onClose={close} open={state} product={product} />
    </>
  );
};

type AttributeProps = {
  attribute: string;
  value: string | number | null;
};

const Attribute = ({ attribute, value }: AttributeProps) => {
  return (
    <div className='flex items-center justify-between w-full inter-base-regular text-grey-50'>
      <p>{attribute}</p>
      <p>{value || "-"}</p>
    </div>
  );
};

export default AttributesSection;
