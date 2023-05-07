import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

interface Layout {
  active?: string;
}

export default function Layout() {
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
                          <Menu.Item>
                            {({ active }) => (
                              <Menu.Button
                                className={`${
                                  active
                                    ? "bg-division-dark text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <span>무기 정보</span>
                              </Menu.Button>
                            )}
                          </Menu.Item>
                        </Link>

                        <Link href="/weapon/weaponaccessory">
                          <Menu.Item>
                            {({ active }) => (
                              <Menu.Button
                                className={`${
                                  active
                                    ? "bg-division-dark text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <span>무기 부착물</span>
                              </Menu.Button>
                            )}
                          </Menu.Item>
                        </Link>

                        <Link href="/weapon/weapontalent">
                          <Menu.Item>
                            {({ active }) => (
                              <Menu.Button
                                className={`${
                                  active
                                    ? "bg-division-dark text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                무기 특수 효과
                              </Menu.Button>
                            )}
                          </Menu.Item>
                        </Link>
                      </div>

                      <div className="px-1 py-2 space-y-1 w-auto ">
                        <Link href="/weapon/wnamedexotic">
                          <Menu.Item>
                            {({ active }) => (
                              <Menu.Button
                                className={`${
                                  active
                                    ? "bg-division-dark text-division-orange"
                                    : "text-division-orange"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                네임드 / 특급 아이템
                              </Menu.Button>
                            )}
                          </Menu.Item>
                        </Link>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-division-orange md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                      방어구 정보
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
                        <Menu.Item>
                          {({ active }) => (
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-division-dark text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              브랜드 방어구
                            </Menu.Button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-division-dark text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              기어 세트 방어구
                            </Menu.Button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-division-dark text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              방어구 특수 효과
                            </Menu.Button>
                          )}
                        </Menu.Item>
                      </div>

                      <div className="px-1 py-2 space-y-1 w-auto ">
                        <Menu.Item>
                          {({ active }) => (
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-division-dark text-division-orange"
                                  : "text-division-orange"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              네임드 / 특급 아이템
                            </Menu.Button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

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
