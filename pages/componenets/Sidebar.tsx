import {
  faBagShopping,
  faCartShopping,
  faChartLine,
  faChartSimple,
  faClock,
  faGear,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

interface Props {}

const items = [
  { name: "Home", icon: faHouse },
  { name: "Profile", icon: faUser },
  { name: "Dashboard", icon: faChartSimple },
  { name: "Order", icon: faCartShopping },
  { name: "API Access", icon: faBagShopping },
  { name: "Sales Report", icon: faChartLine },
  { name: "Settings", icon: faGear },
  { name: "History", icon: faClock },
];

const Sidebar: React.FC<Props> = () => {
  return (
    <nav className="flex w-72 h-full bg-tl-main">
      <div className="w-full flex mx-auto px-6 py-8 border-r-2 border-tl-paper">
        <div className="w-full h-full flex items-start justify-start text-white text-xl">
          <ul className="w-full">
            <div className="w-full flex items-center justify-start">
              <Image src="/logo.png" alt="logo" height={65} width={70} />
              <span className="font-w">Torch Labs</span>
            </div>
            {items.map((item) => (
              <li key={item.name} className="p-2">
                <a
                  href={`/dashboard/${item.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
