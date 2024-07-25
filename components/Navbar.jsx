"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import profileDefault from "@/assets/images/profile.png";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-400 border-b border-teal-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/*Logo*/}
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />
              <span className="hidden md:block text-white text-2xl font-extrabold ml-2">
                giftaway
              </span>
            </Link>

            {/*Hidden below medium screens */}
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                <Link
                  className={`${
                    pathname === "/" ? "bg-teal-700" : " "
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold`}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className={`${
                    pathname === "/wishlist" ? "bg-teal-700" : " "
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold`}
                  href="/wishlist"
                >
                  Wishlists
                </Link>
                <Link
                  className={`${
                    pathname === "/friends" ? "bg-teal-700" : " "
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold`}
                  href="/"
                >
                  Find friends
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <Link href="/messages" className="relative group">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </Link>
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={profileDefault}
                    alt=""
                    width={40}
                    height={40}
                  />
                </button>
              </div>

              {/*Profile dropdown */}
              {isProfileMenuOpen && (
                <div
                  id="user-menu"
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                    }}
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="/properties/saved"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                    }}
                  >
                    Saved Wishlists
                  </Link>
                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      //signOut();
                    }}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
