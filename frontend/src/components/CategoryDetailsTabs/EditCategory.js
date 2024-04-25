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

import { updateCategory } from '../../actions/category';
import { useDispatch } from 'react-redux';


function EditCategory({category_id, category, categories}) {
  const dispatch = useDispatch();
  const parents = categories.filter( c => c.level === 0);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  //Category Image
  const [categoryImage, setCategoryImage] = useState([]);
  const [categoryImageData, setCategoryImageData] = useState([]);
  const removeCategoryImage = (filename, index) => {
    setCategoryImage(null);
    setCategoryImageData(null);
  };

  //Category Icon
  const [categoryIcon, setCategoryIcon] = useState([]);
  const [categoryIconData, setCategoryIconData] = useState([]);
  const removeCategoryIcon = (filename, index) => {
    setCategoryIcon(null);
    setCategoryIconData(null);
  };

  const [values, setValues] = useState({
    name_en: category.name,
    name_ar: category.name,

    
  });
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values[e.target.name]);
  };
  let formData = new FormData();
  const save = () => {
    console.log(values);
    formData.append("name_en", values.name_en);
    formData.append("name_ar", values.name_ar);
    if(values.image!=undefined){
      formData.append("image", values.image);
    };
    
    if(values.icon!=undefined){
      formData.append("icon", values.icon);
    };
    // if(values.parent_id===null){
    //   formData.append("level", 0 );
    //   formData.append("parent_id", null );
    // } else{
      if(values.parent_id!=undefined){
        formData.append("parent_id", parseInt(values.parent_id) );
      };

    // };
    
    if(dispatch(updateCategory(category_id,formData))){
      setStatus("Category edited successfully");
    } else{
      setError("Something went wrong !");
    };
    
    
    

  };

  return (
    <div>
      {
        status!="" &&
        <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
          <span class="font-medium">{status}</span> 
        </div>
      }
      {
        error!="" &&
        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
          <span class="font-medium">{error}</span> 
        </div>
      }
      
      <div className="ml-[6.5%]">
        <div className="w-[90%] mr-[120px] my-[10px]">
          <label className="text-[14px] font-[500]" htmlFor="name-en">
            Name - En <span className="text-[red] font-[700]">*</span>
          </label>
          <input
            className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Enter category name in english"
            onChange={changeHandler}
            value={values.name_en}
            name="name_en"
            type="text"
            id="name-en"
          />
        </div>
        <div className="w-[90%] mr-[120px] my-[10px]">
          <label className="text-[14px] font-[500]" htmlFor="name-ar">
            Name - Ar <span className="text-[red] font-[700]">*</span>
          </label>
          <input
            className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Enter category name in arabic"
            value={values.name_ar}
            onChange={changeHandler}
            name="name_ar"
            type="text"
            id="name-ar"
          />
        </div>
        <div className="">
          <p className="text-[14px] font-[500]">Parents</p>
          <select
            value={values.parent_id}
            name="parent_id"
            onChange={changeHandler}
            className="w-[50%] px-1 rounded font-[400] text-[14px] text-[#000]"
          >
            <option selected>Choose your parents</option>
            {
                      parents.map(parent => {
                        return (
                          <option value={parent.id}>
                            {parent.name}
                          </option>
                        )
                         
                      })
                    }
          </select>
        </div>
      </div>
      <div className="ml-[6.5%] mt-[40px]">
        <div>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            <span className="font-[500]">Image</span> : Thumbnails will be
            generated from detailed image automatically ,but you can also{" "}
            <span className="text-[#2685CC]">upload them manually</span>
          </p>
          <p className="text-[#000] text-[14px] font-[400]">
            Select a images of Product ( JPEG or PNG ):
            <span className="text-[red] font-[700]">*</span>
          </p>
          <div className=" w-[130px] h-[30px] mt-[5px]">
            <FileUpload
              values = {values}
              setValues= {setValues}
              files={categoryImage}
              setFiles={setCategoryImage}
              removeFile={removeCategoryImage}
              setFileData={setCategoryImageData}
              name={"image"}
            />
          </div>
          <FileItem
            fileData={categoryImageData}
            file={categoryImage}
            removeFile={removeCategoryImage}
            index="0"
          />
        </div>

        <div className="mt-10">
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            <span className="font-[500]">Icon</span> : Thumbnails will be
            generated from detailed image automatically ,but you can also{" "}
            <span className="text-[#2685CC]">upload them manually</span>
          </p>
          <p className="text-[#000] text-[14px] font-[400]">
            Select a images of Product ( JPEG or PNG ):
            <span className="text-[red] font-[700]">*</span>
          </p>
          <div className=" w-[130px] h-[30px] mt-[5px]">
            <FileUpload
              values = {values}
              setValues= {setValues}
              files={categoryIcon}
              setFiles={setCategoryIcon}
              removeFile={removeCategoryIcon}
              setFileData={setCategoryIconData}
              name={"icon"}
            />
          </div>
          <FileItem
            fileData={categoryIconData}
            file={categoryIcon}
            removeFile={removeCategoryIcon}
            index="0"
          />
        </div>
        <div className="flex items-center justify-end p-3 rounded-b">
              <div className=" flex pb-[10px] ">
                <div
                  onClick={save}
                 className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]"
                 >
                  Save
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default EditCategory;
