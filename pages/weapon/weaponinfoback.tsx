import type { NextPage } from "next";
import Layout from "../components/oldLayout";
import { cls } from "../../libs/utils";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "flowbite";

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

  const [weaponInfo, setWeapoininfo] = useState(false);

  useEffect(() => {
    setWeapoininfo(true);
  }, []);

  return (
    <>
      {weaponInfo && (
        <Layout>
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  id="ar"
                  data-tabs-target="#ar"
                  type="button"
                  role="tab"
                  aria-controls="ar"
                  aria-selected="false"
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
              </li>
              <li className="mr-2" role="presentation">
                <button
                  id="rifle"
                  data-tabs-target="rifle"
                  type="button"
                  role="tab"
                  aria-controls="rifle"
                  aria-selected="false"
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
              </li>
              <li className="mr-2" role="presentation">
                <button
                  id="mmr"
                  data-tabs-target="#mmr"
                  type="button"
                  role="tab"
                  aria-controls="mmr"
                  aria-selected="false"
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
              </li>
              <li role="presentation">
                <button
                  id="smg"
                  data-tabs-target="#smg"
                  type="button"
                  role="tab"
                  aria-controls="smg"
                  aria-selected="false"
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
              </li>
              <li role="presentation">
                <button
                  id="sg"
                  data-tabs-target="#sg"
                  type="button"
                  role="tab"
                  aria-controls="sg"
                  aria-selected="false"
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
              </li>
              <li role="presentation">
                <button
                  id="pistol"
                  data-tabs-target="#pistol"
                  type="button"
                  role="tab"
                  aria-controls="pistol"
                  aria-selected="false"
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
              </li>
            </ul>
          </div>

          <div id="myTabContent">
            <div
              id="ar"
              role="tabpanel"
              aria-labelledby="ar-tab"
              className="hidden"
            >
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
                      <td className="px-6 py-4 border-x border-gray-200">30</td>
                      <td className="px-6 py-4 border-x border-gray-200">50</td>
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
                      <td className="px-6 py-4 border-x border-gray-200">30</td>
                      <td className="px-6 py-4 border-x border-gray-200">50</td>
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
            </div>

            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="rifle"
              role="tabpanel"
              aria-labelledby="rifle"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{""}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>

            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          </div>

          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Dashboard
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Settings
                </button>
              </li>
              <li role="presentation">
                <button
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Contacts
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classNamees to control
                the content visibility and styling.
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classNamees to control
                the content visibility and styling.
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classNamees to control
                the content visibility and styling.
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default WeaponInfo;
