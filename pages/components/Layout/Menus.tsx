import React, { lazy } from "react";

interface MenusProps {
  active?: string;
  menu: "WeaponMenu" | "GearMenu" | "Skill" | "Attribute" | "Simulator";
  toggleMenu: () => void; // toggleMenu prop의 타입 지정
}

const MenuComponents: Record<string, React.LazyExoticComponent<any>> = {
  WeaponMenu: lazy(() => import("./Menus/WeaponMenu")),
  GearMenu: lazy(() => import("./Menus/GearMenu")),
  Skill: lazy(() => import("./Menus/SkillMenu")),
  Attribute: lazy(() => import("./Menus/AttributeMenu")),
  Simulator: lazy(() => import("./Menus/Simulator")),
};

// lazy 함수는 React의 코드 분할 (code splitting) 기능을 사용하여 동적으로 컴포넌트를 로드할 수 있게 해주는 함수
// lazy 함수를 사용하면 컴포넌트를 지연 로드할 수 있습니다. 컴포넌트를 import 함수로 감싸면 해당 컴포넌트는 필요할 때까지 로드되지 않습니다. 대신 첫 번째 렌더링 시에는 로딩 상태를 나타내는 임시 컴포넌트를 렌더링하고, 컴포넌트가 필요한 시점에 비동기적으로 로드됩니다. 이를 통해 초기 로딩 속도를 향상시킬 수 있습니다.
//  React.Suspense 컴포넌트를 사용하면 로딩 중에 대체 컨텐츠를 표시할 수 있습니다. 이렇게 함으로써 사용자는 컴포넌트가 로드되기를 기다리는 동안 로딩 상태를 시각적으로 알 수 있습니다.

function Menus(props: MenusProps) {
  const { menu, toggleMenu } = props;
  const MenuComponent = MenuComponents[menu];

  return <MenuComponent toggleMenu={toggleMenu} />; // toggleMenu prop을 전달
}

export default React.memo(Menus);
