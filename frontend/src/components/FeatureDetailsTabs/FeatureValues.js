import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../ContactForm";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactDataGrid from "@inovua/reactdatagrid-community";

import columns  from '../../global/columns/featuresValuesColumns'
import { getFeaturesValuesData } from '../../global/data/featuresValuesData'
import NewFeatureValue from "../Modals/NewFeatureValue";
import { getFeatures } from '../../actions/feature';
import DeleteValueModal from '../../components/Modals/DeleteValueModal';
import { deleteFeatureValue } from '../../actions/feature_value'

function FeatureValues() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [featureValueID, setFeatureValueID] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isToAdd, setIsToAdd] = useState(false);
  const [isValuesChanged, setIsValuesChanged] = useState(false);

  useEffect(()=>{
    dispatch(getFeatures());
    setIsValuesChanged(false);
  },[dispatch, isToAdd, isValuesChanged]);

  const showCellBorders = false;
  const showZebraRows = false;
  const gridStyle = {
    minHeight: 440,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };

  const [values, setValues] = useState({
      price: "",
      value: "",
      name_en :"",
      name_ar :""
  });

  

  const features = useSelector((state) => state.features);
  const featuresValues = getFeaturesValuesData(features.find(f => f.id == id).values, setShowModal, setIsToAdd, values, setValues, setFeatureValueID, setShowDeleteModal);

  const showAddValueModal = () => {
    setShowModal(true);
    setIsToAdd(true);
    setValues({
        price: "",
        value: "",
        name_en :"",
        name_ar :""
    })
  }
  

  return (
    <div className="ml-[6%] mt-8">
      <div className="text-[#000] text-[14px] flex font-[400]">
        <ReactDataGrid
          idProperty="id"
          rowHeight={"6%"}
          columns={columns}
          showCellBorders={showCellBorders}
          showZebraRows={showZebraRows}
          style={gridStyle}
          dataSource={featuresValues}
        />
        
      </div>
      {showModal ? <NewFeatureValue dispatch={dispatch} setShowModal={setShowModal} isToAdd={isToAdd} setIsToAdd={setIsToAdd} values={values} setValues={setValues} idFeature={id} idFeatureValue={featureValueID} isValuesChanged={isValuesChanged} setIsValuesChanged={setIsValuesChanged} /> : null}
      {showDeleteModal ? <DeleteValueModal dispatch={dispatch} setShowDeleteModal={setShowDeleteModal} idFeature={id} id={featureValueID} deleteValue={deleteFeatureValue} title={"Delete Value"} valueName={"feature value"} isValuesChanged={isValuesChanged} setIsValuesChanged={setIsValuesChanged} /> : null}
      <button 
        onClick={() => showAddValueModal()}
        className="border-[#0388CC] w-fit px-4 cursor-pointer rounded-md border-[1px] text-[14px] mt-8 font-[400] h-[30px] flex items-center text-[#0388CC]">
        <span className="mr-2 text-[15px]"
      >
          <FontAwesomeIcon icon={faCirclePlus} />
        </span>{" "}
        Add new value
      </button>
    </div>
  );
}

export default FeatureValues;
