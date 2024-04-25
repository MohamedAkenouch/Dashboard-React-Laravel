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

function NewNews({ setShowModal }) {
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
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add New Activity
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative px-6 w-full">
              <div className="text-[#0388CC] font-[600] text-[14px]">
                Basic Information
              </div>
              <div className="flex flex-wrap">
                <div className="w-[40%] mr-[20px] my-[10px]">
                  <label className="text-[14px] font-[500]" htmlFor="title-en">
                    Title - EN <span className="text-[red] font-[700]">*</span>
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
                  <label className="text-[14px] font-[500]" htmlFor="title-ar">
                    Title - AR <span className="text-[red] font-[700]">*</span>
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
                    onChange={() => {
                      setValues({ ...values, category: "national" });
                      console.log(values.category);
                    }}
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
                    onChange={() => {
                      setValues({ ...values, category: "international" });
                      console.log(values.category);
                    }}
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
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end px-3 rounded-b">
              <div className=" flex pb-[10px] ">
                <div
                  onClick={() => setShowModal(false)}
                  className="rounded-full cursor-pointer text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]"
                >
                  Cancel
                </div>
                <div className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default NewNews;
