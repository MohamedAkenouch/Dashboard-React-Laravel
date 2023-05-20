import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';


export function  getUsersData(users, setUserPhone, setShowDeleteModal) {


    const dataList = []
    users.forEach(user => {
        
        dataList.push(
        {
            id: <div className="text-[14px]  font-[300]  text-[#0388CC]">{user.id}</div>,
            name: (
            <div className="text-[14px] font-[600] underline text-[#0F3F62]">
                {user.last_name.toUpperCase() + " " + user.first_name.toUpperCase()}
            </div>
            ),
            email: (
            <div className="text-[14px] font-[300] underline text-[#0388CC]">
                {user.email}
            </div>
            ),
            phone: (
                <div className="text-[14px] font-[600] underline text-[#0F3F62]">
                    {user.phone_number}
                </div>
                ),
            date: <div className='font-[400]'>{user.created_at.substring(0, 10)}</div>,
            time: <div className='font-[400]'>{user.created_at.substring(11, 16)}</div>,
            actions: (
                <button 
                  onClick={() => {
                    setUserPhone(user.phone_number);
                    setShowDeleteModal(true);
                  }}
                  type="button" className="text-[#E3370A] hover:text-white border border-[#E3370A] hover:bg-[#E3370A] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                  Delete
                </button>
              )
        }
        )
    });

    return dataList;
}