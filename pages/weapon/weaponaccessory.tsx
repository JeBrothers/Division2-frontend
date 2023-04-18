import type { NextPage } from "next";
import Layout from "../components/Layout";
import { cls } from "../../libs/utils";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "flowbite";
import { useForm } from "react-hook-form";

interface WeaponAccessory {
  optic?: string;
  magazine?: string;
  muzzle?: string;
  underbarrel?: string;
}

const WeaponAccessory: NextPage = () => {
  const [accInfo, setaccinfo] = useState(false);
  const { reset } = useForm<WeaponAccessory>();
  const [method, setMethod] = useState<
    "optic" | "magazine" | "muzzle" | "underbarrel"
  >("optic");

  const onOpticClick = () => {
    reset();
    setMethod("optic");
  };
  const onMagazineClick = () => {
    reset();
    setMethod("magazine");
  };
  const onMuzzleClick = () => {
    reset();
    setMethod("muzzle");
  };
  const onUnderbarrelClick = () => {
    reset();
    setMethod("underbarrel");
  };

  useEffect(() => {
    setaccinfo(true);
  }, []);

  return (
    <>
      {accInfo && (
        <div className="">
          <Tabs>
            <TabList className=" mb-4 border-b border-gray-200 flex flex-wrap text-sm font-medium text-center justify-center">
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "inline-block p-4 border-b-2 rounded-t-lg",
                    method === "optic"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onOpticClick}
                >
                  조준기
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "inline-block p-4 border-b-2 rounded-t-lg",
                    method === "magazine"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onMagazineClick}
                >
                  탄창
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "inline-block p-4 border-b-2 rounded-t-lg",
                    method === "muzzle"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onMuzzleClick}
                >
                  총구
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "inline-block p-4 border-b-2 rounded-t-lg",
                    method === "underbarrel"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onUnderbarrelClick}
                ></button>
              </Tab>
            </TabList>

            {/* 돌격소총 */}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center">
                <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-6">
                        슬롯
                      </th>
                      <th scope="col" className="px-6 py-6">
                        이름
                      </th>
                      <th scope="col" className="px-6 py-6">
                        보너스
                      </th>
                      <th scope="col" className="px-6 py-6">
                        패널티
                      </th>
                      <th scope="col" className="px-6 py-6">
                        입수 경로
                      </th>
                      <th scope="col" className="px-6 py-6">
                        특이사항
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={3}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        기계식 조준기
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        개방형 기계식 조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        유선형 기계식 조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트 : 아웃핏 헌팅 파티
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        증량형 기계식 조준기
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +10% 안정성
                      </td>
                      <td
                        id="penalty"
                        className="px-6 py-4 border-x border-gray-200 "
                      ></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={5}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        552 홀로그램 조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        주디시어리 광장 보조미션: 경찰서 본부 (스토리에서 오데사
                        소여와 대화)
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        C79 조준경 (3.4x)
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        보조미션 "실종된 폐품 수거자"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        수동 스코프
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        CQBSS Scope (8x)
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +30% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        보조미션 "DC-62 연구소 격리"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        강제 스코프
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/* 소총 */}
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
                        M1A
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        덧거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        180
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">13</td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        3.0
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        616326
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
                      <td className="px-6 py-4 text-center border-x border-gray-200">
                        O
                      </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        rowSpan={2}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        1886
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        버지니아인
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        100
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">5</td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        3.4
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        507412
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        O
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        X
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/* 지정사수소총 */}
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
                        AT308
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        네메시스
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">50</td>
                      <td className="px-6 py-4 border-x border-gray-200">5</td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        2.8
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        785533
                      </td>
                      <td className="px-6 py-4 text-center border-x border-gray-200">
                        X
                      </td>
                      <td className="px-6 py-4 text-center border-x border-gray-200">
                        X
                      </td>
                      <td className="px-6 py-4 text-center border-x border-gray-200">
                        X
                      </td>
                      <td className="px-6 py-4 text-center border-x border-gray-200">
                        X
                      </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        SRS
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        SRS-A1
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        60
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">7</td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        3.0
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        338957
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        O
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200  text-center">
                        O
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

export default WeaponAccessory;
