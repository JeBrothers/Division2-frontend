import type { NextPage } from "next";
import Layout from "../components/Layout";
import { cls } from "../../libs/utils";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "flowbite";
import { useForm } from "react-hook-form";
import Image from "next/image";
import TypeIcon from "../components/TypeIcon";

interface WeaponAccessory {
  optic?: string;
  magazine?: string;
  muzzle?: string;
  underbarrel?: string;
}

const WeaponAccessory: NextPage = () => {
  const [accInfo, setaccinfo] = useState(false);
  const { reset } = useForm<WeaponAccessory>();
  const [type, setType] = useState<
    "optic" | "magazine" | "muzzle" | "underbarrel"
  >("optic");

  const onOpticClick = () => {
    reset();
    setType("optic");
  };
  const onMagazineClick = () => {
    reset();
    setType("magazine");
  };
  const onMuzzleClick = () => {
    reset();
    setType("muzzle");
  };
  const onUnderbarrelClick = () => {
    reset();
    setType("underbarrel");
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
                    " p-4 border-b-2 rounded-t-lg  ",
                    type === "optic"
                      ? "border-division-orange text-division-orange fill-transparent "
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onOpticClick}
                >
                  {/* <Image
                    src={"/icon-grip-black.png"}
                    width={16}
                    height={16}
                  /> */}
                  <TypeIcon active={type} type="optic"></TypeIcon>
                  조준기
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "inline-block p-4 border-b-2 rounded-t-lg",
                    type === "magazine"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onMagazineClick}
                >
                  <TypeIcon active={type} type="magazine"></TypeIcon>
                  탄창
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "inline-block p-4 border-b-2 rounded-t-lg",
                    type === "muzzle"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onMuzzleClick}
                >
                  <TypeIcon active={type} type="muzzle"></TypeIcon>
                  총구
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "inline-block p-4 border-b-2 rounded-t-lg",
                    "space-x-1",
                    type === "underbarrel"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onUnderbarrelClick}
                >
                  <TypeIcon active={type} type="underbarrel"></TypeIcon>
                  총열 하단부
                </button>
              </Tab>
            </TabList>

            {/*광학장비*/}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center mb-20 ">
                <table className="w-max-lg  text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                      <th scope="col" className=" px-32 py-6 table-fixed  ">
                        종류
                      </th>
                      <th scope="col" className="px-28 py-6 table-fixed ">
                        이름
                      </th>
                      <th scope="col" className="px-20 py-6 table-fixed ">
                        보너스
                      </th>
                      <th scope="col" className="px-16 py-6 table-fixed">
                        패널티
                      </th>
                      <th scope="col" className="px-60 py-6 table-fixed">
                        입수 경로
                      </th>
                      <th scope="col" className="px-32 py-6 table-fixed">
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
                        컨스티튜션 홀 보조미션 "실종된 폐품 수거자"
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
                        동부 쇼핑몰 보조미션 "DC-62 연구소 격리"
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
                      <td className="px-6 py-4 border-x border-gray-200"></td>
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
                        반소 조준기
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 무기 조작력
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        극장 프로젝트: '워터 파이프라인 구성'
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
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
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
                        +5% 헤드샷 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        -20% 적정 사거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        포기바텀 보조미션: "컬럼비아 플라자 방송국"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/*탄창*/}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center mb-20 ">
                <table className="w-max-lg  text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center  ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className=" px-32 py-6 table-fixed  ">
                        종류
                      </th>
                      <th scope="col" className="px-28 py-6 table-fixed ">
                        이름
                      </th>
                      <th scope="col" className="px-20 py-6 table-fixed ">
                        보너스
                      </th>
                      <th scope="col" className="px-16 py-6 table-fixed">
                        패널티
                      </th>
                      <th scope="col" className="px-60 py-6 table-fixed">
                        입수 경로
                      </th>
                      <th scope="col" className="px-32 py-6 table-fixed">
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
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        대형 파우치 (기관포병)
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +50 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        기관포병 전문화
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>
                    {/* 여기까지 작업 4 20 아침` */}
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        보정형 링크
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +15% 안정성 <br></br>
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        동부 쇼핑몰 보조미션 "실종된 큐레이터"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        엄폐용 링크 벨트
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 발사 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        포기바텀 보조미션 "네이비 힐 방송"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        전술용 소형 파우치
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +20% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        활동형 링크
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +10% 치명타 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={4}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        통합 탄창
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        보정된 통합 스프링
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        불균형 통합 스프링
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        다운타운 서쪽구역 보조 미션 : "작업장 공동체"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        뻣뻣한 통합 스프링
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 무기 데미지
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
                        저균형 통합 스프링
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +10% 치명타 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={4}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        지정사수용 탄창
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        경량형 지정사수소총 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        눌러 담은 지정사수소총 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        수리된 지정사수소총 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 적정 사거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        페더럴 트라이앵글 보조미션: "FBI 본부"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        튼튼한 지정사수소총 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={5}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        7.62mm 탄창
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        견고한 대용량 7.62mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        {" "}
                        -10% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        경량형 대용량 7.62mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        세밀형 7.62mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        정밀형 7.62mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +7% 헤드샷 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        증량형 7.62mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={5}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        5.56mm 탄창
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        경량형 대용량 5.56mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        페더럴 트라이앵글 보조미션 : "법무부"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        균형 스프링 5.56mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업{" "}
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        보병용 스프링 5.56mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +30% 적정거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        생존자 전문화
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        전술용 스프링 5.56mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 치명타 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        웨스트 포토맥 공원 보조미션 : "아웃캐스트 선전 전초
                        기지"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        튼튼한 대용량 5.56mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        -10% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={5}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        .45 ACP 탄창
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        강제 급탄 .45 ACP 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 치명타 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        웨스트 엔드 보조미션: "주차장 보관함"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        단축 스프링 .45 ACP 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        대용량 .45 ACP 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        동부 다운타운 보조미션: "에드워드 요원 지원"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        정밀형 급탄 .45 ACP 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        특대형 .45 ACP 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        -10% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={4}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        9mm 탄창
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        대용량 9mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        -10% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        웨스트 포토맥 공원 보조미션: "사라진 캠퍼스 순찰대"{" "}
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        분리형 9mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        동부 쇼핑몰 보조미션: "브룩스 요원 지원"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        중형 스프링 9mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 치명타 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        특대형 9mm 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={3}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        권총 탄창
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        경찰용 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        대용량 경찰용 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +11 장탄수
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        다운타운 서쪽 보조미션:"양봉가 제프"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        현장용 권총 탄창
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +30% 적정 사거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={1}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        리볼버 드럼
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        고속 장전용 리볼버 드럼
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 재장전 속도
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/*총구*/}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center mb-20 ">
                <table className="w-max-lg  text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                      <th scope="col" className=" px-32 py-6 table-fixed  ">
                        종류
                      </th>
                      <th scope="col" className="px-28 py-6 table-fixed ">
                        이름
                      </th>
                      <th scope="col" className="px-20 py-6 table-fixed ">
                        보너스
                      </th>
                      <th scope="col" className="px-16 py-6 table-fixed">
                        패널티
                      </th>
                      <th scope="col" className="px-60 py-6 table-fixed">
                        입수 경로
                      </th>
                      <th scope="col" className="px-32 py-6 table-fixed">
                        특이사항
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={6}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        7.62mm
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        7.62mm 대형 소음기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        웨스트 엔드 보조미션: "역사지구 공격"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        7.62mm 보정기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        7.62mm 소염기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        동부 다운타운 보조미션: "엠파이어 어텀 호텔"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        7.62mm 소음 감소 장치
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 적정 사거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        7.62mm 총구 제퇴기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        오메가 7.62mm 소총 소음기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        -10% 적정사거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={6}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        5.56mm
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        5.56mm 대형 소음기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        5.56mm 소음 감소 장치
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 적정 사거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        5.56mm 보정기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        캠퍼스 프로젝트: "식량 지원 사업"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        5.56mm 소염기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        극장 프로젝트: "회수팀"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        5.56mm 총구 제퇴기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        오메가 5.56mm 총구 제퇴기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +20% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        -10% 적정 사거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        웨스트 엔드 보조미션: "포토맥 구호 캠프"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={6}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        .45
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        .45 소형 소음기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        보정기 .45
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        소염기 .45
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        소음 감소 장치 .45
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 적정 사거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        웨스트 몰 보조미션: "의료 캠프 공격"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        총구 제퇴기 .45
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +3% 헤드샷 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        포기바텀 보조미션 : "온실 공동체"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        오스프리 .45 소음기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={6}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        9mm
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        9mm 보정기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        9mm 소염기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        9mm 소음 감소 장치
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 적정 사거리
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        9mm 소형 소음기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        9mm 총구 제퇴기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +3% 헤드샷 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        오스프리 9mm 소음기
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +5% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/*총열 하단부*/}
            <TabPanel>
              <div className="flex relative overflow-x-auto justify-center mb-20 ">
                <table className="w-max-lg  text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
                  <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                      <th scope="col" className=" px-32 py-6 table-fixed  ">
                        종류
                      </th>
                      <th scope="col" className="px-28 py-6 table-fixed ">
                        이름
                      </th>
                      <th scope="col" className="px-20 py-6 table-fixed ">
                        보너스
                      </th>
                      <th scope="col" className="px-16 py-6 table-fixed">
                        패널티
                      </th>
                      <th scope="col" className="px-60 py-6 table-fixed">
                        입수 경로
                      </th>
                      <th scope="col" className="px-32 py-6 table-fixed">
                        특이사항
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={2}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴/짧은 하단부 레일
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        각진 손잡이
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 안정성
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        동부 쇼핑몰 보조미션:"박물관 수원"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        수직 손잡이
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 명중률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        rowSpan={4}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴 하단부 레일
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        짧은 손잡이
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 치명타 데미지
                      </td>
                      <td
                        id="penalty"
                        className="px-6 py-4 border-x border-gray-200 "
                      ></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        전술용 짧은 손잡이
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +10% 치명타 데미지
                      </td>
                      <td
                        id="penalty"
                        className="px-6 py-4 border-x border-gray-200 "
                      ></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        화염방사병 전문화
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        연결식 레이저 포인터
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        레이저 포인터 대상을 <br></br>펄스로 탐지합니다.
                      </td>
                      <td
                        id="penalty"
                        className="px-6 py-4 border-x border-gray-200 "
                      ></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        기술전문가 전문화
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        총열 손잡이
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +10% 재장전 속도
                      </td>
                      <td
                        id="penalty"
                        className="px-6 py-4 border-x border-gray-200 "
                      ></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        다운타운 보조미션 : "ODEA 기술 사무소"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        rowSpan={2}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        긴/짧은 하단부 레일 보조장비
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        레이저 포인터
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +5% 치명타 확률
                      </td>
                      <td
                        id="penalty"
                        className="px-6 py-4 border-x border-gray-200 "
                      ></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        컨스티튜션 홀 보조미션: "트루썬 방송 전초 기지"
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200 "
                      >
                        소형 레이저 포인터
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        +10% 치명타 확률
                      </td>
                      <td
                        id="penalty"
                        className="px-6 py-4 border-x border-gray-200 "
                      ></td>
                      <td className="px-6 py-4 border-x border-gray-200 ">
                        폭파전문가 전문화
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200 "></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th
                        rowSpan={3}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-x border-gray-200"
                      >
                        가젯
                      </th>
                      <td className="px-6 py-4 border-x border-gray-200">
                        단축 결합형 소형 레이저 포인터
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 치명타 확률
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        스토리 임무 완료 후 백악관 레벨 업
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        단축 결합형 레이저 포인터
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        +10% 헤드샷 데미지
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <td className="px-6 py-4 border-x border-gray-200">
                        권총 전등
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        어두운 곳을 <br></br>비출 수 있습니다.
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
                      <td className="px-6 py-4 border-x border-gray-200">
                        언더그라운드 팩션 탱크 드랍
                      </td>
                      <td className="px-6 py-4 border-x border-gray-200"></td>
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
