import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../global/columns/orderColumns-2";
import Header from "../components/HeaderSecond";
import Footer from "../components/Footer";

import { getOrdersData } from '../global/data/ordersData'



function Orders({orders, users}) {

  const ordersData = getOrdersData(orders, users)

  const gridStyle = {
    minHeight: 560,
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
          <Header title={"Orders / View Orders"}/>
          <div className='bg-[white] grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]'>
          <div className=" p-3 w-full">
                  <ReactDataGrid
                    idProperty="id"
                    columns={columns}
                    showCellBorders={showCellBorders}
                    showZebraRows={showZebraRows}
                    style={gridStyle}
                    dataSource={ordersData}
                  />
                </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Orders;
