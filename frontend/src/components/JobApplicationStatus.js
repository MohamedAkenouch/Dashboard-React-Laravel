/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort} from "@fortawesome/free-solid-svg-icons";

function JobApplicationStatus() {
  const [done, setDone] = useState(true)


  return (
    <div
    onClick={() => {
        done 
        ? setDone(false)
        : setDone(true);
    }}
    className="w-[100%] cursor-pointer font-[400] flex items-center  text-[13px] h-[35px] mr-2 rounded "
  >
    <div className={done? "text-[green] mr-2" : "text-[red] mr-2"}>{done ? "Done" :"Pending"}</div>{" "}
    <div>
      <FontAwesomeIcon icon={faSort} />
    </div>
  </div>
  )
}


export default JobApplicationStatus;