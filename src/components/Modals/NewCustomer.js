import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import RichTextEditor from "../RichTextEditor";
import SettingsTab from "../SettingsTab";
import PolicyForm from "../PolicyForm";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/settingsTabs.module.css";

function NewCustomer({ setShowModal }) {
  const [values, setValues] = useState({
    fullName: "",
    familyName: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
    membershipLevel: "",
    location1: "",
    locationDetails1: "",
    location2: "",
    locationDetails2: "",
  });
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values[e.target.name])
  };
  return (
    <>
      <div className="justify-center mt-[-30px] h-[800px] items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add New Cook Customer
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative h-[600px] p-6 w-full scrollbar-thin h-full scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
              <div>
                <div className="flex flex-wrap">
                  <div className="ml-[12%] mt-10">
                    <p className="text-[#0388CC] font-[700] text-[14px]">
                      Details
                    </p>
                    <div className="flex flex-wrap">
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <label
                          className="text-[14px] font-[500]"
                          htmlFor="full-name"
                        >
                          Full Name
                        </label>
                        <input
                          className="w-full h-[30px] text-[14px] font-[400] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                          placeholder="Enter full name"
                          onChange={changeHandler}
                          value={values.fullName}
                          name="fullName"
                          type="text"
                          id="full-name"
                        />
                      </div>
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <label
                          className="text-[14px] font-[500]"
                          htmlFor="family-name"
                        >
                          Family Name
                        </label>
                        <input
                          className="w-full h-[30px] text-[14px] font-[400] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                          placeholder="Enter family name"
                          onChange={changeHandler}
                          value={values.familyName}
                          name="familyName"
                          type="text"
                          id="family-name"
                        />
                      </div>
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <label
                          className="text-[14px] font-[500]"
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        <input
                          className="w-full h-[30px] text-[14px] font-[400] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                          placeholder="Enter phone number"
                          onChange={changeHandler}
                          value={values.phone}
                          name="phone"
                          type="text"
                          id="phone"
                        />
                      </div>
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <label
                          className="text-[14px] font-[500]"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="w-full h-[30px] text-[14px] font-[400] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                          placeholder="Enter email"
                          onChange={changeHandler}
                          value={values.email}
                          name="email"
                          type="text"
                          id="email"
                        />
                      </div>
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <label
                          className="text-[14px] font-[500]"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          className="w-full h-[30px] text-[14px] font-[400] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                          placeholder="Enter password"
                          onChange={changeHandler}
                          value={values.password}
                          name="password"
                          type="password"
                          id="password"
                        />
                      </div>
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <div className="mt-[0px] text-[15px] font-[400] text-[#000]">
                          Gender
                        </div>
                        <label
                          htmlFor="male"
                          className="text-[14px] font-[400]"
                        >
                          Male
                        </label>
                        <input
                          className="ml-[10px] mr-[30px]"
                          type="radio"
                          onChange={changeHandler}
                          name="gender"
                          value="male"
                          id="male"
                        />
                        <label
                          htmlFor="female"
                          className="text-[14px] font-[400]"
                        >
                          Female
                        </label>
                        <input
                          className="ml-[10px] mr-[30px]"
                          type="radio"
                          onChange={changeHandler}
                          name="gender"
                          value="female"
                          id="female"
                        />
                      </div>
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <div className="mt-[0px] text-[15px] font-[400] text-[#000]">
                          User Membership Level
                        </div>
                        <label
                          htmlFor="normal"
                          className="text-[14px] font-[400]"
                        >
                          Normal
                        </label>
                        <input
                          className="ml-[10px] mr-[30px]"
                          type="radio"
                          onChange={changeHandler}
                          name="membership-level"
                          value="normal"
                          id="normal"
                        />
                        <label
                          htmlFor="silver"
                          className="text-[14px] font-[400]"
                        >
                          Silver
                        </label>
                        <input
                          className="ml-[10px] mr-[30px]"
                          type="radio"
                          onChange={changeHandler}
                          name="membership-level"
                          value="silver"
                          id="silver"
                        />
                        <label
                          htmlFor="gold"
                          className="text-[14px] font-[400]"
                        >
                          Gold
                        </label>
                        <input
                          className="ml-[10px] mr-[30px]"
                          type="radio"
                          onChange={changeHandler}
                          name="membership-level"
                          value="gold"
                          id="gold"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-[12%] mt-10">
                    <p className="text-[#0388CC] font-[700] text-[14px]">
                      Locations
                    </p>
                    <div className="flex flex-wrap">
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <label
                          className="text-[14px] font-[500]"
                          htmlFor="location-1"
                        >
                          Location 1
                        </label>
                        <input
                          className="w-full h-[30px] text-[14px] font-[400] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                          placeholder="Enter location"
                          onChange={changeHandler}
                          value={values.location1}
                          name="location1"
                          type="text"
                          id="location-1"
                        />
                      </div>
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <label
                          className="text-[14px] font-[500]"
                          htmlFor="location-details-1"
                        >
                          Location Details
                        </label>
                        <input
                          className="w-full h-[30px] text-[14px] font-[400] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                          placeholder="Enter location details"
                          onChange={changeHandler}
                          value={values.locationDetails1}
                          name="locationDetails1"
                          type="text"
                          id="location-details-1"
                        />
                      </div>
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <label
                          className="text-[14px] font-[500]"
                          htmlFor="location-2"
                        >
                          Location 2
                        </label>
                        <input
                          className="w-full h-[30px] text-[14px] font-[400] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                          placeholder="Enter location"
                          onChange={changeHandler}
                          value={values.location2}
                          name="location2"
                          type="text"
                          id="location-2"
                        />
                      </div>
                      <div className="w-[400px] mr-[120px] my-[10px]">
                        <label
                          className="text-[14px] font-[500]"
                          htmlFor="location-details-2"
                        >
                          Location Details
                        </label>
                        <input
                          className="w-full h-[30px] text-[14px] font-[400] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                          placeholder="Enter location details"
                          onChange={changeHandler}
                          value={values.locationDetails2}
                          name="locationDetails2"
                          type="text"
                          id="location-details-2"
                        />
                      </div>
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

export default NewCustomer;
