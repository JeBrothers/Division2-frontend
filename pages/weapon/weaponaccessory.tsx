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
        <div>
          <Tabs>
            <TabList className=" mb-4 border-b border-gray-200 flex flex-wrap text-sm font-medium text-center justify-center ">
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
                >
                  총열 하부
                </button>
              </Tab>
            </TabList>

            {/*광학장비*/}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center mb-20 ">
                <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400 ">
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
                        CQBSS 조준경 (8x)
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
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        VX1 조준경 (12x)
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +35% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        -10% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        기본적으로 사용가능( 테스트 필요)
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        강제 스코프
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        디지털 조준경
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +45% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        -5% 치명타 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        샤프슈터 전문화
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        강제 스코프 <br></br>탭키를 누르면 두번째 배율로 변경
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={5}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴 광학레일<br></br>짧은 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        T2 마이크로 레드 도트사이트
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        러시안 레드 도트사이트
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        EXPS3 홀로 사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +3% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        PRO 레드 도트사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        Reflex 사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 무기 조작력
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        극장 프로젝트: '워터 파이프라인 구성' 보상
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴 광학레일<br></br>짧은 광학레일<br></br>소형 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        튼튼한 소형 반사조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트 : "워터 파이프라인 구성"
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        짧은 광학레일<br></br>소형 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        저반사 조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트 : "워터 파이프라인 구성"
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/*탄창*/}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center mb-20 ">
                <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400 ">
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
                        튜브 탄창
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        반시계 튜브 스프링
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 헤드샷 대미지 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        튼튼한 튜브 스프링
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 발사 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        사우스웨스트 보조미션: SHD 테크 신호
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        탄성 튜브 스프링
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +20% 재장전 속도
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
                        rowSpan={6}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        탄띠
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        대형 파우치
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +35 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
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
                        CQBSS 조준경 (8x)
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
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        VX1 조준경 (12x)
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +35% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        -10% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        기본적으로 사용가능( 테스트 필요)
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        강제 스코프
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        디지털 조준경
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +45% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        -5% 치명타 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        샤프슈터 전문화
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        강제 스코프 <br></br>탭키를 누르면 두번째 배율로 변경
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={5}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴 광학레일<br></br>짧은 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        T2 마이크로 레드 도트사이트
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        러시안 레드 도트사이트
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        EXPS3 홀로 사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +3% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        PRO 레드 도트사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        Reflex 사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 무기 조작력
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        극장 프로젝트: '워터 파이프라인 구성' 보상
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴 광학레일<br></br>짧은 광학레일<br></br>소형 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        튼튼한 소형 반사조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트 : "워터 파이프라인 구성"
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        짧은 광학레일<br></br>소형 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        저반사 조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트 : "워터 파이프라인 구성"
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/*광학장비*/}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center mb-20 ">
                <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400 ">
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
                        CQBSS 조준경 (8x)
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
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        VX1 조준경 (12x)
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +35% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        -10% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        기본적으로 사용가능( 테스트 필요)
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        강제 스코프
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        디지털 조준경
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +45% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        -5% 치명타 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        샤프슈터 전문화
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        강제 스코프 <br></br>탭키를 누르면 두번째 배율로 변경
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={5}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴 광학레일<br></br>짧은 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        T2 마이크로 레드 도트사이트
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        러시안 레드 도트사이트
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        EXPS3 홀로 사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +3% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        PRO 레드 도트사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        Reflex 사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 무기 조작력
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        극장 프로젝트: '워터 파이프라인 구성' 보상
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴 광학레일<br></br>짧은 광학레일<br></br>소형 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        튼튼한 소형 반사조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트 : "워터 파이프라인 구성"
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        짧은 광학레일<br></br>소형 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        저반사 조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트 : "워터 파이프라인 구성"
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/*광학장비*/}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center mb-20 ">
                <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400 ">
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
                        CQBSS 조준경 (8x)
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
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        VX1 조준경 (12x)
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +35% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        -10% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        기본적으로 사용가능( 테스트 필요)
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        강제 스코프
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        디지털 조준경
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +45% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        -5% 치명타 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        샤프슈터 전문화
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        강제 스코프 <br></br>탭키를 누르면 두번째 배율로 변경
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={5}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴 광학레일<br></br>짧은 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        T2 마이크로 레드 도트사이트
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        러시안 레드 도트사이트
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        EXPS3 홀로 사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +3% 헤드샷 피해
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        PRO 레드 도트사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        Reflex 사이트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 무기 조작력
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        극장 프로젝트: '워터 파이프라인 구성' 보상
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴 광학레일<br></br>짧은 광학레일<br></br>소형 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        튼튼한 소형 반사조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트 : "워터 파이프라인 구성"
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        짧은 광학레일<br></br>소형 광학레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        저반사 조준기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트 : "워터 파이프라인 구성"
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
