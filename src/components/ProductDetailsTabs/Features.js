import React, { useState, useEffect, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../ContactForm";
import { getFeatures } from '../../actions/feature';
import { getProducts, updateProduct } from '../../actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { getFeaturesValuesProductData } from "../../global/data/featuresValuesProduct";
import columns from "../../global/columns/featuresValuesProductColumns";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import { useLocation } from "react-router-dom";
import { sweetModal } from "../../constants/sweetModals";
import DeleteValueProduct from "../Modals/DeleteValueProduct";

function Features() {
  let { search } = useLocation();
  const queryParams = new URLSearchParams(search)
  let id = queryParams.get("id");
  const [isUpdate, setIsUpdate] = useState(false);
  const [isToGet, setIsToGet] = useState(false);

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getProducts());
    dispatch(getFeatures());
    setIsUpdate(false);
    setIsToGet(true);
  }, [dispatch, isUpdate]);

  const products = useSelector((state) => state.products);
  const features = useSelector((state) => state.features);
  const [selectedFeature, setSelectedFeature] = useState("selectFeature");
  const [selectedFeatureValue, setSelectedFeatureValue] = useState("selectValue");
  const [selectedValues, setSelectedValues] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [valueProductID, setValueProductID] = useState('');
  const product = products.find((product) => product.id == id);
  let featuresData = getFeaturesValuesProductData(product.features, setShowDeleteModal, setValueProductID);

  useEffect(() => {
    if(product?.features?.length > 0)
      featuresData = getFeaturesValuesProductData(product.features);
  }, [isToGet]);

  const gridStyle = {
    minHeight: 520,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };
  const showCellBorders = false;
  const showZebraRows = false;

  const changeHandler = (event) => {
    let id = event.target.value;
    let feature  = features.find(f => f.id == id);
    setSelectedFeature(id);
    setSelectedValues(feature.values);
  };

  const changeHandlerValues = (event) => {
    let id = event.target.value;
    setSelectedFeatureValue(id);
  }

  const addFeatures = () => {
    if(selectedFeature === "selectFeature" || selectedFeatureValue === "selectValue"){
      sweetModal("info", "You have to select one feature and it's value", true, 1400);
      return
    }
    let data = {};
    data.category_id = parseInt(product.categories[0].id);
    data.name_ar = product.name_ar;
    data.name_en = product.name_en;
    data.description = product.description;
    data.price = Number(product.price);

    let feature_values = [];
    if(product.features && product.features.length > 0) {
      product.features.forEach(feature => {
        feature.values.forEach(value => {
          feature_values.push({
            feature_id: Number(feature.id),
            value_ids: [
              Number(value.id)
            ]
          });
        });
      });
    }

    feature_values.push({
      feature_id: Number(selectedFeature),
      value_ids: [
        Number(selectedFeatureValue)
      ]
    });

    data.feature_values = feature_values;

    console.log("DATA : ", data);

    dispatch(updateProduct(product.id, data));
    setIsUpdate(true);
    sweetModal("success", "Features added seccussfully", true, 1350);
    
  };
  return (
    <div className="flex">
      <div className="ml-[6%] mt-8 w-[30%]">
        <div className="text-[14px] font-[400] text-[#000]">
          Add or Remove Features for this Product
        </div>
        {/* <div className="text-[14px] mt-3 font-[500] text-[#000]">Gram</div> */}
        <div className="text-[#000] text-[14px] flex font-[400]">
          {/* <input
            className="h-[30px] mr-6 mt-[5px] rounded-md w-[20%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="How many gram"
            onChange={changeHandler}
            value={values.quantity}
            name="quantity"
            type="text"
          /> */}
          <select value={selectedFeature} onChange={changeHandler} name="feature" className="w-[200px] h-[30px] mt-1 mr-2 rounded-md px-1 font-[400] text-[14px] text-[#000]">
            {
              selectedFeature == "selectFeature" ?
              <option key="selectFeature" value="selectFeature">Select Feature</option>
              : null
            }
            {
              features?.map((feature => {
                return (
                  <option key={feature.id} value={feature.id}>{feature.name}</option>
                );
              }))
            }
          </select>
          <select value={selectedFeatureValue} onChange={changeHandlerValues} name="value" className="w-[200px] h-[30px] mt-1 rounded-md px-1 font-[400] text-[14px] text-[#000]">
            {
              selectedFeatureValue == "selectValue" ?
              <option key="selectValue" value="selectValue">Select Value</option>
              : null
            }
            {
              selectedValues?.map((value => {
                return (
                  <option key={value.id} value={value.id}>{value.value}</option>
                );
              }))
            }
          </select>
        </div>
        <button
          onClick={addFeatures}
          className="border-[#0388CC] w-fit px-4 cursor-pointer rounded-md border-[1px] text-[14px] mt-8 font-[400] h-[30px] flex items-center text-[#0388CC]">
          <span className="mr-2 text-[15px]">
            <FontAwesomeIcon icon={faCirclePlus} />
          </span>{" "}
          Add new feature
        </button>
      </div>
      {
        showDeleteModal ? 
        <DeleteValueProduct 
          setShowDeleteModal={setShowDeleteModal} 
          valueProductID={valueProductID} 
          product={product}
          setIsUpdate={setIsUpdate}
          dispatch={dispatch}
        /> : null
        
      }
      <div className="mt-6 ml-[8%] w-[55%]">
        <ReactDataGrid
          idProperty="id"
          rowHeight={65}
          columns={columns}
          showCellBorders={showCellBorders}
          showZebraRows={showZebraRows}
          style={gridStyle}
          dataSource={featuresData}
        />
      </div>
    </div>
  );
}

export default Features;
