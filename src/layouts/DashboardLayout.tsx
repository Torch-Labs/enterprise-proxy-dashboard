import Sidebar, { SidebarItems } from "../componenets/Sidebar";
import Navbar from "../componenets/Navbar";
import {
  faBagShopping,
  faCartShopping,
  faChartLine,
  faChartSimple,
  faClock,
  faGear,
  faHouse,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Loader from "../componenets/common/Loader";
import SidebarContent from "../componenets/SidebarContent";
import { useUser } from "@auth0/nextjs-auth0";

type UserRole = {
  name: string;
  description: string;
  id: string;
};

interface Props {
  children: React.ReactNode;
  items?: SidebarItems[];
}

const defaultSidebarItems = [
  { name: "Home", icon: faHouse },
  { name: "Profile", icon: faUser },
  { name: "Dashboard", icon: faChartSimple },
  { name: "Order", icon: faCartShopping },
  { name: "API Access", icon: faBagShopping },
  { name: "Sales Report", icon: faChartLine },
  { name: "Settings", icon: faGear },
  { name: "History", icon: faClock },
];

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const [sidebarItems, setSidebarItems] =
    useState<SidebarItems[]>(defaultSidebarItems);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const hasRole = (
        user["https://torchlabs.xyz/roles"] as string[]
      ).includes("ADMIN");
      if (hasRole && !sidebarItems.some((item) => item.name === "Admin")) {
        setSidebarItems((p) => [...p, { name: "Admin", icon: faLock }]);
      }
    }
  }, [user]);

  return (
    <div className="flex h-screen bg-tl-main">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex h-full">
          <Sidebar sidebarItems={sidebarItems} />
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
