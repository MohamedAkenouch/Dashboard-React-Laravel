import React, { useState } from "react";
import SideBar from "../components/SideBar";
import OrderInfo from "../components/orders/OrderInfo";
import Title from "../components/orders/Title";
import CartContent from "../components/leftside/CartContent";
import PriceRow from "../components/leftside/PriceRow";
import Footer from "../components/Footer";

import { useParams } from 'react-router-dom';
import HeaderThird from "../components/HeaderThird";
import { capitalize, toFixed } from '../constants/const';


function OrderDetails({orders, users, allOrdersItems}) {
  const { id } = useParams();


  const order = orders.find(o => o.id == id);
  console.log("orderItems : ", allOrdersItems);

  const customer = users.find(u => u.id == order.user_id);

  const items = allOrdersItems.filter(e => order.id == e.order_id);

  const options = [
    {
      title: "Canceled",
      value:"canceled",
      color: '[#D40017]',
    }
    ,
    {
      title: "Pending",
      value:"pending",
      color: '[#D8AA6B]',
    }
    ,  
    
    {
      title: "Completed",
      value:"completed",
      color: '[#007530]'
    }
  
    
  ]
  const selected = options.map(e => e.value).indexOf(order.status);
  

  return (
    <div className="w-[96%] text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full ml-6 text-[#033362] font-semibold">
          <HeaderThird title={"Order Details"} path="/orders" />
          <div className="bg-[white] h-[694px] mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
            <div className="scrollbar-thin h-full scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div className="flex w-[100%] mt-10">
                <div className=" flex-[60%] w-full">
                  <div className="  mb-20 flex flex-col ">
                    {/* <Breadcrumb visible={true} /> */}
                    <div>
                      <div className="mx-[5%] mt-2">
                        <Title text="Order Details" />
                      </div>
                      <OrderInfo title="ID" value={order.order_id} />
                      <OrderInfo title="Number Of Products" value={order.item_count} />
                      <OrderInfo
                        title="Status"
                        value={capitalize(order.status)}
                        color={options[selected].color}
                        font="bold"
                      />
                      <OrderInfo title="Order Date" value={order.start_date.split(" ")[0]} />
                      <OrderInfo title="Order Time" value={order.start_date.split(" ")[1]} />
                    </div>{" "}
                    <div>
                      <div className="mx-[5%] mt-2">
                        <Title text="Customer Details" />
                      </div>
                      <OrderInfo title="First Name" value={customer.first_name.toUpperCase()} />
                      <OrderInfo title="Last Name" value={customer.last_name.toUpperCase()} />
                      <OrderInfo title="Email" value={customer.email} />
                      <OrderInfo title="Phone Number" value={customer.phone_number} />
                      <OrderInfo title="City" value={order.city} />
                      <OrderInfo title="Adress" value={order.receiver_addr} />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col  flex-[40%]">
                  <CartContent items={items} /> 
                  <div className="bg-green-50 rounded-xl my-1 grid grid-cols-1  divide-y w-[76%] mx-[12%]  ">
                    <PriceRow title="Subtototal" price={toFixed(order.sub_total, 2)} />
                    <PriceRow title="Shipping" price={toFixed(order.shipping, 2)} />
                    <PriceRow title="VAT" price="5%" />
                  </div>
                  <button className="w-[76%] px-10 bg-green-600 flex justify-between items-center rounded-md  mx-[12%] h-10 ">
                    <p className="text-[18px] text-white font-medium opacity-90">
                      Total{" "}
                      <span className="text-sm font-normal">
                        {" "}
                        (Include Tax)
                      </span>
                    </p>
                    <p className="text-[18px] text-white font-bold  opacity-90">
                      {toFixed(parseFloat(order.sub_total) + parseFloat(order.sub_total) * 0.05 + parseFloat(order.shipping), 2)}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderDetails;
