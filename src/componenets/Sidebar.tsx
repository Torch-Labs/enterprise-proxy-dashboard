import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export type SidebarItems = {
  name: string;
  icon: IconDefinition;
};

interface Props {
  sidebarItems: SidebarItems[];
}

const Sidebar: React.FC<Props> = ({ sidebarItems }) => {
  const router = useRouter();

  return (
    <nav className="flex w-64 h-full bg-tl-main">
      <div className="w-full flex mx-auto px-6 py-2 border-r-2 border-tl-paper">
        <div className="w-full h-full flex items-start justify-start text-white text-xl">
          <ul className="w-full">
            <div className="w-full flex items-center justify-start mb-5">
              <Image src="/logo.png" alt="logo" height={65} width={70} />
              <div className="font-bold">Torch</div>&nbsp;Labs
            </div>
            {sidebarItems.map((item) => {
              const route = `/dashboard/${item.name
                .toLowerCase()
                .replaceAll(" ", "-")}`;
              const isActive = router.pathname === route;
              const baseStyle =
                "flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white font-bold";
              const inactiveStyle = `${baseStyle} hover:bg-tl-secondary-100 hover:text-black`;
              const activeStyle = `${baseStyle} bg-tl-secondary bg-tl-secondary-700`;
              return (
                <li key={item.name} className="p-2">
                  <a
                    href={route}
                    className={isActive ? activeStyle : inactiveStyle}
                  >
                    <FontAwesomeIcon
                      className={isActive ? "text-black" : ""}
                      icon={item.icon}
                    />
                    <span className={`ml-3 ${isActive ? "text-black" : ""}`}>
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
