import Image from "next/image";
import React from "react";

interface WeaponTypeIconProps {
  active: string;
  type:
    | "assultrifle"
    | "rifle"
    | "marksmanrifle"
    | "submachinegun"
    | "shotgun"
    | "lightmachinegun"
    | "pistol";
}

const Type = {
  assultrifle: "/weapon/icon-assultrifle-black.png",
  rifle: "/weapon/icon-rifle-black.png",
  marksmanrifle: "/weapon/icon-mmr-black.png",
  submachinegun: "/weapon/icon-smg-black.png",
  shotgun: "/weapon/icon-shotgun-black.png",
  lightmachinegun: "/weapon/icon-lmg-black.png",
  pistol: "/weapon/icon-pistol-black.png",
};
const ActiveType = {
  assultrifle: "/weapon/icon-assultrifle-orange.png",
  rifle: "/weapon/icon-rifle-orange.png",
  marksmanrifle: "/weapon/icon-mmr-orange.png",
  submachinegun: "/weapon/icon-smg-orange.png",
  shotgun: "/weapon/icon-shotgun-orange.png",
  lightmachinegun: "/weapon/icon-lmg-orange.png",
  pistol: "/weapon/icon-pistol-orange.png",
};

function TypeIcon(props: WeaponTypeIconProps) {
  return (
    <>
      {props.active == props.type ? (
        <Image src={ActiveType[props.type]} width={20} height={20} />
      ) : (
        <Image src={Type[props.type]} width={20} height={20} />
      )}
    </>
  );
}

export default React.memo(TypeIcon);
