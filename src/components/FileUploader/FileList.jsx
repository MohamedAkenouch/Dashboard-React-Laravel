import axios from "axios";
import React from "react";
import FileItem from "./FileItem";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FileList = ({ files, removeFile,filesData }) => {
  const deleteFileHandler = (_name) => {
    axios
      .delete(`http://localhost:8080/upload?name=${_name}`)
      .then((res) => removeFile(_name))
      .catch((err) => console.error(err));
  };
  return (
    <ul className="file-list flex flex-wrap mr-[50px]">
      {
                files &&
                files.map((f, i) => (<FileItem
                    key={i}
                    index={i}
                    fileData = {filesData? filesData[i] : null}
                    file={f}
                    removeFile={removeFile} />))
            }
      {/* <li className="file-item w-[200px] mt-[30px] mr-[90px] text-[14px] items-center flex">
        <img
          className="w-[50px] "
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
        />
        <p className="w-[130px] font-thin text-[#0388CC] ml-[20px]">
          file.name
        </p>
        <div className="actions">
          <div className="loading"></div>
          {false && (
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin"
              onClick={() => {}}
            />
          )}
          {!false && <FontAwesomeIcon icon={faTrashCan} onClick={() => {}} />}
        </div>
      </li>
      <li className="file-item w-[200px] mt-[30px] mr-[90px] text-[14px] items-center flex">
        <img
          className="w-[50px] "
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
        />
        <p className="w-[130px] font-thin text-[#0388CC] ml-[20px]">
          file.name
        </p>
        <div className="actions">
          <div className="loading"></div>
          {false && (
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin"
              onClick={() => {}}
            />
          )}
          {!false && <FontAwesomeIcon icon={faTrashCan} onClick={() => {}} />}
        </div>
      </li> */}


    </ul>
  );
};

export default FileList;
