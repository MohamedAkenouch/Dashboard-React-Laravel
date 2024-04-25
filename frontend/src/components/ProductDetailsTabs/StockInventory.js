import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function StockInventory() {
  const [values, setValues] = useState({
    quantity: "",
    date: "",
  });
  const [stockHistory, setStockHistory] = useState([]);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values[e.target.name]);
  };

  const addStock = () => {
    if(values.quantity !=="" && values.date !==""){

      setStockHistory([
        ...stockHistory,
        { quantity: values.quantity, date: values.date },
      ]);
      setValues({ quantity: "", date: "" });
      console.log(stockHistory);
    }
  };
  return (
    <div className="flex h-full justify-evenly divide-x">
      <div className="h-full pr-[30px] w-[45%] flex flex-col justify-between">
        <div>
          <div className="text-[17px] font-[400] text-[#0388CC]">
            Add or Remove Stocks for this Product
          </div>
          <div className="text-[#000] mt-6 text-[14px] font-[400]">
            Quantity:
            <br />
            <input
              className="h-[30px] mt-[5px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
              placeholder="How many items you will add"
              onChange={changeHandler}
              value={values.quantity}
              name="quantity"
              type="number"
            />
          </div>
          <div className="text-[#000] mt-6 text-[14px] font-[400]">
            Date:
            <br />
            <input
              className="h-[30px] mt-[5px] placeholder:text-[13px] text-[13px] rounded-md w-[80%] border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
              type="date"
              onChange={changeHandler}
              value={values.date}
              name="date"
            />
          </div>
          <div
            onClick={addStock}
            className="w-fit mt-6 h-[25px] flex items-center cursor-pointer font-[200] text-[center] text-[14px] px-8 rounded-full bg-[#007530] text-[white]"
          >
            Add new stock to inventory
          </div>
        </div>
        <div className="flex">
          <div className="mr-6">
            <img src="/images/dashboard/in-stock-products.svg" />
          </div>
          <div>
            <span className="text-[20px]">45448</span>
            <br />
            <span className="text-[12px] font-[400] text-[green]">Sales</span>
          </div>
        </div>
      </div>
      <div className="h-full pl-[100px] w-[45%] flex flex-col justify-between">
        <div>
          <div className="text-[17px] font-[400] text-[#0388CC]">
            Stock History
          </div>
          <div className="mt-3">
            {stockHistory.length !==0 ? (
              <table className="text-[13px] text-[#000] text-left w-full">
                <thead>
                  <tr>
                    <th className="text-[14px] w-[80%] font-[400] py-2">
                      Quantity
                    </th>
                    <th className="text-[14px]  font-[400] py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stockHistory.map((stock) => (
                    <tr>
                      {stock.quantity.charAt(0) == "-" ? (
                        <td className="py-2 text-[red]">{stock.quantity}</td>
                      ) : (
                        <td className="py-2">{stock.quantity}</td>
                      )}

                      <td className="py-2 font-[400]">{stock.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-[14px] font-[400]">Stock history is empty</p>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="mr-6 ">
            <img
              className="h-[40px]"
              src="/images/dashboard/active-products.svg"
            />
          </div>
          <div>
            <span className="text-[20px]">45448</span>
            <br />
            <span className="text-[12px] font-[400] text-[#0388CC]">
              Products in Stock
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockInventory;
