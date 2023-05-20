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
import { addFeatureValue, updateFeatureValue } from '../../actions/feature_value';
import { sweetModal } from "../../constants/sweetModals";

function NewFeatureValue({ dispatch, setShowModal, isToAdd, setIsToAdd, values, setValues, idFeature, idFeatureValue, isValuesChanged, setIsValuesChanged}) {


  const addOrUpdate = () => {
    console.log("New Feature Value : ", values);
    console.log("isToAdd : ", isToAdd);

    let featureValue = {
      name_en: values.name_en,
      name_ar: values.name_ar,
      price: Number(values.price),
      value: values.value
    };
    const valueFormRequest = {feature_values : [
        featureValue
    ]};

    if(isToAdd) {
      dispatch(addFeatureValue(idFeature, valueFormRequest));
    }
    else {
      dispatch(updateFeatureValue(idFeature, idFeatureValue, valueFormRequest));
    }

    setShowModal(false);
    setIsValuesChanged(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdate();
    if(isToAdd) {
      sweetModal('success', 'Feature value has been added successfully', false);
    }
    else {
      sweetModal('success', 'Feature value has been updated successfully', false);
    }
    setIsToAdd(false);
    console.log("Submited !!!");
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[60%]">
          <form onSubmit={handleSubmit} className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                {isToAdd  ? "Add New Value" : "Edit Value"}
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-6 w-full ">
              <div className="w-[90%]">
                <FormField 
                    id="price"
                    label="Price"
                    name="price"
                    type="text"
                    value={values.price}
                    values={values}
                    setValues={setValues}
                    placeholder="Enter value price"
                    mt="0"
                />
                <FormField 
                    id="value"
                    label="Value"
                    name="value"
                    type="text"
                    value={values.value}
                    values={values}
                    setValues={setValues}
                    placeholder="Enter value"
                    mt="6"
                />
                <FormField 
                    id="name_ar"
                    label="Name - Ar"
                    name="name_ar"
                    type="text"
                    value={values.name_ar}
                    values={values}
                    setValues={setValues}
                    placeholder="Enter value name in arabic"
                    mt="6"
                />
                <FormField 
                    id="name_en"
                    label="Name - En"
                    name="name_en"
                    type="text"
                    value={values.name_en}
                    values={values}
                    setValues={setValues}
                    placeholder="Enter value name in english"
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

export default NewFeatureValue;
