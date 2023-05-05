import React from "react";
import WeaponJson from "../../public/weapons.json";
import AssualtRifle from "../../public/WeaponinfoJson/assaultrifle.json";

interface AR {
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

export default function WeaponJsonDataDisplay() {
  const DisplayData: AR = AssualtRifle;

  const data = DisplayData.map((info) => {
    return (
      <tr className="bg-white border-b border-x ">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  border-x border-gray-200">
          {info.variant}
        </td>
        <td className="px-6 py-4 border-x border-gray-200">{info.name}</td>
        <td className="px-6 py-4 border-x border-gray-200">
          {info.baseMagSize}
        </td>
        <td className="px-6 py-4 border-x border-gray-200">{info.rpm}</td>
        <td className="px-6 py-4 border-x border-gray-200">{info.damage}</td>
        <td className="px-6 py-4 border-x border-gray-200">{info.dps}</td>
        <td className="px-6 py-4 text-center border-x border-gray-200">
          {info.optics}
        </td>
        <td className="px-6 py-4 text-center border-x border-gray-200">
          {info.muzzle}
        </td>
        <td className="px-6 py-4 text-center border-x border-gray-200">
          {info.magazine}
        </td>
        <td className="px-6 py-4 text-center border-x border-gray-200">
          {info.underbarrel}
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="flex relative overflow-x-auto justify-center">
        <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t  border-gray-200 text-center ">
          <thead className="text-xs text-white uppercase  bg-division-dark dark:bg-gray-700 dark:text-gray-400">
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
                className="px-6 py-6 bg-division-color text-division-dark whitespace-nowrap"
              >
                조준기
              </th>
              <th
                scope="col"
                className="px-6 py-6 bg-division-color text-division-dark whitespace-nowrap"
              >
                총구
              </th>
              <th
                scope="col"
                className="px-6 py-6 bg-division-color text-division-dark whitespace-nowrap"
              >
                탄창
              </th>
              <td
                scope="col"
                className="px-6 py-6 bg-division-color text-division-dark whitespace-nowrap"
              >
                총열 하단부
              </td>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    </>
  );
}
