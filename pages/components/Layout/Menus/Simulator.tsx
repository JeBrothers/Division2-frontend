import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";

interface GearMenuProps {
  toggleMenu: any;
}

function GearMenu(props: GearMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-division-orange md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
          <a href="/">시뮬레이터</a>
        </button>
      </div>
    </Menu>
  );
}

export default React.memo(GearMenu);
