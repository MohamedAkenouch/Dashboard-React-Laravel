import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

const data = [
  {
    title: <div className="text-[14px] font-[400] text-[#0388CC] font-arabic">تكريم مندوبي طرطوس</div>,
    description: (
      <div className="text-[14px] font-[400] font-arabic">
        بمناسبة عيد المولد النبوي الشريف احتفلت شركة العقاد للصناعة و التجارة ( سيدي هشام ) بكوادرها و جميع الأقسام في مقر الشركة
      </div>
    ),
    lastUpdated: <div className="font-[400]">01/01/01</div>,
    view: (
      <Link to='/news-edit?id=0'><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
  },
];

export default data;
