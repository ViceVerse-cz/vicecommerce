import { Order } from "@medusajs/medusa";
import { useAdminRegion } from "medusa-react";
import React, { useContext, useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../../../../components/fundamentals/button";
import Input from "../../../../components/molecules/input";
import Modal from "../../../../components/molecules/modal";
import { LayeredModalContext } from "../../../../components/molecules/modal/layered-modal";
import Select from "../../../../components/molecules/select";
import { Option } from "../../../../types/shared";
import { AddressPayload } from "../claim/create";

type RMAEditAddressSubModalProps = {
  onSubmit: (address: AddressPayload) => void;
  address: AddressPayload;
  order: Omit<Order, "beforeInsert">;
};

type RMAEditAddressSubModalFormData = {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  province: string;
  postal_code: string;
  country_code: Option;
  phone: string;
};

const RMAEditAddressSubModal: React.FC<RMAEditAddressSubModalProps> = ({ onSubmit, address, order }) => {
  const { pop } = useContext(LayeredModalContext);

  const { register, handleSubmit, control, reset } = useForm<RMAEditAddressSubModalFormData>();

  const { region } = useAdminRegion(order.region_id);

  const countryOptions = useMemo(() => {
    return (
      region?.countries.map((country) => ({
        label: country.display_name,
        value: country.iso_2,
      })) || []
    );
  }, [region]);

  useEffect(() => {
    if (address && countryOptions) {
      const option = countryOptions.find((o) => o.value === address.country_code);

      reset({
        ...address,
        country_code: option,
      });
    }
  }, [countryOptions, address]);

  const submit = (data: RMAEditAddressSubModalFormData) => {
    onSubmit({
      ...data,
      country_code: data.country_code.value,
    });
    pop();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Modal.Content>
          <div className='h-full'>
            <h2 className='inter-base-semibold mb-4'>Vyhledávání dalších </h2>
          </div>
          <div>
            <div>
              <div>
                <span className='inter-base-semibold'>Obecné</span>

                <div className='grid grid-cols-2 gap-x-base gap-y-base'>
                  <Input
                    {...register("first_name", {
                      required: true,
                    })}
                    placeholder='Jméno'
                    label='Jméno'
                    required
                  />
                  <Input
                    {...register("last_name", {
                      required: true,
                    })}
                    placeholder='Příjmení'
                    label='Příjmení'
                    required
                  />
                  <Input {...register("phone")} placeholder='Telefon' label='Telefon ' />
                </div>
              </div>
              <div className='mt-8'>
                <span className='inter-base-semibold'>Dodací adresa</span>
                <div className='grid gap-y-base my-4'>
                  <Input
                    {...register("address_1", {
                      required: true,
                    })}
                    placeholder='Adresa 1'
                    label='Adresa 1'
                    required
                  />
                  <Input {...register("address_2")} placeholder='Adresa 2' label='Addresa 2' />
                </div>
                <div className='grid grid-cols-2 gap-x-base gap-y-base'>
                  <Input {...register("province")} placeholder='Provincie' label='Provincie' />
                  <Input
                    {...register("postal_code", {
                      required: true,
                    })}
                    placeholder='Poštovní směrovací číslo'
                    label='Poštovní směrovací číslo'
                    required
                  />
                  <Input
                    placeholder='Město'
                    label='Město'
                    {...register("city", {
                      required: true,
                    })}
                    required
                  />
                  <Controller
                    control={control}
                    name={"country_code"}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => {
                      return <Select {...field} label='Země' options={countryOptions} required />;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className='flex w-full justify-end gap-x-xsmall'>
            <Button variant='ghost' size='small' className='w-[112px]' onClick={() => pop()} type='button'>
              Zpět
            </Button>
            <Button variant='primary' className='w-[112px]' size='small' type='submit'>
              Přidat
            </Button>
          </div>
        </Modal.Footer>
      </form>
    </>
  );
};

export default RMAEditAddressSubModal;
