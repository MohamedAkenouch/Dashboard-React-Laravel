import React, { useState } from "react";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../../global/columns/cooksByCategoryColumns";
import data from "../../global/cookData";
import NewCook from "../Modals/NewCook";
import {
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";
function CooksByCategory() {
  const gridStyle = {
    minHeight: 560,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };
  const [rowHeight, setRowHeight] = useState(60);
  const showCellBorders = false;
  const showZebraRows = false;
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <div className=" p-3 w-full">
        <ReactDataGrid
          idProperty="id"
          columns={columns}
          showCellBorders={showCellBorders}
          showZebraRows={showZebraRows}
          rowHeight={rowHeight}
          style={gridStyle}
          dataSource={data}
        />
      </div>
      {showModal ? <NewCook setShowModal={setShowModal} /> : null}
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer flex items-center text-[#0388CC] h-[30px] mb-[15px] ml-[25px] text-[13px]"
      >
        <div className="mr-2">Add new cook </div>
        <div className="text-[20px]">
          <FontAwesomeIcon icon={faCirclePlus} />
        </div>
      </div>
    </div>
  );
}

export default CooksByCategory;
