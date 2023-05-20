/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import styles from '../styles/selector.module.css'
import { useDispatch } from 'react-redux';
import { updateOrder } from '../actions/order';


const options = [
  {
    title: "Canceled",
    value:"canceled",
    color: 'text-[#D40017]',
    bgColor: 'bg-[#D40017]',
  }
  ,
  {
    title: "Pending",
    value:"pending",
    color: 'text-[#D8AA6B]',
    bgColor: 'bg-[#D8AA6B]',
  }
  ,  
  
  {
    title: "Completed",
    value:"completed",
    color: 'text-[#007530]',
    bgColor: 'bg-[#007530]',
  }

  
]


function StatusSelector({id, value}) {
  //const [orderData, setOrderData] = useState({'status' : ''}) 
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(options.map(e => e.value).indexOf(value)) 

  const handleChange = async (event) =>{
    event.preventDefault();
    //setOrderData({...orderData, status: event.target.value});
    const orderData = {'status' : event.target.value}
    dispatch(updateOrder(id, orderData))
    setSelected(options.map(e => e.value).indexOf(event.target.value));
    
  }

  return (
    <div className={`${styles.selectBox } ${options[selected].bgColor} min-w-[50px]`}>
    <select onChange={(e)=>{handleChange(e)}} className={`${options[selected].bgColor} pl-2 outline-none cursor-pointer font-sans rounded py-[3px]  border-none text-[white] w-[100%] `} >
      {
        options.map((option, index) => (
          (option.value === value) ?
          <option value={option.value} key={index} className={`${option.color}  outline-[0px] hover:bg-[white] bg-[white] py-[4px] rounded`} selected>
            {option.title}
          </option>
          :
          <option value={option.value} key={index} className={`${option.color}  outline-[0px] hover:bg-[white] bg-[white] py-[4px] rounded`}>
            {option.title}
          </option>
        ))
      }
      
    </select></div>
  )
}


export default StatusSelector;