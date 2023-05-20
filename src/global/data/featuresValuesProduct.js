

export function getFeaturesValuesProductData(features, setShowDeleteModal, setValueProductID) {
    const dataList = []
    features.forEach(feature => {
      feature.values?.forEach(value => {
        dataList.push(
          {
            feature: <div className="text-[14px] font-[700] text-[#000]">{feature.name_en}</div>,
            valueName: <div className="text-[14px] font-[700] text-[#000]">{value.name_en}</div>,
            value: <div className="text-[14px] font-[700] text-[#000]">{value.value}</div>,
            price: (
              <div className="text-[14px] font-[400] text-[#000]">
                {value.price}
              </div>
            ),
            actions: (
              <button 
                onClick={() => {
                  setShowDeleteModal(true);
                  setValueProductID(value.id);
                }}
                type="button" className="text-[#E3370A] hover:text-white border border-[#E3370A] hover:bg-[#E3370A] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                Delete
              </button>
            ),
          },
        )
      });
    });
    return dataList;
  }