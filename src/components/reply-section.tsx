import { ChevronDown, Reply } from "lucide-react";
import React, { useEffect, useState } from "react";
// import SingleMail from "./SingleMail";
import SingleMail from "./each-mail";
import SendReply from "./reply";
// import SendReply from "./SendReply";

interface replyProps {
  currColor: Boolean;
  singleMail: any;
}

const ReplySection: React.FC<replyProps> = ({ currColor, singleMail }) => {
  const [showReply, setShowReply] = useState<Boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "r" || event.key === "R") {
        setShowReply(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showReply]);

  return (
    <div className="w-[800px] h-[600px]  flex justify-between flex-col ">
      <div className=" relative w-[800px] flex justify-between flex-col ">
        <div className="flex h-[70px] border border-gray-200 dark:border-gray-800 py-3 pl-4 border-t-0 border-l-0">
          <div className="text-left w-full">
            <h1 className="text-[14px]">
              {singleMail && singleMail[0]?.fromName}
            </h1>
            <p className="text-[12px] text-gray-400">
              {singleMail && singleMail[0]?.toEmail}
            </p>
          </div>
          <div className="flex justify-end mr-6  gap-4 h-8 my-2 w-full text-right">
            <div
              className={`flex justify-center gap-2 p-2 items-center border border-gray-200 rounded dark:border-gray-800 `}
            >
              <p className="w-3 h-3 rounded-3xl bg-yellow-600"></p>
              <p className="text-[12px]">Meeting Completed</p>
              <ChevronDown />
            </div>
            <div
              className={` flex justify-center p-2 items-center border border-gray-200 rounded dark:border-gray-800`}
            >
              <p className="text-[12px]">Move</p>
              <ChevronDown className="h-4" />
            </div>
            <div
              className={` flex justify-center gap-2 p-2 items-center border border-gray-200 rounded dark:border-gray-800`}
            >
              <p className="mb-2">...</p>
            </div>
          </div>
        </div>
        <div className="py-3 pl-4 ">
          {singleMail?.length > 0 &&
            singleMail?.map((item: any) => {
              return (
                <SingleMail currColor={currColor} {...item} key={item.id} />
              );
            })}
          <h2 className="text-[10px] mt-2 mb-3">Today</h2>
        </div>
        {showReply && (
          <div
            className={`absolute mt-[134px] w-[768px] ml-4 rounded-2xl  z-10  overflow-hidden  h-[450px] ${
              currColor ? "bg-[#141517]" : "bg-white"
            }  border border-gray-700`}
          >
            <SendReply
              currColor={currColor}
              singleMail={singleMail[0]}
              handleCancel={() => setShowReply(!showReply)}
            />
          </div>
        )}
      </div>

      <div className="w-[100px] h-10 bg-[#4B63DD]  ml-4 mb-3 rounded gap-1 flex justify-center items-center">
        <Reply color="white" />
        <button className="text-white" onClick={() => setShowReply(!showReply)}>
          Reply
        </button>
      </div>
    </div>
  );
};

export default ReplySection;
