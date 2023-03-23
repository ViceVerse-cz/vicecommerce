import { useEffect, useState } from "react";

import { PublishableApiKey, SalesChannel } from "@medusajs/medusa";
import {
  useAdminAddPublishableKeySalesChannelsBatch,
  useAdminCreatePublishableApiKey,
  useAdminPublishableApiKeySalesChannels,
} from "medusa-react";

import Breadcrumb from "../../../components/molecules/breadcrumb";
import BodyCard from "../../../components/organisms/body-card";
import FocusModal from "../../../components/molecules/modal/focus-modal";
import Fade from "../../../components/atoms/fade-wrapper";
import useToggleState from "../../../hooks/use-toggle-state";
import Button from "../../../components/fundamentals/button";
import CrossIcon from "../../../components/fundamentals/icons/cross-icon";
import InputField from "../../../components/molecules/input";
import useNotification from "../../../hooks/use-notification";
import PublishableApiKeysTable from "../tables/publishable-api-keys-table";
import DetailsModal from "../modals/details";
import ManageSalesChannelsSideModal from "../modals/manage-sales-channels";
import ChannelsIcon from "../../../components/fundamentals/icons/channels-icon";
import SalesChannelsSummary from "../../../components/molecules/sales-channels-summary";
import AddSalesChannelsSideModal from "../modals/add-sales-channels";

type AddSalesChannelsSectionProps = {
  setSelectedChannels: (arg: any) => void;
  selectedChannels: Record<string, SalesChannel>;
};

/**
 * Container for adding sales channels to PK scope.
 */
function AddSalesChannelsSection(props: AddSalesChannelsSectionProps) {
  const { setSelectedChannels, selectedChannels } = props;

  const [isModalVisible, showModal, hideModal] = useToggleState(false);

  const hasSelectedChannels = !!Object.keys(selectedChannels).length;

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
          <h5 className='inter-base-semibold text-grey-90 pb-1'>Prodejní kanály</h5>
          <p className='text-grey-50'>Připojte ke svému klíči API tolik prodejních kanálů, kolik potřebujete.</p>
        </div>
        {!hasSelectedChannels && (
          <Button size='small' variant='secondary' className='h-[40px]' onClick={showModal}>
            Přidání prodejních kanálů
          </Button>
        )}
      </div>
      {hasSelectedChannels && (
        <div className='mt-10 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <div className='rounded p-1 border'>
              <div className='bg-gray-100 p-2 rounded'>
                <ChannelsIcon />
              </div>
            </div>
            <SalesChannelsSummary channels={Object.values(selectedChannels)} showCount={2} />
          </div>
          <Button size='small' variant='secondary' className='h-[40px]' onClick={showModal}>
            Úprava prodejních kanálů
          </Button>
        </div>
      )}

      <AddSalesChannelsSideModal
        close={hideModal}
        isVisible={isModalVisible}
        selectedChannels={selectedChannels}
        setSelectedChannels={setSelectedChannels}
      />
    </div>
  );
}

type CreatePublishableKeyProps = {
  closeModal: () => void;
};

/**
 * Focus modal container for creating Publishable Keys.
 */
function CreatePublishableKey(props: CreatePublishableKeyProps) {
  const { closeModal } = props;
  const notification = useNotification();

  const [name, setName] = useState("");
  const [keyId, setKeyId] = useState("");
  const [selectedChannels, setSelectedChannels] = useState({});

  const { mutateAsync: createPublishableApiKey } = useAdminCreatePublishableApiKey();

  const { mutateAsync: addSalesChannelsToKeyScope } = useAdminAddPublishableKeySalesChannelsBatch(keyId);

  const onSubmit = async () => {
    try {
      const res = await createPublishableApiKey({ title: name });
      setKeyId(res.publishable_api_key.id);
      notification("Úspěch", "Vytvoření nového klíče API", "success");
    } catch (e) {
      notification("Chyba", "Nepodařilo se vytvořit nový klíč API", "error");
    }
  };

  useEffect(() => {
    if (keyId) {
      addSalesChannelsToKeyScope({
        sales_channel_ids: Object.keys(selectedChannels).map((id) => ({ id })),
      })
        .then(() => {
          notification("Úspěch", "Prodejní kanály přidané do oblasti působnosti", "success");
        })
        .catch(() => {
          notification("Chyba", "Při přidávání prodejních kanálů do oboru klíče došlo k chybě.", "success");
        })
        .finally(closeModal);
    }
  }, [keyId, selectedChannels]);

  return (
    <FocusModal>
      <FocusModal.Header>
        <div className='medium:w-8/12 w-full px-8 flex justify-between'>
          <Button size='small' variant='ghost' onClick={closeModal}>
            <CrossIcon size={20} />
          </Button>
          <div className='gap-x-small flex'>
            <Button size='small' variant='primary' onClick={onSubmit} disabled={!name} className='rounded-rounded'>
              Zveřejnění klíče API
            </Button>
          </div>
        </div>
      </FocusModal.Header>

      <FocusModal.Main className='w-full no-scrollbar flex justify-center'>
        <div className='medium:w-7/12 large:w-6/12 small:w-4/5 max-w-[700px] my-16'>
          <h1 className='inter-xlarge-semibold text-grey-90 pb-8'>Vytvoření klíče API</h1>
          <h5 className='inter-base-semibold text-grey-90 pb-1'>Obecné informace</h5>
          <p className='text-grey-50 pb-8'>Vytváření a správa klíčů API. Nyní se to týká pouze prodejních kanálů.</p>
          <InputField
            label='Title'
            type='string'
            name='name'
            value={name}
            className='w-[338px]'
            placeholder='Name your key'
            onChange={(ev) => setName(ev.target.value)}
          />

          <div className='w-[100%] h-[1px] bg-gray-200 mt-16 mb-8' />

          <AddSalesChannelsSection selectedChannels={selectedChannels} setSelectedChannels={setSelectedChannels} />
        </div>
      </FocusModal.Main>
    </FocusModal>
  );
}

/**
 * Index page container for the "Publishable API keys" page
 */
function Index() {
  const [selectedKey, setSelectedKey] = useState<PublishableApiKey>();
  const [editKey, setEditKey] = useState<PublishableApiKey>();

  const [isCreateModalVisible, openCreateModal, closeCreateModal] = useToggleState(false);

  const actions = [
    {
      label: "Vytvoření klíče API",
      onClick: openCreateModal,
    },
  ];

  const _openChannelsModal = (pubKey: PublishableApiKey) => {
    setEditKey(pubKey);
  };

  const _closeChannelsModal = () => {
    setEditKey(null);
  };

  return (
    <div>
      <Breadcrumb currentPage='Publikovatelné klíče API' previousBreadcrumb='Nastavení' previousRoute='/a/settings' />
      <BodyCard
        title='Publikovatelné klíče API'
        subtitle='Tyto publikovatelné klíče vám umožní ověřovat požadavky API.'
        actionables={actions}
      >
        <PublishableApiKeysTable showDetailsModal={setSelectedKey} showChannelsModal={_openChannelsModal} />
        <DetailsModal selectedKey={selectedKey} close={() => setSelectedKey(undefined)} />
        <Fade isVisible={isCreateModalVisible} isFullScreen>
          <CreatePublishableKey closeModal={closeCreateModal} />
        </Fade>

        <ManageSalesChannelsSideModal keyId={editKey?.id} close={_closeChannelsModal} />
      </BodyCard>
    </div>
  );
}

export default Index;
