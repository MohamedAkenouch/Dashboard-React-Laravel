import React, { useState } from "react";
import FileUpload from "../FileUploader/FileUpload";
import FileList from "../FileUploader/FileList";
import RichTextEditor from "../RichTextEditor";
import PolicyForm from "../PolicyForm";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewPolicy from "../Modals/NewPolicy";
import {
  faCirclePlus,
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function PrivacyPolicy() {
  const [showModal, setShowModal] = useState(false);
  const [policies, setPolicies] = useState([]);
  const [values, setValues] = useState({
    field: "test",
    descAr:"test",
    descEn:"test",
  });
  
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values[e.target.name]);
  };

  const addPolicy = () => {
    setPolicies([...policies, values]);
    console.log(policies);
    setShowModal(false);
  };

  const deletePolicy = (index) => {
    setPolicies(policies.filter((policy, i) => i !== index));
  };
  return (
    <div>
      <div>
      {policies.map((policy, i) => 
          <PolicyForm  policy={policy} deletePolicy={deletePolicy} key={i} index={i} />
        )}
      </div>
      {showModal ? (
        <NewPolicy
        setValues={setValues}
          values={values}
          changeHandler={changeHandler}
          addPolicy={addPolicy}
          setShowModal={setShowModal}
        />
      ) : null}
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer  flex items-center text-[#0388CC] h-[30px]  text-[13px]"
      >
        <div className="mr-2">Add new policies </div>
        <div className="text-[20px]">
          <FontAwesomeIcon icon={faCirclePlus} />
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
