import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import Tab from "../components/Tab";
import styles from "../styles/tabs.module.css";
import Footer from "../components/Footer";

import {

  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Settings(props) {

  const handleCheck = (e) => {
    setSelectedTab(e.target.value);
  };


  const tabs = {
    1: "General Settings",
    2: "Preferences",
    3: "Shipment Fee",
  };
  let { search } = useLocation();
  const queryParams = new URLSearchParams(search)
  let tab = queryParams.get("tab");
  const [selectedTab, setSelectedTab] = useState(tab);

  useEffect(()=>{
    setSelectedTab(queryParams.get("tab"))
  },[tab])
  
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
          <div className="bg-[white] grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
          <div className={`${styles.tabs} rounded-xl` }  >
              <div className={`${styles.tab} rounded-tl-xl pl-[20px] text-[18px] py-[10px] ${styles.selected}`} >
                {tabs[selectedTab]}
              </div>
              <Tab content="GeneralSettings" selectedTab={selectedTab} labelId="label-1" title="General Settings" value='1' handleCheck={handleCheck}/>
              <Tab content="Preferences" selectedTab={selectedTab}  title="Preferences" value='2' handleCheck={handleCheck}/>
              <Tab content="ShipmentFee" selectedTab={selectedTab}  title="Shipment Fee" value='3' handleCheck={handleCheck}/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Settings;
