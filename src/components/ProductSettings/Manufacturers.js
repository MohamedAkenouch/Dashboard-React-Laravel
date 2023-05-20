import React, { useState } from 'react'

function Manufacturers() {
  const [manufacturers, setManufacturers] = useState("test")
  return (
    <div>
    <p className="text-[#000] text-[14px] font-[400]">
      Select Manufacturers of product:
      <span className="text-[red] font-[700]">*</span>
    </p>
    <input
      className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
      placeholder="Enter the product manufacturers"
      value={manufacturers}
      onChange={(e)=>setManufacturers(e.target.value)}
      type="text"
    />
  </div>
  )
}

export default Manufacturers