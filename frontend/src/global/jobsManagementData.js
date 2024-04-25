import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import JobStatus from "../components/JobStatus";
import {Link} from "react-router-dom"

const data = [
  {
    pos: <div className="text-[14px] font-[400] text-[#0388CC]">001</div>,
    jobPosition: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        admin
      </div>
    ),
    location: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        admin
      </div>
    ),
    lastUpdate: <div className="font-[400]">01/01/01</div>,
    status: <JobStatus/>,
    view: (
        <Link to='/job-position-edit?id=0'><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
  },
];

export default data;
