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

function PDF() {
  const [pdf, setPdf] = useState(null);
  const [pdfData, setPdfData] = useState(null);

  const removeFile = (filename) => {
    setPdf(null);
  };
  return (
    <div>
      <p className="text-[#000] text-[14px] font-[400]">
        Select a PDF of Product:
        <span className="text-[red] font-[700]">*</span>
      </p>
      <div className=" w-[130px] h-[30px] mt-[10px]">
        <FileUpload files={pdf} setFiles={setPdf} setFileData={setPdfData} removeFile={removeFile} />
      </div>
      <div className>
      <FileItem fileData={null} type="pdf" file={pdf} removeFile={removeFile} index='0' />
      </div>
    </div>
  );
}

export default PDF;
