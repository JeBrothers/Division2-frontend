import type { NextPage } from "next";
import Layout from "../components/Layout";
import { cls } from "../../libs/utils";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "flowbite";
import { useForm } from "react-hook-form";

interface WeaponInfo {
  assultrifle?: string;
  rifle?: string;
  marksmanrifle?: string;
  submachinegun?: string;
  shotgun?: string;
  lightmachinegun?: string;
  pistol?: string;
}

const WeaponInfo: NextPage = () => {
  const [weaponInfo, setWeapoininfo] = useState(false);
  const { register, handleSubmit, reset } = useForm<WeaponInfo>();
  const [method, setMethod] = useState<
    | "assultrifle"
    | "rifle"
    | "marksmanrifle"
    | "submachinegun"
    | "shotgun"
    | "lightmachinegun"
    | "pistol"
  >("assultrifle");

  const onArClick = () => {
    reset();
    setMethod("assultrifle");
  };
  const onRifleClick = () => {
    reset();
    setMethod("rifle");
  };
  const onMarksManRifleClick = () => {
    reset();
    setMethod("marksmanrifle");
  };
  const onSmgClick = () => {
    reset();
    setMethod("submachinegun");
  };
  const onShotgunClick = () => {
    reset();
    setMethod("shotgun");
  };
  const onLmgClick = () => {
    reset();
    setMethod("lightmachinegun");
  };
  const onPistolClick = () => {
    reset();
    setMethod("pistol");
  };
  useEffect(() => {
    setWeapoininfo(true);
  }, []);

  return (
    <>
      {weaponInfo && (
        <Layout>
          <div className="">
            <Tabs>
              <TabList className=" mb-4 border-b border-gray-200 flex flex-wrap text-sm font-medium text-center justify-center">
                <Tab className="mr-2" role="presentation">
                  <button
                    className={cls(
                      "inline-block p-4 border-b-2 rounded-t-lg",
                      method === "assultrifle"
                        ? "border-division-orange text-division-orange"
                        : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                    )}
                    onClick={onArClick}
                  >
                    돌격소총
                  </button>
                </Tab>
                <Tab className="mr-2" role="presentation">
                  <button
                    className={cls(
                      "inline-block p-4 border-b-2 rounded-t-lg",
                      method === "rifle"
                        ? "border-division-orange text-division-orange"
                        : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                    )}
                    onClick={onRifleClick}
                  >
                    소총
                  </button>
                </Tab>
                <Tab className="mr-2" role="presentation">
                  <button
                    className={cls(
                      "inline-block p-4 border-b-2 rounded-t-lg",
                      method === "marksmanrifle"
                        ? "border-division-orange text-division-orange"
                        : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                    )}
                    onClick={onMarksManRifleClick}
                  >
                    지정사수소총
                  </button>
                </Tab>
                <Tab className="mr-2" role="presentation">
                  <button
                    className={cls(
                      "inline-block p-4 border-b-2 rounded-t-lg",
                      method === "submachinegun"
                        ? "border-division-orange text-division-orange"
                        : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                    )}
                    onClick={onSmgClick}
                  >
                    기관단총
                  </button>
                </Tab>
                <Tab className="mr-2" role="presentation">
                  <button
                    className={cls(
                      "inline-block p-4 border-b-2 rounded-t-lg",
                      method === "shotgun"
                        ? "border-division-orange text-division-orange"
                        : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                    )}
                    onClick={onShotgunClick}
                  >
                    샷건
                  </button>
                </Tab>
                <Tab className="mr-2" role="presentation">
                  <button
                    className={cls(
                      "inline-block p-4 border-b-2 rounded-t-lg",
                      method === "pistol"
                        ? "border-division-orange text-division-orange"
                        : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                    )}
                    onClick={onPistolClick}
                  >
                    권총
                  </button>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="flex relative overflow-x-auto justify-center">
                  <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                    <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-6">
                          총기 종류
                        </th>
                        <th scope="col" className="px-6 py-6">
                          총기명
                        </th>
                        <th scope="col" className="px-6 py-6">
                          RPM
                        </th>
                        <th scope="col" className="px-6 py-6">
                          기본 탄창
                        </th>
                        <th scope="col" className="px-6 py-6">
                          최대 탄창
                        </th>
                        <th scope="col" className="px-6 py-6">
                          재장전 시간(빈 탄창)
                        </th>
                        <th scope="col" className="px-6 py-6 ">
                          DPS
                        </th>

                        <td className="px-6 py-6 bg-division-color text-division-dark whitespace-nowrap">
                          조준기
                        </td>
                        <td
                          scope="col"
                          className="  px-6 py-6 bg-division-color text-division-dark whitespace-nowrap"
                        >
                          총구
                        </td>
                        <td
                          scope="col"
                          className=" px-6 py-6  bg-division-color text-division-dark whitespace-nowrap"
                        >
                          총열
                        </td>
                        <td
                          scope="col"
                          className=" px-6 py-6 bg-division-color text-division-dark whitespace-nowrap"
                        >
                          탄창
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                        <th
                          rowSpan={2}
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                        >
                          ACR
                        </th>
                        <td className="px-6 py-4 border-x border-gray-200">
                          ACR
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          650
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          30
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          50
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          2.3
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          575510
                        </td>
                        <td className="px-6 py-4 text-center border-x border-gray-200">
                          O
                        </td>
                        <td className="px-6 py-4 text-center border-x border-gray-200">
                          O
                        </td>
                        <td className="px-6 py-4 text-center border-x border-gray-200">
                          O
                        </td>
                        <td className="px-6 py-4 text-center border-x border-gray-200">
                          O
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                        <td className="px-6 py-4 border-x border-gray-200">
                          ACR-E
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          650
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          30
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          50
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          2.3
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200">
                          575510
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200 text-center">
                          O
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200 text-center">
                          O
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200 text-center">
                          O
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200 text-center">
                          O
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800 border-b">
                        <th
                          rowSpan={2}
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                        >
                          AK-47
                        </th>
                        <td className="px-6 py-4 border-x border-gray-200 ">
                          AK-M
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200 ">
                          600
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200 ">
                          30
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200 ">
                          50
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200 ">
                          2.5
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200 ">
                          620560
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200  text-center">
                          O
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200  text-center">
                          X
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200  text-center">
                          O
                        </td>
                        <td className="px-6 py-4 border-x border-gray-200  text-center">
                          O
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel>
                <div>Tab 2</div>
              </TabPanel>
            </Tabs>
          </div>
        </Layout>
      )}
    </>
  );
};

export default WeaponInfo;
