import type { AppProps } from "next/app";

import Sidebar from "../componenets/Sidebar";
import Navbar from "../componenets/Navbar";
import SidebarContent from "../componenets/SidebarContent";
import Router from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  // const { user, error, isLoading } = useUser();

  // console.log(user, error, isLoading);

  // if (isLoading || error) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   Router.push("/api/auth/login");
  // }

  return (
    <div className="flex h-screen bg-tl-main">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex flex-col w-full h-fit bg-white overflow-x-hidden overflow-y-auto mb-14">
            <Navbar />
            <SidebarContent>{children}</SidebarContent>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
