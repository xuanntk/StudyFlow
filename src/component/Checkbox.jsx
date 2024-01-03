import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function Checkbox() {
  return (
    <div>
      {true ? (
        <div className="w-5 h-5 rounded-full border-[1.5px] border-[#fafafa] flex"></div>
      ) : (
        <div className="w-5 h-5 rounded-full border-[1.5px] border-[#fafafa] flex">
          <FaCheck className="text-[10px] font-bold m-auto text-[#fafafa]" />
        </div>
      )}
    </div>
  );
}
