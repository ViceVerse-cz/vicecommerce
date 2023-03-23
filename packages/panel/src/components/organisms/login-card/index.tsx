import { useAdminLogin } from "medusa-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../fundamentals/button";
import SigninInput from "../../molecules/input-signin";

type FormValues = {
  email: string;
  password: string;
};

type LoginCardProps = {
  toResetPassword: () => void;
};

const LoginCard: React.FC<LoginCardProps> = ({ toResetPassword }) => {
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const navigate = useNavigate();
  const login = useAdminLogin();

  const onSubmit = (values: FormValues) => {
    login.mutate(values, {
      onSuccess: () => {
        navigate("/a/orders");
      },
      onError: () => {
        setIsInvalidLogin(true);
        reset();
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col items-center'>
        <span className='inter-2xlarge-semibold mt-4 text-grey-90'>Vítejte zpět!</span>
        <span className='inter-base-regular text-grey-50 mt-2'>Je skvělé vás vidět 👋🏼</span>
        <span className='inter-base-regular text-grey-50 mb-xlarge'>Přihlaste se ke svému účtu níže</span>
        <SigninInput placeholder='Email...' {...register("email", { required: true })} autoComplete='email' />
        <SigninInput
          placeholder='Heslo...'
          type={"password"}
          {...register("password", { required: true })}
          autoComplete='current-password'
        />
        {isInvalidLogin && (
          <span className='text-rose-50 w-full mt-2 inter-small-regular'>Tyto údaje nejsou správné!</span>
        )}
        <Button
          className='rounded-rounded mt-4 w-[320px] inter-base-regular'
          variant='primary'
          size='large'
          type='submit'
          loading={login.isLoading}
        >
          Pokračovat
        </Button>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <Old functions> */}
        <span className='inter-small-regular text-grey-50 mt-8 cursor-pointer' onClick={toResetPassword}>
          Změnit heslo
        </span>
      </div>
    </form>
  );
};

export default LoginCard;
