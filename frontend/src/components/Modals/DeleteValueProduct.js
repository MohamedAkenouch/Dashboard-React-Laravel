import React from "react";
import { updateProduct } from '../../actions/product'
import { sweetModal } from "../../constants/sweetModals";

function DeleteValueProduct({ setShowDeleteModal, valueProductID, product, setIsUpdate, dispatch}) {


    const update = () => {
        let data = {};
        data.category_id = parseInt(product.categories[0].id);
        data.name_ar = product.name_ar;
        data.name_en = product.name_en;
        data.description = product.description;
        data.price = Number(product.price);

        let feature_values = [];
        if(product.features && product.features.length > 0) {
        product.features.forEach(feature => {
            feature.values.forEach(value => {
                if(value.id != valueProductID) {
                    feature_values.push({
                        feature_id: Number(feature.id),
                        value_ids: [
                        Number(value.id)
                        ]
                    });
                } 
            });
        });
        }

        data.feature_values = feature_values;
        dispatch(updateProduct(product.id, data));
        setIsUpdate(true);
        setShowDeleteModal(false);
        sweetModal("success", "Product Value Deleted seccussfully", true, 1350);

    }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[45%]">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between h-[50px]  rounded-t">
              <div className="text-[18px] w-[20%] text-center m-auto  font-semibold">
                Delete Value
              </div>
              <div className="w-[80%] rounded-bl-xl rounded-tr-xl bg-[#E9F6FD] h-full"></div>
            </div>
            {/* {body} */}
            <div className="relative p-6 w-full ">
              <div className="w-[90%] ml-16 pt-2 text-[14px] font-[500]">
                Are you sure you want to delete this product value ?
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-3 rounded-b">
              <div className=" flex pb-[10px] ">
                <div
                  onClick={() => setShowDeleteModal(false)}
                  className="rounded-full cursor-pointer text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]"
                >
                  Cancel
                </div>
                <div
                    onClick={() => update()}
                    className="rounded-full cursor-pointer text-[13px] px-6 py-1 text-[#fff] bg-[#EF3100]">
                  Delete
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

export default DeleteValueProduct;
