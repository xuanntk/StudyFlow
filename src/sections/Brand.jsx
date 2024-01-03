import React from "react";
import { LuAlarmClock } from "react-icons/lu";

export default function Brand() {
  return (
    <div className="flex items-center p-4 pl-6 shadow-xl bg-[#111827]">
      <LuAlarmClock className=" mr-2 text-[#f472b6] text-3xl" />
      <span className="text-white  text-xl">STUDYFLOW</span>
    </div>
  );
}
