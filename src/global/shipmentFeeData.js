import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: <div className="text-[14px] font-[400] text-[#0388CC]">1</div>,
    locationName: <div className="text-[14px] font-[400] text-[#0388CC]">Location Name</div>,
    location:<div className="font-[400]">Location</div>,
    additionalFee: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        145
      </div>
    ),
    creationDate: <div className="font-[400]">01/01/01</div>,
    view: (
      <div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div>
    ),
  },
];

export default data;
