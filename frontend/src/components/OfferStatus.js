/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSort} from "@fortawesome/free-solid-svg-icons";

function OfferStatus() {
  const [active, setActive] = useState(true)


  return (
    <div
    onClick={() => {
        active 
        ? setActive(false)
        : setActive(true);
    }}
    className="w-[100%] cursor-pointer font-[400] flex items-center text-[13px] h-[35px] mr-2 rounded "
  >
    <div className={active? "text-[green] mr-2" : "text-[red] mr-2"}>{active ? "Active" :"Pending"}</div>{" "}
    <div>
      <FontAwesomeIcon icon={faSort} />
    </div>
  </div>
  )
}


export default OfferStatus;