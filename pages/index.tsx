import type { NextPage } from "next";

import { useState } from "react";
import Dropdown from "./components/dropdown";
import Layout from "./components/Layout";
import Link from "next/link";
import "flowbite";

interface IView {
  weapon: boolean;
  gear: boolean;
  skill: boolean;
}

const Home: NextPage = () => {
  const [view, setView] = useState({
    weapon: false,
    gear: false,
    skill: false,
  });

  return (
    <>
      <div>
        <Layout>
          <nav className="bg-division-color">
            <div className="h-6 bg-black" />

            <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="/" className="flex items-center">
                <img
                  className="w-30 mr-5 h-10 p-2 "
                  src="/division2 logo.png"
                />
              </a>

              <div className="hidden w-full md:block md:w-auto ">
                <ul
                  className="flex  text-base font-semibold p-4 md:p-0 mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-division-color dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                  onClick={() => {
                    setView({
                      ...view,
                      weapon: !view.weapon,
                      gear: !view.gear,
                      skill: !view.skill,
                    });
                  }}
                >
                  <li>
                    <Link href="/">
                      <a
                        className="flex text-center items-center py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-division-orange md:p-0 md:dark:text-division-orange "
                        aria-current="page"
                      >
                        시뮬레이터
                      </a>
                    </Link>
                  </li>

                  <li>
                    <button className="flex flex-col items-center  w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-division-orange md:p-0 md:w-auto    ">
                      <div className="flex items-center">
                        무기정보
                        {view.weapon ? (
                          <svg
                            className="w-5 h-5 ml-1 rotate-180"
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
                        ) : (
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
                        )}
                      </div>
                    </button>
                    <div className=" font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                      <div> {view.weapon && <Dropdown type={"Weapon"} />} </div>
                    </div>
                  </li>

                  <li>
                    <button className="flex flex-col items-center  w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-division-orange md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                      <div className="flex items-center">
                        방어구 정보
                        {view.gear ? (
                          <svg
                            className="w-5 h-5 ml-1 rotate-180"
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
                        ) : (
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
                        )}
                      </div>
                    </button>
                    <div className="mt-2 flex flex-col z-auto  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      {" "}
                      {view.gear && <Dropdown type={"Gear"} />}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Layout>
      </div>
    </>
  );
};

export default Home;
