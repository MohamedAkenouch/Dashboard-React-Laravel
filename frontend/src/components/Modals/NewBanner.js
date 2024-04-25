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
} from "@fortawesome/free-solid-svg-icons";
import FormField from "../FormFileds/FormField";
import { useDispatch } from 'react-redux';
import { addBanner, updateBanner } from '../../actions/banner'
import { sweetModal } from "../../constants/sweetModals";

function NewBanner({ setShowModal, isAddValue, id, values, setValues, setIsValueAdded}) {
    const dispatch = useDispatch();
    

    const addValue = () => {
      let formData = new FormData(); 
        
        if(isAddValue){
          console.log("New Banner : ", values);
          formData.append("category_id", parseInt(values.category_id))
          formData.append("text", values.text)
          formData.append("image", values.image);

          dispatch(addBanner(formData));
        }
        else {
          console.log("Update Banner : ", values);
          if(values.category_id != "") {
            formData.append("category_id", parseInt(values.category_id))
          }
          if(values.text != "") {
            formData.append("text", values.text)
          }
          if(values.image && values.image.name != undefined) {
            formData.append("image", values.image)
            console.log("Update B : ", values);
            
          }
          console.log("Update Banner : ", values);

          dispatch(updateBanner(id, formData));
        }
        setShowModal(false);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      addValue();
      if(isAddValue) {
        sweetModal('success', 'Banner has been added successfully', false);
      }
      else{
        sweetModal('success', 'Banner has been updated successfully', false);
      }
      setIsValueAdded(true);
      console.log("Submited !!!");
    }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[60%]">
          <form onSubmit={handleSubmit} className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                {isAddValue  ? "Add New Banner" : "Edit Banner"}
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-6 w-full ">
              <div className="w-[90%]">
                <FormField 
                    id="category_id"
                    label="Category ID"
                    name="category_id"
                    type="text"
                    value={values.category_id}
                    values={values}
                    setValues={setValues}
                    placeholder="Enter category id"
                    mt="0"
                />
                <FormField 
                    id="desc"
                    label="Description"
                    name="text"
                    type="text"
                    value={values.text}
                    values={values}
                    setValues={setValues}
                    placeholder="Enter image description here"
                    mt="6"
                />
                <FormField 
                    id="image"
                    label="Image"
                    name="image"
                    type="file"
                    value={isAddValue ? values.image.name : values.name}
                    values={values}
                    setValues={setValues}
                    isAddValue={isAddValue}
                    mt="6"
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-3 rounded-b">
              <div className=" flex pb-[10px] ">
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-full cursor-pointer text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]"
                >
                  Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default NewBanner;
