import React from "react";

import styles from "../styles/settingsTabs.module.css";
import Images from './ProductSettings/Images'
import SKU from './ProductSettings/SKU'
import PDF from './ProductSettings/PDF'
import Video from './ProductSettings/Video'
import Manufacturers from './ProductSettings/Manufacturers'

function SettingsTab({ title, value, handleCheck, labelId, setSelectedSetting, content,files,filesData,setFilesData,setFiles}) {
  const tabs = {
    Images:<Images  files={files} filesData={filesData} setFilesData={setFilesData} setFiles={setFiles}/>,
    PDF:<PDF/>,
    SKU:<SKU/>,
    Video:<Video/>,
    Manufacturers:<Manufacturers/>,
  };

  return (
    <div key={setSelectedSetting} className={`${styles.tab} flex items-center`}>
      <input
        onChange={(e) => {
          handleCheck(e);
        }}
        value={value}
        type="radio"
        name="settings-tabs"
        id={value}
        defaultChecked={"11" === value}
        className={`${styles.tabSwicth}`}
      />
      <label htmlFor={value} id={labelId} className={`${styles.tabLabel}`}>
        <span className={`${styles.tabSpan} font-[400] text-[14px]`}>
          {title}
        </span>
      </label>
      <div className={`${styles.tabContent}`}>
        <span>
          {tabs[content]}
        </span>
      </div>
    </div>
  );
}

export default SettingsTab;
