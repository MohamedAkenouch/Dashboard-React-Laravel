import React, { useState, useEffect } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import FileItem from "../FileUploader/FileItem";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import ReactDataGrid from "@inovua/reactdatagrid-community";

import columns  from '../../global/columns/bannersColumns'
import NewFeatureValue from "../Modals/NewFeatureValue";
import NewBanner from "../Modals/NewBanner";
import { getBannersData } from "../../global/data/bannersData";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { deleteBanner, getBanners } from '../../actions/banner'
import DeleteValueModal from "../Modals/DeleteValueModal";
import { list } from "postcss";

function BannersPage() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isAddValue, setIsAddValue] = useState(true);
  const [isValueAdded, setIsValueAdded] = useState(false);

  const [bannerID, setBannerID] = useState('');

  useEffect(() => {
    dispatch(getBanners());
    setIsValueAdded(false);
  }, [dispatch, isValueAdded]);

  const showCellBorders = false;
  const showZebraRows = false;
  const gridStyle = {
    minHeight: 520,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };

  const [values, setValues] = useState({
      category_id: "",
      text: "",
      image : {name:""}
  });

  

  const showAddBannerModal = () => {
    setShowModal(true);
    setIsAddValue(true);
    setValues({
      category_id: "",
      text: "",
      image : {name:""}
    })
  }

  const banners = useSelector((state) => state.banners);

  const bannersData = getBannersData(banners, setShowModal, setIsAddValue, setBannerID, values, setValues, setShowDeleteModal);

  const [image, setImage] = useState([]);
  const [imageData, setImageData] = useState([]);
  const removeImage = (filename, index) => {
    setImage(null);
    setImageData(null);
  };
  return (
    <div className="ml-[6%] mt-8">
      <div className="text-[#000] text-[14px] flex font-[400]">
        <ReactDataGrid
          idProperty="id"
          rowHeight={65}
          columns={columns}
          showCellBorders={showCellBorders}
          showZebraRows={showZebraRows}
          style={gridStyle}
          dataSource={bannersData}
        />
        
      </div>
      {
        showModal ? 
        <NewBanner 
          setShowModal={setShowModal} 
          isAddValue={isAddValue} 
          id={bannerID} 
          values={values} 
          setValues={setValues}
          setIsValueAdded={setIsValueAdded} /> 
        : null
      }
      {showDeleteModal ? <DeleteValueModal setShowDeleteModal={setShowDeleteModal} id={bannerID} deleteValue={deleteBanner} title={"Delete Banner"} valueName={"banner"} /> : null}
      <div 
        onClick={() => showAddBannerModal()}
        className="border-[#0388CC] w-fit px-4 cursor-pointer rounded-md border-[1px] text-[14px] mt-8 font-[400] h-[30px] flex items-center text-[#0388CC]">
        <span className="mr-2 text-[15px]"
      >
          <FontAwesomeIcon icon={faCirclePlus} />
        </span>{" "}
        Add new banner
      </div>
    </div>
  )
}

export default BannersPage