import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import RichTextEditor from "../RichTextEditor";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function NewSubCategory({ setShowModal }) {
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add New Category
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-6 w-full ">
              <div className="">
                <div className="">
                  <label
                    className="text-[14px] font-[400]"
                    htmlFor="branch-name"
                  >
                    Name - EN
                    <span className="font-[700] text-[red]">*</span>
                  </label>
                  <input
                    className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder="Enter category name in english"
                    type="text"
                    id="branch-name"
                  />
                </div>
                <div className="">
                  <label
                    className="text-[14px] font-[400]"
                    htmlFor="branch-name"
                  >
                    Name - AR
                    <span className="font-[700] text-[red]">*</span>
                  </label>
                  <input
                    className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder="Enter cetegory name in arabic"
                    type="text"
                    id="branch-name"
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
                    <span className="font-[700]">image</span> : Thumbnails will
                    be generated from detailed image automatically , but you can
                    also upload them manually
                  </p>
                  <p className="text-[#000] text-[14px] font-[400]">
                    Select a images of Product ( JPEG or PNG ):
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
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              onClick={() => {}}
                            />
                          )}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-[#000] mt-[20px] text-[14px] font-[400]">
                    <span className="font-[700]">icon</span> : Thumbnails will
                    be generated from detailed image automatically , but you can
                    also upload them manually
                  </p>
                  <p className="text-[#000] text-[14px] font-[400]">
                    Select a images of Product ( JPEG or PNG ):
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
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              onClick={() => {}}
                            />
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
                <div onClick={() => setShowModal(false)} className="rounded-full cursor-pointer text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]">
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

export default NewSubCategory;
