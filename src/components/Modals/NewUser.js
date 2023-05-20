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

function NewUser({ setShowModal }) {
  const [values, setValues] = useState({
    name: "test",
    email: "test ar",
    role: "",
  });
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values[e.target.name]);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add New Admin User
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-6 w-full ">
              <div className="w-[90%]">
                <div className="flex justify-between">
                  <label className="text-[14px] mr-4 font-[400]" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-[90%] h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder="Enter user name"
                    onChange={changeHandler}
                    value={values.name}
                    name="name"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="flex justify-between mt-6">
                  <label
                    className="text-[14px] mr-4 font-[400]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-[90%] h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder="Enter email"
                    onChange={changeHandler}
                    value={values.email}
                    name="email"
                    type="text"
                    id="email"
                  />
                </div>
                <div className="flex justify-between mt-6">
                  <label className="text-[14px] mr-4 font-[400]">Role</label>
                  <div className="w-[90%] flex justify-between h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]">
                    <div className="text-[14px] text-[#000] ">
                      <label className="mr-3" htmlFor="admin">
                        Admin
                      </label>
                      <input name="role" onChange={changeHandler} value="admin" id="admin" type="radio" />
                      <div className="font-[400] text-[13px] w-[150px] mt-1 text-[red]">
                        All Permissions
                      </div>
                    </div>
                    <div className="text-[14px] text-[#000] ">
                      <label className="mr-3" htmlFor="data-entry">
                        Data Entry
                      </label>
                      <input name="role" onChange={changeHandler} value="data-entry" id="data-entry" type="radio" />
                      <div className="font-[400] text-[13px] w-[150px] mt-1 text-[red]">
                        Add Product /Category /News /Activities /Pages
                      </div>
                    </div>
                    <div className="text-[14px] text-[#000] ">
                      <label className="mr-3" htmlFor="messaging">
                        Messaging
                      </label>
                      <input name="role" onChange={changeHandler} value="messaging" id="messaging" type="radio" />
                      <div className="font-[400] text-[13px] w-[150px] mt-1 text-[red]">
                        Messaging Center
                      </div>
                    </div>
                    <div className="text-[14px] text-[#000] ">
                      <label className="mr-3" htmlFor="hr">
                        HR
                      </label>
                      <input name="role" onChange={changeHandler} value="hr" id="hr" type="radio" />
                      <div className="font-[400] text-[13px] w-[150px] mt-1 text-[red]">
                        Career Center
                      </div>
                    </div>
                    <div className="text-[14px] text-[#000] ">
                      <label className="mr-3" htmlFor="sales">
                        Sales
                      </label>
                      <input name="role" onChange={changeHandler} value="sales" id="sales" type="radio" />
                      <div className="font-[400] text-[13px] w-[150px] mt-1 text-[red]">
                        Orders
                      </div>
                    </div>
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

export default NewUser;
