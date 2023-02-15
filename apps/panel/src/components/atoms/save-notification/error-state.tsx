import React, { useEffect } from "react";
import type { Toast } from "react-hot-toast";
import CrossIcon from "../../fundamentals/icons/cross-icon";
import XCircleIcon from "../../fundamentals/icons/x-circle-icon";
import ToasterContainer from "../toaster-container";

type SavingStateProps = {
  toast: Toast;
  title?: string;
  message?: string;
  onDismiss: () => void;
};

const ErrorState: React.FC<SavingStateProps> = ({
  toast,
  title = "Chyba",
  message = "Při pokusu o uložení změn došlo k chybě. Zkuste to prosím znovu.",
  onDismiss,
}) => {
  useEffect(() => {
    const life = setTimeout(() => {
      onDismiss();
    }, 2000);

    return () => {
      clearTimeout(life);
    };
  }, [toast]);

  return (
    <ToasterContainer visible={toast.visible} className='w-[448px]'>
      <div>
        <XCircleIcon size={20} className='text-rose-40' />
      </div>
      <div className='flex flex-col ml-small mr-base gap-y-2xsmall flex-grow'>
        <span className='inter-small-semibold'>{title}</span>
        <span className='inter-small-regular text-grey-50'>{message}</span>
      </div>
      <div>
        <button onClick={onDismiss}>
          <CrossIcon size={20} className='text-grey-40' />
        </button>
        <span className='sr-only'>Zavřít</span>
      </div>
    </ToasterContainer>
  );
};

export default ErrorState;
