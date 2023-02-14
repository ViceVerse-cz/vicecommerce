import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import React, { ErrorInfo } from "react";
import { analytics, getAnalyticsConfig } from "../../../services/analytics";
import Button from "../../fundamentals/button";

type State = {
  hasError: boolean;
  status?: number;
  message?: string;
};

type Props = {
  children?: React.ReactNode;
};

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    const state: State = {
      hasError: true,
      status: undefined,
      message: error.message,
    };

    if (isNetworkError(error)) {
      state.status = error.response?.status;
    }

    return state;
  }

  public async componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const shouldTrack = await shouldTrackEvent(error);

    if (!shouldTrack) {
      return;
    }

    const properties = getTrackingInfo(error, errorInfo);
    analytics.track("error", properties);
  }

  public dismissError = () => {
    history.back();
    this.setState({ hasError: false });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className='h-screen flex items-center justify-center px-large'>
          <div className='max-w-[600px]'>
            <div>
              <div>
                {this.state.status && (
                  <p className='text-grey-60 opacity-75 inter-small-semibold'>{this.state.status}</p>
                )}
                <h1 className='inter-xlarge-semibold mb-xsmall'>{errorMessage(this.state.status)}</h1>
                <p className='inter-base-regular text-grey-50'>{errorDescription(this.state.status)}</p>
              </div>

              <div className='w-full flex items-center  mt-xlarge'>
                <Button size='small' variant='primary' onClick={this.dismissError}>
                  Zpět na ovládací panel
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const isNetworkError = (error: Error): error is AxiosError => {
  return error["response"] !== undefined && error["response"] !== null;
};

const shouldTrackEvent = async (error: Error) => {
  // Don't track 404s
  if (isNetworkError(error) && error.response?.status === 404) {
    return false;
  }

  const res = await getAnalyticsConfig().catch(() => undefined);

  // Don't track if we have no config to ensure we have permission
  if (!res) {
    return false;
  }

  // Don't track if user has opted out from sharing usage insights
  if (res.analytics_config.opt_out) {
    return false;
  }

  return true;
};

const errorMessage = (status?: number) => {
  const defaultMessage = "Došlo k neznámé chybě";

  if (!status) {
    return defaultMessage;
  }

  const message = {
    400: "Špatná žádost",
    401: "Nejste přihlášeni",
    403: "K provedení této akce nemáte oprávnění",
    404: "Stránka nebyla nalezena",
    500: "Došlo k neznámé chybě serveru",
    503: "Server je momentálně nedostupný",
  }[status];

  return message || defaultMessage;
};

const errorDescription = (status?: number) => {
  const defaultDescription =
    "Došlo k chybě s blíže nespecifikovanou příčinou, která je pravděpodobně způsobena technickým problémem na naší straně. Zkuste prosím stránku obnovit. Pokud problém přetrvává, obraťte se na správce.";

  if (!status) {
    return defaultDescription;
  }

  const description = {
    400: "Požadavek byl chybně formulován, opravte jej a zkuste to prosím znovu.",
    401: "Nejste přihlášeni, pro pokračování se prosím přihlaste.",
    403: "K provedení této akce nemáte oprávnění, pokud se domníváte, že se jedná o chybu, obraťte se na správce.",
    404: "Požadovaná stránka nebyla nalezena, zkontrolujte prosím adresu URL a zkuste to znovu.",
    500: "Server nebyl schopen zpracovat váš požadavek, což je pravděpodobně způsobeno technickým problémem na naší straně. Zkuste to prosím znovu. Pokud se problém opakuje, obraťte se na správce.",
    503: "Server je dočasně nedostupný a váš požadavek nemohl být zpracován. Zkuste to prosím později. Pokud se problém opakuje, obraťte se na správce.",
  }[status];

  return description || defaultDescription;
};

const getTrackingInfo = (error: Error, errorInfo: ErrorInfo) => {
  return {
    error: error.message,
    componentStack: errorInfo.componentStack,
  };
};

export default ErrorBoundary;
