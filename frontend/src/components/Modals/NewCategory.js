import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileItem from "../FileUploader/FileItem";

import { addCategory } from '../../actions/category';
import { useDispatch } from 'react-redux';

function NewCategory({ setShowModal, setIsAdd ,categories}) {

  const dispatch = useDispatch();
  const parents = categories.filter( c => c.level === 0);



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

   // store values in a formdata
  let formData = new FormData();
  const [values, setValues] = useState({
    name_en: "test",
    name_ar: "test ar",
    image: File
  });


  //handle input changes
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // save new category
  const save = () => {
    console.log(values);
    formData.append("name_en", values.name_en);
    formData.append("name_ar", values.name_ar);
    formData.append("image", values.image);
    if(values.icon!=undefined){
      formData.append("icon", values.icon);
    };
    if(values.parent_id!=undefined){
      formData.append("parent_id", parseInt(values.parent_id) );
    };
    
    dispatch(addCategory(formData));
    setIsAdd(true);
    setShowModal(false);
  };



  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add New Category
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-6 w-full ">
              <div className="">
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
                    <option>Choose your parents</option>

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




              <div className="">
                <div>
                  <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
                    <span className="font-[500]">Image</span> : Thumbnails will
                    be generated from detailed image automatically ,but you can
                    also{" "}
                    <span className="text-[#2685CC]">upload them manually</span>
                  </p>
                  <p className="text-[#000] text-[14px] font-[400]">
                    Select a images of Product ( JPEG or PNG ):
                    <span className="text-[red] font-[700]">*</span>
                  </p>
                  <div className=" w-[130px] h-[30px] mt-[5px]">
                    <FileUpload
                      name = {"image"}
                      values = {values}
                      setValues= {setValues}
                      files={categoryImage}
                      setFiles={setCategoryImage}
                      removeFile={removeCategoryImage}
                      setFileData={setCategoryImageData}
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
                    <span className="font-[500]">Icon</span> : Thumbnails will
                    be generated from detailed image automatically ,but you can
                    also{" "}
                    <span className="text-[#2685CC]">upload them manually</span>
                  </p>
                  <p className="text-[#000] text-[14px] font-[400]">
                    Select a images of Product ( JPEG or PNG ):
                    <span className="text-[red] font-[700]">*</span>
                  </p>
                  <div className=" w-[130px] h-[30px] mt-[5px]">
                    <FileUpload
                      name = {"icon"}
                      values = {values}
                      setValues= {setValues}
                      files={categoryIcon}
                      setFiles={setCategoryIcon}
                      removeFile={removeCategoryIcon}
                      setFileData={setCategoryIconData}
                    />
                  </div>
                  <FileItem
                    fileData={categoryIconData}
                    file={categoryIcon}
                    removeFile={removeCategoryIcon}
                    index="0"
                  />
                </div>
              </div>
            </div>





            {/*footer*/}
            <div className="flex items-center justify-end p-3 rounded-b">
              <div className=" flex pb-[10px] ">
                <div
                  onClick={() => setShowModal(false)}
                  className="rounded-full cursor-pointer text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]"
                >
                  Cancel
                </div>
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
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default NewCategory;
