import React from 'react'

function Notification({text}) {
  return (
    <div className="text-[13px] mt-[10px] font-[400] rounded-md px-[10px] py-[10px] bg-[#F4FBFF]">
                      {text}
                    </div>
  )
}

export default Notification