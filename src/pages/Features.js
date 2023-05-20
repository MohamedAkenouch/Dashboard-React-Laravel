import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";

import {
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../global/columns/featureColumns";
import data from "../global/featureData";
import Footer from "../components/Footer";
import HeaderSecond from "../components/HeaderSecond";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { getFeaturesData } from '../global/data/featuresData'
import NewFeature from "../components/Modals/NewFeature";
import { useDispatch, useSelector } from 'react-redux';
import  { getFeatures, deleteFeature } from '../actions/feature'
import DeleteValueModal from "../components/Modals/DeleteValueModal";

function Features() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [isValueAdded, setIsValueAdded] = useState(false);
  const [featureID, setFeatureID] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    dispatch(getFeatures());
    setIsValueAdded(false);
  }, [dispatch, isValueAdded]);

  const features = useSelector((state) => state.features);
  const featuresData = getFeaturesData(features, setFeatureID, setShowDeleteModal);

  const gridStyle = {
    minHeight: 520,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };
  const showCellBorders = false;
  const showZebraRows = false;
  return (
    <div className="w-[96%] text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full flex flex-col ml-6 text-[#033362] font-semibold">
          <HeaderSecond title={"Features"} />
          <div className='bg-[white] grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]'>
            <div className=" p-3 w-full">
              <ReactDataGrid
                idProperty="id"
                rowHeight={65}
                columns={columns}
                showCellBorders={showCellBorders}
                showZebraRows={showZebraRows}
                style={gridStyle}
                dataSource={featuresData}
              />
              {showModal ? <NewFeature setShowModal={setShowModal} setIsValueAdded={setIsValueAdded} /> : null}
              {showDeleteModal ? <DeleteValueModal setShowDeleteModal={setShowDeleteModal} id={featureID} deleteValue={deleteFeature} title={"Delete Feature"} valueName={"feature"} /> : null}
              <button
                onClick={() => setShowModal(true)}
                className="cursor-pointer flex items-center text-[#0388CC] h-[30px] mb-[0px] ml-[20px] text-[13px]"
              >
                <div className="mr-2">Add new feature </div>
                <div className="text-[20px]">
                  <FontAwesomeIcon icon={faCirclePlus} />
                </div>
              </button>
            </div>
          </div>

        </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default Features;
