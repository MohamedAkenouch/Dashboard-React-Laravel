import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGear, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {Link } from 'react-router-dom'

const data = [
  {
    image: (<img className='h-[50px] m-auto' src="https://media.self.com/photos/5e87928d2764370008456544/master/w_1200,h_1800,c_limit/One-pot-pantry-pasta.jpg"/>),
    id: <div className="text-[14px] font-[400] text-[#0388CC]">1</div>,
    name: <div className='font-[400]'>Some Category Name</div>,
    cooksByCategories:<div className='font-[400]'>090101010</div>,
    cooks: (
      <div className="text-[14px] w-fit px-[5px] font-[400] rounded bg-[#0388CC] text-[#fff]">
        23
      </div>
    ),
    lastUpdated: <div className='font-[400]'>01/01/01</div>,
    view: (
      <Link to='/cooks-category-details?tab=1&id=0'><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
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
