import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"

const data = [
  {
    id: <div className="text-[14px] font-[400] text-[#0388CC]">Male</div>,
    name: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        kenan
      </div>
    ),
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
    points: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        55
      </div>
    ),
    registred: <div className="font-[400]">01/01/01</div>,
    view: (
        <Link to='/customer?id=0'><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
  },
];

export default data;
