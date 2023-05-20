import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import RichTextEditor from "../RichTextEditor";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

function NewActivity({ setShowModal }) {
  const [values, setValues] = useState({
    couponCode: "",
    type: "Percentage",
    appliesTo: "",
    expirationDate: "",
  });

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values[e.target.name]);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add New Coupon
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-6 w-full ">
              <div className="w-[95%]">
                <div className="flex">
                  <div className="w-[20%] text-[14px] mr-4 font-[500]">
                    <label htmlFor="coupon-code">
                      Coupon Code <span className="text-[red]">*</span>
                    </label>
                  </div>
                  <input
                    className="w-[60%] h-[35px] mr-2 rounded border-[#0388CC] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder="Enter or automatically generate a coupon code"
                    onChange={changeHandler}
                    value={values.couponCode}
                    name="couponCode"
                    type="text"
                    id="coupon-code"
                  />
                  <div className="text-[14px] cursor-pointer justify-center flex items-center px-2 rounded-md w-[140px] text-center font-[400] h-[35px] text-[#fff]  bg-[#0388CC]">
                    Auto Generate
                  </div>
                </div>
                {/* {} */}
                <div className="flex mt-6">
                  <div className="w-[20%] text-[14px] mr-4 font-[500]">
                    <label htmlFor="type">
                      Type <span className="text-[red]">*</span>
                    </label>
                  </div>
                  <div
                    onClick={() => {
                      values.type === "Percentage"
                        ? setValues({ ...values, type: "Fixed Amount" })
                        : setValues({ ...values, type: "Percentage" });
                    }}
                    className="w-[30%] cursor-pointer font-[400] flex items-center px-3 justify-between text-[14px] h-[35px] mr-2 rounded border-[#0388CC] border-[1px]"
                  >
                    <div>{values.type}</div>{" "}
                    <div>
                      <FontAwesomeIcon icon={faSort} />
                    </div>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="w-[20%] text-[14px] mr-4 font-[500]">
                    <label htmlFor="applies-to">
                      Applies To <span className="text-[red]">*</span>
                    </label>
                  </div>
                  <textarea
                    className="resize-none w-[72.5%] p-2 h-[170px] rounded border-[#0388CC] text-[12px] font-[400] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder=""
                    onChange={changeHandler}
                    value={values.appliesTo}
                    name="appliesTo"
                    id="applies-to"
                  ></textarea>
                </div>
                <div className="flex mt-6">
                  <div className="w-[20%] text-[14px] mr-4 font-[500]">
                    <label htmlFor="expiation-date">
                      Expiration Date <span className="text-[red]">*</span>
                    </label>
                  </div>
                  <input
                    className="w-[20%] h-[35px] mr-2 rounded border-[#0388CC] placeholder:text-[center] placeholder:text-[12px] text-[12px] font-[400] placeholder:font-[400]"
                    type="date"
                    onChange={changeHandler}
                    value={values.expirationDate}
                    name="expirationDate"
                    id="expiation-date"
                  />
                </div>
              </div>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-3 rounded-b">
              <div className=" flex pb-[10px] ">
                <div
                  onClick={() => setShowModal(false)}
                  className="rounded-full cursor-pointer text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]"
                >
                  Cancel
                </div>
                <div className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default NewActivity;
