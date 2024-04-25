import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import Tab from "../components/Tab";
import styles from "../styles/tabs.module.css";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";

import {
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCategories, getCategoryProducts } from '../actions/category';
import { getProducts } from '../actions/product';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function CategoryDetails() {

  const dispatch = useDispatch();
  let {id} = useParams();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    dispatch(getCategoryProducts());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const CategoriesProducts = useSelector((state) => state.categoriesProducts);





  const handleCheck = (e) => {
    setSelectedTab(e.target.value);
  };


  const tabs = {
    1: "Products By Category",
    2: "Sub Categories",
    3: "Sub-Sub Categories",
    4: "Edit Category",
  };
  let { search } = useLocation();
  const queryParams = new URLSearchParams(search)
  let tab = queryParams.get("tab");
  const [selectedTab, setSelectedTab] = useState(tab);

  useEffect(()=>{
    setSelectedTab(queryParams.get("tab"))
  },[tab])

  console.log(id);
  const category = categories.find( c => {
    
    console.log(c.id);
    return c.id == id;
  });
  console.log(categories);
  console.log(category);

  
  return (
    <div className="w-[96%] text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full flex flex-col ml-6 text-[#033362] font-semibold">
          <div className="flex justify-between items-center w-full">
            <div className="px-2">Dashboard</div>
            <div className="px-2">
              <FontAwesomeIcon icon={faComment} />
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="w-[65%]">
              <input className="w-full max-w-full bg-[#fff] rounded-full h-8" />
            </div>
            <div className="px-2 min-w-fit">11:11 AM - August 21 ,2022</div>
            <div className="px-2">
              <span className="text-[#00AEEF]">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className="bg-[white] grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
          <div className={`${styles.tabs} rounded-xl` }  >
              <div className={`${styles.tab} rounded-tl-xl pl-[20px] text-[18px] py-[10px] ${styles.selected}`} >
                {tabs[selectedTab]}
              </div>
              <Tab content='ProductsByCategory' selectedTab={selectedTab} labelId="label-1" title="Products By Category" value='1' handleCheck={handleCheck} category_id={id} products={products}/>
              <Tab content='SubCategories' selectedTab={selectedTab}  title="Sub Categories" value='2' handleCheck={handleCheck} category_id={id} categories = {categories} CategoriesProducts = {CategoriesProducts}/>
              <Tab content='EditCategory' selectedTab={selectedTab}  title="Edit Category" value='4' handleCheck={handleCheck} category_id={id} category={category} categories = {categories}/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CategoryDetails;
