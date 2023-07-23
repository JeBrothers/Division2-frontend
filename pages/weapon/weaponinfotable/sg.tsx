import React from "react";

import SG from "../../../public/WeaponinfoJson/shotgun.json";

interface SG {
  variant?: string;
  engName?: string;
  name?: string;
  baseMagSize?: number;
  moddedMagSize?: number;
  rpm?: number;
  reload?: number;
  damage?: number;
  dps?: number;
  muzzle?: boolean;
  underbarrel?: boolean;
  magazine?: boolean;
  optics?: boolean;
  dlc?: boolean;
  exotic?: boolean;
  named?: boolean;
  flavourText?: string;
}

export default function SgTable() {
  const DisplayData: SG[] = SG;

  const data = DisplayData.map((info, index) => {
    const isSameVariant =
      index > 0 && info.variant === DisplayData[index - 1].variant;
    const nameColor = info.exotic
      ? "text-division-orange"
      : info.named
      ? "text-yellow-400"
      : "text-gray-900";

    return (
      <tr className="bg-white border-b border-x mb-10 font-bold">
        {!isSameVariant && (
          <td
            className="w-56 px-6 py-4 whitespace-pre-line text-gray-900 border-x border-gray-200"
            rowSpan={
              DisplayData.filter((x) => x.variant === info.variant).length
            }
          >
            {info.variant}
          </td>
        )}
        <td
          className={`w-60 pl-4 py-4 border-x border-gray-200 text-left  ${nameColor}`}
        >
          {info.name}
        </td>
        <td className="w-30 px-6 py-4 border-x border-gray-200">
          {info.baseMagSize}
        </td>
        <td className="w-24 px-6 py-4 border-x border-gray-200">{info.rpm}</td>
        <td className="w-36 px-6 py-4 border-x border-gray-200">
          {info.damage}
        </td>
        <td className="w-36 px-6 py-4 border-x border-gray-200">{info.dps}</td>
        <td className="px-6 py-4 text-center border-x border-gray-200">
          {info.optics ? "O" : "X"}
        </td>
        <td className="px-6 py-4 text-center border-x border-gray-200">
          {info.muzzle ? "O" : "X"}
        </td>
        <td className="px-6 py-4 text-center border-x border-gray-200">
          {info.magazine ? "O" : "X"}
        </td>
        <td className="px-6 py-4 text-center border-x border-gray-200">
          {info.underbarrel ? "O" : "X"}
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="flex relative  justify-center ">
        <div className="max-h-[750px] overflow-y-auto">
          <table className="w-max-md  text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 text-center">
            <thead className="sticky top-0 z-40 text-xs text-white uppercase bg-division-dark font-semibold">
              <tr>
                <th scope="col" className="px-6  py-6">
                  총기종류
                </th>
                <th scope="col" className="px-6 py-6">
                  총기명
                </th>
                <th scope="col" className="px-6 py-6">
                  탄창용량
                </th>
                <th scope="col" className="px-6 py-6">
                  RPM
                </th>
                <th scope="col" className="px-6 py-6">
                  피해량
                </th>
                <th scope="col" className="px-6 py-6">
                  DPS
                </th>
                <th
                  scope="col"
                  className="px-6 py-6  bg-division-color text-division-dark "
                >
                  조준기
                </th>
                <th
                  scope="col"
                  className="px-6 py-6 bg-division-color text-division-dark "
                >
                  총구
                </th>
                <th
                  scope="col"
                  className="px-6 py-6 bg-division-color text-division-dark "
                >
                  탄창
                </th>
                <td
                  scope="col"
                  className="px-6 py-6 bg-division-color text-division-dark "
                >
                  총열<br></br>하단부
                </td>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
