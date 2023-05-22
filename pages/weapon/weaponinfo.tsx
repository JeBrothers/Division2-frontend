import type { NextPage } from "next";

import { cls } from "../../libs/utils";
import { useEffect, useMemo, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useForm } from "react-hook-form";
import WeaponTypeIcon from "../components/WeaponTypeIcon";

import WeaponJsonDataDisplay from "./weapontable/artable";
import ArTable from "./weapontable/artable";
import RifleTable from "./weapontable/rifletable";
import MmrTable from "./weapontable/mmrtable";

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
  const { reset } = useForm<WeaponInfo>();
  const [type, setType] = useState<
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
    setType("assultrifle");
  };
  const onRifleClick = () => {
    reset();
    setType("rifle");
  };
  const onMarksManRifleClick = () => {
    reset();
    setType("marksmanrifle");
  };
  const onSmgClick = () => {
    reset();
    setType("submachinegun");
  };
  const onShotgunClick = () => {
    reset();
    setType("shotgun");
  };
  const onLmgClick = () => {
    reset();
    setType("lightmachinegun");
  };
  const onPistolClick = () => {
    reset();
    setType("pistol");
  };
  useEffect(() => {
    setWeapoininfo(true);
  }, []);

  return (
    <>
      {weaponInfo && (
        <div className="">
          <Tabs>
            <TabList className=" mb-4 border-b border-gray-200 flex flex-wrap text-sm font-medium text-center justify-center">
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "assultrifle"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onArClick}
                >
                  <WeaponTypeIcon
                    active={type}
                    type="assultrifle"
                  ></WeaponTypeIcon>
                  <span className="ml-2 text-base ">돌격소총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "rifle"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onRifleClick}
                >
                  <WeaponTypeIcon active={type} type="rifle"></WeaponTypeIcon>
                  <span className="ml-2 text-base ">소총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "marksmanrifle"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onMarksManRifleClick}
                >
                  <WeaponTypeIcon
                    active={type}
                    type="marksmanrifle"
                  ></WeaponTypeIcon>
                  <span className="ml-2 text-base ">지정사수소총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "lightmachinegun"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onLmgClick}
                >
                  <WeaponTypeIcon
                    active={type}
                    type="lightmachinegun"
                  ></WeaponTypeIcon>
                  <span className="ml-2 text-base ">경기관총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "submachinegun"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onSmgClick}
                >
                  <WeaponTypeIcon
                    active={type}
                    type="submachinegun"
                  ></WeaponTypeIcon>
                  <span className="ml-2 text-base ">기관단총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "shotgun"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onShotgunClick}
                >
                  <WeaponTypeIcon active={type} type="shotgun"></WeaponTypeIcon>
                  <span className="ml-2 text-base ">샷건</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "pistol"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onPistolClick}
                >
                  <WeaponTypeIcon active={type} type="pistol"></WeaponTypeIcon>
                  <span className="ml-2 text-base ">권총</span>
                </button>
              </Tab>
            </TabList>

            {/* 돌격소총 */}
            <TabPanel>
              <ArTable />
            </TabPanel>

            {/* 소총 */}
            <TabPanel>
              <RifleTable />
            </TabPanel>

            {/* 지정사수소총 */}
            <TabPanel>
              <MmrTable />
            </TabPanel>

            {/* 경기관총 */}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center">
                <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6  py-6">
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
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        Vector SBR .45 ACP
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        칠흑의 겨울
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        1200
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">25</td>
                      <td className="px-6 py-4 border-x border-gray-200">45</td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        1.9
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        808600
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

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        P90
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        촉새
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        700
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        50
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        1.5
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        5499112
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/* 기관단총 */}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center">
                <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6  py-6">
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
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        Vector SBR .45 ACP
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        칠흑의 겨울
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        1200
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">25</td>
                      <td className="px-6 py-4 border-x border-gray-200">45</td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        1.9
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        808600
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

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        P90
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        촉새
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        700
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        50
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        1.5
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        5499112
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/* 샷건 */}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center">
                <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6  py-6">
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
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        SPAS-12
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        SPAS-12
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">70</td>
                      <td className="px-6 py-4 border-x border-gray-200">8</td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        5.45
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        754697
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

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        Six12
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        스콜피오
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        130
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">7</td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        1.5
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        977847
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/* 권총 */}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center">
                <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6  py-6">
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
                        Magnum
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        586 매그넘
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        160
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">6</td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        1.8
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        507731
                      </td>
                      <td className="px-6 py-4 text-center border-x border-gray-200">
                        X
                      </td>
                      <td className="px-6 py-4 text-center border-x border-gray-200">
                        X
                      </td>
                      <td className="px-6 py-4 text-center border-x border-gray-200">
                        O
                      </td>
                      <td className="px-6 py-4 text-center border-x border-gray-200">
                        O
                      </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        레굴루스
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        160
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">6</td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        1.8
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        75192
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default WeaponInfo;
