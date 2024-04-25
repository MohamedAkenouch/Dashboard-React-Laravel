import React from 'react'
import styles from "../styles/emailsTabs.module.css";
import {
    faCircle,
    faArrowDown,
    faArrowUp,
    faUser,
    faCaretDown,
    faPaperclip,
    faRotateLeft,
    faFloppyDisk,
    faShare,
    faTrash,
    faEllipsis,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faBell,
    faComment,
    faFaceSmile,
    faImage,
    faPaperPlane,
  } from "@fortawesome/free-regular-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Email({tabId, subject}) {
  return (
    <div class={`${styles.seasonTab}`}>
                    <input
                      className={`${styles.radioInput}`}
                      type="radio"
                      id={tabId}
                      name="tab-group-1"
                    />
                    <label for={tabId} className="text-[13px]  font-[300]">
                      <div className="h-full label-content flex pr-3 py-2 cursor-pointer rounded-xl">
                        <div className="text-[13px] p-4 h-full pt-[58px] text-[#92929D] ">
                          <FontAwesomeIcon icon={faPaperclip} />
                        </div>
                        <div>
                          <div className="text-[12px] text-[#696974] float-right">
                            8:25 AM
                          </div>
                          <br />
                          <div className="text-[12px] pt-1 pb-3 text-[#171725] font-[600] mt-[-10px]">
                            {subject}
                          </div>
                          <div className="text-[12px] text-[#92929D] ">
                            Random email's sample words about 20 or some or like
                            15 or sum...
                          </div>
                        </div>
                      </div>
                    </label>
                    <div class={`${styles.seasonContent} divide-y`}>
                      <div className="flex justify-between py-[15px] px-[30px]">
                        <div className="text-[#44444F] text-[13px] flex items-center">
                          Today, 8:28 AM
                        </div>
                        <div className="text-[#bfbfbf] text-[13px] flex items-center">
                          <div className="cursor-pointer">
                            <FontAwesomeIcon icon={faFloppyDisk} />
                          </div>
                          <div className="cursor-pointer ml-8">
                            <FontAwesomeIcon icon={faShare} />
                          </div>
                          <div className="cursor-pointer ml-3">
                            <FontAwesomeIcon icon={faTrash} />
                          </div>
                          <div className="cursor-pointer ml-3">
                            <FontAwesomeIcon icon={faEllipsis} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="p-5 text-[#171725]">
                          {subject}
                        </div>
                        <div className="p-5 text-[13px] text-[#44444F]  font-[400]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat. Duis autem vel eum iriure dolor in
                          hendrerit in vulputate velit esse molestie consequat,
                          vel illum dolore eu feugiat nulla facilisis at vero
                          eros et accumsan et iusto odio dignissim qui blandit
                          praesent luptatum zzril delenit augue duis dolore te
                          feugait nulla facilisi. Lorem ipsum dolor sit amet,
                          cons ectetuer adipiscing elit, sed diam nonummy nibh
                          euismod tincidunt ut laoreet dolore magna aliquam erat
                          volutpat. Ut wisi enim ad minim veniam, quis nostrud
                          exerci tation ullamcorper suscipit lobortis nisl ut
                          aliquip ex ea commodo consequat. Best regards
                          ghayath@big-bang.ae CEO & Founder
                        </div>
                        <div className="p-5 pb-0 text-[#171725]">Receivers</div>
                        <div className="flex px-3 flex-wrap">
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                          <div className="text-[#171725] text-[13px] font-[300] py-1 px-2 border-[1px] rounded-full m-2">
                            John Legend
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  )
}

export default Email