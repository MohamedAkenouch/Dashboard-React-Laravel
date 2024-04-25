import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import StatusSelector from "../components/StatusSelector";
import {Link} from "react-router-dom"

const data = [
  {
    image: (<img className='h-[50px] m-auto' src="https://media.self.com/photos/5e87928d2764370008456544/master/w_1200,h_1800,c_limit/One-pot-pantry-pasta.jpg"/>),
    name: <div className="text-[14px] font-[400] text-[#0388CC]">Some Product Name</div>,
    standards:<div className='font-[400]'>090101010'</div>,
    category: <div className='font-[400]'>Some Category Name'</div>,
    video: <div className='font-[400]'>url</div>,
    lastUpdated: <div className='font-[400]'>01/01/01</div>,
    view: (
      <Link to='/cook-edit?id=0'><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
  },
];

export default data;
