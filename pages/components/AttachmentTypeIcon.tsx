import Image from "next/image";
import React from "react";

interface TypeIconProps {
  active: string;
  type: "optic" | "magazine" | "muzzle" | "underbarrel";
}

const Type = {
  optic: "/attachment/icon-optic-black.png",
  magazine: "/attachment/icon-magazine-black.png",
  muzzle: "/attachment/icon-muzzle-black.png",
  underbarrel: "/attachment/icon-underbarrel-black.png",
};
const ActiveType = {
  optic: "/attachment/icon-optic-orange.png",
  magazine: "/attachment/icon-magazine-orange.png",
  muzzle: "/attachment/icon-muzzle-orange.png",
  underbarrel: "/attachment/icon-underbarrel-orange.png",
};

function TypeIcon(props: TypeIconProps) {
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
