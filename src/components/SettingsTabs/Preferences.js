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
// import styles from "../../styles/toggle.module.css"
// import "../../styles/toggle.module.css"

function Preferences() {
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };
  return (
    <div>
      <div className="flex">
        <div>
          <div className="text-[#0388CC] font-bold text-[14px]">1.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#0388CC] font-bold text-[14px]">Language</p>
          <select className="w-[200px] rounded-md px-1 mt-4 font-[400] text-[14px] text-[#000]">
            <option>Select your language</option>
            <option value="fr">French</option>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
      <div className="flex mt-[40px]">
        <div>
          <div className="text-[#0388CC] font-bold text-[14px]">2.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#0388CC] font-bold text-[14px]">Currency</p>
          <select className="w-[200px] rounded-md px-1 mt-4 font-[400] text-[14px] text-[#000]">
            <option>Select your currency</option>
            <option value="syr">SYR</option>
            <option value="usd">USD</option>
            <option value="xyz">XYZ</option>
            <option className="text-[red]" value="en">
              Add One
            </option>
          </select>
        </div>
      </div>
      <div className="flex mt-[40px]">
        <div>
          <div className="text-[#0388CC] font-bold text-[14px]">3.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#0388CC] font-bold text-[14px]">Vat</p>
          <div clasName="items-center">
            <span className="text-[#000] font-[400] text-[14px] mr-[150px]">
              Turn On/Off Tax
            </span>
            {/* <span className="text-[#000] font-[400] text-[14px]">On</span> */}
            <label
              htmlFor="Toggle1"
              className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span className="relative">
                <input id="Toggle1" type="checkbox" className="hidden peer" />
                <div className="w-12 h-6 rounded-full shadow-inner dark:bg-[green] peer-checked:dark:bg-[red]"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[white]"></div>
              </span>
            </label>
            {/* <span className="text-[#000] font-[400] text-[14px]">Off</span> */}
          </div>
          <div clasName="items-center mt-3">
            <span className="text-[#000] font-[400] text-[14px] mr-[185px]">
              Turn Value
            </span>
            <input
              placeholder="%"
              className="w-[50px] h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-[40px]">
        <div>
          <div className="text-[#0388CC] font-bold text-[14px]">4.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#0388CC] font-bold text-[14px]">
            Point System
          </p>
          <div clasName="items-center">
            <span className="text-[#000] font-[400] text-[14px] mr-[85px]">
              Turn On/Off Point System
            </span>
            {/* <span className="text-[#000] font-[400] text-[14px]">On</span> */}
            <label
              htmlFor="Toggle2"
              className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span className="relative">
                <input id="Toggle2" type="checkbox" className="hidden peer" />
                <div className="w-12 h-6 rounded-full shadow-inner dark:bg-[green] peer-checked:dark:bg-[red]"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[white]"></div>
              </span>
            </label>
            {/* <span className="text-[#000] font-[400] text-[14px]">Off</span> */}
          </div>
        </div>
      </div>
      <div className="flex mt-[40px]">
        <div>
          <div className="text-[#0388CC] font-bold text-[14px]">5.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#0388CC] font-bold text-[14px]">
            Store Inventory
          </p>
          <div clasName="items-center">
            <span className="text-[#000] font-[400] text-[14px] mr-[70px]">
              Turn On/Off Store Inventory
            </span>
            {/* <span className="text-[#000] font-[400] text-[14px]">On</span> */}
            <label
              htmlFor="Toggle3"
              className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span className="relative">
                <input id="Toggle3" type="checkbox" className="hidden peer" />
                <div className="w-12 h-6 rounded-full shadow-inner dark:bg-[green] peer-checked:dark:bg-[red]"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[white]"></div>
              </span>
            </label>
            {/* <span className="text-[#000] font-[400] text-[14px]">Off</span> */}
          </div>
          <div clasName="items-center">
            <span className="text-[#000] font-[400] text-[14px] mr-[85px]">
              Turn On/Off Stocks Alerts
            </span>
            {/* <span className="text-[#000] font-[400] text-[14px]">On</span> */}
            <label
              htmlFor="Toggle4"
              className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span className="relative">
                <input id="Toggle4" type="checkbox" className="hidden peer" />
                <div className="w-12 h-6 rounded-full shadow-inner dark:bg-[green] peer-checked:dark:bg-[red]"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[white]"></div>
              </span>
            </label>
            {/* <span className="text-[#000] font-[400] text-[14px]">Off</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
