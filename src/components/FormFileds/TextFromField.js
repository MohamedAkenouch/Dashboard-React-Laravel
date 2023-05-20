import React from "react";


function TextFromField({label, name, value, type, id, placeholder, values, setValues, isEdit, min, max}) {

    const changeHandler = (e) =>{
        console.log(e.target.value);
        setValues({...values, [e.target.name]: e.target.value.toString()})
    }

    return ( 
        <div className={"flex justify-between "}>
            <label className="w-[40%] text-[14px] font-[400] pt-3 pl-2 " htmlFor={id}>
                {label} <span className="text-[red] font-[700]">*</span>
            </label>
            {
                isEdit ? 
                <input
                    className="w-[65%] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder={placeholder}
                    onChange={changeHandler}
                    value={value}
                    name={name}
                    type={type}
                    id={id}
                    min={min}
                    max={max}
                    required
                />
                :
                <input
                    className="w-[65%]  rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"
                    placeholder={placeholder}
                    onChange={changeHandler}
                    value={value}
                    name={name}
                    type={type}
                    id={id}
                    disabled
                />
            }
        </div>
    );
}

export default TextFromField;