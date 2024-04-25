import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UpperTotal({title, arTitle, total, icon, color, size}) {
  return (
    <div className='m-auto text-start px-[28.9px] flex'>
        <div className={`text-[30px] mr-[10px] ${color}`}><div><img className={`${size}`}  src={`/images/dashboard/${icon}.svg`}/></div></div>
        <div>
            <div className={`text-[22px] ${color}`}>{total}</div>
            <div className='text-[12px] text-[#6A707E]'>{title}</div>
            <div className='text-[12px] text-[#BFBFBF] font-arabic'>{arTitle}</div>
        </div>
    </div>
  )
}

export default UpperTotal