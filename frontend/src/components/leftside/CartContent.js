import React from "react";
import Product from "./Product";

// import ProductImage from "../../../public/images/birgleOneBag.png";

export default function CartContent({items}) {
  return (
    <div className="">
      <p className="w-[80%] mx-[10%] font-bold opacity-90  text-sm tracking-wide  text-blue-900 my-3">
        Order Contain
      </p>
      <div className="h-[330px]  scrollbar-corner-rounded-xl scrollbar-thumb-gray-300 scrollbar-thin scrollbar-track-gray-100">
        {
          items.map(item => {
            return (
              <Product
                key={item.id}
                title={item.name}  totalItems={item.quantity} image={item.item_img} 
                size={item.size} color={"#"+item.color.toString(16).substr(2)} price={item.price} 
              />
            )
          })
        }
        
      </div>
    </div>
  );
}
