import { Product } from "@medusajs/medusa";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../../components/fundamentals/button";
import Modal from "../../../../../components/molecules/modal";
import useNotification from "../../../../../hooks/use-notification";
import { FormImage } from "../../../../../types/shared";
import { prepareImages } from "../../../../../utils/images";
import { nestedForm } from "../../../../../utils/nested-form";
import MediaForm, { MediaFormType } from "../../../components/media-form";
import useEditProductActions from "../../hooks/use-edit-product-actions";

type Props = {
  product: Product;
  open: boolean;
  onClose: () => void;
};

type MediaFormWrapper = {
  media: MediaFormType;
};

const MediaModal = ({ product, open, onClose }: Props) => {
  const { onUpdate, updating } = useEditProductActions(product.id);
  const form = useForm<MediaFormWrapper>({
    defaultValues: getDefaultValues(product),
  });

  const {
    formState: { isDirty },
    handleSubmit,
    reset,
  } = form;

  const notification = useNotification();

  useEffect(() => {
    reset(getDefaultValues(product));
  }, [product]);

  const onReset = () => {
    reset(getDefaultValues(product));
    onClose();
  };

  const onSubmit = handleSubmit(async (data) => {
    let preppedImages: FormImage[] = [];

    try {
      preppedImages = await prepareImages(data.media.images);
    } catch (error) {
      let errorMessage = "Při pokusu o nahrání obrázků se něco pokazilo.";
      const response = (error as any).response as Response;

      if (response.status === 500) {
        errorMessage = `${errorMessage} Možná nemáte nakonfigurovanou souborovou službu. Obraťte se na svého správce`;
      }

      notification("Chyba", errorMessage, "error");
      return;
    }
    const urls = preppedImages.map((image) => image.url);

    onUpdate(
      {
        images: urls,
      },
      onReset,
    );
  });

  return (
    <Modal open={open} handleClose={onReset} isLargeModal>
      <Modal.Body>
        <Modal.Header handleClose={onReset}>
          <h1 className='inter-xlarge-semibold m-0'>Upravit média</h1>
        </Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Content>
            <div>
              <h2 className='inter-large-semibold mb-2xsmall'>Média</h2>
              <p className='inter-base-regular text-grey-50 mb-large'>Přidejte k produktu obrázky.</p>
              <div>
                <MediaForm form={nestedForm(form, "media")} />
              </div>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <div className='flex gap-x-2 justify-end w-full'>
              <Button size='small' variant='secondary' type='button' onClick={onReset}>
                Zrušit
              </Button>
              <Button size='small' variant='primary' type='submit' disabled={!isDirty} loading={updating}>
                Uložit a zavřít
              </Button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const getDefaultValues = (product: Product): MediaFormWrapper => {
  return {
    media: {
      images:
        product.images?.map((image) => ({
          url: image.url,
          selected: false,
        })) || [],
    },
  };
};

export default MediaModal;
