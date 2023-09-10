import type { NextPage } from "next";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { cls } from "../../libs/utils";
import WeaponTypeIcon from "../components/WeaponTypeIcon";
import RifleTable from "./weaponinfotable/weaponinfo-rifle";
import MmrTable from "./weaponinfotable/weaponinfo-mmr";
import LmgTable from "./weaponinfotable/weaponinfo-lmg";
import SmgTable from "./weaponinfotable/weaponinfo-smg";
import SgTable from "./weaponinfotable/weaponinfo-sg";
import pistolTable from "./weaponinfotable/weaponinfo-pistol";
import ArExoticTable from "./weaponExotic/weaponExotic-ar";
import RifleExoticTable from "./weaponExotic/weaponExotic-rifle";
import MmrExoticTable from "./weaponExotic/weaponExotic-mmr";
import LmgExoticTable from "./weaponExotic/weaponExotic-lmg";
import SmgExoticTable from "./weaponExotic/weaponExotic-smg";
import SgExoticTable from "./weaponExotic/weaponExotic-sg";
import pistolExoticTable from "./weaponExotic/weaponExotic-hg";
import PistolExoticTable from "./weaponExotic/weaponExotic-hg";

interface WeaponExotic {
  assultrifle?: string;
  rifle?: string;
  marksmanrifle?: string;
  submachinegun?: string;
  shotgun?: string;
  lightmachinegun?: string;
  pistol?: string;
}

const WeaponExotic: NextPage = () => {
  const [weaponInfo, setWeapoininfo] = useState(false);
  const { reset } = useForm<WeaponExotic>();
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
  const onpistolClick = () => {
    reset();
    setType("pistol");
  };
  useEffect(() => {
    setWeapoininfo(true);
  }, []);

  return (
    <>
      {weaponInfo && (
        <div className="flex flex-col h-full">
          <Tabs>
            <div className="fixed top-24 left-0 right-0 z-20 overflow-y-auto bg-white">
              <TabList className=" mb-2 border-b border-gray-200 flex flex-wrap text-sm font-medium text-center justify-center">
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
                    onClick={onpistolClick}
                  >
                    <WeaponTypeIcon active={type} type="pistol" />
                    <span className="ml-2 text-base ">권총</span>
                  </button>
                </Tab>
              </TabList>
            </div>

            {/* 돌격소총 */}
            <TabPanel>
              <div className="mt-20">
                <ArExoticTable />
              </div>
            </TabPanel>

            {/* 소총 */}
            <TabPanel>
              <div className="mt-20">
                <RifleExoticTable />
              </div>
            </TabPanel>

            {/* 지정사수소총 */}
            <TabPanel>
              <div className="mt-20">
                <MmrExoticTable />
              </div>
            </TabPanel>

            {/* 경기관총 */}
            <TabPanel>
              <div className="mt-20">
                <LmgExoticTable />
              </div>
            </TabPanel>

            {/* 기관단총 */}
            <TabPanel>
              <div className="mt-20">
                <SmgExoticTable />
              </div>
            </TabPanel>

            {/* 샷건 */}
            <TabPanel>
              <div className="mt-20">
                <SgExoticTable />
              </div>
            </TabPanel>

            {/* 권총 */}
            <TabPanel>
              <div className="mt-20">
                <PistolExoticTable />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default WeaponExotic;
