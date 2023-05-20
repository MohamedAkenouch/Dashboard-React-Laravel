import React from "react";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../../global/columns/couponColumns";
import data from "../../global/couponData";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import NewCoupon from "../Modals/NewCoupon";
function Coupons() {
  const [showModal, setShowModal] = React.useState(false);
  const gridStyle = {
    minHeight: 560,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };
  const showCellBorders = false;
  const showZebraRows = false;
  return (
    <div className="flex flex-col justify-between">

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
    {showModal ? <NewCoupon setShowModal={setShowModal} /> : null}
    <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer flex items-center text-[#0388CC] h-[30px] mb-[0px] ml-[20px] text-[13px]"
      >
        <div className="mr-2">Add new coupon </div>
        <div className="text-[20px]">
          <FontAwesomeIcon icon={faCirclePlus} />
        </div>
      </div>
    
    </div>
  );
}

export default Coupons;
