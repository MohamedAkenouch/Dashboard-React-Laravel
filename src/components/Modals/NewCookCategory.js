import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import RichTextEditor from "../RichTextEditor";
import SettingsTab from "../SettingsTab";
import PolicyForm from "../PolicyForm";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/settingsTabs.module.css";

function NewCookCategory({ setShowModal }) {
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
  const [selectedSetting, setSelectedSetting] = useState("11");
  const handleCheck = (e) => {
    setSelectedSetting(e.target.value);
  };
  return (
    <>
      <div className="justify-center mt-[-30px] h-[800px] items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add New Cook Category
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative h-[600px] p-6 w-full scrollbar-thin h-full scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
              <div>
              <div className="flex flex-wrap">
        <div className="w-[40%] mr-[20px] my-[10px]">
          <label className="text-[14px] font-[500]" htmlFor="branch-name">
            Name - EN
            <span className="text-[red] font-[700]">*</span>
          </label>
          <input
            className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Cook cetegory name in english"
            type="text"
            id="branch-name"
          />
        </div>
        <div className="w-[40%] mr-[20px] my-[10px]">
          <label className="text-[14px] font-[500]" htmlFor="branch-name">
            Name - AR
            <span className="text-[red] font-[700]">*</span>
          </label>
          <input
            className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
            placeholder="Cook cetegory name in arabic"
            type="text"
            id="branch-name"
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-[30px] w-[87%]">
        <RichTextEditor
          name="Description-EN"
          initialValue=""
          getValue={getValue}
        />
        <RichTextEditor
          name="Description-AR"
          initialValue=""
          getValue={getValue}
        />
      </div>
      <div className="mt-6">
        <p className="text-[#000] text-[14px] font-[400]">
          Select a images of catgory ( JPEG or PNG ):
          <span className="text-[red] font-[700]">*</span>
        </p>
        <div className=" w-[130px] h-[30px] mt-[5px]">
          <FileUpload
            files={files}
            setFiles={setFiles}
            removeFile={removeFile}
          />
        </div>
        <div>
          <ul className="file-list flex flex-wrap mr-[50px]">
            <li className="file-item w-[200px] mt-[30px] mr-[90px] text-[14px] items-center flex">
              <img
                className="w-[50px] "
                src="https://justtheskills.com/wp-content/uploads/2022/01/pdf6.png"
              />
              <p className="w-[130px] font-thin text-[#0388CC] ml-[20px]">
                file.name
              </p>
              <div className="actions">
                <div className="loading"></div>
                {false && (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="fa-spin"
                    onClick={() => {}}
                  />
                )}
                {!false && (
                  <FontAwesomeIcon icon={faTrashCan} onClick={() => {}} />
                )}
              </div>
            </li>
          </ul>
        </div>
        
      </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-3 rounded-b">
              <div className=" flex pb-[10px] ">
                <div
                  onClick={() => setShowModal(false)}
                  className="rounded-full cursor-pointer text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]"
                >
                  Cancel
                </div>
                <div className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default NewCookCategory;
