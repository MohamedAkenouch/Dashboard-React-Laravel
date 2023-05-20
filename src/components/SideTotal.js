import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideTotal({ title, total, icon, color }) {
  return (
    <div className=" h-[75px] bg-[white] rounded-xl w-full flex shadow-[0px_0px_16px_rgb(210,215,211)]">
      <div className="m-auto ml-[40px] flex">
        <div className={`text-[30px] mr-[16px]`}>
          <img className='w-[35px]' src={`/images/dashboard/${icon}.svg`}/>
        </div>
        <div className="text-start">
          <div className={`text-[22px] text-[#033362]`}>{total}</div>
          <div className={`text-[12px] ${color}`}>{title}</div>
        </div>
      </div>
    </div>
  );
}

export default SideTotal;
