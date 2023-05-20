import React, { useState } from "react";
import SideBar from "../components/SideBar";

import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileUpload from "../components/FileUploader/FileUpload";
import RichTextEditor from "../components/RichTextEditor";

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import FileItem from "../components/FileUploader/FileItem";
import FileList from "../components/FileUploader/FileList";
import FileMultiUpload from "../components/FileUploader/FileMultiUpload";
import Footer from "../components/Footer";

function CookEdit() {
  const [values, setValues] = useState({
    nameAr: "",
    nameEn: "",
    videoURL: "",
    standards: "",
    descAr: "",
    descEn: "",
    recommandedProducts: "",
    videoLink: "",
  });

  const getDescAr = (value) => {
    setValues({ ...values, descAr: value });
    console.log(values.descAr);
  };
  const getDescEn = (value) => {
    setValues({ ...values, descEn: value });
    console.log(values.descEn);
  };

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values[e.target.name]);
  };

  //Slider Files
  const [sliderFiles, setSliderFiles] = useState([]);
  const [sliderFilesData, setSliderFilesData] = useState([]);
  const removeSliderFile = (filename, index) => {
    setSliderFiles(sliderFiles.filter((file, i) => i !== index));
    setSliderFilesData(sliderFilesData.filter((fileData, i) => i !== index));
  };

  //Background Image
  const [backgroundImage, setBackgroundImage] = useState([]);
  const [backgroundImageData, setBackgroundImageData] = useState([]);
  const removeBackgroundImage = (filename, index) => {
    setBackgroundImage(null);
    setBackgroundImageData(null);
  };
  return (
    <div className="w-[96%] text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full ml-6 text-[#033362] font-semibold">
          <div className="flex justify-between items-center w-full">
            <div className="px-2">Dashboard</div>
            <div className="px-2">
              <FontAwesomeIcon icon={faComment} />
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="w-[65%]">
              <input className="w-full max-w-full bg-[#fff] rounded-full h-8" />
            </div>
            <div className="px-2 min-w-fit">11:11 AM - August 21 ,2022</div>
            <div className="px-2">
              <span className="text-[#00AEEF]">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className="bg-[white] h-[694px] mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
            <div className="ml-[6.5%] scrollbar-thin h-full scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div className="">
                <div className="flex mt-6 flex-wrap">
                  <div className="w-[40%] mr-[20px] my-[10px]">
                    <label className="text-[14px] font-[500]" htmlFor="name-en">
                      Name - EN
                      <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                      placeholder="Enter cook name in english"
                      onChange={changeHandler}
                      value={values.nameEn}
                      name="nameEn"
                      type="text"
                      id="name-en"
                    />
                  </div>
                  <div className="w-[40%] mr-[20px] my-[10px]">
                    <label className="text-[14px] font-[500]" htmlFor="name-ar">
                      Name - AR
                      <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                      placeholder="Enter cook name in arabic"
                      onChange={changeHandler}
                      value={values.nameAr}
                      name="nameAr"
                      type="text"
                      id="name-ar"
                    />
                  </div>
                  <div className="w-[40%] mr-[20px] my-[10px]">
                    <label
                      className="text-[14px] font-[500]"
                      htmlFor="video-url"
                    >
                      Video URL
                      <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                      placeholder="Copy URL for the Video Here"
                      onChange={changeHandler}
                      value={values.videoURL}
                      name="videoURL"
                      type="text"
                      id="video-url"
                    />
                  </div>
                  <div className="w-[40%] mr-[20px] my-[10px]">
                    <label
                      className="text-[14px] font-[500]"
                      htmlFor="standards"
                    >
                      Standards{" "}
                      <span className="font-[400] font-arabic opacity-[46%]">
                        المكونات
                      </span>
                      <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                      placeholder="Enter the cook standards"
                      onChange={changeHandler}
                      value={values.standards}
                      name="standards"
                      type="text"
                      id="standards"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mt-[30px] w-[87%]">
                  <RichTextEditor
                    name="Description-EN"
                    initialValue=""
                    getValue={getDescEn}
                  />
                  <RichTextEditor
                    name="Description-AR"
                    initialValue=""
                    getValue={getDescAr}
                  />
                </div>
                <div className="flex">
                  <div className="mt-6 mr-[20px] w-[40%]">
                    <p className="text-[#000] text-[14px] font-[400]">
                      Select an image for background ( JPEG or PNG ):
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
                  <div className="mt-6 w-[40%]">
                    <p className="text-[#000] text-[14px] font-[400]">
                      Recommended Products{" "}
                      <span className="text-[red] font-[700]">*</span>
                    </p>
                    <select
                      value={values.recommandedProducts}
                      name="recommanded-products"
                      onChange={changeHandler}
                      className="w-[100%] rounded-md px-1 mt-4 font-[400] text-[14px] text-[#000]"
                    >
                      <option>Select recommanded products</option>
                      <option value="fr">Product Name</option>
                      <option value="ar">Product Name</option>
                      <option value="en">Product Name</option>
                    </select>
                  </div>
                </div>
                <div className="my-12">
                  <h1 className="text-[#000] font-[700] text-[14px]">
                    Photo Slider
                  </h1>
                  <p className="text-[#000] text-[14px] font-[400]">
                    Select a images of Product ( JPEG or PNG ):
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
                  <div className="text-[#000] mt-[20px] text-[14px] font-[400]">
                    Or Use Video Link(Youtube, Vimo...)
                  </div>
                  <input
                    className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder="Copy URL for the Video Here"
                    onChange={changeHandler}
                    value={values.videoLink}
                    name="videoLink"
                    type="text"
                  />
                </div>
                <div className="flex mb-2 float-right mr-12 mb-4 pb-[20px] ">
                  <div className="rounded-full text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]">
                    Cancel
                  </div>
                  <div className="rounded-full text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CookEdit;
