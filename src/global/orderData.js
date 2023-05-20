import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import StatusSelector from '../components/StatusSelector'






const data = [
  {
    id: <div className="text-[14px]  font-[300]  text-[#0388CC]">001</div>,
    phone: (
      <div className="text-[14px] font-[600] underline text-[#0F3F62]">
        090101010
      </div>
    ),
    email: (
      <div className="text-[14px] font-[300] underline text-[#0388CC]">
        kenan@big-bang.ae
      </div>
    ),
    products: <div className='font-[400]'>3</div>,
    adress: <div className='font-[400]'>maroc</div>,
    time: <div className='font-[400]'>18:16:03</div>,
    date: <div className='font-[400]'>01/01/01</div>,
    total: <div className="text-[14px] font-[600] text-[#000]">999</div>,
    status: <div className="z-50 overflow-visible l-[35px] px-1 font-[400] text-[white] py-[2px] min-w-[100px] rounded-md"><StatusSelector /></div>,
    view: (
      <Link to='/order-details?id=0'><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
  },
];

export default data;
