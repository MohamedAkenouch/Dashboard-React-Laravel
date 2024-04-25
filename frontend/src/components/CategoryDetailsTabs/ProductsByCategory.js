import React, {useState, useEffect} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../../global/columns/productByCategoryColumns";

import {getProductsByCategoryData} from "../../global/data/productsByCategoryData";


function ProductsByCategory({category_id,products}) {
  
  

  
  const idcat = category_id;
 
  const productsBycat = [];
  console.log(products);
  const pr = products;
  console.log(pr);
 
  pr.forEach(p => {
    var cat = p.categories;
    cat.forEach(c => {
      if(c.id === parseInt(idcat)){
        productsBycat.push(p);
      };
    });
    
  });

  const ProductsByCategoryData = getProductsByCategoryData(productsBycat);

  const gridStyle = {
    minHeight: 560,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };
  const [rowHeight, setRowHeight] = useState(60);
  const showCellBorders = false;
  const showZebraRows = false;
  return (
    <div className=" p-3 w-full">
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        showCellBorders={showCellBorders}
        showZebraRows={showZebraRows}
        rowHeight={rowHeight}
        style={gridStyle}
        dataSource={ProductsByCategoryData}
      />
    </div>
  );
}

export default ProductsByCategory;
