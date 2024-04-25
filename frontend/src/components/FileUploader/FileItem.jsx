import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
// import "./FileItem.css";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const FileItem = ({ file, removeFile, fileData, index, type }) => {
  return (
    <>
      <li
        className="file-item w-[200px] mt-[30px] mr-[90px] text-[14px] items-center flex"
        key={file?.name}
      >
        {fileData && file && <img className="w-[50px] " src={fileData} />}
        {file && type=='pdf' && (
          <img className="w-[50px] " src="./images/pdficon.png" />
        )}
        {file && type=='video' && (
          <img className="w-[50px] " src="./images/videoicon.png" />
        )}

        <p className="w-[130px] font-thin text-[#0388CC] ml-[20px]">
          {
            ((file?.name)?.length > 14) ?
            (file?.name).substring(0, 8) + "..." + (file?.name).substring((file?.name).length - 6)
            :
            (file?.name)
          }
        </p>
        <div className="actions cursor-pointer ml-1">
          <div className="loading"></div>
          {/* {file.isUploading && (
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin"
              onClick={() => deleteFile(file.name)}
            />
          )} */}
          {file?.isUploading && (
            <FontAwesomeIcon
              className="hover:text-[#E3370A]"
              icon={faTrashCan}
              onClick={() => removeFile(file?.name, index)}
            />
          )}
        </div>
      </li>

      {/* <li className="file-item" key={file.name}>
        <FontAwesomeIcon icon={faFileAlt} />
        <p>{file.name}</p>
        <div className="actions">
          <div className="loading"></div>
          {file.isUploading && (
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin"
              onClick={() => deleteFile(file.name)}
            />
          )}
          {!file.isUploading && (
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteFile(file.name)}
            />
          )}
        </div>
      </li> */}
    </>
  );
};

export default FileItem;
