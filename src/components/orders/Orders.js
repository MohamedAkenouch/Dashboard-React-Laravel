import React from "react";
// import SideBar from "../components/SideBar";

import {
  faCircle,
  faArrowDown,
  faArrowUp,
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
// import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "./orderColumns";
import data from "./orderData";

function Orders() {
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
        <div className="w-full flex flex-col ml-6 text-[#033362] font-semibold">
          <div className="bg-[white] grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
            <div className=" p-3 w-full">
              <ReactDataGrid
                idProperty="id"
                columns={columns}
                showCellBorders={showCellBorders}
                showZebraRows={showZebraRows}
                style={gridStyle}
                dataSource={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
