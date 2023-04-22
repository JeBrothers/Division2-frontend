import Image from "next/image";
import React from "react";

interface TypeIconProps {
    active: string
    type: "optic" | "magazine" | "muzzle" | "underbarrel"
}

const Type = {
    "optic": "/icon-optic-black.png",
    "magazine": "/icon-magazine-black.png",
    "muzzle": "/icon-muzzle-black.png",
    "underbarrel": "/icon-underbarrel-black.png",
}
const ActiveType = {
    "optic": "/icon-optic-orange.png",
    "magazine": "/icon-magazine-orange.png",
    "muzzle": "/icon-muzzle-orange.png",
    "underbarrel": "/icon-underbarrel-orange.png"
}

function TypeIcon(props: TypeIconProps) {
    return (
        <>
            {props.active == props.type ?
                <Image
                    src={ActiveType[props.type]}
                    width={16}
                    height={16}
                />
                :
                <Image
                    src={Type[props.type]}
                    width={16}
                    height={16}
                />
            }
        </>
    )

}

export default React.memo(TypeIcon)