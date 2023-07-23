import type { NextPage } from "next";

import { cls } from "../../libs/utils";
import { useEffect, useState } from "react";

const WeaponTalent: NextPage = () => {
  const [talent, setTalent] = useState(false);

  useEffect(() => {
    setTalent(true);
  }, []);

  return (
    <>
      {talent && (
        <div className="flex relative overflow-x-auto justify-center mb-20 mt-10 ">
          <table className="w-max-lg  text-sm  text-gray-500  border-t  ">
            <thead className="text-xs text-white   bg-division-orange ">
              <tr className="text-base">
                <th
                  scope="col"
                  className="px-28 py-4 table-fixed
                "
                  colSpan={2}
                >
                  모든 무기
                </th>
                <th scope="col" className="px-20 py-4 table-fixed ">
                  완벽한 특수효과
                </th>
                <th scope="col" className="px-16 py-4 table-fixed ">
                  설명
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-900">
              <tr className="bg-zinc-700 border border-y  ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/breadbasket.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>브레드 바스켓</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange ">
                    완벽한 브레드 바스켓
                  </span>
                </td>
                <td className="px-6 py-2  text-white ">
                  <span>
                    바디샷을 적중시키면 10초 동안 다음 헤드샷의 대미지가 +35%/
                    <span className="text-division-orange">+50%</span>
                    만큼 증가합니다. 최대 3번/
                    <span className="text-division-orange">2번</span>
                    중첩됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y   ">
                <td className="px-6 py-2  w-24">
                  <img src="/asset/weapontalent/killer.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>킬러</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange">완벽한 킬러</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    치명타로 적을 처치하면 10초 동안 치명타 대미지가 +40%/
                    <span className="text-division-orange">+50%</span>만큼
                    증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/preservation.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>보존</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 보존</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    적을 처치하면 5초에 걸쳐 방어도가 10%/
                    <span className="text-division-orange">12%</span>
                    만큼 회복됩니다. 헤드샷으로 처치하면 회복량이 추가로 10%/
                    <span className="text-division-orange">12%</span> 만큼
                    증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/optimist.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>낙천주의자</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange">
                    완벽한 낙천주의자
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄창의 탄약이 10%만큼 소모될 때마다 무기 대미지가 +3%/
                    <span className="text-division-orange">4%</span> 만큼
                    증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/strained.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>중압감</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange">완벽한 중압감</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    사격 시 0.5초마다 치명타 대미지가 +10%만큼 증가합니다. 최대
                    5번/
                    <span className="text-division-orange">8번</span>
                    중첩됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/close&persnal.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>근접전의 대가</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange">
                    완벽한 근접전의 대가
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    7m 내에 있는 대상을 처치하면 10초 동안 무기 대미지가 +30%/
                    <span className="text-division-orange">38%</span>
                    만큼 증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/fast hands.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>빠른 손</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange">완벽한 빠른 손</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    치명타를 적중시키면 재장전 속도가 4%/
                    <span className="text-division-orange">8%</span>
                    만큼 증가합니다. 최대 40번 중첩됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/sadist.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>새디스트</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange">완벽한 새디스트</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    상태이상 효과가 적용된 적을 처치하면 20초 동안 15m/
                    <span className="text-division-orange">20m</span>
                    내에 있는 자신을 포함한 <br></br>모든 아군의 치명타 확률을
                    15%/
                    <span className="text-division-orange">18%</span>만큼,
                    치명타 대미지를 15%/
                    <span className="text-division-orange">18%</span>만큼
                    증가시킵니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/ranger.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>레인저</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 레인저</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    대상과의 거리 5m/
                    <span className="text-division-orange">4m</span>
                    마다 무기 대미지가 2%만큼 증폭됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/steady handed.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>떨리지 않는 손</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">
                    완벽한 떨리지 않는 손
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    공격을 적중시키면 중첩 효과가 부여되어 명중률과 안정성이
                    +1%만큼 증가합니다. <br></br>100번/
                    <span className="text-division-orange">75번</span>
                    중첩되면 중첩 효과는 소모되고 탄창이 보충됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/spike.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>가시</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 가시</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    헤드샷을 적중시키면 15초 동안 스킬 대미지가 +20%/
                    <span className="text-division-orange">+25%</span>
                    만큼 증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/eyeless.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>맹인</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 맹인</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    시력 상실 상태이상 효과가 적용된 적에 대한 무기 대미지가
                    +20%/
                    <span className="text-division-orange">+25%</span>
                    만큼 증가합니다. <br></br>4명/
                    <span className="text-division-orange">3명</span>의 적을
                    처치하면 다음에 공격을 적중시키는 적에게 시력 상실 상태이상
                    효과를 적용합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/ignited.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>점화</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 점화</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    화상 상태이상 효과가 적용된 적에 대한 무기 대미지가 +20%/
                    <span className="text-division-orange">+25%</span>
                    만큼 증가합니다.<br></br> 4명/
                    <span className="text-division-orange">3명</span>의 적을
                    처치하면 다음에 공격을 적중시키는 적에게 화상 상태이상
                    효과를 적용합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/perpetuation.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>영속성</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 영속성</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    헤드샷을 적중시키면 다음에 부여하는 상태이상 효과 대미지와
                    지속 시간이 +50%만큼 증가합니다. 재사용 대기시간: 20초/
                    <span className="text-division-orange">16초</span>
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/reformation.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>혁신</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 혁신</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    헤드샷을 적중시키면 15초 동안 스킬 회복이 +30%/
                    <span className="text-division-orange">+40%</span>
                    증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-8 py-4  ">
                  <img src="/asset/weapontalent/future perfect.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>완벽한 미래</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 미래</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    무기로 적을 처치하면 15초/
                    <span className="text-division-orange">19초</span> 동안 스킬
                    등급 +1만큼 증가합니다. 최대 3번 중첩됩니다. <br></br>스킬
                    등급이 6 등급인 경우 무기로 적을 처치하면 15초 동안 과충전이
                    부여됩니다. 과충전 재사용 대기시간: 90초
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-8 py-4  ">
                  <img src="/asset/weapontalent/in sync.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>동기화</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 동기화</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    적에게 공격을 명중시키면 5초동안 스킬 대미지가 +15%/
                    <span className="text-division-orange">+20%</span>만큼
                    증가합니다. 방패가 아닌 스킬을 사용하거나 스킬로 적에게
                    대미지를 주면 <br></br> 5초 동안 무기 대미지가 +15%/
                    <span className="text-division-orange">+20%</span>만큼
                    증가합니다. 두 버프 효과가 동시에 활성화 되면 대미지
                    증가량이 두 배가 됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/flatline.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>심정지</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 심정지</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    펄스에 탐지된 적에 대한 무기 대미지가 15%/
                    <span className="text-division-orange">+20</span>만큼
                    증가합니다. 3명/
                    <span className="text-division-orange">2명</span>의 적을
                    처치하면 다음에 공격을 적중시키는 적에게 펄스를 부여합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/sledgehammer.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>슬레지해머</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">
                    완벽한 슬레지해머
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    수류탄으로 대미지를 주면 대상에게 징표를 남깁니다. 징표에
                    걸린 대상은 방어도에 받는 대미지가 30%/
                    <span className="text-division-orange">40%</span>만큼
                    증가하고<br></br> 이동 속도는 -20%/
                    <span className="text-division-orange">-40%</span>만큼
                    감소합니다. 징표는 10초 후에 사라집니다.
                  </span>
                </td>
              </tr>
            </tbody>

            <thead className="text-xs text-white   bg-division-orange ">
              <tr className="text-base">
                <th
                  scope="col"
                  className="px-28 py-4 table-fixed
                "
                  colSpan={2}
                >
                  소총
                </th>
                <th scope="col" className="px-20 py-4 table-fixed ">
                  완벽한 특수효과
                </th>
                <th scope="col" className="px-16 py-4 table-fixed ">
                  설명
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-900">
              <tr className="bg-zinc-700 border border-y  ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/rifleman.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>소총수</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange ">완벽한 소총수</span>
                </td>
                <td className="px-6 py-2  text-white ">
                  <span>
                    헤드샷을 적중시킬 때 마다 5초 동안 무기 대미지가 +10%/
                    <span className="text-division-orange">+11%</span>만큼
                    증가합니다. 최대 5번/
                    <span className="text-division-orange">6번</span>{" "}
                    중첩됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y   ">
                <td className="px-6 py-2  w-24">
                  <img src="/asset/weapontalent/boomerang.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>부메랑</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange">완벽한 부메랑</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    치명타 적중 시 50%/
                    <span className="text-division-orange">75% </span> 확률로
                    탄환이 탄창에 반환됩니다. 또한, 탄환이 탄창에 반환될 경우
                    다음 사격의 대미지가 +40%만큼 증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/luckyshot.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>뜻밖의 행운</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">
                    완벽한 뜻밖의 행운
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄창 휴대량이 20%/
                    <span className="text-division-orange">30%</span>만큼
                    증가합니다. 엄폐한 상태에서 발사한 탄환이 빗나가면 100%
                    확률로 탄창에 반환됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/determind.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>단호함</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange">완벽한 단호함</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄헤드샷으로 적을 처치한 이후, 적에게 다음 사격을 적중시키면
                    반드시 헤드샷/{" "}
                    <span className="text-division-orange">치명타 헤드샷</span>
                    으로 적중합니다
                  </span>
                </td>
              </tr>
            </tbody>

            <thead className="text-xs text-white   bg-division-orange ">
              <tr className="text-base">
                <th
                  scope="col"
                  className="px-28 py-4 table-fixed
                "
                  colSpan={2}
                >
                  돌격소총
                </th>
                <th scope="col" className="px-20 py-4 table-fixed ">
                  완벽한 특수효과
                </th>
                <th scope="col" className="px-16 py-4 table-fixed ">
                  설명
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-900">
              <tr className="bg-zinc-700 border border-y  ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/nearsighted.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>근시안</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange ">완벽한 근시안</span>
                </td>
                <td className="px-6 py-2  text-white ">
                  <span>
                    적정 사거리가 -35%만큼 감소하는 대신 안정성이 +80%/
                    <span className="text-division-orange">+100%</span>만큼
                    증가합니다
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y   ">
                <td className="px-6 py-2  w-24">
                  <img src="/asset/weapontalent/onempty.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>텅 빈 탄창</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange">완벽한 부메랑</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    빈 탄창을 재장전하면 10초 동안 무기 조작력이 +30%/{" "}
                    <span className="text-division-orange">+40% </span> 만큼
                    만큼 증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/overflowing.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>공급과잉</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 공급과잉</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    빈 탄창을 3번/
                    <span className="text-division-orange">2번</span> 재장전 할
                    때마다 탄창 휴대량이 100%만큼 증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/measured.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>신중함</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 신중함</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄창의 첫 절반을 사용하는 동안에는 발사 속도가 20%로, 무기
                    대미지가 -30%/
                    <span className="text-division-orange">-27%</span>로
                    변경됩니다. <br></br>나머지 절반을 사용하는 동안에는 발사
                    속도가 -20%로, 종합 무기 대미지가 30%/
                    <span className="text-division-orange">33%</span>로
                    변경됩니다.
                  </span>
                </td>
              </tr>
            </tbody>

            <thead className="text-xs text-white   bg-division-orange ">
              <tr className="text-base">
                <th
                  scope="col"
                  className="px-28 py-4 table-fixed
                "
                  colSpan={2}
                >
                  지정사수소총
                </th>
                <th scope="col" className="px-20 py-4 table-fixed ">
                  완벽한 특수효과
                </th>
                <th scope="col" className="px-16 py-4 table-fixed ">
                  설명
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-900">
              <tr className="bg-zinc-700 border border-y  ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/naked.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>벌거숭이</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange ">완벽한 벌거숭이</span>
                </td>
                <td className="px-6 py-2  text-white ">
                  <span>
                    방어도가 소진된 적에게 공격을 적중시키면 5초/
                    <span className="text-division-orange">8초</span> 동안
                    헤드샷 대미지가 +50%만큼 증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y   ">
                <td className="px-6 py-2  w-24">
                  <img src="/asset/weapontalent/first blood.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>선제공격</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange">완벽한 선제공격</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    조준경으로 확대한 상태일 때, 비전투 상황에서 발포하는 첫
                    번째/
                    <span className="text-division-orange">두 발의 탄환</span>
                    혹은 빈 탄창을 재장전하고 <br></br>발포하는 첫 번째/
                    <span className="text-division-orange">두 발의 탄환 </span>
                    은 어느 신체 부위에 적중하든 헤드샷 대미지를 줍니다. 8배율
                    이상의 조준경이 필요합니다.
                  </span>
                </td>
              </tr>
              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/luckyshot.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>뜻밖의 행운</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">
                    완벽한 뜻밖의 행운
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄창 휴대량이 20%/
                    <span className="text-division-orange">30%</span>만큼
                    증가합니다. 엄폐한 상태에서 발사한 탄환이 빗나가면 100%
                    확률로 탄창에 반환됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/determind.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>단호함</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange">완벽한 단호함</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄헤드샷으로 적을 처치한 이후, 적에게 다음 사격을 적중시키면
                    반드시 헤드샷/{" "}
                    <span className="text-division-orange">치명타 헤드샷</span>
                    으로 적중합니다
                  </span>
                </td>
              </tr>
            </tbody>

            <thead className="text-xs text-white   bg-division-orange ">
              <tr className="text-base">
                <th
                  scope="col"
                  className="px-28 py-4 table-fixed
                "
                  colSpan={2}
                >
                  기관단총
                </th>
                <th scope="col" className="px-20 py-4 table-fixed ">
                  완벽한 특수효과
                </th>
                <th scope="col" className="px-16 py-4 table-fixed ">
                  설명
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-900">
              <tr className="bg-zinc-700 border border-y  ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/outsider.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>외부인</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange ">완벽한 외부인</span>
                </td>
                <td className="px-6 py-2  text-white ">
                  <span>
                    적을 처치한 후 10초 동안 적정 사거리가 100%/{" "}
                    <span className="text-division-orange">125%</span>만큼,
                    명중률이 +100%/
                    <span className="text-division-orange">125%</span>만큼
                    증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y   ">
                <td className="px-6 py-2  w-24">
                  <img src="/asset/weapontalent/unwaving.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>흔들림 방지</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange">
                    완벽한 흔들림 방지
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    해당 무기로 교체하면 5초 동안 무기 조작력이 +300%/
                    <span className="text-division-orange">+400% </span>만큼
                    증가합니다. 적을 처치하면 버프 효과가 갱신됩니다.<br></br>
                    다른 무기로 교체하면 5초 동안 해당 버프가 모든 무기에서
                    비활성화됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/measured.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>신중함</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 신중함</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄창의 첫 절반을 사용하는 동안에는 발사 속도가 20%로, 무기
                    대미지가 -30%/
                    <span className="text-division-orange">-27%</span>로
                    변경됩니다. <br></br>나머지 절반을 사용하는 동안에는 발사
                    속도가 -20%로, 종합 무기 대미지가 30%/
                    <span className="text-division-orange">33%</span>로
                    변경됩니다.
                  </span>
                </td>
              </tr>
            </tbody>

            <thead className="text-xs text-white   bg-division-orange ">
              <tr className="text-base">
                <th
                  scope="col"
                  className="px-28 py-4 table-fixed
                "
                  colSpan={2}
                >
                  경기관총
                </th>
                <th scope="col" className="px-20 py-4 table-fixed ">
                  완벽한 특수효과
                </th>
                <th scope="col" className="px-16 py-4 table-fixed ">
                  설명
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-900">
              <tr className="bg-zinc-700 border border-y  ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/unhinged.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>불안정</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange ">완벽한 불안정</span>
                </td>
                <td className="px-6 py-2  text-white ">
                  <span>
                    안정성이 -25%만큼, 명중률이 25%만큼 감소하는 대신 무기
                    대미지가 +18%/
                    <span className="text-division-orange">+22%</span>만큼
                    증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y   ">
                <td className="px-6 py-2  w-24">
                  <img src="/asset/weapontalent/frenzy.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>광란</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange">완벽한 광란</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    빈 탄창을 재장전할 때, 탄창 휴대량 10발
                    <span className="text-division-orange">8발 </span>발당 5초
                    동안 발사속도가 +3%만큼, 무기 대미지가 +3%만큼 증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/overwhelm.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>압도적인 화력</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">
                    완벽한 압도적인 화력
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    현재 제압되지 않은 상태의 적을 제압하면 12초 동안 무기
                    대미지가 +10%/
                    <span className="text-division-orange">+12%</span>만큼
                    증가합니다. 최대 4번 중첩됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/measured.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>신중함</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 신중함</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄창의 첫 절반을 사용하는 동안에는 발사 속도가 20%로, 무기
                    대미지가 -30%/
                    <span className="text-division-orange">-27%</span>로
                    변경됩니다. <br></br>나머지 절반을 사용하는 동안에는 발사
                    속도가 -20%로, 종합 무기 대미지가 30%/
                    <span className="text-division-orange">33%</span>로
                    변경됩니다.
                  </span>
                </td>
              </tr>
            </tbody>

            <thead className="text-xs text-white   bg-division-orange ">
              <tr className="text-base">
                <th
                  scope="col"
                  className="px-28 py-4 table-fixed
                "
                  colSpan={2}
                >
                  샷건
                </th>
                <th scope="col" className="px-20 py-4 table-fixed ">
                  완벽한 특수효과
                </th>
                <th scope="col" className="px-16 py-4 table-fixed ">
                  설명
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-900">
              <tr className="bg-zinc-700 border border-y  ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/pummel.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>연속 타격</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange ">
                    완벽한 연속 타격
                  </span>
                </td>
                <td className="px-6 py-2  text-white ">
                  <span>
                    바디샷 처치를 3번/
                    <span className="text-division-orange">+2번</span> 연속으로
                    하면 탄창이 보충되고, 10초 동안 무기 대미지가 40%
                    증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y   ">
                <td className="px-6 py-2  w-24">
                  <img src="/asset/weapontalent/pumped up.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>의기충천</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange">완벽한 의기충천</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    재장전 시 10초 동안 무기 대미지가 1%/{" "}
                    <span className="text-division-orange">5%</span> 증가합니다.
                    최대 25번/5번 중첩됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/overwhelm.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>압도적인 화력</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">
                    완벽한 압도적인 화력
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    현재 제압되지 않은 상태의 적을 제압하면 12초 동안 무기
                    대미지가 +10%/
                    <span className="text-division-orange">+12%</span>만큼
                    증가합니다. 최대 4번 중첩됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/measured.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>신중함</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 신중함</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄창의 첫 절반을 사용하는 동안에는 발사 속도가 20%로, 무기
                    대미지가 -30%/
                    <span className="text-division-orange">-27%</span>로
                    변경됩니다. <br></br>나머지 절반을 사용하는 동안에는 발사
                    속도가 -20%로, 종합 무기 대미지가 30%/
                    <span className="text-division-orange">33%</span>로
                    변경됩니다.
                  </span>
                </td>
              </tr>
            </tbody>

            <thead className="text-xs text-white   bg-division-orange ">
              <tr className="text-base">
                <th
                  scope="col"
                  className="px-28 py-4 table-fixed
                "
                  colSpan={2}
                >
                  권총
                </th>
                <th scope="col" className="px-20 py-4 table-fixed ">
                  완벽한 특수효과
                </th>
                <th scope="col" className="px-16 py-4 table-fixed ">
                  설명
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-900">
              <tr className="bg-zinc-700 border border-y  ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/salvage.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>회수</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange ">완벽한 회수</span>
                </td>
                <td className="px-6 py-2  text-white ">
                  <span>
                    대상 처치 시 +70%/
                    <span className="text-division-orange">+85$</span> 확률로
                    탄약을 보충합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y   ">
                <td className="px-6 py-2  w-24">
                  <img src="/asset/weapontalent/finisher.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>확인사살</span>
                </td>
                <td className="px-6 py-2 text-center ">
                  <span className="text-division-orange">완벽한 확인사살</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    적을 처치하고 10초 내에 무기를 교체하면 15초 동안 치명타
                    확률이 30%/{" "}
                    <span className="text-division-orange">35%</span> 만큼,
                    치명타 대미지가 30%/{" "}
                    <span className="text-division-orange">40%</span> 만큼
                    증가합니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/overwhelm.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>압도적인 화력</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">
                    완벽한 압도적인 화력
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    현재 제압되지 않은 상태의 적을 제압하면 12초 동안 무기
                    대미지가 +10%/
                    <span className="text-division-orange">+12%</span>만큼
                    증가합니다. 최대 4번 중첩됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/measured.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>신중함</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">완벽한 신중함</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄창의 첫 절반을 사용하는 동안에는 발사 속도가 20%로, 무기
                    대미지가 -30%/
                    <span className="text-division-orange">-27%</span>로
                    변경됩니다. <br></br>나머지 절반을 사용하는 동안에는 발사
                    속도가 -20%로, 종합 무기 대미지가 30%/
                    <span className="text-division-orange">33%</span>로
                    변경됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/luckyshot.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>뜻밖의 행운</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange ">
                    완벽한 뜻밖의 행운
                  </span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄창 휴대량이 20%/
                    <span className="text-division-orange">30%</span>만큼
                    증가합니다. 엄폐한 상태에서 발사한 탄환이 빗나가면 100%
                    확률로 탄창에 반환됩니다.
                  </span>
                </td>
              </tr>

              <tr className="bg-zinc-700 border-y ">
                <td className="px-6 py-2  ">
                  <img src="/asset/weapontalent/determind.png" />
                </td>
                <td className="px-6 py-2  text-white text-center">
                  <span>단호함</span>
                </td>
                <td className="px-6 py-2 text-center">
                  <span className="text-division-orange">완벽한 단호함</span>
                </td>
                <td className="px-6 py-2  text-white">
                  <span>
                    탄헤드샷으로 적을 처치한 이후, 적에게 다음 사격을 적중시키면
                    반드시 헤드샷/{" "}
                    <span className="text-division-orange">치명타 헤드샷</span>
                    으로 적중합니다
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default WeaponTalent;
