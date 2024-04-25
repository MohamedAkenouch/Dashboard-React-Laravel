import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Settings() {
  const [values, setValues] = useState({
    rewards :"",
    tagTitle :"",
    tagDesc :"",
    tagKeywords :"",
    additionalFees :"",
  })
  const changeHandler = (e) =>{
    setValues({...values, [e.target.name]:e.target.value})
    console.log(values[e.target.name])
  }
  return (
    <div>
      <div>
        <div className="text-[14px] text-[#0388CC]">Additional Fees (Tax)</div>
        <div className="mt-3">
          <input
            className="mr-[10px]"
            type="radio"
            name="rewards"
            onChange={()=>{setValues({...values, rewards:'enabled'}); console.log(values.rewards)}}
            value="enabled"
            id="enable"
          />
          <label htmlFor="enable" className="text-[14px] font-[400]">
            Enable
          </label>
          <input
            className="mr-[10px] ml-[30px]"
            type="radio"
            name="rewards"
            onChange={()=>{setValues({...values, rewards:'disabled'}); console.log(values.rewards)}}
            value="disabled"
            id="disable"
          />
          <label htmlFor="disable" className="text-[14px] font-[400]">
            Disable
          </label>
        </div>
      </div>
      <div className="mt-6 h-[70px]">
        <div className="text-[14px] text-[#0388CC]">Rewards Points</div>
        <textarea
          className="p-2 resize-none w-[80%] mt-3 h-full rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
          placeholder="Please enter a point for this product"
          onChange={changeHandler}
            value={values.rewards}
            name='rewards'
        ></textarea>
      </div>
      <div className="mt-16 h-[70px]">
        <div className="text-[14px] text-[#0388CC]">Meta Tag SEO</div>
        <label className="text-[14px] mt-4 font-[400]" htmlFor="meta-tag-title">
          Meta tag title<br/>
        </label>
        <textarea
          className="p-2 resize-none w-[80%] mt-1 h-full rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
          placeholder="SEO Search Engine Optimization"
          onChange={changeHandler}
            value={values.tagTitle}
            name='tagTitle'
          id="meta-tag-title"
        ></textarea>
        <br/>
        <label className="text-[14px] mt-4 font-[400]" htmlFor="meta-tag-desc">
          Meta tag description<br/>
        </label>
        <textarea
          className="p-2 resize-none w-[80%] mt-1 h-full rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
          placeholder="SEO Search Engine Optimization"
          onChange={changeHandler}
            value={values.tagDesc}
            name='tagDesc'
          id="meta-tag-desc"
        ></textarea>
        <br/>
        <label className="text-[14px] mt-4 font-[400]" htmlFor="meta-tag-keywords">
          Meta tag keywords<br/>
        </label>
        <textarea
          className="p-2 resize-none w-[80%] mt-1 h-full rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
          placeholder="SEO Search Engine Optimization"
          onChange={changeHandler}
            value={values.tagKeywords}
            name='tagKeywords'
          id="meta-tag-keywords"
        ></textarea>
      </div>
      <div className='absolute flex right-[100px] bottom-[10px]'>
        <div className="rounded-full text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]">Cancel</div>
        <div className="rounded-full text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">Save</div>
      </div>
    </div>
  );
}

export default Settings;
