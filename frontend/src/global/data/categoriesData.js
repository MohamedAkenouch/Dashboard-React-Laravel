import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import { faEye, faCaretDown } from "@fortawesome/free-solid-svg-icons";




export function getCategoriesData(categories,category_products,setCategoryId,setShowDeleteModal) {

    const dataList = [] ;

    categories.forEach(category => {
        var id = category.id;
        var count = category_products.filter(p => p.category_id === category.id).length;
        var imagee= "https://new.tiffanyflowers.ae//storage/category_images/image00013.jpeg";
        if(category.image.length!= 0 ){
          imagee = category.image[0];
        } ;
      dataList.push(
        {
            image: (<img className='h-[50px] m-auto' src={imagee}/>),
            id: <div className="font-[400]">{category.id}</div>,
            name: <div className="font-[400]">{category.name}</div>,
            products: <div className="text-[14px] w-fit px-[5px] font-[400] rounded bg-[#0388CC] text-[#fff]">{count}</div>,
            view: (
              <Link to={'/category-details/'+id+'?tab=1&'}><div className="bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
                <FontAwesomeIcon icon={faEye} />
              </div></Link>
            ),
            actions: (
              <button 
                onClick={() => {
                  setCategoryId(category.id);
                  setShowDeleteModal(true);
                }}
                type="button" className="text-[#E3370A] hover:text-white border border-[#E3370A] hover:bg-[#E3370A] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                Delete
              </button>
            ),
        },
      )
    });
    return dataList;
  }