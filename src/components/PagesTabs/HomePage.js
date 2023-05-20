import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileMultiUpload from "../FileUploader/FileMultiUpload";
import FileList from "../FileUploader/FileList";
import FileItem from "../FileUploader/FileItem";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  //Main Slider Files
  const [mainFiles, setMainFiles] = useState([]);
  const [mainFilesData, setMainFilesData] = useState([]);
  const removeMainFile = (filename, index) => {
    setMainFiles(mainFiles.filter((file, i) => i !== index));
    setMainFilesData(mainFilesData.filter((fileData, i) => i !== index));
  };
  //Catalogue File
  const [catalogue, setCatalogue] = useState(null);
  const [catalogueData, setCatalogueData] = useState(null);
  const removeCatalogue = (filename, index) => {
    setCatalogue(null);
    setCatalogueData(null);
  };

  //Second Slider
  const [secondFiles, setSecondFiles] = useState([]);
  const [secondFilesData, setSecondFilesData] = useState([]);
  const removeSecondFile = (filename, index) => {
    setSecondFiles(secondFiles.filter((file, i) => i !== index));
    setSecondFilesData(secondFilesData.filter((fileData, i) => i !== index));
  };

  //Product Gallery
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryFilesData, setGalleryFilesData] = useState([]);
  const removeGalleryFile = (filename, index) => {
    setGalleryFiles(galleryFiles.filter((file, i) => i !== index));
    setGalleryFilesData(galleryFilesData.filter((fileData, i) => i !== index));
  };

  //Trade Marks
  const [marksFiles, setMarksFiles] = useState([]);
  const [marksFilesData, setMarksFilesData] = useState([]);
  const removeMarksFile = (filename, index) => {
    setMarksFiles(marksFiles.filter((file, i) => i !== index));
    setMarksFilesData(marksFilesData.filter((fileData, i) => i !== index));
  };

  //Video Links
  const [links, setLinks] = useState({
    link1 :"",
    link2 :"",
    link3 :"",
    link4 :"",
  })

  const changeHandler = (e) =>{
    setLinks({...links, [e.target.name]:e.target.value})
    console.log(links[e.target.name])
  }
  return (
    <div>
      <div className="flex">
        <div>
          <div className="text-[#000] font-[700] text-[14px]">1.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#000] font-[700] text-[14px]">
            Home page main slider
          </p>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Select images of product slider ( JPEG or PNG ):
            <span className="text-[red] font-[700]">*</span>
          </p>
          <div className=" w-[130px] h-[30px] mt-[10px]">
            <FileMultiUpload
              files={mainFiles}
              filesData={mainFilesData}
              setFilesData={setMainFilesData}
              setFiles={setMainFiles}
              removeFile={removeMainFile}
            />
          </div>
          <div>
            <FileList
              files={mainFiles}
              filesData={mainFilesData}
              removeFile={removeMainFile}
            />
          </div>
          <div className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Video Link for the main Slider
          </div>
          <input
            className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Copy URL for the Video Here"
            type="text"
          />
        </div>
      </div>
      <div className="flex mt-[60px]">
        <div>
          <div className="text-[#000] font-[700] text-[14px]">2.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#000] font-[700] text-[14px]">
            Download the catalog
          </p>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Select a PDF of Product :
          </p>
          <div className="">
            <div className=" w-[130px] h-[30px] mt-[10px]">
              <FileUpload
                files={catalogue}
                setFiles={setCatalogue}
                setFileData={setCatalogueData}
                removeFile={removeCatalogue}
              />
            </div>
            <div className>
              <FileItem
                fileData={null}
                type="pdf"
                file={catalogue}
                removeFile={removeCatalogue}
                index="0"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex mt-[60px]">
        <div>
          <div className="text-[#000] font-[700] text-[14px]">3.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#000] font-[700] text-[14px]">
            Home Page Second Slider
          </p>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Select images for the second slider ( JPEG or PNG ):
            <span className="text-[red] font-[700]">*</span>
          </p>
          <div className=" w-[130px] h-[30px] mt-[10px]">
            <FileMultiUpload
              files={secondFiles}
              filesData={secondFilesData}
              setFilesData={setSecondFilesData}
              setFiles={setSecondFiles}
              removeFile={removeSecondFile}
            />
          </div>
          <div>
            <FileList
              files={secondFiles}
              filesData={secondFilesData}
              removeFile={removeSecondFile}
            />
          </div>
        </div>
      </div>
      <div className="flex mt-[60px]">
        <div>
          <div className="text-[#000] font-[700] text-[14px]">4.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#000] font-[700] text-[14px]">
            Photos & Videos Gallery
          </p>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Select images for the gallery ( JPEG or PNG ):
            <span className="text-[red] font-[700]">*</span>
          </p>
          <div className=" w-[130px] h-[30px] mt-[10px]">
            <FileMultiUpload
              files={galleryFiles}
              filesData={galleryFilesData}
              setFilesData={setGalleryFilesData}
              setFiles={setGalleryFiles}
              removeFile={removeGalleryFile}
            />
          </div>
          <div>
            <FileList
              files={galleryFiles}
              filesData={galleryFilesData}
              removeFile={removeGalleryFile}
            />
          </div>
          <div className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Video Links
          </div>
          <span className="mr-[10px] text-[#000] text-[14px] font-[400]">
            1
          </span>
          <input
            className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Copy URL for the Video Here"
            onChange={changeHandler}
            value={links.link1}
            name='link1'
            type="text"
          />
          <br />
          <span className="mr-[10px] text-[#000] text-[14px] font-[400]">
            2
          </span>
          <input
            className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Copy URL for the Video Here"
            onChange={changeHandler}
            value={links.link2}
            name='link2'
            type="text"
          />
          <br />
          <span className="mr-[10px] text-[#000] text-[14px] font-[400]">
            3
          </span>
          <input
            className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Copy URL for the Video Here"
            onChange={changeHandler}
            value={links.link3}
            name='link3'
            type="text"
          />
          <br />
          <span className="mr-[10px] text-[#000] text-[14px] font-[400]">
            4
          </span>
          <input
            className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Copy URL for the Video Here"
            onChange={changeHandler}
            value={links.link4}
            name='link4'
            type="text"
          />
        </div>
      </div>
      
      <div className="flex mb- mt-[60px]">
        <div>
          <div className="text-[#000] font-[700] text-[14px]">5.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#000] font-[700] text-[14px]">Trademarks</p>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Select images of trademarks ( JPEG or PNG ):
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

export default HomePage;
