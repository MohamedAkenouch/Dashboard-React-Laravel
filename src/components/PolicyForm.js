import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

function PolicyForm({ policy, index, deletePolicy }) {
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
  const [descAr, setDescAr] = useState(policy.descAr);
  const getDescAr = (value) => {
    setDescAr(value);
    console.log(descAr);
  };
  const [descEn, setDescEn] = useState(policy.descEn);
  const getDescEn = (value) => {
    setDescEn(value);
    console.log(descEn);
  };
  return (
    <div className="flex my-[20px]">
      <div>
        <div className="text-[#000] font-extrabold text-[14px]">
          {index + 1}.
        </div>
      </div>
      <div className="ml-[6%] w-[87%]">
        <div className="w-[40%]">
          <label className="text-[14px] font-[400]" htmlFor="branch-name">
            Field Details
          </label>
          <input
            className="w-full h-[30px] placeholder:font-arabic font-arabic rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[13px] text-[13px] placeholder:font-[400] font-[400]"
            placeholder=""
            value={policy.field}
            type="text"
            id="branch-name"
          />
        </div>
        <div className="flex mt-[10px] flex-wrap justify-between w-full">
          <RichTextEditor
            name="Description-AR"
            initialValue={policy.descAr}
            getValue={getDescAr}
          />
          <RichTextEditor
            name="Description-EN"
            initialValue={policy.descEn}
            getValue={getDescEn}
          />
        </div>
        <div
          onClick={() => {
            deletePolicy(index);
          }}
          className="mt-5 text-[red] mr-5 text-[14px] font-[500] border-[1px] border-[red] rounded-md float-right py-[3px] px-2 cursor-pointer"
        >
          Delete
        </div>
      </div>
    </div>
  );
}

export default PolicyForm;
