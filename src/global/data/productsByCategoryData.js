import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import { faGear, faCaretDown } from "@fortawesome/free-solid-svg-icons";


export function getProductsByCategoryData(products) {
    const dataList = []
    products.forEach(product => {
        var imagee= "https://new.tiffanyflowers.ae//storage/category_images/image00013.jpeg";
        if(product.images.length!= 0 ){
          imagee = product.images[0].image;
        } ;
      dataList.push(
        {
            image: (<img className='h-[50px] m-auto' src={imagee}/>),
            id: <div className="font-[400]">{product.id}</div>,
            name: <div className="font-[400]">{product.name}</div>,
            description: <div className="font-[400]">{product.description}</div>,
            price: <div className="text-[14px] w-fit px-[5px] font-[400] rounded bg-[#0388CC] text-[#fff]">{product.price}</div>,
            actions: (
              <Link to={'/product-details?tab=1&id='+product.id}>
              <div className="text-[14px] bg-[#fff] border-[1px] border-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[#0388CC] text-center">
                <FontAwesomeIcon icon={faGear} /><span className='ml-1'><FontAwesomeIcon icon={faCaretDown} /></span>
              </div></Link>
            )
        },
      )
    });
    return dataList;
  }