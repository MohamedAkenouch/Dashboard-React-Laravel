import React from "react";


function FormField({label, name, value, type, id, placeholder, mt, values, setValues, isAddValue}) {

    const changeHandler = (e) =>{
        if(e.target.files != null && e.target.files[0]){
            setValues({...values, [e.target.name]:e.target.files[0]})
            console.log("file :", e.target.files[0])
        }
        else{
            setValues({...values, [e.target.name]:e.target.value})
        }
        console.log(values[e.target.name])
    }

    return ( 
        <div className={"flex justify-between "+"mt-"+mt}>
            <label className="ml-16 pt-2 text-[14px] font-[500]" htmlFor={id}>
                {label} <span className="text-[red] font-[700]">*</span>
            </label>
            {
                type == "file" ? 
                <input
                    className="block w-[80%]  rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"
                    onChange={changeHandler}
                    name={name}
                    type={type}
                    id={id}
                />
                :
                <input
                    className="w-[80%]  rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[500]"
                    placeholder={placeholder}
                    onChange={changeHandler}
                    value={value}
                    name={name}
                    type={type}
                    id={id}
                    required
                />
            }
        </div>
    );
}

export default FormField;