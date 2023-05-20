

export function getBannersData(banners, setShowModal, setIsAddValue, setBannerID, values, setValues, setShowDeleteModal) {
  const dataList = []
  banners.forEach(banner => {
    dataList.push(
      {
        id: <div className="text-[14px] font-[700] text-[#000]">{banner.id}</div>,
        image: (
          <img className="" src={banner.image} height="50%" width={"80%"} /> 
        ),
        text: <div className="text-[14px] font-[700] text-[#000]">{banner.text}</div>,
        category_id: <div className="text-[14px] font-[700] text-[#000]">{banner.category_id}</div>,
        edit: (
          <button onClick={() => {
              setShowModal(true); 
              setIsAddValue(false);
              setBannerID(banner.id);
              setValues({...values, category_id: banner.category_id, text: banner.text, image: banner.image})
            }} type="button" className="text-[#0388cc] hover:text-white border border-[#0388cc] hover:bg-[#0388cc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
            Edit
          </button> 
        ),
        actions: (
          <button 
            onClick={() => {
              setBannerID(banner.id);
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