import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="flex justify-between items-start bg-tl-main p-4">
      <div className="flex w-3/4 h-10 items-center justify-start p-6">
        <input
          type="text"
          className="bg-tl-paper align-middle text-white rounded-md border-none	w-full"
          placeholder="Search"
          style={{
            fontFamily: "Arial, FontAwesome",
          }}
        />
      </div>

      <div className="flex gap-5 justify-center">
        <div className="flex-col inline-bloc align-middle text-white">
          <FontAwesomeIcon icon={faBell} size="lg" className="mt-3 relative" />
        </div>
        <button
          type="button"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          className="relative w-12 h-12"
        >
          <Image
            className="rounded-full border border-gray-100 shadow-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU"
            alt="user photo"
            layout="fill"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
