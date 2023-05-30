import type { NextPage } from "next";

import WeaponInfoTab from "./weapoininfoTab";

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
  return (
    <>
      <WeaponInfoTab />
    </>
  );
};

export default WeaponInfo;
