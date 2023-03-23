import { Customer } from "@medusajs/medusa";
import { useAdminUpdateCustomer } from "medusa-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/fundamentals/button";
import LockIcon from "../../../components/fundamentals/icons/lock-icon";
import InputField from "../../../components/molecules/input";
import Modal from "../../../components/molecules/modal";
import useNotification from "../../../hooks/use-notification";
import { getErrorMessage } from "../../../utils/error-messages";
import { validateEmail } from "../../../utils/validate-email";

type EditCustomerModalProps = {
  customer: Customer;
  handleClose: () => void;
};

type EditCustomerFormType = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
};

const EditCustomerModal = ({ handleClose, customer }: EditCustomerModalProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty },
  } = useForm<EditCustomerFormType>({
    defaultValues: getDefaultValues(customer),
  });

  const notification = useNotification();

  const updateCustomer = useAdminUpdateCustomer(customer.id);

  const onSubmit = handleSubmit((data) => {
    updateCustomer.mutate(
      {
        first_name: data.first_name,
        last_name: data.last_name,
        // @ts-ignore
        phone: data.phone,
        email: data.email,
      },
      {
        onSuccess: () => {
          handleClose();
          notification("Úspěch", "Úspěšná aktualizace zákazníka", "success");
        },
        onError: (err) => {
          handleClose();
          notification("Chyba", getErrorMessage(err), "error");
        },
      },
    );
  });

  useEffect(() => {
    reset(getDefaultValues(customer));
  }, [customer]);

  return (
    <Modal handleClose={handleClose}>
      <Modal.Body>
        <Modal.Header handleClose={handleClose}>
          <span className='inter-xlarge-semibold'>Podrobnosti o zákaznících</span>
        </Modal.Header>
        <Modal.Content>
          <div className='inter-base-semibold text-grey-90 mb-4'>Obecné</div>
          <div className='w-full flex mb-4 space-x-2'>
            <InputField label='Jméno' {...register("first_name")} placeholder='Lebron' />
            <InputField label='Příjmení' {...register("last_name")} placeholder='James' />
          </div>
          <div className='inter-base-semibold text-grey-90 mb-4'>Kontakt</div>
          <div className='flex space-x-2'>
            <InputField
              label='E-mail'
              {...register("email", {
                validate: (value) => !!validateEmail(value),
                disabled: customer.has_account,
              })}
              prefix={customer.has_account && <LockIcon size={16} className='text-grey-50' />}
              disabled={customer.has_account}
            />
            <InputField label='Telefonní číslo' {...register("phone")} placeholder='+420 605 563 654' />
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className='w-full flex justify-end'>
            <Button variant='ghost' size='small' onClick={handleClose} className='mr-2'>
              Zrušit
            </Button>
            <Button
              loading={updateCustomer.isLoading}
              disabled={!isDirty || updateCustomer.isLoading}
              variant='primary'
              className='min-w-[100px]'
              size='small'
              onClick={onSubmit}
            >
              Uložit
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

const getDefaultValues = (customer: Customer): EditCustomerFormType => {
  return {
    first_name: customer.first_name,
    email: customer.email,
    last_name: customer.last_name,
    phone: customer.phone,
  };
};

export default EditCustomerModal;
