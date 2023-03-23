import React, { useState } from "react";
import { useAdminCreateSalesChannel } from "medusa-react";

import Button from "../../../components/fundamentals/button";

import FocusModal from "../../../components/molecules/modal/focus-modal";
import CrossIcon from "../../../components/fundamentals/icons/cross-icon";
import Accordion from "../../../components/organisms/accordion";
import InputField from "../../../components/molecules/input";
import useNotification from "../../../hooks/use-notification";
import PlusIcon from "../../../components/fundamentals/icons/plus-icon";

type GeneralProps = {
  name: string;
  description: string;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
};

/**
 * General section for the SC create form.
 */
function General(props: GeneralProps) {
  const { name, description, setName, setDescription } = props;

  return (
    <div className='flex flex-col gap-y-base my-base'>
      <div className='flex-1'>
        <InputField
          label='Název'
          type='string'
          name='name'
          placeholder='Webové stránky, aplikace, Amazon, prodejní místa v kamenných obchodech, produktový feed na Facebooku...'
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      </div>
      <div className='flex-1'>
        <InputField
          label='Popis'
          type='string'
          name='description'
          placeholder='Dostupné produkty na našich webových stránkách, aplikace...'
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
      </div>
    </div>
  );
}

function AddProducts() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <sapn className='text-gray-500'>
        Vyberte produkty, které budou k dispozici prostřednictvím tohoto kanálu. Produkty můžete přiřadit k více
        kanálům.
      </sapn>
      <Button
        size='small'
        type='button'
        variant='secondary'
        className='w-full h-[40px] mt-6'
        onClick={() => setShowModal(true)}
      >
        <PlusIcon size={20} />
        Add Products
      </Button>
      {/*{showModal && (*/}
      {/*  <SalesChannelAvaliableProductsModal*/}
      {/*    handleClose={() => setShowModal(false)}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
}

type AddSalesChannelModalProps = {
  onClose: (scId: string) => void;
};

/**
 * Modal for creating sales channels.
 */
const AddSalesChannelModal = ({ onClose }: AddSalesChannelModalProps) => {
  const { mutate: createSalesChannel } = useAdminCreateSalesChannel();

  const notification = useNotification();

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();

  async function save() {
    await createSalesChannel(
      { name, description },
      {
        onSuccess: ({ sales_channel }) => {
          notification("Úspěch", "Prodejní kanál je úspěšně vytvořen", "success");
          onClose(sales_channel.id);
        },
        onError: () => notification("Chyba", "Nepodařilo se vytvořit prodejní kanál", "error"),
      },
    );
  }

  async function saveAsDraft() {
    await createSalesChannel(
      {
        name,
        description,
        is_disabled: true,
      },
      {
        onSuccess: ({ sales_channel }) => {
          notification("Úspěch", "Prodejní kanál je úspěšně vytvořen", "success");
          onClose(sales_channel.id);
        },
        onError: () => notification("Chyba", "Nepodařilo se vytvořit prodejní kanál", "error"),
      },
    );
  }

  return (
    <FocusModal>
      <FocusModal.Header>
        <div className='medium:w-8/12 w-full px-8 flex justify-between'>
          <Button size='small' variant='ghost' onClick={onClose} className='border rounded-rounded w-8 h-8'>
            <CrossIcon size={20} />
          </Button>
          <div className='gap-x-small flex'>
            <Button
              size='small'
              variant='secondary'
              onClick={() => saveAsDraft()}
              disabled={!name}
              className='rounded-rounded'
            >
              Uložit jako návrh
            </Button>

            <Button size='small' variant='primary' onClick={() => save()} disabled={!name} className='rounded-rounded'>
              Zveřejnit kanál
            </Button>
          </div>
        </div>
      </FocusModal.Header>
      <FocusModal.Main>
        <div className='flex justify-center mb-[25%]'>
          <div className='medium:w-7/12 large:w-6/12 small:w-4/5 w-full pt-16'>
            <h1 className='inter-xlarge-semibold'>Vytvoření nového prodejního kanálu</h1>
            <Accordion className='pt-7 text-grey-90' defaultValue={["general"]} type='multiple'>
              <Accordion.Item title='Obecné informace' value='general' forceMountContent>
                <General name={name} description={description} setName={setName} setDescription={setDescription} />
              </Accordion.Item>
              {/*TODO: add a modal for initially selecting products*/}
              {/*<Accordion.Item title="Products" value="products">*/}
              {/*  <AddProducts />*/}
              {/*</Accordion.Item>*/}
            </Accordion>
          </div>
        </div>
      </FocusModal.Main>
    </FocusModal>
  );
};

export default AddSalesChannelModal;
