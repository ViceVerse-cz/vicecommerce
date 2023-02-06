import { User } from '@medusajs/medusa';
import { useAdminGetSession, useAdminUpdateUser } from 'medusa-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/fundamentals/button';
import InputField from '../../../../components/molecules/input';
import Modal from '../../../../components/molecules/modal';
import useNotification from '../../../../hooks/use-notification';

type Props = {
  user: Omit<User, 'password_hash'>;
  open: boolean;
  onClose: () => void;
};

type EditInformationFormType = {
  first_name: string | null;
  last_name: string | null;
};

const EditUserInformationModal = ({ user, open, onClose }: Props) => {
  const { mutate, isLoading: isSubmitting } = useAdminUpdateUser(user.id);
  const { refetch } = useAdminGetSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditInformationFormType>({
    defaultValues: getDefaultValues(user),
  });

  useEffect(() => {
    reset(getDefaultValues(user));
  }, [open, user]);

  const notification = useNotification();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        notification('Úspěch', 'Vaše informace byly úspěšně aktualizovány', 'success');
        refetch();
        onClose();
      },
      onError: () => {
        notification('Chyba', 'Nepodarilo se aktualizovat informace!', 'error');
      },
    });
  });

  return (
    <Modal handleClose={onClose} open={open} isLargeModal={false}>
      <Modal.Header handleClose={onClose}>
        <h1 className='inter-xlarge-semibold'>Upravit informace</h1>
      </Modal.Header>
      <Modal.Body>
        <Modal.Content>
          <div className='flex flex-col gap-y-base'>
            <div className='grid grid-cols-2 gap-x-base'>
              <InputField {...register('first_name')} errors={errors} label='Křestní jméno' />
              <InputField {...register('last_name')} errors={errors} label='Příjmení' />
            </div>
          </div>
        </Modal.Content>
        <Modal.Footer className='border-t border-grey-20 pt-base'>
          <div className='flex items-center justify-end gap-x-xsmall w-full'>
            <Button variant='secondary' size='small' onClick={onClose}>
              Zrušit
            </Button>
            <Button
              variant='primary'
              size='small'
              loading={isSubmitting}
              disabled={isSubmitting}
              onClick={onSubmit}
            >
              Odeslání a uzavření
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

const getDefaultValues = (user: Omit<User, 'password_hash'>) => {
  return {
    first_name: user.first_name,
    last_name: user.last_name,
  };
};

export default EditUserInformationModal;
