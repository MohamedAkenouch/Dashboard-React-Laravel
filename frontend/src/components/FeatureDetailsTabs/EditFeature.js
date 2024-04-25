import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFeatures, updateFeature } from '../../actions/feature'
import FormField from "../FormFileds/FormField";
import Swal from 'sweetalert2';
import { sweetModal } from "../../constants/sweetModals";

function EditFeature() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isValueUpdated, setIsValueUpdated] = useState(false);

  useEffect(()=>{
    dispatch(getFeatures());
    setIsValueUpdated(false);
  },[dispatch, isValueUpdated]);

  const features = useSelector((state) => state.features);
  const feature = features.find((e) => e.id == id);
  console.log(features);


  const [values, setValues] = useState({
    name_en : feature.name_en,
    name_ar : feature.name_ar
  });

  const resetValue = () => {
    setValues({
      name_en : feature.name_en,
      name_ar : feature.name_ar
    });
  }

  const updateValue = () =>{
    let formData = new FormData(); 
    formData.append("name_en", values.name_en);
    formData.append("name_ar", values.name_ar);
    dispatch(updateFeature(id, formData));
    setIsValueUpdated(true);
    sweetModal('success', 'Feature has been updated successfully', false);
    console.log("Update Value" + values);
  }

  return (
    <div className="ml-[6%]">
      <div>

      <div className="w-[70%]">
        <FormField 
          id="name_ar"
          label="Name - Ar"
          name="name_ar"
          type="text"
          value={values.name_ar}
          values={values}
          setValues={setValues}
          placeholder="Enter feature name in arabic"
          mt="0"
        />
        <FormField 
          id="name_en"
          label="Name - En"
          name="name_en"
          type="text"
          value={values.name_en}
          values={values}
          setValues={setValues}
          placeholder="Enter feature name in english"
          mt="6"
        />
      </div>
      </div>
      <div className='flex pb-[10px] mt-[5%] mr-[3%] float-right'>
        <button 
          onClick={() => resetValue()}
          className="rounded-full text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]">
          Cancel
        </button>
        <button 
          onClick={() => updateValue()}
          className="rounded-full text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditFeature;
