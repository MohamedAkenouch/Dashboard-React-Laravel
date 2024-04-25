import React, {useState} from "react";
import SideBar from "../components/SideBar";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";

function CutomersDetails() {
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
  const changeHandler = (e) =>{
    setValues({...values, [e.target.name]:e.target.value})
  }

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
            <div className="w-full divide-x justify-evenly flex h-[14%] mt-4 rounded-xl">
              <div className="m-auto w-fit px-[150px] text-start flex">
                <div className={`text-[30px] mr-[10px] text-[#033362]`}>
                  <div>
                    <img
                      className={`w-[50px]`}
                      src={`/images/total-orders.svg`}
                    />
                  </div>
                </div>
                <div>
                  <div className={`text-[22px] text-[#033362]`}>75,775</div>
                  <div className="text-[12px] text-[#0388CC] ">
                    Total Orders
                  </div>
                </div>
              </div>
              <div className="m-auto w-fit px-[150px] text-start px-[28.9px] flex">
                <div className={`text-[30px] mr-[10px] text-[#033362]`}>
                  <div>
                    <img
                      className={`w-[60px]`}
                      src={`/images/total-spent.svg`}
                    />
                  </div>
                </div>
                <div>
                  <div className={`text-[22px] text-[#033362]`}>75,775</div>
                  <div className="text-[12px] text-[#0388CC] ">Total Spent</div>
                </div>
              </div>
              <div className="m-auto w-fit px-[150px] text-start flex">
                <div className={`text-[30px] mr-[10px] text-[#033362]`}>
                  <div>
                    <img className={`w-[38px]`} src={`/images/points.svg`} />
                  </div>
                </div>
                <div>
                  <div className={`text-[22px] text-[#033362]`}>75,775</div>
                  <div className="text-[12px] text-[#0388CC] ">Points</div>
                </div>
              </div>
            </div>
            <div className="ml-[12%] mt-10">
              <p className="text-[#0388CC] font-[700] text-[14px]">Details</p>
              <div className="flex flex-wrap">
                <div className="w-[400px] mr-[120px] my-[10px]">
                  <label className="text-[14px] font-[500]" htmlFor="full-name">
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
                  <label className="text-[14px] font-[500]" htmlFor="phone">
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
                  <label className="text-[14px] font-[500]" htmlFor="email">
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
                  <label className="text-[14px] font-[500]" htmlFor="password">
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
                  <label htmlFor="male" className="text-[14px] font-[400]">
                    Male
                  </label>
                  <input
                    className="ml-[10px] mr-[30px]"
                    type="radio"
                    onChange={()=>{setValues({...values, gender:'male'}); }}
                    name="gender"
                    value="male"
                    id="male"
                  />
                  <label htmlFor="female" className="text-[14px] font-[400]">
                    Female
                  </label>
                  <input
                    className="ml-[10px] mr-[30px]"
                    type="radio"
                    onChange={()=>{setValues({...values, gender:'female'});}}
                    name="gender"
                    value="female"
                    id="female"
                  />
                </div>
                <div className="w-[400px] mr-[120px] my-[10px]">
                  <div className="mt-[0px] text-[15px] font-[400] text-[#000]">
                    User Membership Level
                  </div>
                  <label htmlFor="normal" className="text-[14px] font-[400]">
                    Normal
                  </label>
                  <input
                    className="ml-[10px] mr-[30px]"
                    type="radio"
                    onChange={()=>{setValues({...values, membershipLevel:'normal'}); }}
                    name="membership-level"
                    value="normal"
                    id="normal"
                  />
                  <label htmlFor="silver" className="text-[14px] font-[400]">
                    Silver
                  </label>
                  <input
                    className="ml-[10px] mr-[30px]"
                    type="radio"
                    onChange={()=>{setValues({...values, membershipLevel:'silver'}); }}
                    name="memership-level"
                    value="silver"
                    id="silver"
                  />
                  <label htmlFor="gold" className="text-[14px] font-[400]">
                    Gold
                  </label>
                  <input
                    className="ml-[10px] mr-[30px]"
                    type="radio"
                    onChange={()=>{setValues({...values, membershipLevel:'gold'}); }}
                    name="memership-level"
                    value="gold"
                    id="gold"
                  />
                </div>
              </div>
            </div>
            <div className="ml-[12%] mt-10">
              <p className="text-[#0388CC] font-[700] text-[14px]">Locations</p>
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
            name='location1'
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
            name='locationDetails1'
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
            name='location2'
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
            name='locationDetails2'
                    type="text"
                    id="location-details-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CutomersDetails;
