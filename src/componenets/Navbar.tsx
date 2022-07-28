import React, { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

const Navbar = () => {
  const [profileCliked, setProfileClicked] = React.useState(false);
  const { user } = useUser();

  return (
    <header className="flex justify-between items-start bg-tl-main p-2">
      <div className="flex w-3/4 h-10 items-center justify-start pl-5 pt-6">
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
          onClick={() => setProfileClicked((p) => !p)}
        >
          <Image
            className="rounded-full border border-gray-100 shadow-sm"
            src={
              user?.picture ??
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU"
            }
            alt="user photo"
            layout="fill"
          />
        </button>
        {profileCliked && (
          <div className="absolute right-0 w-full mt-14 mr-4 origin-top-right rounded-md shadow-lg md:w-48">
            <div className="py-2 bg-tl-main text-white text-sm rounded-sm border border-tl-paper shadow-sm">
              <Link
                className="block px-4 py-2 mt-2 text-sm bg-tl-main md:mt-0 focus:text-gray-900 hover:bg-tl-paper focus:bg-gray-200 focus:outline-none focus:shadow-outline w-full"
                href="/api/auth/logout"
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
