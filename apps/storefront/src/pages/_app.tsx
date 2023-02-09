import { MEDUSA_BACKEND_URL } from "@lib/config";
import { AccountProvider } from "@lib/context/account-context";
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context";
import { MobileMenuProvider } from "@lib/context/mobile-menu-context";
import { StoreProvider } from "@lib/context/store-context";
import { Hydrate, QueryClient } from "@tanstack/react-query";
import { CartProvider, MedusaProvider } from "medusa-react";
import "styles/globals.css";
import { AppPropsWithLayout } from "types/global";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppPropsWithLayout<{ dehydratedState?: unknown }>) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <MedusaProvider
        baseUrl={MEDUSA_BACKEND_URL}
        queryClientProviderProps={{
          client: queryClient,
          contextSharing: true,
        }}
      >
        <Hydrate state={pageProps.dehydratedState}>
          <CartDropdownProvider>
            <MobileMenuProvider>
              <CartProvider>
                <StoreProvider>
                  <AccountProvider>{getLayout(<Component {...pageProps} />)}</AccountProvider>
                </StoreProvider>
              </CartProvider>
            </MobileMenuProvider>
          </CartDropdownProvider>
        </Hydrate>
      </MedusaProvider>
    </QueryClientProvider>
  );
}

export default App;
