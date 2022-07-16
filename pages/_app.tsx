import type { AppProps } from "next/app";

import "@/styles/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/react-fontawesome";

const App = ({ Component, pageProps }: AppProps) => {
  // Use the layout defined at the page level, if available

  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
