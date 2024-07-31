import React from "react";

interface SingleProps {
  currColor: Boolean;
  subject: string;
  fromEmail: string;
  toEmail: string;
  body: string;
  sentAt: string;
}
const SingleMail: React.FC<SingleProps> = ({
  currColor,
  subject,
  fromEmail,
  toEmail,
  body,
  sentAt,
}) => {
  const EmailBody = ({ body }: { body: string }) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: body }}
        className="text-slate-800 dark:text-gray-200"
      />
    );
  };

  return (
    <div className="mr-4  border border-gray-200 dark:border-gray-800 p-3 text-[14px] flex flex-col gap-2.5 text-left mb-3">
      <div className="flex justify-between">
        <p>{subject}</p>
        <p className="text-[#AEAEAE]">{sentAt}</p>
      </div>
      <p className="text-[#AEAEAE]">from : {fromEmail} </p>
      <p className="text-[#AEAEAE]">to : {toEmail}</p>
      {/* <p
        className={`${
          currColor ? "text-[#b7abab]" : "text-[#2a2626]"
        } w-[500px]`}
      >
        {
          body
            .split("<p>")
            .join("")
            .split("</p>")
            .join("")
            .split("<br/>")
            .join("")
            .split(",")[0]
        }{" "}
        ,
      </p>
      <p className={` text-gray-600 dark: w-[500px]`}>
        {body
          .split("<p>")
          .join("")
          .split("</p>")
          .join("")
          .split("<br/>")
          .join("")
          .split(",")
          .slice(1)}
      </p> */}
      <EmailBody body={body} />
    </div>
  );
};

export default SingleMail;
