import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { IoMdSend } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

export default function Task() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  console.log(list);

  const handleSubmit = (event) => {
    event.preventDefault();
    setList((pre) => [...pre, input]);
    setInput("");
  };
  return (
    <div className="">
      <h1 className="font-bold text-lg my-5 text-white mx-[5%]">My Tasks</h1>
      <TaskItem data={list} setList={setList} />
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-2 w-[100%] h-[45px]"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="block box-border m-auto w-[90%] h-[100%] focus:outline-none rounded-lg bg-[#475569] text-[#fafafa] p-[2%] pr-[9%]"
        />
        <div className="flex items-center absolute top-[50%] right-[6%] -translate-y-[50%] gap-1">
          <FaTag className="text-[#fafafa]  p-[8px] text-[35px] rounded-md" />
          <FaClock className="text-[#fafafa]  p-[8px] text-[35px] rounded-md" />
          <button>
            <IoMdSend className="text-[#fafafa] bg-[#6d28d9] p-[8px] text-[35px] rounded-md" />
          </button>
        </div>
      </form>
    </div>
  );
}
