import { Send } from "lucide-react";
import React from "react";
type inboxProps = {
  currColor: Boolean;
  fromEmail: string;
  subject: string;
  id: number;
  sentAt: string;
  handleChangeEmail: any;
  threadId: number;
};
const InboxEmailCard: React.FC<inboxProps> = ({
  currColor,
  threadId,
  id,
  fromEmail,
  subject,
  sentAt,
  handleChangeEmail,
}) => {
  // const formattedDate = sentAt.toDateString();
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };

  const date = new Date(sentAt);
  console.log(date, "hello date");
  const formattedDate = date.toLocaleDateString("en-US", dateOptions);
  return (
    <div
      className="w-full pt-3 pb-3 pl-2 mb-5"
      onClick={() => handleChangeEmail(threadId)}
    >
      <div className="flex gap-4 justify-between text-[12px]">
        <p>{fromEmail}</p>
        <p className="text-gray-400">{formattedDate}</p>
      </div>
      <p className="text-xs text-gray-400">{subject}</p>
      <div className="flex text-[10px] gap-3 mt-2">
        <div
          className={`w-[85px] h-4 flex justify-around items-center border border-gray-100 rounded-lg bg-slate-100 px-2 dark:bg-slate-800 dark:border-gray-800`}
        >
          <p className="w-2 h-2 rounded-3xl bg-green-600"></p>
          <p className={`${currColor ? "text-green-400" : "text-blue-700"}`}>
            Interested
          </p>
        </div>
        <div
          className={`w-[112px] h-4 p-1 gap-1 flex  items-center border border-gray-100  rounded-xl bg-slate-100 dark:bg-slate-800 text-gray-500 dark:border-gray-800 dark:text-gray-300`}
        >
          <Send className="h-4 w-2 ml-1" />
          <p>Campaign Name</p>
        </div>
      </div>
    </div>
  );
};

export default InboxEmailCard;
