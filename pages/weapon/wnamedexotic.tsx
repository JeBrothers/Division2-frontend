import type { NextPage } from "next";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { cls } from "../../libs/utils";
import WeaponTypeIcon from "../components/WeaponTypeIcon";
import ArNETable from "./exoticnamed/ExoticNamed-ar";

interface WeaponNamedTab {
  assultrifle?: string;
  rifle?: string;
  marksmanrifle?: string;
  submachinegun?: string;
  shotgun?: string;
  lightmachinegun?: string;
  pistol?: string;
}

const WeaponNamedTab: NextPage = () => {
  const [weaponNamedInfo, setWeaponNameInfo] = useState(false);
  const { reset } = useForm<WeaponNamedTab>();
  const [type, setType] = useState<
    | "assultrifle"
    | "rifle"
    | "marksmanrifle"
    | "submachinegun"
    | "shotgun"
    | "lightmachinegun"
    | "pistol"
  >("assultrifle");

  const onArClick = () => {
    reset();
    setType("assultrifle");
  };
  const onRifleClick = () => {
    reset();
    setType("rifle");
  };
  const onMarksManRifleClick = () => {
    reset();
    setType("marksmanrifle");
  };
  const onSmgClick = () => {
    reset();
    setType("submachinegun");
  };
  const onShotgunClick = () => {
    reset();
    setType("shotgun");
  };
  const onLmgClick = () => {
    reset();
    setType("lightmachinegun");
  };
  const onPistolClick = () => {
    reset();
    setType("pistol");
  };
  useEffect(() => {
    setWeaponNameInfo(true);
  }, []);

  return (
    <>
      {weaponNamedInfo && (
        <div className="">
          <Tabs>
            <TabList className=" mb-4 border-b border-gray-200 flex flex-wrap text-sm font-medium text-center justify-center">
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "assultrifle"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onArClick}
                >
                  <WeaponTypeIcon active={type} type="assultrifle" />
                  <span className="ml-2 text-base ">돌격소총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "rifle"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onRifleClick}
                >
                  <WeaponTypeIcon active={type} type="rifle"></WeaponTypeIcon>
                  <span className="ml-2 text-base ">소총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "marksmanrifle"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onMarksManRifleClick}
                >
                  <WeaponTypeIcon active={type} type="marksmanrifle" />
                  <span className="ml-2 text-base ">지정사수소총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "lightmachinegun"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onLmgClick}
                >
                  <WeaponTypeIcon active={type} type="lightmachinegun" />
                  <span className="ml-2 text-base ">경기관총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "submachinegun"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onSmgClick}
                >
                  <WeaponTypeIcon active={type} type="submachinegun" />
                  <span className="ml-2 text-base ">기관단총</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "shotgun"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onShotgunClick}
                >
                  <WeaponTypeIcon active={type} type="shotgun" />
                  <span className="ml-2 text-base ">샷건</span>
                </button>
              </Tab>
              <Tab className="mr-2" role="presentation">
                <button
                  className={cls(
                    "flex items-center justify-center p-4 border-b-2 rounded-t-lg",
                    type === "pistol"
                      ? "border-division-orange text-division-orange"
                      : "border-transparent   hover:text-gray-600 hover:border-gray-300 "
                  )}
                  onClick={onPistolClick}
                >
                  <WeaponTypeIcon active={type} type="pistol" />
                  <span className="ml-2 text-base ">권총</span>
                </button>
              </Tab>
            </TabList>

            {/* 돌격소총 */}
            <TabPanel>
              <ArNETable />
            </TabPanel>

            {/* 소총 */}
            <TabPanel></TabPanel>

            {/* 지정사수소총 */}
            <TabPanel></TabPanel>

            {/* 경기관총 */}
            <TabPanel></TabPanel>

            {/* 기관단총 */}
            <TabPanel></TabPanel>

            {/* 샷건 */}
            <TabPanel></TabPanel>

            {/* 권총 */}
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default WeaponNamedTab;
