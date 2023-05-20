import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import RichTextEditor from "../RichTextEditor";
import SettingsTab from "../SettingsTab";
import styles from "../../styles/settingsTabs.module.css";
import TextFromField from "../FormFileds/TextFromField";
import TextField from "../FormFileds/TextField";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, updateProduct, addImage, removeImage } from "../../actions/product";
import { useEffect } from "react";
import Select from 'react-select';
import { getCategories } from "../../actions/category";
import { sweetModal } from "../../constants/sweetModals";

function EditProduct() {
  let { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  let id = queryParams.get("id");

  const [isUpdate, setIsUpdate] = useState(false);
  const [imageAdded, setImageAdded] = useState(false);
  const [imageRemoved, setImageRemoved] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    setIsUpdate(false);
    setImageAdded(false);
    setImageRemoved(false);
  }, [dispatch, isUpdate, imageAdded, imageRemoved]);

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const product = products.find((product) => product.id == id);

  let images = product.images.map(e => e.image);

  const [filesData, setFilesData] = useState(images);
  const filesFromImages = filesData.map(e =>{
    let filename = e.substring(e.lastIndexOf("/") + 1);
    let file = new File([""], filename);
    file.isUploading = true;
    file.isUploaded = false;
    return file;
  });

  const [files, setFiles] = useState(filesFromImages);

  const getDescEn = (value) => {
    setValues({ ...values, description : value });
  };

  const categoriesOptions = categories.map((categorie) => {
    return {
      value: categorie.id,
      label: categorie.name
    };
  });

  const [catdefaultValue, setCatdefaultValue]  = useState({
    value: product.categories[0].id,
    label: product.categories[0].name
  });


  const [values, setValues] = useState({
    name_ar: product.name_ar,
    name_en: product.name_en,
    description: product.description,
    categories: product.categories,
    price: product.price,
    category_id: product.categories[0]?.id,
  });

  const handleChange = (selectedOption) => {
    let new_categories = [];

    new_categories.push(categories.find(e => e.id === selectedOption.value));
    setCatdefaultValue(selectedOption);
    setValues({...values, category_id: selectedOption.value, categories: new_categories});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("category_id", parseInt(values.category_id));
    formData.append("name_ar", values.name_ar);
    formData.append("name_en", values.name_en);
    formData.append("description", values.description);
    formData.append("price", Number(values.price));

    dispatch(updateProduct(id, formData));

    // add images that has been uploaded to product
    files.forEach(file => {
      if(!file.isUploaded && file.isUploaded != false){
        let imageFormData = new FormData();
        imageFormData.append("product_id", parseInt(id));
        imageFormData.append("image", file);
        dispatch(addImage(imageFormData));
        setImageAdded(true);
      }
    });

    // remove images the has been removed from product images
    product.images.forEach(image => {
      if(!filesData.includes(image.image)){
        dispatch(removeImage(image.id, image.product_id));
        setImageRemoved(true);
      }
    });

    sweetModal('success', 'Product has been updated successfully', false, 1400);
    setIsUpdate(true);
    navigate('/products');
  }

  const resetChanges = () => {

  }

  return (
    <form className="ml-[6%]" onSubmit={handleSubmit}>
      <div>

      <div className="flex flex-wrap">
        <TextField 
          id="product_name_en"
          label="Name En"
          name="name_en"
          value={values.name_en}
          type="text"
          placeholder="Enter product name in english"
          values={values}
          setValues={setValues}
          mt={"mt-2"}
        />
        <TextField 
          id="product_name_ar"
          label="Name Ar"
          name="name_ar"
          value={values.name_ar}
          type="text"
          placeholder="Enter product name in arabic"
          values={values}
          setValues={setValues}
          mt={"mt-2"}
        />
        <div className="w-[45%] mt-4 mr-[20px]">
          <label className="text-[14px] font-[500]" htmlFor="categories">
              Change Categorie
          </label>
          <Select
            className={"basic-single z-10 w-full rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"}
            defaultValue={catdefaultValue}
            name="categoriesOptions"
            options={categoriesOptions}
            onChange={handleChange}
            classNamePrefix="select"
          />
        </div>
        <TextField 
          id="price"
          label="Price"
          name="price"
          value={values.price}
          type="number"
          placeholder="Enter product price"
          values={values}
          setValues={setValues}
          mt={"mt-4"}
        />
        <div className="flex flex-wrap mt-4 w-[97.5%]">
          <RichTextEditor
            name="description"
            initialValue={values.description}
            getValue={getDescEn}
          />
        </div>
      </div>
      <div className="mt-6">
      <label className="text-[14px] font-[500]">
              Settings <span className="text-[red] font-[700]">*</span>
      </label>
      <div className={`${styles.tabs} flex justify-between w-[91%] rounded-xl`}>
        <SettingsTab 
          content="Images" 
          title="Images" value="11"  
          files={files} filesData={filesData} 
          setFilesData={setFilesData} setFiles={setFiles}
        />
        {/* <SettingsTab
          content="PDF"
          title="PDF"
          value="22"
        />
        <SettingsTab
          content="Video"
          title="Video"
          value="33"
        />
        <SettingsTab
          content="SKU"
          title="SKU"
          value="44"
        />
        <SettingsTab
          content="Manufacturers"
          title="Manufacturers"
          value="55"
        /> */}
      </div>
      </div>
      </div>
      <div className='absolute flex pb-[10px] right-[100px] bottom-[-200px]'>
        <button 
          onClick={() => resetChanges}
          className="rounded-full text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]">
          Cancel
        </button>
        <button 
          type="submit"
          className="rounded-full text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
          Save
        </button>
      </div>
    </form>
  );
}

export default EditProduct;
