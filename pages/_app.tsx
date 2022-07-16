import type { AppProps } from "next/app";

import "@/styles/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/react-fontawesome";
import { UserProvider } from "@auth0/nextjs-auth0";

const App = ({ Component, pageProps }: AppProps) => {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />, UserProvider);
};

export default App;
