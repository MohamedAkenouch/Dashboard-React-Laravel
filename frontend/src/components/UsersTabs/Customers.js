import React, {useState} from "react";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../../global/columns/customerColumns";
// import data from "../../global/customerData";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import NewCustomer from "../Modals/NewCustomer";
import DeleteUser from "../Modals/DeleteUser";

import { getUsersData } from '../../global/data/usersData'

function Customers({users}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userPhone, setUserPhone] = useState('');

  const usersData = getUsersData(users, setUserPhone, setShowDeleteModal)
  

  const gridStyle = {
    minHeight: 475,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };
  const showCellBorders = false;
  const showZebraRows = false;
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="flex flex-col justify-between">
      <div className=" p-3 w-full">
        <ReactDataGrid
          idProperty="id"
          columns={columns}
          showCellBorders={showCellBorders}
          showZebraRows={showZebraRows}
          style={gridStyle}
          dataSource={usersData}
          rowHeight={60}
        />
      </div>
      {showModal ? <NewCustomer setShowModal={setShowModal} /> : null}
      {showDeleteModal ? <DeleteUser setShowDeleteModal={setShowDeleteModal} phone={userPhone} /> : null}
      {/* <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer flex items-center text-[#0388CC] h-[30px] mb-[0px] ml-[20px] text-[13px]"
      >
        <div className="mr-2">Add new customer </div>
        <div className="text-[20px]">
          <FontAwesomeIcon icon={faCirclePlus} />
        </div>
      </div> */}
    </div>
  );
}

export default Customers;
