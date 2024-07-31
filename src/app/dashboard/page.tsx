"use client";
import EmptySectionImage from "@/components/image-svg";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as jwt from "jsonwebtoken";
import { getMailList, getMailMessages } from "@/action";
import BlankScreen from "@/components/blank-screen";
const Page = () => {
  //   const [token, setToken] = useState<string | null>(null);
  const [mail, setMail] = useState<[] | null>([]);
  const [singleMail, setSingleMail] = useState<any | null>({});
  let token: string | null = null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    token = location.search.split("?token=")?.join("");
    console.log(token);
    if (token) {
      let ParseData = jwt.decode(token, { complete: true }) as any;
      localStorage.setItem("reachinbox-auth", JSON.stringify(token));
      console.log(ParseData);
      const { header, payload, signature } = ParseData;
      const { user } = payload;
      localStorage.setItem(
        "reachinbox-auth-firstname",
        JSON.stringify(user.firstname)
      );
      localStorage.setItem(
        "reachinbox-auth-lastname",
        JSON.stringify(user.lastName)
      );
      localStorage.setItem("reachinbox-auth-email", JSON.stringify(user.email));
    }
    fetchData();
  }, [token]);
  const fetchData = () => {
    console.log(token);
    token &&
      getMailList(token)
        .then((res) => {
          console.log(res);
          setMail(res);
          if (res?.length > 0) {
            setSingleMail(res[0]);
            const id: number = res[0]?.threadId;
            if (id !== undefined && token !== null)
              return getMailMessages(id, token);
            else console.log("error id not found");
          } else console.log("Email not Found");
        })
        .then((messages) => setSingleMail(messages))
        .catch((error) => console.error("Error:", error));
  };
  console.log(mail, " hello from dashboard");
  return <BlankScreen />;
};

export default Page;
