import type { NextPage } from "next";

import { cls } from "../../libs/utils";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { useForm } from "react-hook-form";

import TypeIcon from "../components/AttachmentTypeIcon";
import WeaponAccessoryTab from "./weaponaccessoryTab";

interface WeaponAccessory {
  optic?: string;
  magazine?: string;
  muzzle?: string;
  underbarrel?: string;
}

const WeaponAccessory: NextPage = () => {
  return (
    <>
      <WeaponAccessoryTab />
    </>
  );
};

export default WeaponAccessory;
