import React from "react";
import exercise from "../data/img/exercise.png";
import { dataImg } from "../data/api/Image.js";
import { CiStar } from "react-icons/ci";
import Checkbox from "./Checkbox";

export default function TaskItem({ data, setList }) {
  return (
    <div>
      {data.map((e) => (
        <div className="flex items-center gap-2 rounded-xl mx-[5%] px-[12px] py-[7px] relative shadow-md my-[10px] bg-[#111827] hover:opacity-70">
          <Checkbox />
          <img
            src={dataImg[2]}
            alt=""
            className="w-[35px] h-[35px] bg-[#34d399] rounded-lg p-[3px]"
          />
          <div>
            <p className="font-medium text-[#fafafa]">{e}</p>
            <span className="text-xs py-[2px] px-[4px] text-[#059669] bg-[#bbf7d0] rounded-lg mr-[5px]">
              Thể thao
            </span>
            <span className="text-[#a1a1aa]">5pm</span>
          </div>
          {false ? (
            <CiStar className="absolute right-2 text-[23px] hover:text-[#f59e0b]" />
          ) : (
            <CiStar className="absolute right-2 text-[23px] text-[#f59e0b]" />
          )}
        </div>
      ))}
    </div>
  );
}
