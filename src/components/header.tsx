import { ChevronDown } from "lucide-react";
import React from "react";
import ThemeSwitcher from "./toggle-button";

const Workspace = () => {
  return (
    <div
      className={` h-[64px] flex justify-between py-4 pl-8 
        "bg-[#1F1F1F]" : "bg-white"
       border  "border-gray-700" : "border-gray-300"} `}
    >
      <p
        className={`w-full ml-10 text-left text-2xl "text-white-900" : "text-black-900"
        `}
      >
        Onebox
      </p>
      <div className="w-[210px] h-8 mr-5 flex justify-center items-center gap-5">
        <ThemeSwitcher />
        <div className="flex justify-center items-center gap-2">
          <p className="text-[12px]">Aman's Workspace </p>
          <span>
            {" "}
            <ChevronDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
