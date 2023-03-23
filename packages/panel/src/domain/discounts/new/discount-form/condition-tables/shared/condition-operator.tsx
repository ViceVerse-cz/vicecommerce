import React from "react";
import RadioGroup from "../../../../../../components/organisms/radio-group";
import { DiscountConditionOperator } from "../../../../types";

type ConditionOperatorProps = {
  value: "in" | "not_in";
  onChange: (value: DiscountConditionOperator) => void;
};

const ConditionOperator: React.FC<ConditionOperatorProps> = ({ value, onChange }) => {
  return (
    <RadioGroup.Root value={value} onValueChange={onChange} className='grid grid-cols-2 gap-base mb-4'>
      <RadioGroup.Item
        className='w-full'
        label='V'
        value={DiscountConditionOperator.IN}
        description='Platí pro vybrané položky.'
      />
      <RadioGroup.Item
        className='w-full'
        label='Ne v'
        value={DiscountConditionOperator.NOT_IN}
        description='Platí pro všechny položky kromě vybraných.'
      />
    </RadioGroup.Root>
  );
};

export default ConditionOperator;
