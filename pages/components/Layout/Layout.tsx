import React, { useState } from "react";
import Logo from "./Logo";
import Menus from "./Menus"; // Menus 컴포넌트 import

interface LayoutProps {
  active?: string;
}

export default function Layout(props: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  React.useEffect(() => {
    console.log("isMenuOpen", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className="relative mb-28">
      <div className="fixed top-0 left-0 right-0 z-10">
        <nav className="bg-division-color">
          <div className="h-6 bg-black" />

          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Logo />

            <div>
              <div className="flex text-base font-semibold p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-division-color dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Menus menu="Simulator" toggleMenu={toggleMenu} />

                <Menus menu="WeaponMenu" toggleMenu={toggleMenu} />

                <Menus menu="GearMenu" toggleMenu={toggleMenu} />

                <Menus menu="Skill" toggleMenu={toggleMenu} />

                <Menus menu="Attribute" toggleMenu={toggleMenu} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
