import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import RichTextEditor from "../RichTextEditor";
import PolicyForm from "../PolicyForm";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function GeneralSettings() {
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
  return (
    <div>
      <div className="flex">
        <div>
          <div className="text-[#0388CC] font-bold text-[14px]">1.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#0388CC] font-bold text-[14px]">
            Personal Details
          </p>
          <div className="flex flex-wrap">
            <div className="w-[400px] mr-[120px] my-[10px]">
              <label className="text-[14px] font-[400]" htmlFor="branch-name">
                Full Name
              </label>
              <input
                className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                placeholder="Enter full name"
                type="text"
                id="branch-name"
              />
            </div>
            <div className="w-[400px] mr-[120px] my-[10px]">
              <label className="text-[14px] font-[400]" htmlFor="branch-name">
                Family Name
              </label>
              <input
                className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                placeholder="Enter family name"
                type="text"
                id="branch-name"
              />
            </div>
            <div className="w-[400px] mr-[120px] my-[10px]">
              <label className="text-[14px] font-[400]" htmlFor="branch-name">
                Phone Number
              </label>
              <input
                className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                placeholder="Enter phone number"
                type="text"
                id="branch-name"
              />
            </div>
            <div className="w-[400px] mr-[120px] my-[10px]">
              <label className="text-[14px] font-[400]" htmlFor="branch-name">
                Email
              </label>
              <input
                className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                placeholder="Enter email"
                type="text"
                id="branch-name"
              />
            </div>
            <div className="w-[400px] mr-[120px] my-[10px]">
              <label className="text-[14px] font-[400]" htmlFor="branch-name">
                Password
              </label>
              <input
                className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                placeholder="Enter password"
                type="password"
                id="branch-name"
              />
            </div>
            <div className="w-[400px] mr-[120px] my-[10px]">
              <div className="mt-[0px] text-[15px] font-[400] text-[#000]">
                Gender
              </div>
              <label htmlFor="male" className="text-[14px] font-[400]">
                Male
              </label>
              <input
                className="ml-[10px] mr-[30px]"
                type="radio"
                name="gender"
                value="male"
                id="male"
              />
              <label htmlFor="female" className="text-[14px] font-[400]">
                Female
              </label>
              <input
                className="ml-[10px] mr-[30px]"
                type="radio"
                name="gender"
                value="female"
                id="female"
              />
            </div>
          </div>
          <div>
            <div className="mt-[20px] text-[15px] font-[400] text-[#000]">
              Profile Picture
            </div>
            <p className="text-[#000]  text-[13px] font-[400]">
              Select a images of Products Page ( JPEG or PNG ):
              <span className="text-[red] font-[700]">*</span>
            </p>
            <div className=" w-[130px] h-[30px] mt-[5px]">
              <FileUpload
                files={files}
                setFiles={setFiles}
                removeFile={removeFile}
              />
            </div>
            <div className>
              <FileList files={files} removeFile={removeFile} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[40px]">
        <div>
          <div className="text-[#0388CC] font-bold text-[14px]">2.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#0388CC] font-bold text-[14px]">Site Logo</p>
          <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
            Select a images of Product ( JPEG or PNG ):
            <span className="text-[red] font-[700]">*</span>
          </p>
          <div className=" w-[130px] h-[30px] mt-[20px]">
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
      <div className="flex mt-[40px]">
        <div>
          <div className="text-[#0388CC] font-bold text-[14px]">3.</div>
        </div>
        <div className="ml-[6%]">
          <p className="text-[#0388CC] font-bold text-[14px]">
            Bank Informations
          </p>
          <div className="flex">
            <div>
              <div className="w-[400px] mr-[120px] my-[10px]">
                <label className="text-[14px] font-[400]" htmlFor="branch-name">
                  Bank Name
                </label>
                <input
                  className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                  placeholder="Enter bank name"
                  type="text"
                  id="branch-name"
                />
              </div>
              <div className="w-[400px] mr-[120px] my-[10px]">
                <label className="text-[14px] font-[400]" htmlFor="branch-name">
                  Account Number
                </label>
                <input
                  className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                  placeholder="Enter account number"
                  type="text"
                  id="branch-name"
                />
              </div>
              <div className="w-[400px] mr-[120px] my-[10px]">
                <label className="text-[14px] font-[400]" htmlFor="branch-name">
                  Statement Number
                </label>
                <input
                  className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                  placeholder="Enter statement number"
                  type="text"
                  id="branch-name"
                />
              </div>
            </div>
            <div>
              <div className="w-[400px] h-[82%] mr-[120px] my-[10px]">
                <label className="text-[14px] font-[400]" htmlFor="branch-name">
                  Message
                </label>
                <textarea
                  className="resize-none w-full h-full rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                  id="branch-name"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralSettings;
