import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import GearMenu from "./Menus/GearMenu";
import WeaponMenu from "./Menus/WeaponMenu";

interface Layout {
  active?: string;
}

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(() => !isMenuOpen);
  };

  React.useEffect(() => {
    console.log("isMenuOpen", isMenuOpen);
  }, []);

  return (
    <div className="relative mb-28">
      <div className="fixed top-0 left-0 right-0 z-10 ">
        <nav className="bg-division-color ">
          <div className="h-6 bg-black" />

          <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
              <a href="/">
                <img
                  className="w-30 mr-5 h-10 p-2 "
                  src="/division2 logo.png"
                />
              </a>
            </div>

            <div>
              <div className="flex  text-base font-semibold p-4 md:p-0 mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-division-color dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-division-orange md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                      <a href="/">시뮬레이터</a>
                    </Menu.Button>
                  </div>
                </Menu>

                <WeaponMenu toggleMenu={toggleMenu} />

                <GearMenu toggleMenu={toggleMenu} />

                <Menu
                  as="div"
                  className=" z-10 relative inline-block text-left"
                >
                  <div>
                    <Menu.Button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-division-orange md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                      스킬
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="flex flex-col absolute -translate-x-12 mt-2 w-48  items-left origin-top-center divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-2 space-y-1 w-auto ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-division-dark text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              <span>스킬 리스트</span>
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-division-dark text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              <span>스킬 정보</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-division-orange md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                      <a href="/">속성정보</a>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
