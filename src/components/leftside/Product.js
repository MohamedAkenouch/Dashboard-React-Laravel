// import Image from "next/image";
import React, { useState } from "react";

import { toFixed } from '../../constants/const'

export default function Product({ title, totalItems, image, size, color, price }) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col ">
      <div className="   flex justify-center items-center  rounded-md w-[80%] mx-[10%] h-16 ">
        <div className="flex-[20%] justify-center  items-center flex ">
          <img src={image} width="50%" height="50%" />
        </div>
        <div className="flex-[60%] flex-col flex py-2 px-5 ">
          <p className="text-sm opacity-75 ml-1 mt-1 tracking-wide">{title}</p>
          <div className="flex justify-between mt-2 text-[10px] text-[#ccc]">
            <div className="font-[400]">{size}</div>
            <div className="font-[400]" style={{backgroundColor: color, minWidth: 30, maxWidth: 50, minHeight: 15, maxHeight: 20}}></div>
            <div className="font-[400]">{toFixed(price, 2)}</div>
          </div>
        </div>
        <div className="flex-[20%] font-bold text-[16px] opacity-75  justify-center items-center flex">
          {totalItems}
        </div>
      </div>
      <span className=" p-[1px] flex justify-center w-[70%] mb-2 items-center mx-[15%] bg-gray-300 "></span>
    </div>
  );
}
