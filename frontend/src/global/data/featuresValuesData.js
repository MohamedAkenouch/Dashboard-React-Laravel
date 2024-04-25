

export function getFeaturesValuesData(featuresValues, setShowModal, setIsToAdd, values, setValues, setFeatureValueID, setShowDeleteModal) {
  const dataList = []
  featuresValues.forEach(featureValue => {
    dataList.push(
      {
        id: <div className="text-[14px] font-[700] text-[#000]">{featureValue.id}</div>,
        value: <div className="text-[14px] font-[700] text-[#000]">{featureValue.value}</div>,
        name: <div className="text-[14px] font-[700] text-[#000]">{featureValue.name}</div>,
        price: (
          <div className="text-[14px] font-[400] text-[#000]">
            {featureValue.price}
          </div>
        ),
        feature: (
          <div className="text-[14px] font-[400] text-[#000]">
            {featureValue.feature}
          </div>
        ),
        edit: (
          <button onClick={() => {
              setShowModal(true); 
              setIsToAdd(false);
              setFeatureValueID(featureValue.id);
              setValues({...values, price: featureValue.price, value: featureValue.value, name_ar: featureValue.name_ar, name_en: featureValue.name_en})
            }} type="button" className="text-[#1baaea] hover:text-white border border-[#1baaea] hover:bg-[#1baaea] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
            Edit
          </button> 
        ),
        actions: (
          <button 
            onClick={() => {
              setFeatureValueID(featureValue.id);
              setShowDeleteModal(true);
            }}
            type="button" className="text-[#E3370A] hover:text-white border border-[#E3370A] hover:bg-[#E3370A] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            Delete
          </button>
        ),
      },
    )
  });
  return dataList;
}