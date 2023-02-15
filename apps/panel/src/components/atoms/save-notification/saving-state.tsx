import React from "react";
import type { Toast } from "react-hot-toast";
import Spinner from "../spinner";
import ToasterContainer from "../toaster-container";

type SavingStateProps = {
  toast: Toast;
  title?: string;
  message?: string;
};

const SavingState: React.FC<SavingStateProps> = ({
  toast,
  title = "Ukládání změn",
  message = "Vydržte, může to chvíli trvat.",
}) => {
  return (
    <ToasterContainer visible={toast.visible} className='w-[448px]'>
      <div>
        <Spinner variant='secondary' size='large' />
      </div>
      <div className='flex flex-col ml-small mr-base gap-y-2xsmall flex-grow'>
        <span className='inter-small-semibold'>{title}</span>
        <span className='inter-small-regular text-grey-50'>{message}</span>
      </div>
    </ToasterContainer>
  );
};

export default SavingState;
