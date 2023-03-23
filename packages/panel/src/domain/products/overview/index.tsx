import { useAdminCreateBatchJob, useAdminCreateCollection } from "medusa-react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Fade from "../../../components/atoms/fade-wrapper";
import Button from "../../../components/fundamentals/button";
import ExportIcon from "../../../components/fundamentals/icons/export-icon";
import PlusIcon from "../../../components/fundamentals/icons/plus-icon";
import UploadIcon from "../../../components/fundamentals/icons/upload-icon";
import BodyCard from "../../../components/organisms/body-card";
import TableViewHeader from "../../../components/organisms/custom-table-header";
import ExportModal from "../../../components/organisms/export-modal";
import AddCollectionModal from "../../../components/templates/collection-modal";
import CollectionsTable from "../../../components/templates/collections-table";
import ProductTable from "../../../components/templates/product-table";
import useNotification from "../../../hooks/use-notification";
import useToggleState from "../../../hooks/use-toggle-state";
import { getErrorMessage } from "../../../utils/error-messages";
import ImportProducts from "../batch-job/import";
import NewProduct from "../new";
import { PollingContext } from "../../../context/polling";

const VIEWS = ["produkty", "kolekce"];

const Overview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [view, setView] = useState(searchParams.get("view") === "kolekce" ? "kolekce" : "produkty");

  const { state: createProductState, close: closeProductCreate, open: openProductCreate } = useToggleState();

  const { resetInterval } = useContext(PollingContext);
  const createBatchJob = useAdminCreateBatchJob();

  const notification = useNotification();

  const createCollection = useAdminCreateCollection();

  const CurrentView = () => {
    switch (view) {
      case "produkty":
        return <ProductTable />;
      default:
        return <CollectionsTable />;
    }
  };

  const CurrentAction = () => {
    switch (view) {
      case "produkty":
        return (
          <div className='flex space-x-2'>
            <Button variant='secondary' size='small' onClick={() => openImportModal()}>
              <UploadIcon size={20} />
              Importovat produkty
            </Button>
            <Button variant='secondary' size='small' onClick={() => openExportModal()}>
              <ExportIcon size={20} />
              Exportovat produkty
            </Button>
            <Button variant='secondary' size='small' onClick={openProductCreate}>
              <PlusIcon size={20} />
              Nový produkt
            </Button>
          </div>
        );
      default:
        return (
          <div className='flex space-x-2'>
            <Button variant='secondary' size='small' onClick={() => setShowNewCollection(!showNewCollection)}>
              <PlusIcon size={20} />
              Nová kolekce
            </Button>
          </div>
        );
    }
  };

  const [showNewCollection, setShowNewCollection] = useState(false);
  const { open: openExportModal, close: closeExportModal, state: exportModalOpen } = useToggleState(false);

  const { open: openImportModal, close: closeImportModal, state: importModalOpen } = useToggleState(false);

  const handleCreateCollection = async (data, colMetadata) => {
    const metadata = colMetadata
      .filter((m) => m.key && m.value) // remove empty metadata
      .reduce((acc, next) => {
        return {
          ...acc,
          [next.key]: next.value,
        };
      }, {});

    await createCollection.mutateAsync(
      { ...data, metadata },
      {
        onSuccess: ({ collection }) => {
          notification("Úspěch", "Úspěšně vytvořená kolekce", "success");
          navigate(`/a/collections/${collection.id}`);
          setShowNewCollection(false);
        },
        onError: (err) => notification("Chyba", getErrorMessage(err), "error"),
      },
    );
  };

  const handleCreateExport = () => {
    const reqObj = {
      type: "product-export",
      context: {},
      dry_run: false,
    };

    createBatchJob.mutate(reqObj, {
      onSuccess: () => {
        resetInterval();
        notification("Úspěch", "Úspěšně zahájený export", "success");
      },
      onError: (err) => {
        notification("Chyba", getErrorMessage(err), "error");
      },
    });

    closeExportModal();
  };

  return (
    <>
      <div className='flex flex-col grow h-full'>
        <div className='w-full flex flex-col grow'>
          <BodyCard
            forceDropdown={false}
            customActionable={CurrentAction()}
            customHeader={<TableViewHeader views={VIEWS} setActiveView={setView} activeView={view} />}
            className='h-fit'
          >
            <CurrentView />
          </BodyCard>
        </div>
      </div>
      {showNewCollection && (
        <AddCollectionModal
          onClose={() => setShowNewCollection(!showNewCollection)}
          onSubmit={handleCreateCollection}
        />
      )}
      {exportModalOpen && (
        <ExportModal
          title='Vývozní produkty'
          handleClose={() => closeExportModal()}
          onSubmit={handleCreateExport}
          loading={createBatchJob.isLoading}
        />
      )}
      {importModalOpen && <ImportProducts handleClose={() => closeImportModal()} />}
      <Fade isVisible={createProductState} isFullScreen={true}>
        <NewProduct onClose={closeProductCreate} />
      </Fade>
    </>
  );
};

export default Overview;
