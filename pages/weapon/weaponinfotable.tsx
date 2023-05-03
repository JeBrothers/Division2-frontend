import React from "react";
import WeaponJson from "../../public/weapons.json";

interface WeaponJsonDataDisplay {
  ASSAULT_RIFLES: AR[],
  LIGHT_MACHINE_GUNS: any[],
  SUBMACHINE_GUNS: any[],
  SHOTGUNS: any[],
  RIFLES: any[],
  MARKSMAN_RIFLES: any[],
  PISTOLS: any[]
}

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
  const DisplayData: WeaponJsonDataDisplay = WeaponJson

  const data = DisplayData.ASSAULT_RIFLES!.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.engName}</td>
        <td></td>
      </tr>
    );
  });
  // console.log(WeaponJson.ASSAULT_RIFLES[0].variant);
  console.log(WeaponJson)

  return (
    <>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    </>
  )
}