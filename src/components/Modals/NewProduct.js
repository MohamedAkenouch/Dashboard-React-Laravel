import React, { useState, useEffect } from "react";
// import FileUpload from "../FileUploader/FileUpload";
// import FileList from "../FileUploader/FileList";
import RichTextEditor from "../RichTextEditor";
import SettingsTab from "../SettingsTab";
// import PolicyForm from "../PolicyForm";
// import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFileAlt,faSpinner,faTrash,} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/settingsTabs.module.css";
import { addProduct, addImage } from '../../actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../actions/category';
import Select from 'react-select';

function NewProduct({ setShowModal,setIsAdd }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  });

  const categories = useSelector((state) => state.categories);

  const categoriesOptions = categories.map((categorie) => {
    return {
      value: categorie.id,
      label: categorie.name
    };
  });

  const [catdefaultValue, setCatdefaultValue]  = useState({value: "salect", label: "Select Category"});

  const handleChange = (selectedOption) => {
    let new_categories = [];

    new_categories.push(categories.find(e => e.id === selectedOption.value));
    setCatdefaultValue(selectedOption);
    setValues({...values, category_id: selectedOption.value});
  }

  // const [descAr, setDescAr] = useState("");
  // const getDescAr = (value) => {
  //   setDescAr(value);
  //   console.log(descAr);
  // };
  const [descEn, setDescEn] = useState("");
  const [productID, setProductID] = useState(0);
  const [files, setFiles] = useState([]);
  const [filesData, setFilesData] = useState([]);
  let formData = new FormData();
  const getDescEn = (value) => {
    setDescEn(value);
    setValues({ ...values, description : descEn });

  };


  const [values, setValues] = useState({
    name_en: "test",
    name_ar: "test",
    category_id: 0,
    description:"test",
    price: 0,
    images: []
  });

  const changeHandler = (e) => {
    if(e.target.name ==="category_id"){
      setValues({ ...values, [e.target.name]: parseInt(e.target.value) });
    }else if (e.target.name ==="price"){
      setValues({ ...values, [e.target.name]: parseInt(e.target.value) });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    
    
  };

  const save = () => {

    console.log(values);
    console.log(files);
    formData.append("category_id", values.category_id);
    formData.append("name_ar", values.name_ar);
    formData.append("name_en", values.name_en);
    formData.append("description", values.description);
    formData.append("price", values.price);
    
    const promise = dispatch(addProduct(formData));
    let id ;

    promise.then(function(result) {
      console.log("RESULT : ", result);

      files.forEach(file => {
        // adding image to product
        let formDataImage = new FormData();
        formDataImage.append("product_id", parseInt(result));
        formDataImage.append("image", file);
  
        dispatch(addImage(formDataImage));
      
      });

  });

    setIsAdd(true);
    setShowModal(false);
  };



  return (
    <>
      <div className="justify-center mt-[-30px] h-[800px] items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add New Product
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative h-[600px] p-6 w-full scrollbar-thin h-full scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
              <div>
                <div className="flex flex-wrap">
                  <div className="w-[45%] mt-2 mr-[20px]">
                    <label className="text-[14px] font-[500]" htmlFor="name-en">
                      Name - En <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"
                      placeholder="Enter product name in english"
                      onChange={changeHandler}
                      value={values.name_en}
                      name="name_en"
                      type="text"
                      id="name-en"
                    />
                  </div>
                  <div className="w-[45%] mt-2 mr-[20px]">
                    <label className="text-[14px] font-[500]" htmlFor="name-ar">
                      Name - Ar <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"
                      placeholder="Enter product name in arabic"
                      onChange={changeHandler}
                      value={values.name_ar}
                      name="name_ar"
                      type="text"
                      id="name-ar"
                    />
                  </div>
                  <div className="w-[45%] mt-4 mr-[20px]">
                    <label
                      className="text-[14px] font-[500]"
                      htmlFor="category"
                    >
                      Category <span className="text-[red] font-[700]">*</span>
                    </label>
                    {/* <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"
                      placeholder="Enter product category name"
                      onChange={changeHandler}
                      value={values.category_id}
                      name="category_id"
                      type="text"
                      id="category"
                    /> */}
                    <Select
                      className={"basic-single z-10 w-full rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"}
                      defaultValue={catdefaultValue}
                      name="categoriesOptions"
                      options={categoriesOptions}
                      onChange={handleChange}
                      classNamePrefix="select"
                    />
                  </div>
                  <div className="w-[45%] mt-4 mr-[20px]">
                    <label className="text-[14px] font-[500]" htmlFor="price">
                      Price <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"
                      placeholder="Enter product price"
                      onChange={changeHandler}
                      value={values.price}
                      name="price"
                      type="text"
                      id="price"
                    />
                  </div>
                  <div className="flex flex-wrap mt-4 w-[97.5%]">
                    <RichTextEditor
                      name="description"
                      initialValue=""
                      getValue={getDescEn}
                    />
                    {/* <RichTextEditor
                      name="Description-AR"
                      initialValue=""
                      getValue={getDescAr}
                    /> */}
                  </div>
                  {/* <div className="w-[45%] mt-2 mr-[20px]">
                    <label className="text-[14px] font-[500]" htmlFor="points">
                      Points <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"
                      placeholder="Enter product points"
                      onChange={changeHandler}
                      value={values.points}
                      name="points"
                      type="text"
                      id="points"
                    />
                  </div> */}
                  {/* <div className="w-[45%] mt-8 mr-[20px] flex">
                    <div className="mr-[20px] text-[15px] font-[500] text-[#000]">
                      Select Product Reviews
                    </div>
                    <div>
                      <input
                        className="mr-[10px] focus:border-none focus:outline-none ml-[30px]"
                        type="radio"
                        name="reviews"
                        onChange={() => {
                          setValues({ ...values, reviews: "on" });
                          console.log(values.reviews);
                        }}
                        value="on"
                        id="on"
                      />
                      <label htmlFor="on" className="text-[14px] font-[500]">
                        On
                      </label>
                      <input
                        className="mr-[10px] ml-[30px]"
                        type="radio"
                        onChange={() => {
                          setValues({ ...values, reviews: "off" });
                          console.log(values.reviews);
                        }}
                        name="reviews"
                        value="off"
                        id="off"
                      />
                      <label htmlFor="off" className="text-[14px] font-[500]">
                        Off
                      </label>
                    </div>
                  </div>*/}
                </div> 
                <div className="mt-6">
                  <label className="text-[14px] font-[500]">
                    Images <span className="text-[red] font-[700]">*</span>
                  </label>
                  <div
                    className={`${styles.tabs} flex justify-between w-[91%] rounded-xl`}
                  >
                    <SettingsTab content="Images" title="Images" value="11"  files={files} filesData={filesData} setFilesData={setFilesData} setFiles={setFiles}/>
                    {/* <SettingsTab content="PDF" title="PDF" value="22" />
                    <SettingsTab content="Video" title="Video" value="33" />
                    <SettingsTab content="SKU" title="SKU" value="44" /> */}
                    {/* <SettingsTab
                      content="Manufacturers"
                      title="Manufacturers"
                      value="55"
                    /> */}
                  </div>
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
                onClick={() => save()}
                className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
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

export default NewProduct;
