import React, { useState, useCallback } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import NewSubCategory from "../Modals/NewSubCategory";

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import columns from "../../global/columns/categoryColumns";
import data from "../../global/categoryData";
// import styles from "../../styles/toggle.module.css"
// import "../../styles/toggle.module.css"

function SubSubCategories() {
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };
  const gridStyle = {
    minHeight: 530,
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
  return (
    <>
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
          dataSource={data}
        />
      </div>
      {
              showModal ? <NewSubCategory setShowModal = {setShowModal}/> : null
            }
      <div onClick={() => setShowModal(true)}  className="cursor-pointer  flex items-center text-[#0388CC] h-[30px] absolute bottom-2  text-[13px]">
        <div className="mr-2">Add new category </div>
        <div className="text-[20px]">
          <FontAwesomeIcon icon={faCirclePlus} />
        </div>
      </div>
    </>
  );
}

export default SubSubCategories;
