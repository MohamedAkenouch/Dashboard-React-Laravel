import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileItem from "../FileUploader/FileItem";
import RichTextEditor from "../RichTextEditor";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function EditCooksCategory() {
  const [values, setValues] = useState({
    nameAr: "",
    nameEn: "",
    descAr: "",
    descEn: "",
  });

  const getDescAr = (value) => {
    setValues({ ...values, descAr: value });
  };
  const getDescEn = (value) => {
    setValues({ ...values, descEn: value });
  };

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //Category Image
  const [categoryImage, setCategoryImage] = useState([]);
  const [categoryImageData, setCategoryImageData] = useState([]);
  const removeCategoryImage = (filename, index) => {
    setCategoryImage(null);
    setCategoryImageData(null);
  };
  return (
    <div className="ml-[6.5%]">
      <div className="flex flex-wrap">
        <div className="w-[40%] mr-[20px] my-[10px]">
          <label className="text-[14px] font-[500]" htmlFor="name-en">
            Name - EN
            <span className="text-[red] font-[700]">*</span>
          </label>
          <input
            className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Cook cetegory name in english"
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
            placeholder="Cook cetegory name in arabic"
            onChange={changeHandler}
                      value={values.nameAr}
                      name="nameAr"
            type="text"
            id="name-ar"
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
      <div className="mt-6">
        <p className="text-[#000] text-[14px] font-[400]">
          Select a images of catgory ( JPEG or PNG ):
          <span className="text-[red] font-[700]">*</span>
        </p>
        <div className=" w-[130px] h-[30px] mt-[10px]">
          <FileUpload
            files={categoryImage}
            setFiles={setCategoryImage}
            setFileData={setCategoryImageData}
            removeFile={removeCategoryImage}
          />
        </div>
        <div className>
          <FileItem
            fileData={categoryImageData}
            file={categoryImage}
            removeFile={removeCategoryImage}
            index="0"
          />
        </div>
      </div>
      <div className="flex mb-2 absolute bottom-0 right-12 pb-[20px] ">
        <div className="rounded-full text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]">
          Cancel
        </div>
        <div className="rounded-full text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
          Save
        </div>
      </div>
    </div>
  );
}

export default EditCooksCategory;
