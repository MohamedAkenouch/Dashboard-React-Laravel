/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown, faSort} from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/selector.module.css'

function ApprovalSelector() {
  const [approved, setApproved] = useState(true)


  return (
    <div
    onClick={() => {
        approved 
        ? setApproved(false)
        : setApproved(true);
    }}
    className="w-[100%] cursor-pointer font-[400] flex items-center text-[13px] h-[35px] mr-2 rounded "
  >
    <div className={approved? "text-[green] mr-2" : "text-[red] mr-2"}>{approved ? "Approved" :"Not Approved"}</div>{" "}
    <div>
      <FontAwesomeIcon icon={faSort} />
    </div>
  </div>
  )
}


export default ApprovalSelector;