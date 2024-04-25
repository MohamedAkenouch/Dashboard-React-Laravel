import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import JobApplicationStatus from "../components/JobApplicationStatus";
import {Link} from 'react-router-dom'

const data = [
  {
    pos: <div className="text-[14px] font-[400] text-[#0388CC]">001</div>,
    name: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        kenan bigbang
      </div>
    ),
    email: (
      <div className="text-[14px] font-[400] text-[#000]">
        kenan@big-bang.ae
      </div>
    ),
    age: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        05
      </div>
    ),
    phone: (
      <div className="text-[14px] font-[400] w-fit px-[5px] font-[700] rounded bg-[#0388CC] text-[#fff]">
        090101010
      </div>
    ),
    jobPosition: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        admin
      </div>
    ),
    applicationDate: "01/01/01",
    status: <JobApplicationStatus/>,
    view: (
        <Link to='/job-application-info?id=0'><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
  },
];

export default data;
