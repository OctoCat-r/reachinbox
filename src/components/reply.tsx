"use client";
import { ChevronDown, Eye, Reply, X, Zap, Bold, Link } from "lucide-react";
import React, { MouseEventHandler, useEffect, useState } from "react";
// import { postMailMasseges } from "../actions/actions";
import { postMailMessages } from "@/action";

// import { Toolbar } from "./toolbar";

interface sendReplyProps {
  handleCancel: MouseEventHandler<HTMLDivElement>;
  currColor: Boolean;
  singleMail: any;
}

interface initalstateType {
  toName: string;
  to: string;
  from: string;
  fromName: string;
  subject: string;
  body: string;
  references: any[];
  inReplyTo: string;
}

const initalState: initalstateType = {
  toName: "",
  to: "",
  from: "",
  fromName: "",
  subject: "",
  body: "",
  references: [],
  inReplyTo: "",
};
const SendReply: React.FC<sendReplyProps> = ({
  currColor,
  handleCancel,
  singleMail,
}) => {
  const [formData, setFormData] = useState(initalState);

  const [token, setToken] = useState<string | null>("");

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    let token = window.localStorage.getItem("reachinbox-auth");
    token = token ? JSON.parse(token) : "";
    setToken(token!);
    setFormData({
      ...formData,
      toName: singleMail.fromName,
      fromName: singleMail.toName,
      to: singleMail.fromEmail,
      from: singleMail.toEmail,
      references: [singleMail.references],
      inReplyTo: singleMail.inReplyTo,
    });
  }, []);
  console.log(token);

  const handlesubmit = () => {
    console.log(formData, "data");
    console.log(token);
    postMailMessages(singleMail.threadId, formData, token!)
      .then((res: any) => {
        alert("Reply has been Sended");
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-[#23272C] border-0">
      <div className="h-[88%]">
        <div
          className={`h-10 flex justify-between px-8 py-2 text-[16px] bg-gray-100 dark:bg-[#23272C]`}
        >
          <p>Reply</p>
          <p onClick={handleCancel} className="cursor-pointer">
            <X />
          </p>
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 " />
        <div
          className={`text-[12px] h-10 flex pt-2 px-8 py-2   items-center gap-2 bg-white dark:bg-[#141517]`}
        >
          <p className="text-gray-400">To :- </p>
          <input
            type="text"
            placeholder=""
            value={formData.to}
            className={`bg-white dark:bg-[#141517] outline-none`}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          />
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 " />
        <div
          className={`text-[12px] h-10 flex pt-2 px-8 py-2  items-center gap-2 bg-white dark:bg-[#141517]`}
        >
          <p className="text-gray-400">From :- </p>
          <input
            type="text"
            placeholder=""
            value={formData.from}
            className={`bg-white dark:bg-[#141517] outline-none`}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          />
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 " />
        <div
          className={`text-[12px] h-10 flex pt-2 px-8 py-2 items-center gap-2 bg-white dark:bg-[#141517]`}
        >
          <p className="text-gray-400">Subject :- </p>
          <input
            type="text"
            placeholder=""
            value={formData.subject}
            className={`bg-white dark:bg-[#141517] outline-none`}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 " />
        <div className={`text-[12px] p-2 text-left bg-white dark:bg-[#141517]`}>
          <textarea
            placeholder="Hello John..."
            value={formData.body}
            className={`ml-6   h-[250px] w-[500px] outline-none bg-white dark:bg-[#141517]`}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>
        {/* <div className={`text-[12px] p-2 text-left bg-white dark:bg-[#141517]`}>
          <ReactQuill
            theme="snow"
            
            value={formData.body}
            onChange={(value: string) =>
              setFormData({ ...formData, body: value })
            }
          />
        </div> */}
      </div>
      <div className="h-[54px] w-full ">
        <hr className="border-t border-gray-300 dark:border-gray-700 mb-2 " />
        <div className="flex text-[12px] gap-1 mb-4">
          <div className="w-[100px] h-8 bg-[#4B63DD]  flex items-center ml-4 mb-3 rounded  justify-center gap-2 cursor-pointer ">
            <button className="text-white" onClick={handlesubmit}>
              Send
            </button>
            <ChevronDown color={"white"} />
          </div>
          <div className="w-[100px] h-8 mb-3 rounded gap-1 flex justify-center  cursor-pointer items-center">
            <Zap className="h-4" />
            <button>Variables</button>
          </div>
          <div className="w-[120px] h-8 mb-3 rounded gap-1 flex justify-center  cursor-pointer items-center">
            <Eye className="h-4" />
            <button>Preview Email</button>
          </div>
          <Bold className="h-4" />
          <Link />
        </div>
      </div>
    </div>
  );
};

export default SendReply;
