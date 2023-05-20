import React, { useState } from "react";
import FileMultiUpload from "../FileUploader/FileMultiUpload";
import FileList from "../FileUploader/FileList";


function Images({files,filesData,setFilesData,setFiles}) {

  const removeFile = (filename, index) => {
    setFiles(files.filter((file, i) => i !== index));
    setFilesData(filesData.filter((fileData, i) => i !== index));
  };

  return (
    <div >
      <p className="text-[#000] text-[14px] font-[400]">
        Select a images of Product ( JPEG or PNG ):
        <span className="text-[red] font-[700]">*</span>
      </p>
      <div className=" w-[130px] h-[30px] mt-[10px]">
        <FileMultiUpload files={files} filesData={filesData} setFilesData={setFilesData} setFiles={setFiles} removeFile={removeFile} />
      </div>
      <div>
        <FileList files={files} filesData={filesData} removeFile={removeFile} />
      </div>
    </div>
  );
}

export default Images;
