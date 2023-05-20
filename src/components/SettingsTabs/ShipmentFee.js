import React from "react";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../../global/columns/shipmentFeeColumns";
import data from "../../global/shipmentFeeData";
function Offers() {
  const gridStyle = {
    minHeight: 560,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };
  const showCellBorders = false;
  const showZebraRows = false;
  return (
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
  );
}

export default Offers;
