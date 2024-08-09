"use client";
import EmptySectionImage from "@/components/image-svg";
import React, { useEffect, useState } from "react";

import { deleteMailResponse, getMailList, getMailMessages } from "@/action";

import InboxEmailCard from "@/components/inbox-email-card";
import InboxHeader from "@/components/inbox-header";
import { Modal } from "@/components/modal";
import SearchBar from "@/components/searchbar";
import { ChevronDown } from "lucide-react";
import ReplySection from "@/components/reply-section";
import UserDetails from "@/components/user-details";
// import { render } from "react-dom";
const Page = () => {
  //   const [token, setToken] = useState<string | null>(null);
  const [mail, setMail] = useState<[] | null>([]);
  const [singleMail, setSingleMail] = useState<any | null>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showEmailDesktop, setShowEmailDesktop] = useState(0);
  const [render, setRender] = useState<Boolean>(false);
  const currColor = true;
  let token = window.localStorage.getItem("reachinbox-auth");
  token = token ? JSON.parse(token) : "";

  const deleteEmail = () => {
    const id: number = singleMail[0].threadId;
    if (token) {
      deleteMailResponse(id, token)
        .then((res) => {
          alert(`The ${id} has been Deleted Successful`);
          setRender(!render);
          closeModal();
        })
        .catch((err) => alert("Error Please try again"));
    } else {
      console.error("Token is null");
    }
  };

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };
  useEffect(() => {}, [singleMail, showEmailDesktop, isModalOpen]);

  const handleChangeEmail = (id: number) => {
    if (token) {
      getMailMessages(id, token)
        .then((messages: any) => {
          setSingleMail(messages);
        })
        .catch((error: any) => console.error("Error:", error));
    } else {
      console.error("token is null");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "d" || event.key === "D") {
        openModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  // const handleChange = (index: number) => setShowEmailDesktop(index);

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
  console.log(mail);
  useEffect(() => {
    fetchData();
  }, []);

  const mailLength = mail?.length || 0;

  console.log(mail, "hello i ma in mail");
  return (
    <div className={`flex border h-screen `}>
      <div className="w-[275px] ml-5  pr-3 border border-r-gray-200 dark:border-r-gray-800 border-l-0">
        <div className="flex justify-between mt-4 items-center">
          <InboxHeader currColor={currColor} />
        </div>
        <p className="text-left  text-[14px] mt-2.5">
          {mail?.length} / {mail?.length}{" "}
          <span className=" text-[#7F7F7F]">Inboxes selected</span>
        </p>
        <div className=" mt-2 h-11 ">
          <SearchBar />
        </div>
        <div className="flex justify-between  text-[14px]">
          <div className="flex items-center gap-2 ">
            <p
              className={`text-blue-500 w-8 h-7 p-1 rounded-2xl text-center
               dark:bg-[#25262B] bg-[#e1e7ee]
              `}
            >
              {mail?.length}
            </p>
            <p>New Replies</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Newest</p>
            <ChevronDown />
          </div>
        </div>
        <hr className="mt-2.5" />
        <div className=" text-left">
          {mailLength > 0 &&
            mail?.map((item: any) => {
              return (
                <div key={item.id}>
                  <InboxEmailCard
                    currColor={currColor}
                    {...item}
                    handleChangeEmail={handleChangeEmail}
                  />
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
      <ReplySection currColor={currColor} singleMail={singleMail} />
      <UserDetails singleMail={singleMail} />

      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="w-[440px] h-[240px] text-white flex items-center justify-center ">
            <div className=" h-full ">
              <h1 className="text-[24px] font-bold mt-8  text-center">
                Are you Sure ?
              </h1>
              <p className="mt-8 text-[#E8E8E8]">
                Your selected email will be deleted.
              </p>
              <div className="mt-8 flex justify-center gap-5 ">
                <button
                  className="w-[120px] h-12 bg-[#25262B] "
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="w-[140px] h-12 bg-[#FA5252] "
                  onClick={deleteEmail}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      {/* <UserDetails currColor={currColor} /> */}
    </div>
  );
};

export default Page;
