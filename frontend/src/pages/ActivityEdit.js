import React, { useState } from "react";
import SideBar from "../components/SideBar";

import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileMultiUpload from "../components/FileUploader/FileMultiUpload";
import FileList from "../components/FileUploader/FileList";import RichTextEditor from "../components/RichTextEditor";
import Footer from "../components/Footer";

function ActivityEdit() {
  const [values, setValues] = useState({
    titleAr: "",
    titleEn: "",
    category: "",
    descAr: "",
    descEn: "",
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
            <div className="ml-[8%]  scrollbar-thin h-full scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div className="mt-8">
                <div className="text-[#0388CC] font-[600] text-[14px]">
                  Basic Information
                </div>
                <div className="flex flex-wrap">
                <div className="w-[40%] mr-[20px] my-[10px]">
                    <label
                      className="text-[14px] font-[500]"
                      htmlFor="title-en"
                    >
                      Title - EN{" "}
                      <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                      placeholder="Activity title in english"
                      onChange={changeHandler}
                      value={values.titleEn}
                      name="titleEn"
                      type="text"
                      id="title-en"
                    />
                  </div>
                  <div className="w-[40%] mr-[20px] my-[10px]">
                    <label
                      className="text-[14px] font-[500]"
                      htmlFor="title-ar"
                    >
                      Title - AR{" "}
                      <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                      placeholder="Activity title in arabic"
                      onChange={changeHandler}
                      value={values.titleAr}
                      name="titleAr"
                      type="text"
                      id="title-ar"
                    />
                  </div>
                  <div className="w-[400px] mr-[120px] my-[10px]">
                    <div className="mt-[0px] text-[15px] font-[400] text-[#000]">
                      Category
                      <span className="text-[red] font-[700]">*</span>
                    </div>
                    <input
                      className="mr-[10px]"
                      type="radio"
                      name="category"
                      onChange={()=>{setValues({...values, category:'national'}); console.log(values.category) }}
                      value="national"
                      id="national"
                    />
                    <label
                      htmlFor="national"
                      className="text-[14px] font-arabic text-[#0388CC] font-[400]"
                    >
                      معارض سورية
                    </label>
                    <input
                      className="mr-[10px] ml-[30px]"
                      type="radio"
                      onChange={()=>{setValues({...values, category:'international'}); console.log(values.category) }}
                      name="category"
                      value="international"
                      id="international"
                    />
                    <label
                      htmlFor="international"
                      className="text-[14px] font-arabic text-[#0388CC] font-[400]"
                    >
                      معارض عالمية
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap mt-[15px] w-[87%]">
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
                <div className="my-12">
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
                    Video Link for the main Slider
                  </div>
                  <input
                    className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder="or Copy URL for the Video Here"
                    onChange={changeHandler}
                      value={values.videoLink}
                      name="videoLink"
                    type="text"
                  />
                </div>
                <div className="flex mb-2 pb-[20px] ">
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

export default ActivityEdit;
