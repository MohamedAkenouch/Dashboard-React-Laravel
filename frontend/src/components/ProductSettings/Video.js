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
function Video() {
  const [video, setVideo] = useState(null);
  const [videoData, setVideoData] = useState(null);

  const removeFile = (filename) => {
    setVideo(null);
  };
  return (
    <div>
      <p className="text-[#000] text-[14px] font-[400]">
        Select a Video of Product:
        <span className="text-[red] font-[700]">*</span>
      </p>
      <div className=" w-[130px] h-[30px] mt-[10px]">
        <FileUpload files={video} setFiles={setVideo} setFileData={setVideoData} removeFile={removeFile} />
      </div>
      <FileItem fileData={null} type="video" file={video} removeFile={removeFile} index='0' />
      <input
            className="h-[30px] mt-[15px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="or Copy URL for the Video Here"
            type="text"
          />
    </div>
  );
}

export default Video;
