import React, { useState } from "react";
import FileMultiUpload from "../FileUploader/FileMultiUpload";
import FileList from "../FileUploader/FileList";
import RichTextEditor from "../RichTextEditor";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function WhoWeArePage() {
   //Image Slider
   const [sliderFiles, setSliderFiles] = useState([]);
   const [sliderFilesData, setSliderFilesData] = useState([]);
   const removeSliderFile = (filename, index) => {
     setSliderFiles(sliderFiles.filter((file, i) => i !== index));
     setSliderFilesData(sliderFilesData.filter((fileData, i) => i !== index));
   };

   //Quality Certificates
  const [marksFiles, setMarksFiles] = useState([]);
  const [marksFilesData, setMarksFilesData] = useState([]);
  const removeMarksFile = (filename, index) => {
    setMarksFiles(marksFiles.filter((file, i) => i !== index));
    setMarksFilesData(marksFilesData.filter((fileData, i) => i !== index));
  };


  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
  return (
    <div>
      <div className="flex">
        <div>
          <div className="text-[#000] font-[700] text-[14px]">1.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#000] font-[700] text-[14px]">
            Page slider
          </p>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Select images for the slider ( JPEG or PNG ):
            <span className="text-[red] font-[700]">*</span>
          </p>
          <div className=" w-[130px] h-[30px] mt-[10px]">
            <FileMultiUpload
              files={sliderFiles}
              filesData={sliderFilesData}
              setFilesData={setSliderFilesData}
              setFiles={setSliderFiles}
              removeFile={removeSliderFile}
            />
          </div>
          <div>
            <FileList
              files={sliderFiles}
              filesData={sliderFilesData}
              removeFile={removeSliderFile}
            />
          </div>
        </div>
      </div>
      <div className="flex mt-[40px]">
        <div>
          <div className="text-[#000] font-[700] text-[14px]">2.</div>
        </div>
        <div className="ml-[6%] w-[87%]">
          <p className="text-[#000] font-[700] text-[14px]">
            Content
          </p>
          <div className=' mt-[20px] text-[14px]'>Intro</div>
          <div className="flex flex-wrap justify-between w-full">
          <RichTextEditor name='Description-AR' initialValue="" getValue={getValue} />
          <RichTextEditor name='Description-EN' initialValue="" getValue={getValue} />
          </div>
          <div className=' mt-[20px] text-[14px]'>Our Value</div>
          <div className="flex flex-wrap justify-between w-full">
          <RichTextEditor name='Description-AR' initialValue="" getValue={getValue} />
          <RichTextEditor name='Description-EN' initialValue="" getValue={getValue} />
          </div>
          <div className=' mt-[20px] text-[14px]'>Our Goal</div>
          <div className="flex flex-wrap justify-between w-full">
          <RichTextEditor name='Description-AR' initialValue="" getValue={getValue} />
          <RichTextEditor name='Description-EN' initialValue="" getValue={getValue} />
          </div>
        </div>
      </div>
      <div className="flex mt-[40px]">
        <div>
          <div className="text-[#000] font-[700] text-[14px]">3.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#000] font-[700] text-[14px]">
            Quality Certificates
          </p>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Select images for the certificates ( JPEG or PNG ):
            <span className="text-[red] font-[700]">*</span>
          </p>
          <div className=" w-[130px] h-[30px] mt-[10px]">
            <FileMultiUpload
              files={marksFiles}
              filesData={marksFilesData}
              setFilesData={setMarksFilesData}
              setFiles={setMarksFiles}
              removeFile={removeMarksFile}
            />
          </div>
          <div>
            <FileList
              files={marksFiles}
              filesData={marksFilesData}
              removeFile={removeMarksFile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeArePage;
