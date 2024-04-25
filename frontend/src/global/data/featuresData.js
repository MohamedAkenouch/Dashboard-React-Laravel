import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import { faGear, faCaretDown } from "@fortawesome/free-solid-svg-icons";


export function getFeaturesData(features, setFeatureID, setShowDeleteModal) {
    const dataList = []
    features.forEach(feature => {
      dataList.push(
        {
          id: <div className="text-[14px] font-[700] text-[#000]">{feature.id}</div>,
          key: <div className="text-[14px] font-[700] text-[#000]">{feature.key}</div>,
          name: <div className="text-[14px] font-[700] text-[#000]">{feature.name}</div>,
          values: (
            <div className="text-[14px] font-[400]">
              {feature.values.length}
            </div>
          ),
          actions: (
            <Link to={'/features/'+feature.id+'?tab=1'}>
            <div className="text-[14px] bg-[#fff] border-[1px] border-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[#0388CC] text-center">
              <FontAwesomeIcon icon={faGear} /><span className='ml-1'><FontAwesomeIcon icon={faCaretDown} /></span>
            </div></Link>
          ),
          delete: (
            <button 
              onClick={() => {
                setFeatureID(feature.id);
                setShowDeleteModal(true);
              }}
              type="button" className="text-[#E3370A] hover:text-white border border-[#E3370A] hover:bg-[#E3370A] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              Delete
            </button>
          )
        },
      )
    });
    return dataList;
  }