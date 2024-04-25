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
import HeaderThird from "../components/HeaderThird";

function ProductDetails(props) {

  const handleCheck = (e) => {
    setSelectedTab(e.target.value);
  };

  const tabs = {
    1: "Edit Product",
    2: "Stock Inventory",
    3: "Features",
    4: "Settings",
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
          <HeaderThird title={"Product Details"} path={"/products"}/>
          <div className="bg-[white] grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
          <div className={`${styles.tabs} rounded-xl` }  >
              <div className={`${styles.tab} rounded-tl-xl pl-[20px] text-[18px] py-[10px] ${styles.selected}`} >
                {tabs[selectedTab]}
              </div>
              <Tab content='EditProduct' selectedTab={selectedTab} labelId="label-1" title="Edit Product" value='1' handleCheck={handleCheck}/>
              <Tab content='StockInventory' selectedTab={selectedTab}  title="Stock Inventory" value='2' handleCheck={handleCheck}/>
              <Tab content='Features' selectedTab={selectedTab}  title="Features" value='3' handleCheck={handleCheck}/>
              <Tab content='Settings' selectedTab={selectedTab}  title="Settings" value='4' handleCheck={handleCheck}/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;
