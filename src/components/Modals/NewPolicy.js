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
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function NewPolicy({ setShowModal, changeHandler, values, addPolicy, setValues }) {
  
  const getDescAr = (value) => {
    setValues({...values, descAr:value});
    console.log(values.descAr);
  };
  const getDescEn = (value) => {
    setValues({...values, descEn:value});
    console.log(values.descEn);
  };

  const [couponType, setCouponType] = useState("Percentage");
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add New Policy
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-6 w-full ">
              <div className="w-[95%]">
                <div className="flex my-[20px]">
                  <div className="ml-[6%] w-[87%]">
                    <div className="w-[40%]">
                      <label
                        className="text-[14px] font-[400]"
                        htmlFor="field"
                      >
                        Field Details
                      </label>
                      <input
                        className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[13px] placeholder:font-[400]"
                        placeholder="Enter policy name"
                        onChange={changeHandler}
                          value={values.field}
                          name="field"
                        type="text"
                        id="field"
                      />
                    </div>
                    <div className="flex mt-[10px] flex-wrap justify-between w-full">
                      <RichTextEditor
                        name="Description-AR"
                        initialValue=""
                        getValue={getDescAr}
                      />
                      <RichTextEditor
                        name="Description-EN"
                        initialValue=""
                        getValue={getDescEn}
                      />
                    </div>
                  </div>
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
                <div onClick={addPolicy} className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
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

export default NewPolicy;
