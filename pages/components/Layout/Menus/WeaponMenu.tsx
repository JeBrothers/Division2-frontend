import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";

interface WeaponMenuProps {
  toggleMenu: any;
}

function WeaponMenu(props: WeaponMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-division-orange md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
          무기 정보
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
        <Menu.Items className="z-10 flex flex-col absolute -translate-x-12 mt-2 w-48  items-left origin-top-center divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-2 space-y-1 w-auto ">
            <Link href="/weapon/weaponinfo">
              <div onClick={props.toggleMenu}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-division-dark text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span>무기 정보</span>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Link>

            <Link href="/weapon/weaponaccessory">
              <div onClick={props.toggleMenu}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-division-dark text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span>무기 부착물</span>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Link>

            <Link href="/weapon/weapontalent">
              <div onClick={props.toggleMenu}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-division-dark text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      무기 특수 효과
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Link>
          </div>

          <div className="px-1 py-2 space-y-1 w-auto ">
            <Link href="/weapon/weaponNamed">
              <div onClick={props.toggleMenu}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-division-dark text-yellow-300"
                          : "text-yellow-300"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      네임드 무기
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Link>

            <Link href="/weapon/weaponExotic">
              <div onClick={props.toggleMenu}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-division-dark text-division-orange"
                          : "text-division-orange"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      특급 무기
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default React.memo(WeaponMenu);
