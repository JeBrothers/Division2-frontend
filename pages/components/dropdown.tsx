import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PrintMenu from "./printMenu";

interface DropdownProps {
  type: "Weapon" | "Gear" | "Skill";
}

function Dropdown(props: DropdownProps) {
  const router = useRouter();

  const [type, setType] = useState<string[]>();

  const TWeapon = ["무기 정보", "무기 부착물", "무기 특수 효과", "네임드/특급"];
  const TGear = [
    "브랜드 방어구",
    "기어 세트 방어구",
    "방어구 특수 효과",
    "네임드/특급",
  ];
  const TSkill = ["스킬 리스트", "스킬 정보"];

  useEffect(() => {
    if (props.type == "Weapon") {
      setType(TWeapon);
    } else if (props.type == "Gear") {
      setType(TGear);
    } else {
      setType(TSkill);
    }
  }, []); // 최초 렌더링시 무조건 1번 실행

  return <PrintMenu strArray={type} />;
}
export default Dropdown;
