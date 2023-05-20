import React from "react";


function TextField({label, name, value, type, id, placeholder, mt, values, setValues}) {

    const changeHandler = (e) =>{
        setValues({...values, [e.target.name]:e.target.value});
    }

    return ( 
        <div className={"w-[45%] " + mt + " mr-[20px]"}>
            <label className="text-[14px] font-[500]" htmlFor={id}>
                {label} <span className="text-[red] font-[700]">*</span>
            </label>

            <input
                className="w-full rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"
                placeholder={placeholder}
                onChange={changeHandler}
                value={value}
                name={name}
                type={type}
                id={id}
                required
            />
        </div>
    );
}

export default TextField;