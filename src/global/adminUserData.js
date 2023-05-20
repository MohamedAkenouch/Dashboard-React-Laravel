import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faGear } from "@fortawesome/free-solid-svg-icons";
import StatusSelector from "../components/StatusSelector";
import {Link} from 'react-router-dom'

const data = [
  {
    pos: <div className="text-[14px] font-[400] text-[#0388CC]">001</div>,
    email: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        kenan@big-bang.ae
      </div>
    ),
    phone: (
      <div className="text-[14px] w-fit px-[5px] font-[400] rounded bg-[#0388CC] text-[#fff]">
        090101010
      </div>
    ),
    role: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        admin
      </div>
    ),
    registred: <div className="font-[400]">01/01/01</div>,
    actions: (
      // <Link to='/'>
      <div className="text-[14px] bg-[#fff] border-[1px] border-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[#0388CC] text-center">
        <FontAwesomeIcon icon={faGear} /><span className='ml-1'><FontAwesomeIcon icon={faCaretDown} /></span>
      </div>
      // </Link>
    ),
  },
];

export default data;
