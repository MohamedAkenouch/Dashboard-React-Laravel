import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./FileUpload.css";


const FileUpload = ({ setValues, values ,files, setFiles, removeFile, setFileData,name }) => {
  const uploadHandler = (event) => {
    setValues({ ...values, [event.target.name] : event.target.files[0] });
    const file = event.target.files[0];
    console.log(file);
    if (!file) return;
    file.isUploading = true;
    setFiles(file);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFileData(reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);

    // upload file
    // const formData = new FormData();
    // formData.append("newFile", file, file.name);

  };

  return (
    <>
      <div className="file-card w-full h-full">
        <div className="file-inputs">
          <input
            onClick={(event) => {
              event.target.value = null;
            }}
            type="file"
            onChange={uploadHandler}
            name={name}
          />
          <button>
            <i>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </i>
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
