import React, {useEffect} from "react";
import SideBar from "../components/SideBar";
import UpperTotal from "../components/UpperTotal";
import SideTotal from "../components/SideTotal";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import { UserData } from "../global/chartData";
import {
  faCircle,
  faArrowDown,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import columns from "../global/columns/orderColumns";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles3 from "../styles/selector.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { getOrdersData } from '../global/data/ordersData'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getMesures } from '../actions/mesure';

const Home = ({orders, users}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMesures());
  }, [dispatch]);

  const mesures = useSelector((state) => state.mesures);
  console.log(mesures);

  const ordersData = getOrdersData(orders, users)

  const gridStyle = {
    minHeight: 275,
    border: "none",
    fontSize: "13px",
    fontWeight: "200",
  };
  const showCellBorders = false;
  const showZebraRows = false;
  
  const doughnutData = {
    labels: [" ", " "],
    datasets: [
      {
        label: "Weekly Sales",
        data: [18, 12],
        backgroundColor: ["#0388CC", "#fff"],
        borderColor: ["#0388CC", "#fff"],
        borderWidth: 1,
      },
      {
        label: "Weekly Sales",
        data: [0, 0],
        backgroundColor: ["#fff", "#fff"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 1,
      },
      {
        label: "Weekly Sales",
        data: [8, 22],
        backgroundColor: ["#cecece", "#0388CC"],
        borderColor: ["#cecece", "#0388CC"],
        borderWidth: 1,
      },
    ],
  };

  
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: false,
        data: UserData.map((data) => data.userGain),
        borderColor: "#00AEEF",
        borderWidth: 2,
        tension: 0.5,
        pointStyle: "line",
        pointRotation: 90,
        cubicInterpolationMode: "monotone",
        options: {
          legend: { display: false },
        },
        fill: {
          target: "origin",
          above: "rgba(0, 174, 239,0.15)",
        },
      },
    ],
  });

  return (
    <div className="w-[96%] text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>

        <div className="w-full  flex flex-col ml-6 text-[#033362] font-semibold">
          <Header />
          <div className="grow">
            <div className="w-full divide-x justify-evenly bg-[#fff] flex h-[auto] p-2 mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
              <UpperTotal
                color="text-[#033362]"
                icon="total-revenue"
                title="Total Revenue"
                arTitle="إجمالي المبيعات"
                total={mesures.revenu}
                size="w-[40px]"
              />
              <UpperTotal
                color="text-[#00AEEF]"
                icon="total-orders"
                title="Total Orders"
                arTitle="إجمالي الطلبات"
                total={mesures.count_orders}
                size="w-[36px]"
              />
              <UpperTotal
                color="text-[#39B54A]"
                icon="total-deliveries"
                title="Total Completed Orders"
                arTitle="الطلبات المكتملة"
                total={mesures.count_completed_orders}
                size="w-[44px]"
              />
              {/* <UpperTotal
                color="text-[#00AEEF]"
                icon="active-orders"
                title="Active Orders"
                arTitle="طلبات جارية"
                total="3,750"
                size="w-[22px]"
              /> */}
              <UpperTotal
                color="text-[#F7941D]"
                icon="pending-orders"
                title="Pending Orders"
                arTitle="طلبات معلقة"
                total={mesures.count_pending_orders}
                size="w-[24px]"
              />
              <UpperTotal
                color="text-[#FF4A4A]"
                icon="cancelled-orders"
                title="Cencelled Orders "
                arTitle="طلبات ملغية"
                total={mesures.count_canceled_orders}
                size="w-[24px]"
              />
            </div>

            <div className="w-full mt-4 h-[auto] flex justify-between">
              <div className="w-[79.5%] flex flex-col justify-between">
                <div className="flex justify-between h-[auto] mb-2">
                  <div className="bg-[#fff] rounded-xl w-[69.5%] pt-1 shadow-[0px_0px_16px_rgb(210,215,211)]">
                    <div className="flex justify-between items-center w-[98%] mt-[4px] text-[13px]">
                      <div className='flex items-center'>
                      <div className="ml-[35px] text-[green] text-[7px]">
                        <FontAwesomeIcon icon={faCircle} />
                      </div>
                      <div className="ml-[10px]"> Recent orders</div>
                      
                      <div className="ml-[35px] px-1 font-[400] text-[white] py-[2px] min-w-[75px] rounded-md bg-[#0388CC]">
                        <div className={`${styles3.selectBox} bg-[#0388CC]`}>
                          <select
                            className={`pl-2 bg-[#0388CC] outline-none cursor-pointer font-sans rounded py-[3px]  border-none text-[white] w-[100%] `}
                          >
                            <option
                              value="s"
                              className={` outline-[0px] hover:bg-[white] bg-[#0388CC] py-[4px] rounded`}
                            >
                              Sales
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="ml-[35px] font-arabic font-[400]">تحليل المبيعات</div>
                      </div>
                      <div className="ml-[35px] px-1 font-[400] text-[white] py-[2px] min-w-[90px] rounded-md ">
                        <div className={`${styles3.selectBox2} bg-[white] border-[1px] border-[#0388CC] `}>
                          <select
                            className={`pl-2 bg-[#0388CC] outline-none cursor-pointer font-sans rounded py-[3px]  border-none text-[#0388CC] w-[100%] `}
                          >
                            <option
                              value="s"
                              className={` outline-[0px] text-[#0388CC] hover:bg-[white] bg-[white] py-[4px] rounded`}
                            >
                              Weekly
                            </option>
                            <option
                              value="s"
                              className={`outline-[0px] hover:bg-[white] bg-[white] py-[4px] rounded`}
                            >
                              Monthly
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="m-auto w-[95%] h-[85%]">
                      <LineChart chartData={userData} />
                    </div>
                  </div>
                  <div className="bg-[#fff] rounded-xl w-[29.5%] pb-2 shadow-[0px_0px_16px_rgb(210,215,211)]">
                    <div className="mt-[30px]">
                      <DoughnutChart chartData={doughnutData} />
                    </div>
                    <div className="flex justify-between px-[12%] mt-[14px]">
                      <div className="border-l-solid border-l-2 border-l-[#00AEEF] px-2">
                        <div className="text-[14px]">4{mesures.revenu}</div>
                        <span className="text-[10px] text-[#7C8DB5] font-thin">
                          Income{" "}
                          <span className="ml-[12px]">
                            <FontAwesomeIcon icon={faArrowUp} />
                          </span>
                        </span>
                      </div>
                      <div className="border-l-solid border-l-2 border-l-[#00AEEF] px-2">
                        <div className="text-[14px]">{mesures.tax}</div>
                        <span className="text-[10px] text-[#7C8DB5] font-thin">
                          Taxes{" "}
                          <span className="ml-[12px]">
                            <FontAwesomeIcon icon={faArrowDown} />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#fff] rounded-xl h-[auto] shadow-[0px_0px_16px_rgb(210,215,211)]">
                  <div className="flex items-center w-[50%] mt-[4px] h-[auto] text-[13px]">
                    <div className="ml-[35px]  text-[#0388CC] text-[7px]">
                      <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <div className="ml-[10px]"> Recent orders</div>
                    <div className="ml-[35px] px-1 font-[400] text-[white] py-[2px] min-w-[100px] rounded-md">
                        <div className={`${styles3.selectBox} bg-[#0388CC]`}>
                          <select
                            className={`pl-2 bg-[#0388CC] outline-none cursor-pointer font-sans rounded py-[3px]  border-none text-[white] w-[100%] `}
                          >
                            <option
                              value="s"
                              className={` outline-[0px] hover:bg-[white] bg-[#0388CC] py-[4px] rounded`}
                            >
                              All Orders
                            </option>
                          </select>
                        </div>
                      </div>
                    <div className="ml-[35px] font-arabic font-[400]">إدارة الطلبات</div>
                  </div>
                  <div className=" px-3 w-full">
                    <ReactDataGrid
                      idProperty="id"
                      columns={columns}
                      showCellBorders={showCellBorders}
                      showZebraRows={showZebraRows}
                      style={gridStyle}
                      dataSource={ordersData}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[19.5%] flex flex-col justify-between ">
                <SideTotal
                  color="text-[#39B54A]"
                  icon="tax-amount"
                  title="Tax Amount"
                  total={mesures.tax}
                />
                <Link to='/products'><SideTotal
                  color="text-[#39B54A]"
                  icon="in-stock-products"
                  title="In Stock Products"
                  total="static"
                /></Link>
                <Link to='/categories'><SideTotal
                  color="text-[#F7941D]"
                  icon="categories"
                  title="Categories"
                  total={mesures.count_categories}
                /></Link>
                <Link to='/users?tab=2'><SideTotal
                  color="text-[#007530]"
                  icon="customers"
                  title="Customers"
                  total={mesures.count_users}
                /></Link>
                <Link to='/users?tab=1'><SideTotal
                  color="text-[#0388CC]"
                  icon="admin-users"
                  title="Admin Users"
                  total="static"
                /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
