import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

const data = [
  {
    name: <div className="text-[14px] font-[700] text-[#000]">تكريم مندوبي طرطوس</div>,
    products: (
      <div className="text-[14px] font-[400]">
        بمناسبة عيد المولد النبوي الشريف احتفلت شركة العقاد للصناعة و التجارة ( سيدي هشام ) بكوادرها و جميع الأقسام في مقر الشركة
      </div>
    ),
    actions: (
      <Link to='/'>
      <div className="text-[14px] bg-[#fff] border-[1px] border-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[#0388CC] text-center">
        <FontAwesomeIcon icon={faGear} /><span className='ml-1'><FontAwesomeIcon icon={faCaretDown} /></span>
      </div></Link>
    ),
  },
];

export default data;
