import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ApprovalSelector from "../components/ApprovalSelector";
import {Link} from 'react-router-dom'

const data = [
  {
    image: (<img className='h-[50px] m-auto' src="https://media.self.com/photos/5e87928d2764370008456544/master/w_1200,h_1800,c_limit/One-pot-pantry-pasta.jpg"/>),
    name: <div className="text-[14px] font-[400] text-[#0388CC]">Some Product Name</div>,
    category: <div className="font-[400]">Some Category Name</div>,
    sku:<div className="font-[400]">090101010</div>,
    price: (
      <div className="text-[14px] font-[700] text-[#000]">
        145
      </div>
    ),
    lastUpdated: <div className="font-[400]">01/01/01</div>,
    inStock: <div className="font-[400]">500 pcs</div>,
    status: <ApprovalSelector />,
    actions: (
      <Link to='/product-details?tab=1&id=0'>
      <div className="text-[14px] bg-[#fff] border-[1px] border-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[#0388CC] text-center">
        <FontAwesomeIcon icon={faGear} /><span className='ml-1'><FontAwesomeIcon icon={faCaretDown} /></span>
      </div></Link>
    ),
  },
];

export default data;
