import type { AppProps } from "next/app";

import "@/styles/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/react-fontawesome";

import Sidebar from "./componenets/Sidebar";
import Navbar from "./componenets/Navbar";
import SidebarContent from "./componenets/SidebarContent";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex h-screen bg-tl-main">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex flex-col w-full h-fit bg-white overflow-x-hidden overflow-y-auto mb-14">
            <Navbar />
            <SidebarContent>
              <Component {...pageProps} />
            </SidebarContent>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
