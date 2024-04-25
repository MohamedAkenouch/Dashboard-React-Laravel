import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addBranch, updateBranch } from '../../actions/branch'
import TextFromField from "../FormFileds/TextFromField";
import { getLocalDateFormat } from '../../constants/const';
import MapPicker from 'react-google-map-picker';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { sweetModal } from "../../constants/sweetModals";


const DefaultZoom = 10;

function NewBranch({setShowModal, isAddValue, id, values, setValues, setIsValueAdded}) {
  const dispatch = useDispatch();
  let formData = new FormData();

  const [defaultLocation, setDefaultLocation] = useState({lat: values.lat, lon: values.lon});

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lon){
    setLocation({lat:lat, lon:lon});
    setValues({...values, lat:lat, lon: lon})
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  function handleResetLocation(){
    setDefaultLocation({lat: values.lat, lon: values.lon});
    setZoom(DefaultZoom);
  }
  

  const addValue = () => {
    
    // adding data to fromData
    formData.append("name_ar", values.name_ar)
    formData.append("name_en", values.name_en)
    formData.append("opening_time", getLocalDateFormat(values.opening_time));
    formData.append("closing_time", getLocalDateFormat(values.closing_time));
    formData.append("delivery_opening_time", getLocalDateFormat(values.delivery_opening_time));
    formData.append("delivery_closing_time", getLocalDateFormat(values.delivery_closing_time));
    formData.append("telephone", values.telephone);
    formData.append("whatsapp", values.whatsapp);
    formData.append("lat", Number(values.lat.toString()));
    formData.append("lon", Number(values.lon.toString()));
    formData.append("delivery_cost", Number(values.delivery_cost));
    
    
    if(isAddValue){
      console.log("New Branche : ", values);
      dispatch(addBranch(formData));
    }
    else {
      console.log("Update Branche !!!! : ", values);
      dispatch(updateBranch(id, formData));
    }
    setValues({
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

    setShowModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addValue();
    if(isAddValue) {
      sweetModal('success', 'Branch has been added successfully', false);
    }
    else{
      sweetModal('success', 'Branch has been updated successfully', false);
    }
    setIsValueAdded(true);
    console.log("Submited !!!");
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-4 w-[85%]">
          <form onSubmit={handleSubmit} className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between   rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto mt-2  font-semibold">
                {isAddValue ? "Add New Location" : "Edit Location"}
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-1 w-full ">
              <div className="w-[95%]">
              <div className="flex w-full mb-[10px]  py-[20px]">
              <div className="ml-[6%] w-[95%]">
                <div>
                  <div className="mt-[10px] flex justify-between w-full">
                    <div className="w-[33%]">
                      <TextFromField 
                        id="branche-name-en"
                        label="Name En"
                        name="name_en"
                        value={values.name_en}
                        type="text"
                        placeholder="Enter branche name in english"
                        values={values}
                        setValues={setValues}
                        isEdit={true}
                      />
                    </div>
                    <div className="w-[33%]">
                      <TextFromField 
                        id="branche-name-ar"
                        label="Name Ar"
                        name="name_ar"
                        value={values.name_ar}
                        type="text"
                        placeholder="Enter branche name in arabic"
                        values={values}
                        setValues={setValues}
                        isEdit={true}
                      />
                    </div>
                    <div className="w-[33%]">
                      <TextFromField 
                        id="telephone"
                        label="Telephone"
                        name="telephone"
                        value={values.telephone}
                        type="tel"
                        placeholder="Enter telephone"
                        values={values}
                        setValues={setValues}
                        isEdit={true}
                      />
                    </div>
                    
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between w-full">
                    <div className="w-[33%]">
                      <TextFromField 
                        id="opening_time"
                        label="Opening time"
                        name="opening_time"
                        value={getLocalDateFormat(values.opening_time)}
                        type="datetime-local"
                        placeholder="Enter opening time"
                        values={values}
                        setValues={setValues}
                        isEdit={true}
                      />
                    </div>
                    <div className="w-[33%]">
                      <TextFromField 
                        id="closing_time"
                        label="Closing Time"
                        name="closing_time"
                        value={getLocalDateFormat(values.closing_time)}
                        type="datetime-local"
                        placeholder="Enter closing time"
                        values={values}
                        setValues={setValues}
                        isEdit={true}
                      />
                    </div>
                    <div className="w-[33%]">
                      <TextFromField 
                        id="whatsapp"
                        label="Whatsapp"
                        name="whatsapp"
                        value={values.whatsapp}
                        type="text"
                        placeholder="Enter whatsapp"
                        values={values}
                        setValues={setValues}
                        isEdit={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between w-full">
                    <div className="w-[33%]">
                      <TextFromField 
                        id="delivery_opening_time"
                        label="Delivery Opening Time"
                        name="delivery_opening_time"
                        value={getLocalDateFormat(values.delivery_opening_time)}
                        type="datetime-local"
                        placeholder="Enter delivery opening time"
                        values={values}
                        setValues={setValues}
                        isEdit={true}
                      />
                    </div>
                    <div className="w-[33%]">
                      <TextFromField 
                        id="delivery_closing_time"
                        label="Closing Opening Time"
                        name="delivery_closing_time"
                        value={getLocalDateFormat(values.delivery_closing_time)}
                        type="datetime-local"
                        placeholder="Enter closing opening time"
                        values={values}
                        setValues={setValues}
                        isEdit={true}
                      />
                    </div>
                    <div className="w-[33%]">
                      <TextFromField 
                        id="delivery_cost"
                        label="Delivery Cost"
                        name="delivery_cost"
                        value={values.delivery_cost.toString()}
                        type="number"
                        placeholder="Enter Delivery Cost"
                        values={values}
                        setValues={setValues}
                        isEdit={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex mt-2">
                    <span className="mr-1 pt-1 text-[14px] font-[400]">
                      Choose the Location on Map{" "}
                    </span>
                    <div className="h-[30px] ml-4 rounded w-[35px] leading- text-[14px] text-center text-[#fff] bg-[#0388CC] flex items-center justify-center cursor-pointer">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                    <div className="flex justify-center w-full">
                      <MapPicker defaultLocation={defaultLocation}
                        zoom={zoom}
                        mapTypeId="roadmap"
                        style={{height:'300px', width: '90%'}}
                        onChangeLocation={handleChangeLocation} 
                        onChangeZoom={handleChangeZoom}
                        apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'     
                      />
                    </div>
                  
                </div>
                <div className="mt-2">
                  <div className="flex justify-center w-full">
                    <div className="w-[25%]">
                      <TextFromField 
                        id="lat"
                        label="Latitute"
                        name="lat"
                        value={location.lat}
                        type="text"
                        isEdit={false}
                      />
                    </div>
                    <div className="w-[25%]">
                      <TextFromField 
                        id="lon"
                        label="Longitute"
                        name="lon"
                        value={location.lon}
                        type="text"
                        isEdit={false}
                      />
                    </div>
                    <div className="w-[20%]">
                      <TextFromField 
                        id="zoom"
                        label="Zoom"
                        name="zoom"
                        value={zoom}
                        type="text"
                        isEdit={false}
                      />
                    </div>
                    <div className="w-[20%] ml-5">
                      <button 
                        onClick={handleResetLocation}
                        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                      >
                        Reset Location
                      </button>
                    </div>
                  </div>
                </div> 
              </div>
              </div>
              </div>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end pr-3 rounded-b">
              <div className=" flex pb-[10px] ">
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-full cursor-pointer text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]"
                >
                  Cancel
                </button>
                <button type="submit" className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default NewBranch;
