import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileItem from "../FileUploader/FileItem";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function SKU() {
  const [sku, setSku] = useState(null);
  const [skuData, setSkuData] = useState(null);

  const removeFile = (filename) => {
    setSku(null);
  };
  return (
    <div>
      <div className="text-[#000] text-[14px] font-[400]">
        <span>
          SKU Code:<span className="text-[red] font-[700] mr-4">*</span>
        </span>
        <input
          className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
          placeholder="Enter SKU code"
          type="text"
        />
      </div>
      <p className="text-[#000] text-[14px] mt-3 font-[400]">
        SKU Photo for this product:
        <span className="text-[red] font-[700]">*</span>
      </p>

      <div className=" w-[130px] h-[30px] mt-[10px]">
        <FileUpload files={sku} setFiles={setSku} setFileData={setSkuData} removeFile={removeFile} />
      </div>
      <FileItem fileData={skuData} file={sku} removeFile={removeFile} index='0' />
      
    </div>
  );
}

export default SKU;
