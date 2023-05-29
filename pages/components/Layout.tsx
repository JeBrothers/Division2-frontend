import { Menu } from "@headlessui/react";

import React, { useState } from "react";
import GearMenu from "./Layout/GearMenu";
import SkillMenu from "./Layout/SkillMenu";
import WeaponMenu from "./Layout/WeaponMenu";

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

                <Menu as={WeaponMenu} toggleMenu={toggleMenu} />

                <Menu as={GearMenu} toggleMenu={toggleMenu} />

                <Menu as={SkillMenu} toggleMenu={toggleMenu} />

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
