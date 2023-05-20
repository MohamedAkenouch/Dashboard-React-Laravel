import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../ContactForm";
import NewBranch from "../Modals/NewBranch";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteBranch, getBranches } from '../../actions/branch'
import DeleteValueModal from "../Modals/DeleteValueModal";

function BranchesPage() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isAddValue, setIsAddValue] = useState(true);
  const [brancheID, setBrancheID] = useState('');
  const [isValueAdded, setIsValueAdded] = useState(false);

  useEffect(() => {
    dispatch(getBranches());
    setIsValueAdded(false);
  }, [dispatch, isValueAdded]);

  const branches = useSelector((state) => state.branches);

  const [values, setValues] = useState({
    name_ar: "",
    opening_time: "",
    closing_time: "",
    delivery_opening_time: "",
    delivery_closing_time: "",
    telephone: "",
    whatsapp: "",
    lat: 10,
    lon: 106,
    delivery_cost: 0,
  });

  return (
    <div>
      <div className="divide-y">
        {branches.map((branch, i) => 
          <ContactForm 
            branch={branch} key={i} index={i} setIsAddValue={setIsAddValue}
            setBrancheID={setBrancheID} setShowModal={setShowModal} 
            values={values} setValues={setValues} setShowDeleteModal={setShowDeleteModal}/>
        )}
      </div>
      {showModal ? (
        <NewBranch
          setShowModal={setShowModal}
          isAddValue={isAddValue}
          id={brancheID}
          values={values} 
          setValues={setValues} 
          setIsValueAdded={setIsValueAdded}
        />
      ) : null}
      {showDeleteModal ? <DeleteValueModal setShowDeleteModal={setShowDeleteModal} id={brancheID} deleteValue={deleteBranch} title={"Delete Branche"} valueName={"branche"} /> : null}
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer  flex items-center text-[#0388CC] h-[30px]  text-[13px]"
      >
        <div className="mr-2">Add new branche </div>
        <div className="text-[20px]">
          <FontAwesomeIcon icon={faCirclePlus} />
        </div>
      </div>
    </div>
  );
}

export default BranchesPage;
