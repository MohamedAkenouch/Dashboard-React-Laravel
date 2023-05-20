import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import NewProduct from "../components/Modals/NewProduct";

import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";


import Header from "../components/HeaderSecond";
import Footer from "../components/Footer";
import columns from "../global/columns/productByCategoryColumns";

import {getProductsByCategoryData} from "../global/data/productsByCategoryData";
import { getProducts } from '../actions/product';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function Products() {
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
    setIsAdd(false);
  }, [dispatch, isAdd]);

  const products = useSelector((state) => state.products);
  const productsData = getProductsByCategoryData(products);


  const gridStyle = {
    minHeight: 560,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };

  const showCellBorders = false;
  const showZebraRows = false;
  const [rowHeight, setRowHeight] = useState(60);
  const [showProductModal, setShowProductModal] = React.useState(false);

  return (
    <div className="w-[96%] text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full flex flex-col ml-6 text-[#033362] font-semibold">
          <Header title={"Products"}/>
          <div className="bg-[white] flex flex-col justify-between grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
            <div className=" p-3 w-full">
              <ReactDataGrid
                idProperty="id"
                columns={columns}
                showCellBorders={showCellBorders}
                showZebraRows={showZebraRows}
                style={gridStyle}
                rowHeight={rowHeight}
                dataSource={productsData}
              />
            </div>
            {showProductModal ? (
              <NewProduct setShowModal={setShowProductModal} setIsAdd={setIsAdd}/>
            ) : null}
            <div className='flex'>
              <div
                onClick={() => setShowProductModal(true)}
                className="cursor-pointer flex mr-8 items-center text-[#0388CC] h-[30px] mb-[15px] ml-[25px] text-[13px]"
              >
                <div className="mr-2">Add new product </div>
                <div className="text-[22px]">
                  <FontAwesomeIcon icon={faCirclePlus} />
                </div>
              </div>
              {/* <div
                className="cursor-pointer flex mr-8 items-center text-[#0388CC] h-[30px] mb-[15px] ml-[25px] text-[13px]"
              >
                <div className="mr-2">Download Products Sheet </div>
                <div className="bg-[#D40017] rounded-full pt-[1px] w-[22px] h-[22px] text-center text-[#fff] text-[13px]">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
              </div> */}
              {/* <div
                className="cursor-pointer flex mr-8 items-center text-[#0388CC] h-[30px] mb-[15px] ml-[25px] text-[13px]"
              >
                <div className="mr-2">Upload Products Sheet </div>
                <div className="bg-[#D8AA6B] rounded-full pt-[1px] w-[22px] h-[22px] text-center text-[#fff] text-[13px]">
                  <FontAwesomeIcon icon={faUpload} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
