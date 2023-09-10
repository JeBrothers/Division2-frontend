import React from "react";

import AR from "../../../public/WeaponinfoJson/assaultrifle.json";

interface ARE {
  variant?: string;
  engName?: string;
  name?: string;
  exoticmuzzle?: string;
  exoticunderbarrel?: string;
  exoticmagazine?: string;
  exoticoptics?: string;
  dlc?: boolean;
  exotic?: boolean;
  flavourText?: string;
  talenttitle?: string;
  talentdesc?: string;
  talenttitle2?: string;
  talentdesc2?: string;
  droplocation?: string;
}

export default function ArExoticTable() {
  const DisplayData: ARE[] = AR;

  const NamedData = DisplayData.filter((info) => info.exotic);

  const data = NamedData.map((info, index) => {
    const isSameVariant =
      index > 0 && info.variant === NamedData[index - 1].variant;

    return (
      <tr
        className="bg-white border-b border-x mb-10 font-bold "
        style={{ whiteSpace: "pre-line" }}
      >
        {!isSameVariant && (
          <td
            className="w-[100px] px-4  whitespace-pre-line text-gray-900 border-x border-gray-200 "
            rowSpan={NamedData.filter((x) => x.variant === info.variant).length}
          >
            {info.variant}
          </td>
        )}
        <td
          className={`w-[120px] px-2  border-x border-gray-200 text-sm text-division-orange`}
        >
          {info.name}
        </td>
        {/* DLC 유무에 따른 이미지 표시 */}
        <td className="w-auto border-x border-gray-200 px-1 ">
          {info.dlc ? (
            <img src="/asset/DLC/DLC.png" alt="Dlc" className="w-12 h-12 " />
          ) : (
            <img
              src="/asset/DLC/NO DLC.png"
              alt="noDlc"
              className="w-12 h-12"
            />
          )}
        </td>
        {/* 특수효과 열 */}
        <td className="w-[480px] px-4 space-y-1 py-2 border-x border-gray-200 text-xs">
          {info.talenttitle && (
            <div className=" text-orange-400">{info.talenttitle}</div>
          )}

          {info.talentdesc && <div>{info.talentdesc}</div>}
          {info.talenttitle2 && (
            <div className=" text-orange-400 pt-3">{info.talenttitle2}</div>
          )}

          {info.talentdesc2 && <div>{info.talentdesc2}</div>}

          <div className="pl-28 py-8 text-left space-y-1">
            {info.exoticmuzzle && <div>{info.exoticmuzzle}</div>}
            {info.exoticmagazine && <div>{info.exoticmagazine}</div>}
            {info.exoticunderbarrel && <div>{info.exoticunderbarrel}</div>}
            {info.exoticoptics && <div>{info.exoticoptics}</div>}
          </div>
        </td>

        <td className="w-[150px] px-2 py-2 border-x border-gray-200 text-xs">
          {info.droplocation}
        </td>
        <td className="w-[450px] px-2 py-2 border-x text-xs border-gray-200 leading-6">
          {info.flavourText}
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="flex relative overflow-x-auto justify-center  pb-2 ">
        <div className="max-h-[750px] overflow-y-auto">
          <div className=" flex justify-end font-extrabold space-x-2"></div>
          <table className="w-auto  text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 text-center">
            {/* <thead className="sticky top-0 z-10 text-xs text-white uppercase bg-division-dark font-semibold"> */}
            <thead className=" text-xs text-white uppercase bg-division-dark font-semibold">
              {/* 테이블 헤더 */}
              <tr>
                <th scope="col" className="px-6 py-6">
                  총기종류
                </th>
                <th scope="col" className="px-6">
                  총기명
                </th>
                <th scope="col" className="px-4">
                  DLC
                </th>
                <th scope="col" className="px-6">
                  특수효과
                </th>
                <th scope="col" className="px-2">
                  획득처
                </th>
                <th scope="col" className="px-6">
                  배경문구
                </th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
