import React from "react";
import { useState, useCallback, useEffect } from "react";
import SideBar from "../components/SideBar";
import NewCategory from "../components/Modals/NewCategory";

import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../global/columns/categoryColumns";
import {getCategoriesData} from "../global/data/categoriesData";
import Header from "../components/HeaderSecond";
import Footer from "../components/Footer";
import DeleteCategory from "../components/Modals/DeleteCategory";


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getCategories } from '../actions/category';
import { getCategoryProducts } from '../actions/category';

function Categories() {

  const dispatch = useDispatch();
  const [isAdd, setIsAdd] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {

    dispatch(getCategories());
    dispatch(getCategoryProducts());
    setIsAdd(false);
  }, [dispatch, isAdd]);


  const categories = useSelector((state) => state.categories);
  const category_products = useSelector((state) => state.categoriesProducts);
  const CategoriesData = getCategoriesData(categories,category_products,setCategoryId,setShowDeleteModal);


  const gridStyle = {
    minHeight: 560,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };
  const showCellBorders = false;
  const showZebraRows = false;
  const [rowHeight, setRowHeight] = useState(60);
  const [expandedNodes, setExpandedNodes] = useState({});
  const onExpandedNodesChange = useCallback(({ expandedNodes }) => {
    setExpandedNodes(expandedNodes);
  }, []);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="w-[96%] text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full flex flex-col ml-6 text-[#033362] font-semibold">
        <Header title={"Categories"}/>
          <div className="bg-[white] flex flex-col justify-between grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
            <div className=" p-3 w-full">
              <ReactDataGrid
                treeColumn="image"
                columns={columns}
                expandedNodes={expandedNodes}
                onExpandedNodesChange={onExpandedNodesChange}
                showCellBorders={showCellBorders}
                showZebraRows={showZebraRows}
                rowHeight={rowHeight}
                style={gridStyle}
                dataSource={CategoriesData}
              />
            </div>
            {
              showModal ? <NewCategory setShowModal = {setShowModal} setIsAdd={setIsAdd} categories={categories}/> : null
            }
            {showDeleteModal ? <DeleteCategory setShowDeleteModal={setShowDeleteModal} id={categoryId} /> : null}
            <div onClick={() => setShowModal(true)} className="cursor-pointer flex items-center text-[#0388CC] h-[30px] mb-[15px] ml-[25px] text-[13px]">
              <div className="mr-2">Add new category </div>
              <div className="text-[20px]">
                <FontAwesomeIcon icon={faCirclePlus} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;
