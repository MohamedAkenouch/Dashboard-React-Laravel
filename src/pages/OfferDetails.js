import React, {useState} from "react";
import SideBar from "../components/SideBar";
import UpperTotal from "../components/UpperTotal";
import {
  faCircle,
  faArrowDown,
  faArrowUp,
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../global/columns/orderColumns-2";
import data from "../global/orderData";
import Footer from "../components/Footer";

function OffersDetails() {
  const [values, setValues] = useState({
    offerName: "",
    value: "",
    appliesTo: "",
    expirationDate: "",
  });

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values[e.target.name]);
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
          <div className="bg-[white] grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
            <div className=" py-12 px-28">
              {/* {} */}
              <div className="flex">
                <div className="w-[20%] text-[14px] mr-4 font-[500]">
                  <label htmlFor="offer-name">
                    Offer Name <span className="text-[red]">*</span>
                  </label>
                </div>
                <input
                  className="w-[72.2%] h-[35px] pr-[40px] mr-2 rounded border-[#0388CC] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                  placeholder="Enter offer name"
                  onChange={changeHandler}
                  value={values.offerName}
                  name="offerName"
                  type="text"
                  id="offer-name"
                />
              </div>
              {/* {} */}
              <div className="flex mt-6">
                <div className="w-[20%] text-[14px] mr-4 font-[500]">
                  <label htmlFor="value">
                    Value <span className="text-[red]">*</span>
                  </label>
                </div>
                <input
                  className="w-[30%] pr-[115px] h-[35px] mr-2 rounded border-[#0388CC] placeholder:text-[center] placeholder:text-[12px] text-[14px] placeholder:font-[400] font-[400]"
                  placeholder="Enter offer percentage"
                  onChange={changeHandler}
                  value={values.value}
                  name="value"
                  type="text"
                  id="value"
                />
                <span className="ml-[-115px] pl-1 border-l-2 border-l-[#0388CC]  text-[#0388CC] flex items-center text-[14px] font-[400]">
                  Percentage %
                </span>
              </div>
              <div className="flex mt-6">
                <div className="w-[20%] text-[14px] mr-4 font-[500]">
                  <label htmlFor="applies-to">
                    Applies To <span className="text-[red]">*</span>
                  </label>
                </div>
                <textarea
                  className="resize-none w-[72.5%] h-[170px] rounded border-[#0388CC] text-[12px] font-[400] p-2 placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                  placeholder="Enter list of categories"
                  onChange={changeHandler}
                  value={values.appliesTo}
                  name="appliesTo"
                  id="applies-to"
                ></textarea>
              </div>
              <div className="flex mt-6">
                <div className="w-[20%] text-[14px] mr-4 font-[500]">
                  <label htmlFor="expiration-date">
                    Expiration Date <span className="text-[red]">*</span>
                  </label>
                </div>
                <input
                  className="w-[20%] h-[35px] mr-2 rounded border-[#0388CC] placeholder:text-[center] placeholder:text-[12px] text-[12px] font-[400] placeholder:font-[400]"
                  type="date"
                  onChange={changeHandler}
                  value={values.expirationDate}
                  name="expirationDate"
                  id="expiration-date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OffersDetails;
