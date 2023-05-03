import React from "react";
import WeaponJson from "../../public/weapons.json";

interface WeaponJsonDataDisplay {
  ASSALT_RIFLE: AR[];
}

interface AR {
  variant?: string;
  engName?: string;
  name: string;
  baseMagSize: number;
  moddedMagSize: number;
  rpm: number;
  reload: number;
  damage: number;
  dps: number;
  muzzle: boolean;
  underbarrel: boolean;
  magazine: boolean;
  optics: boolean;
  dlc: boolean;
  exotic: boolean;
  named: boolean;
  flavourText?: string;
}

export default function WeaponJsonDataDisplay() {
  const DisplayData = WeaponJson.map((info: any) => {
    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  });
  console.log(WeaponJson.ASSAULT_RIFLES[0].variant);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}
