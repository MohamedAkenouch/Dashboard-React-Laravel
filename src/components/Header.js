import React from "react";

import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "../components/Notification";
import {
    faUser,
    faCaretDown,
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/profilepopup.module.css";
import styles2 from "../styles/notificationspopup.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-between items-center w-full">
            <div className="px-2">Dashboard</div>
            <div className={`px-2 ${styles2.sideBtn}`}>
                <FontAwesomeIcon icon={faBell} />
                <div class={`${styles2.popup} ${styles2.arrowTop}`}>
                <div
                    class={`text-[12px]  text-start font-bold ${styles2.popupWrapper}`}
                >
                    <div className="mt-[10px] font-[400] text-[#0388CC] text-[13px]">
                    Notifications
                    </div>
                    <div className="max-h-[380px] scrollbar-thin scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <div>
                        <Notification text="This is some random nothification" />
                        <Notification text="This is some random nothification" />
                        <Notification text="This is some random nothification" />
                        <Notification text="This is some random nothification" />
                        <Notification text="This is some random nothification" />
                        <Notification text="This is some random nothification" />
                        <Notification text="This is some random nothification" />
                        <Notification text="This is some random nothification" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-[65%]">
                <input className="w-full max-w-full bg-[#fff] rounded-full pl-4 pr-12 h-8 text-[14px] font-[400]" />
                <span className="cursor-pointer text-[14px] font-[400] ml-[-30px]">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
            </div>
            <div className="px-2 min-w-fit">11:11 AM - August 21 ,2022</div>
            <div className={`px-2 min-w-fit flex ${styles.sideBtn}`}>
                <span className="text-[#00AEEF] mr-1">
                <FontAwesomeIcon icon={faUser} />
                </span>{" "}
                <FontAwesomeIcon icon={faCaretDown} />
                <div class={`${styles.popup} ${styles.arrowTop}`}>
                <div
                    class={`text-[12px]  text-start font-bold divide-y ${styles.popupWrapper}`}
                >
                    <div className="mt-[10px] opacity-[43%] text-[#0F3F62] text-[13px]">
                    Signed in as admin@sedihisham.com
                    </div>
                    <div className="mt-[10px] font-[600]">
                    <Link to="/">
                        <div className="flex text-[#0F3F62] py-[10px]">
                        <img className='mr-4 w-[15px]' src='/images/chart.svg' /> Export Sales Report
                        </div>
                    </Link>
                    <Link to="/settings?tab=3">
                        <div className="flex text-[#0F3F62] py-[10px]">
                        <img className='mr-4 w-[15px]' src='/images/location.svg' /> Shipment Fee
                        </div>
                    </Link>
                    <Link to="/settings?tab=1">
                        <div className="flex text-[#0F3F62] py-[10px]"><img className='mr-4 w-[15px]' src='/images/settings.svg' /> Settings</div>
                    </Link>
                    <Link to="/">
                        <div className="flex text-[#0F3F62] py-[10px]"><img className='mr-4 w-[15px]' src='/images/logout.svg' /> Sign Out</div>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Header;