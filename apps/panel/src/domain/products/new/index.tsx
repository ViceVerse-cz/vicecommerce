import { AdminPostProductsReq } from '@medusajs/medusa';
import { useAdminCreateProduct } from 'medusa-react';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/fundamentals/button';
import FeatureToggle from '../../../components/fundamentals/feature-toggle';
import CrossIcon from '../../../components/fundamentals/icons/cross-icon';
import FocusModal from '../../../components/molecules/modal/focus-modal';
import Accordion from '../../../components/organisms/accordion';
import { useFeatureFlag } from '../../../context/feature-flag';
import useNotification from '../../../hooks/use-notification';
import { FormImage, ProductStatus } from '../../../types/shared';
import { getErrorMessage } from '../../../utils/error-messages';
import { prepareImages } from '../../../utils/images';
import { nestedForm } from '../../../utils/nested-form';
import CustomsForm, { CustomsFormType } from '../components/customs-form';
import DimensionsForm, { DimensionsFormType } from '../components/dimensions-form';
import DiscountableForm, { DiscountableFormType } from '../components/discountable-form';
import GeneralForm, { GeneralFormType } from '../components/general-form';
import MediaForm, { MediaFormType } from '../components/media-form';
import OrganizeForm, { OrganizeFormType } from '../components/organize-form';
import { PricesFormType } from '../components/prices-form';
import ThumbnailForm, { ThumbnailFormType } from '../components/thumbnail-form';
import AddSalesChannelsForm, { AddSalesChannelsFormType } from './add-sales-channels';
import AddVariantsForm, { AddVariantsFormType } from './add-variants';

type NewProductForm = {
  general: GeneralFormType;
  discounted: DiscountableFormType;
  organize: OrganizeFormType;
  variants: AddVariantsFormType;
  customs: CustomsFormType;
  dimensions: DimensionsFormType;
  thumbnail: ThumbnailFormType;
  media: MediaFormType;
  salesChannels: AddSalesChannelsFormType;
};

type Props = {
  onClose: () => void;
};

const NewProduct = ({ onClose }: Props) => {
  const form = useForm<NewProductForm>({
    defaultValues: createBlank(),
  });
  const { mutate } = useAdminCreateProduct();
  const navigate = useNavigate();
  const notification = useNotification();

  const watchedCustoms = useWatch({
    control: form.control,
    name: 'customs',
  });

  const watchedDimensions = useWatch({
    control: form.control,
    name: 'dimensions',
  });

  const {
    handleSubmit,
    formState: { isDirty },
    reset,
  } = form;

  const closeAndReset = () => {
    reset(createBlank());
    onClose();
  };

  useEffect(() => {
    reset(createBlank());
  }, []);

  const { isFeatureEnabled } = useFeatureFlag();

  const onSubmit = (publish = true) =>
    handleSubmit(async (data) => {
      const payload = createPayload(data, publish, isFeatureEnabled('sales_channels'));

      if (data.media?.images?.length) {
        let preppedImages: FormImage[] = [];

        try {
          preppedImages = await prepareImages(data.media.images);
        } catch (error) {
          let errorMessage = 'Při pokusu o nahrání obrázků se něco pokazilo.';
          const response = (error as any).response as Response;

          if (response.status === 500) {
            errorMessage =
              errorMessage +
              ' ' +
              'Možná nemáte nakonfigurovanou souborovou službu. Obraťte se na svého správce';
          }

          notification('Chyby', errorMessage, 'error');
          return;
        }
        const urls = preppedImages.map((image) => image.url);

        payload.images = urls;
      }

      if (data.thumbnail?.images?.length) {
        let preppedImages: FormImage[] = [];

        try {
          preppedImages = await prepareImages(data.thumbnail.images);
        } catch (error) {
          let errorMessage = 'Při pokusu o nahrání miniatury se něco pokazilo.';
          const response = (error as any).response as Response;

          if (response.status === 500) {
            errorMessage =
              errorMessage +
              ' ' +
              'Možná nemáte nakonfigurovanou souborovou službu. Obraťte se na svého správce';
          }

          notification('Chyby', errorMessage, 'error');
          return;
        }
        const urls = preppedImages.map((image) => image.url);

        payload.thumbnail = urls[0];
      }

      mutate(payload, {
        onSuccess: ({ product }) => {
          closeAndReset();
          navigate(`/a/products/${product.id}`);
        },
        onError: (err) => {
          notification('Chyby', getErrorMessage(err), 'error');
        },
      });
    });

  return (
    <form className='w-full'>
      <FocusModal>
        <FocusModal.Header>
          <div className='medium:w-8/12 w-full px-8 flex justify-between'>
            <Button size='small' variant='ghost' type='button' onClick={closeAndReset}>
              <CrossIcon size={20} />
            </Button>
            <div className='gap-x-small flex'>
              <Button
                size='small'
                variant='secondary'
                type='button'
                disabled={!isDirty}
                onClick={onSubmit(false)}
              >
                Uložit jako koncept
              </Button>
              <Button
                size='small'
                variant='primary'
                type='button'
                disabled={!isDirty}
                onClick={onSubmit(true)}
              >
                Zveřejnit produkt
              </Button>
            </div>
          </div>
        </FocusModal.Header>
        <FocusModal.Main className='w-full no-scrollbar flex justify-center'>
          <div className='medium:w-7/12 large:w-6/12 small:w-4/5 max-w-[700px] my-16'>
            <Accordion defaultValue={['general']} type='multiple'>
              <Accordion.Item value={'general'} title='General information' required>
                <p className='inter-base-regular text-grey-50'>
                  Chcete-li začít prodávat, potřebujete pouze název a cenu.
                </p>
                <div className='mt-xlarge flex flex-col gap-y-xlarge'>
                  <GeneralForm form={nestedForm(form, 'general')} requireHandle={false} />
                  <DiscountableForm form={nestedForm(form, 'discounted')} />
                </div>
              </Accordion.Item>
              <Accordion.Item title='Organize' value='organize'>
                <p className='inter-base-regular text-grey-50'>
                  Chcete-li začít prodávat, potřebujete pouze název a cenu.
                </p>
                <div className='mt-xlarge flex flex-col gap-y-xlarge pb-xsmall'>
                  <div>
                    <h3 className='inter-base-semibold mb-base'>Uspořádat produkt</h3>
                    <OrganizeForm form={nestedForm(form, 'organize')} />
                    <FeatureToggle featureFlag='sales_channels'>
                      <div className='mt-xlarge'>
                        <AddSalesChannelsForm form={nestedForm(form, 'salesChannels')} />
                      </div>
                    </FeatureToggle>
                  </div>
                </div>
              </Accordion.Item>
              <Accordion.Item title='Variants' value='variants'>
                <p className='text-grey-50 inter-base-regular'>
                  Přidejte varianty tohoto produktu.
                  <br />
                  Nabídněte svým zákazníkům různé možnosti barev, formátů, velikostí, tvarů atd.
                </p>
                <div className='mt-large'>
                  <AddVariantsForm
                    form={nestedForm(form, 'variants')}
                    productCustoms={watchedCustoms}
                    productDimensions={watchedDimensions}
                  />
                </div>
              </Accordion.Item>
              <Accordion.Item title='Attributes' value='attributes'>
                <p className='inter-base-regular text-grey-50'>Používá se pro přepravní a celní účely.</p>
                <div className='my-xlarge'>
                  <h3 className='inter-base-semibold mb-base'>Rozměry</h3>
                  <DimensionsForm form={nestedForm(form, 'dimensions')} />
                </div>
                <div>
                  <h3 className='inter-base-semibold mb-base'>Celní úřad</h3>
                  <CustomsForm form={nestedForm(form, 'customs')} />
                </div>
              </Accordion.Item>
              <Accordion.Item title='Thumbnail' value='thumbnail'>
                <p className='inter-base-regular text-grey-50 mb-large'>
                  Slouží k reprezentaci vašeho produktu při placení, sdílení na sociálních sítích a podobně.
                </p>
                <ThumbnailForm form={nestedForm(form, 'thumbnail')} />
              </Accordion.Item>
              <Accordion.Item title='Media' value='media'>
                <p className='inter-base-regular text-grey-50 mb-large'>Přidejte k produktu obrázky.</p>
                <MediaForm form={nestedForm(form, 'media')} />
              </Accordion.Item>
            </Accordion>
          </div>
        </FocusModal.Main>
      </FocusModal>
    </form>
  );
};

const createPayload = (
  data: NewProductForm,
  publish = true,
  salesChannelsEnabled = false,
): AdminPostProductsReq => {
  const payload: AdminPostProductsReq = {
    title: data.general.title,
    subtitle: data.general.subtitle || undefined,
    material: data.general.material || undefined,
    handle: data.general.handle,
    discountable: data.discounted.value,
    is_giftcard: false,
    collection_id: data.organize.collection?.value,
    description: data.general.description || undefined,
    height: data.dimensions.height || undefined,
    length: data.dimensions.length || undefined,
    weight: data.dimensions.weight || undefined,
    width: data.dimensions.width || undefined,
    hs_code: data.customs.hs_code || undefined,
    mid_code: data.customs.mid_code || undefined,
    type: data.organize.type
      ? {
          value: data.organize.type.label,
          id: data.organize.type.value,
        }
      : undefined,
    tags: data.organize.tags
      ? data.organize.tags.map((t) => ({
          value: t,
        }))
      : undefined,
    origin_country: data.customs.origin_country?.value || undefined,
    options: data.variants.options.map((o) => ({
      title: o.title,
    })),
    variants: data.variants.entries.map((v) => ({
      title: v.general.title!,
      material: v.general.material || undefined,
      inventory_quantity: v.stock.inventory_quantity || 0,
      prices: getVariantPrices(v.prices),
      allow_backorder: v.stock.allow_backorder,
      sku: v.stock.sku || undefined,
      barcode: v.stock.barcode || undefined,
      options: v.options.map((o) => ({
        value: o.option?.value,
      })),
      ean: v.stock.ean || undefined,
      upc: v.stock.upc || undefined,
      height: v.dimensions.height || undefined,
      length: v.dimensions.length || undefined,
      weight: v.dimensions.weight || undefined,
      width: v.dimensions.width || undefined,
      hs_code: v.customs.hs_code || undefined,
      mid_code: v.customs.mid_code || undefined,
      origin_country: v.customs.origin_country?.value || undefined,
      manage_inventory: v.stock.manage_inventory,
    })),
    status: publish ? ProductStatus.PUBLISHED : ProductStatus.DRAFT,
  };

  if (salesChannelsEnabled) {
    payload.sales_channels = data.salesChannels.channels.map((c) => ({
      id: c.id,
    }));
  }

  return payload;
};

const createBlank = (): NewProductForm => {
  return {
    general: {
      title: '',
      material: null,
      subtitle: null,
      description: null,
      handle: '',
    },
    customs: {
      hs_code: null,
      mid_code: null,
      origin_country: null,
    },
    dimensions: {
      height: null,
      length: null,
      weight: null,
      width: null,
    },
    discounted: {
      value: true,
    },
    media: {
      images: [],
    },
    organize: {
      collection: null,
      tags: null,
      type: null,
    },
    salesChannels: {
      channels: [],
    },
    thumbnail: {
      images: [],
    },
    variants: {
      entries: [],
      options: [],
    },
  };
};

const getVariantPrices = (prices: PricesFormType) => {
  const priceArray = prices.prices
    .filter((price) => typeof price.amount === 'number')
    .map((price) => {
      return {
        amount: price.amount as number,
        currency_code: price.region_id ? undefined : price.currency_code,
        region_id: price.region_id || undefined,
      };
    });

  return priceArray;
};

export default NewProduct;
