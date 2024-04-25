import React, {useState} from "react";
import SideBar from "../components/SideBar";
import NewCookCategory from "../components/Modals/NewCookCategory";

import {
  faUser,
  faCaretDown,
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../global/columns/cooksCategoryColumns";
import data from "../global/cooksCategoryData";
import Footer from "../components/Footer";

function CooksCategories() {
  const gridStyle = {
    minHeight: 560,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };

  const showCellBorders = false;
  const showZebraRows = false;
  const [rowHeight, setRowHeight] = useState(60);
  const [showModal, setShowModal] = React.useState(false);

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
          <div className='bg-[white] grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]'>
          <div className=" p-3 w-full">
                  <ReactDataGrid
                    idProperty="id"
                    columns={columns}
                    showCellBorders={showCellBorders}
                    showZebraRows={showZebraRows}
                    style={gridStyle}
                    rowHeight={rowHeight}
                    dataSource={data}
                  />
                </div>
                {showModal ? (
              <NewCookCategory setShowModal={setShowModal} />
            ) : null}
            <div onClick={() => setShowModal(true)} className="cursor-pointer flex items-center text-[#0388CC] h-[30px] mb-[15px] ml-[25px] text-[13px]">
              <div className="mr-2">Add new cook category </div>
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

export default CooksCategories;
