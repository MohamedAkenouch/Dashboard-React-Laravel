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

function Careers() {
  const [backgroundImage, setBackgroundImage] = useState([]);
  const [backgroundImageData, setBackgroundImageData] = useState([]);
  const removeBackgroundImage = (filename, index) => {
    setBackgroundImage(null);
    setBackgroundImageData(null);
  };
  return (
    <div>
      <div className="flex">
        <div>
          <div className="text-[#000] font-[700] text-[14px]">1.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#000] font-[700] text-[14px]">
            Background Image
          </p>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Select a Background Image ( JPEG or PNG ):
            <span className="text-[red] font-[700]">*</span>
          </p>
          <div className=" w-[130px] h-[30px] mt-[10px]">
              <FileUpload
                files={backgroundImage}
                setFiles={setBackgroundImage}
                setFileData={setBackgroundImageData}
                removeFile={removeBackgroundImage}
              />
            </div>
            <div className>
              <FileItem
                fileData={backgroundImageData}
                file={backgroundImage}
                removeFile={removeBackgroundImage}
                index="0"
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Careers