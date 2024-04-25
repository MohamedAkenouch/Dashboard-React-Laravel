import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import TextFromField from "./FormFileds/TextFromField";
import { getLocalDateFormat } from '../constants/const'


function ContactForm({branch, index, setBrancheID, values, setValues, setShowDeleteModal, setIsAddValue, setShowModal}) {

  const editBranche = () => {
    delete branch['name'];
    setValues(branch);

    setBrancheID(branch.id);
    setIsAddValue(false);
    setShowModal(true)
  }

  const showRemoveModal = () => { 
    setBrancheID(branch.id); 
    setShowDeleteModal(true) 
  }

  return (
    <div className="flex w-full mb-[10px]  pt-2">
      <div>
        <div className="text-[#000] font-[700] text-[14px]">{index+1}.</div>
      </div>
      <div className="ml-[6%] w-[85%]">
        <div>
          <p className="text-[#0388CC] font-[700] text-[14px]">Location {index+1}</p>
          <div className="mt-[10px] flex justify-between w-full">
            <div className="w-[30%]">
              <TextFromField 
                id="branche-name-en"
                label="Name En"
                name="name_en"
                value={branch.name_en}
                type="text"
                placeholder="Enter branche name in english"
                values={values}
                setValues={setValues}
                isEdit={false}
              />
            </div>
            <div className="w-[30%]">
              <TextFromField 
                id="branche-name-ar"
                label="Name Ar"
                name="name_ar"
                value={branch.name_ar}
                type="text"
                placeholder="Enter branche name in arabic"
                values={values}
                setValues={setValues}
                isEdit={false}
              />
            </div>
            <div className="w-[30%]">
              <div className="flex">
                <span className="mr-1 pt-1 text-[14px] font-[400]">
                  See the Location on Map{" "}
                </span>
                <div className="h-[30px] ml-4 rounded w-[35px] leading- text-[14px] text-center text-[#fff] bg-[#0388CC] flex items-center justify-center cursor-pointer">
                  <a href={"https://maps.google.com/?q="+branch.lat+","+branch.lon} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[#000] font-[700] text-[13px] mb-1">Details</p>
          <div className="flex justify-between w-full">
            <div className="w-[30%]">
              <TextFromField 
                id="opening_time"
                label="Opening time"
                name="opening_time"
                value={getLocalDateFormat(branch.opening_time)}
                type="datetime-local"
                placeholder="Enter opening time"
                values={values}
                setValues={setValues}
                isEdit={false}
              />
            </div>
            <div className="w-[30%]">
              <TextFromField 
                id="closing_time"
                label="Closing Time"
                name="closing_time"
                value={getLocalDateFormat(branch.closing_time)}
                type="datetime-local"
                placeholder="Enter closing time"
                values={values}
                setValues={setValues}
                isEdit={false}
              />
            </div>
            <div className="w-[30%]">
              <TextFromField 
                id="telephone"
                label="Telephone"
                name="telephone"
                value={branch.telephone}
                type="text"
                placeholder="Enter telephone"
                values={values}
                setValues={setValues}
                isEdit={false}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between w-full">
            <div className="w-[30%]">
              <TextFromField 
                id="delivery_opening_time"
                label="Delivery Opening Time"
                name="delivery_opening_time"
                value={getLocalDateFormat(branch.delivery_opening_time)}
                type="datetime-local"
                placeholder="Enter delivery opening time"
                values={values}
                setValues={setValues}
                isEdit={false}
              />
            </div>
            <div className="w-[30%]">
              <TextFromField 
                id="delivery_closing_time"
                label="Closing Opening Time"
                name="delivery_closing_time"
                value={getLocalDateFormat(branch.delivery_closing_time)}
                type="datetime-local"
                placeholder="Enter closing opening time"
                values={values}
                setValues={setValues}
                isEdit={false}
              />
            </div>
            <div className="w-[30%]">
              <TextFromField 
                id="delivery_cost"
                label="Delivery Cost"
                name="delivery_cost"
                value={branch.delivery_cost.toString()}
                type="number"
                placeholder="Enter Delivery Cost"
                values={values}
                setValues={setValues}
                isEdit={false}
              />
            </div>
          </div>
        </div>
        <div className="float-right mt-5">
          <button 
            onClick={()=> editBranche()} 
            type="button"
            className="text-[#0388cc] hover:text-white border border-[#0388cc] hover:bg-[#0388cc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
              Edit
          </button>
          <button 
            onClick={() => showRemoveModal()}
            type="button"
            className="text-[#E3370A] hover:text-white border border-[#E3370A] hover:bg-[#E3370A] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
