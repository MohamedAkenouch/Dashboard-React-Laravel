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

function AddFieldChoice({ setShowFieldChoiceModal, setFieldsMCQuestions, fieldsMCQuestions, selectedFieldQuestion, selectedField}) {
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };

  const [choiceInput, setChoiceInput] = useState("")

  const appendChoiceToField = () =>{
    if(choiceInput !== ""){
        const fieldsMCQuestionsCopy = fieldsMCQuestions;
        const oldChoices = fieldsMCQuestions[selectedFieldQuestion].fields[selectedField].choices
        const updatedField = {...fieldsMCQuestions[selectedFieldQuestion].fields[selectedField], choices :[...oldChoices, {text:choiceInput, id:oldChoices.length}]}
        fieldsMCQuestionsCopy[selectedFieldQuestion].fields[selectedField] = updatedField;
        setFieldsMCQuestions(fieldsMCQuestionsCopy);
        setShowFieldChoiceModal(false)
        console.log("first")
    }
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[85%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Add a Field Choice  a{selectedFieldQuestion}b{selectedField}
              </div> 
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-6 w-full ">
              <div className="w-[95%]">
                {/* {} */}
                <div className="flex">
                  <div className="w-[20%] text-[14px] mr-4 font-[400]">
                    <label htmlFor="branch-name">Choice:</label>
                  </div>
                  <input
                    className="w-[72.2%] h-[35px] pr-[40px] mr-2 rounded border-[#0388CC] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                    placeholder="Enter choice title"
                    value={choiceInput}
                    onChange={(e)=>setChoiceInput(e.target.value)}
                    type="text"
                    id="branch-name"
                  />
                </div>
              </div>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-3 rounded-b">
              <div className=" flex pb-[10px] ">
                <div
                  onClick={() => setShowFieldChoiceModal(false)}
                  className="rounded-full cursor-pointer text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]"
                >
                  Cancel
                </div>
                <div onClick={appendChoiceToField} className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
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

export default AddFieldChoice;