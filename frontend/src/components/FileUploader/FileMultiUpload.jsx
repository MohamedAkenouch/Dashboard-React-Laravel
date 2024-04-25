import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./FileUpload.css";
import axios from "axios";

const FileMultiUpload = ({
  files,
  setFiles,
  removeFile,
  filesData,
  setFilesData,
}) => {
  const uploadHandler = (event) => {
    
    const file = event.target.files[0];
    console.log(file);
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFilesData([...filesData, reader.result]);
    });
    reader.readAsDataURL(event.target.files[0]);
    console.log(filesData);

    // upload file
    const formData = new FormData();
    formData.append("newFile", file, file.name);
    // axios.post('http://localhost:8080/upload', formData)
    //     .then((res) => {
    //         file.isUploading = false;
    //         setFiles([...files, file])
    //     })
    //     .catch((err) => {
    //         // inform the user
    //         console.error(err)
    //         removeFile(file.name)
    //     });
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

export default FileMultiUpload;
