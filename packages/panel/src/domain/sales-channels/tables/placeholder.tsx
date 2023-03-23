import React from "react";

import Button from "../../../components/fundamentals/button";
import SidedMouthFaceIcon from "../../../components/fundamentals/icons/sided-mouth-face";

function Placeholder({ showAddModal }) {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <span className='text-grey-50'>
        <SidedMouthFaceIcon width='48' height='48' />
      </span>

      <h3 className='font-semibold text-large text-gray-90 mt-6'>Začněte vytvářet nastavení kanálů...</h3>
      <p className='mt-2 mb-8 text-grey-50 w-[358px] text-center'>
        Zatím jste do těchto kanálů nepřidali žádné produkty, ale jakmile tak učiníte, budou se zde zobrazovat.
      </p>

      <Button onClick={showAddModal} variant='primary' size='small'>
        Přidat produkty
      </Button>
    </div>
  );
}

export default Placeholder;
