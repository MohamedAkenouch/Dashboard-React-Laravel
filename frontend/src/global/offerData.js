import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import OfferStatus from "../components/OfferStatus";
import {Link} from "react-router-dom"

const data = [
  {
    pos: <div className="text-[14px] font-[400] text-[#0388CC]">001</div>,
    offerName: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        Name Example
      </div>
    ),
    products: (
      <div className="text-[14px] font-[400] font-arabic w-fit px-[5px] font-[400]">
        كتشب حلو - كتشب حار - كتشب حلو 2.5 كغ - كتشب حار 2.5 كغ كتشب حلو 5 كغ - كتشب حار 5 - كتشب حار - كتشب حلو
      </div>
    ),
    value: (
      <div className="text-[14px] font-[400] text-[#0388CC]">
        20%
      </div>
    ),
    creationDate: <div className="font-[400]">01/01/01</div>,
    expirationDate: <div className="font-[400]">01/01/01</div>,
    status:<OfferStatus/>,
    view: (
      <Link to='/offer-details?id=0'><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
  },
];

export default data;
