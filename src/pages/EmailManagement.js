import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import styles from "../styles/emailsTabs.module.css";
import Email from "../components/Email";
import Checkbox from "../components/Checkbox";
import Footer from "../components/Footer";

import {
  faUser,
  faCaretDown,
  faPaperclip,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faComment,
  faFaceSmile,
  faImage,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Messages() {
  const contacts = [
    {
      id: "1",
      name: "abdelghxni@gmail.com",
    },
    {
      id: "2",
      name: "abdelghxni@hotmail.com",
      checked: false,
    },
    {
      id: "3",
      name: "abdelghxni@bigbang.com",
    },
    {
      id: "4",
      name: "abdelghxni@inpt.ac.ma",
      checked: false,
    },
    {
      id: "5",
      name: "abdelghxni@mail.com",
    },
  ];

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(contacts);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <div className="w-[96%] text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full flex flex-col ml-6 text-[#033362] font-semibold">
          <div className="flex justify-between items-center w-full">
            <div className="px-2">Dashboard</div>
            <div className="px-2">
              <FontAwesomeIcon icon={faComment} />
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="w-[65%]">
              <input className="w-full max-w-full bg-[#fff] rounded-full h-8" />
            </div>
            <div className="px-2 min-w-fit">11:11 AM - August 21 ,2022</div>
            <div className="px-2">
              <span className="text-[#00AEEF]">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className="bg-[white] grow p-6 pt-0 mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
            <div className="flex h-full">
              <div className="h-full w-[78%]">
                <div class={`${styles.seasonTabs} divide-y`}>
                  <div className="w-[29%] py-[6px] px-[20px] border-b-[1px] flex items-center justify-between">
                    <div className="h-fit p-2 bg-[#fff] border-[1px] rounded-md font-[300] text-[13px] text-[#44444F]">
                      Primary
                    </div>
                    <div className="bg-[#fff] font-[300] cursor-pointer text-[#BFBFBF]">
                      <FontAwesomeIcon icon={faRotateLeft} />
                    </div>
                  </div>
                  <Email tabId="1" subject="Email Subject Number 1" />
                  <Email tabId="2" subject="Email Subject Number 2" />
                  <Email tabId="3" subject="Email Subject Number 3" />
                  <Email tabId="4" subject="Email Subject Number 4" />
                </div>
                <div className="ml-[30%] left-[460px] bottom-[-60px] flex items-center">
                  <div className="text-[13px] text-[#fff] cursor-pointer bg-[#0388CC] font-[400] h-[40px] rounded-md flex items-center py-[2px] px-2 mx-1">
                    Send Message
                  </div>
                  <div className="text-[#bfbfbf] text-[16px] flex items-center">
                    <div className="cursor-pointer mx-1">
                      <FontAwesomeIcon icon={faPaperclip} />
                    </div>
                    <div className="cursor-pointer mx-1">
                      <FontAwesomeIcon icon={faFaceSmile} />
                    </div>
                    <div className="cursor-pointer mx-1">
                      <FontAwesomeIcon icon={faImage} />
                    </div>
                  </div>
                  <div className="w-[460px] mx-1">
                    <input
                      className="rounded-md w-full border-[#ccc] text-[13px] text-[#000] font-[400] h-[40px]"
                      placeholder="write a message..."
                      type="text"
                    />
                  </div>
                  <div className="cursor-pointer mx-4">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                </div>
              </div>
              <div className="flex text-[14px] px-6 py-20 text-[#171725] h-full w-[22%]">
                <div className="pr-2">All</div>{" "}
                <div>
                  <div>
                    <Checkbox
                      type="checkbox"
                      name="selectAll"
                      id="selectAll"
                      handleClick={handleSelectAll}
                      isChecked={isCheckAll}
                    />
                    <span className="pl-4">Clients</span>
                  </div>
                  <div className="font-[400] text-[13px]">
                    {contacts.map(({ id, name }) => (
                      <div className="mt-4 flex items-center">
                        <Checkbox
                          key={id}
                          type="checkbox"
                          name={name}
                          id={id}
                          handleClick={handleClick}
                          isChecked={isCheck.includes(id)}
                        />{" "}
                        <span className="px-4 ml-4 py-[10px] w-[200px] bg-[#C4DBFF] py-1 rounded-xl">
                          {name}
                        </span>
                      </div>
                    ))}
                    {/* {isCheck.map((receiver) => (
                      <div>{receiver}</div>
                    ))} */}
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Messages;
