import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import StatusSelector from '../../components/StatusSelector';

import { toFixed } from '../../constants/const'


export function  getOrdersData(orders, users) {
    var user;
    var email;
    var id;
    
    const dataList = []
    orders.forEach(order => {
      id = order.id;
      user = users.find(user => user.id == order.user_id);
      if(user == undefined) {
        email = "user deleted"
      }
      else{
        email = user.email;
      }
      
      dataList.push(
        {
          id: <div className="text-[14px]  font-[300]  text-[#0388CC]">{order.id}</div>,
          phone: (
            <div className="text-[14px] font-[600] underline text-[#0F3F62]">
              {order.user_phone_number}
            </div>
          ),
          email: (
            <div className="text-[14px] font-[300] underline text-[#0388CC]">
              {email}
            </div>
          ),
          products: <div className='font-[400]'>{order.item_count}</div>,
          adress: <div className='font-[400]'>{order.city}</div>,
          time: <div className='font-[400]'>{order.start_date.split(" ")[1]}</div>,
          date: <div className='font-[400]'>{order.start_date.split(" ")[0]}</div>,
          total: <div className="text-[14px] font-[600] text-[#000]">{toFixed(order.sub_total, 2)}</div>,
          status: <div className="z-50 overflow-visible l-[35px] px-1 font-[400] text-[white] py-[2px] min-w-[100px] rounded-md"><StatusSelector key={order.id} id={order.id} value={order.status}/></div>,
          view: (
            <Link to={"/order-details/"+id}><div className="text-[14px] bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
              <FontAwesomeIcon icon={faEye} />
            </div></Link>
          ),
        }
      )
    });
  
    return dataList;
  }