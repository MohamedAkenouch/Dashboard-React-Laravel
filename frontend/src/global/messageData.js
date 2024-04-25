import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'






const data = [
  {
    id: <div className="text-[14px]  font-[300]  text-[#0388CC]">001</div>,
    fullname: <div className="text-[14px]  font-[300]  text-[#0388CC]">Abdelghani Tahiri</div>,
    phone: (
        <div className="text-[14px] w-fit px-[5px] font-[400] rounded bg-[#0388CC] text-[#fff]">
        090101010
      </div>
    ),
    email: (
      <div className="text-[14px] font-[300] ">
        kenan@big-bang.ae
      </div>
    ),
    subject: <div className='font-[400]'>3</div>,
    content: <div className='font-[400]'>maroc</div>,
    date: <div className='font-[400]'>01/01/01</div>,
    reply: (
      <Link to='/emails?id=0'><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faShare} />
      </div></Link>
    ),
  },
];

export default data;
