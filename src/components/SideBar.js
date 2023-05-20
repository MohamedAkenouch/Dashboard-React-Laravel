import React from "react";
import styles from "../styles/sidebar.module.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-20 bg-white rounded-xl flex flex-col h-full shadow-[0px_0px_16px_rgb(210,215,211)]">
      <div className="pt-12">
        <img className="m-auto w-[85%] drop-shadow-xl" src="" />
      </div>
      <div className='grow mt-[35px] '>
      <ul className="list-none h-full flex flex-col justify-between  text-[12px] text-[#707070]  ">
        <Link to="/">
          <div
            className={`z-50 py-[15px] text-center  w-full hover:cursor-pointer hover:rounded-xl hover:bg-[#f7f7f7] ${styles.sideBtn}`}
          >
            <li>
              <div>
                <img
                  className="w-[16px] m-auto "
                  src="/images/sidebar/home.svg"
                />
              </div>
              <div>
                Home{" "}
              </div>
            </li>
          </div>
        </Link>

        <Link to="/orders?tab=1">
          <div
            className={`z-50 py-[15px] text-center w-full hover:cursor-pointer hover:rounded-xl hover:bg-[#f7f7f7] ${styles.sideBtn}`}
          >
            <li>
              <div>
                <img
                  className="w-[16px] m-auto"
                  src="/images/sidebar/orders.svg"
                />
              </div>
              <div>
                Orders{" "}
                <div class={`${styles.popup} ${styles.arrowTop}`}>
                  <div class={`${styles.popupWrapper}`}>
                  <div className="py-4 pl-4"><Link to='/orders?tab=1'>
                      <h3 className="text-[13px] text-start font-[500]">
                        View Orders
                      </h3>
                      <p className="text-[8px] text-[#6A707E] text-start leading-3">
                        View process, and print invoices slips for orders places from your website
                      </p></Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </Link>

        <Link to="/categories">
          <div
            className={`z-50 py-[15px] text-center w-full hover:cursor-pointer hover:rounded-xl hover:bg-[#f7f7f7] ${styles.sideBtn}`}
          >
            <li>
              <div>
                <img
                  className="w-[16px] m-auto"
                  src="/images/sidebar/products.svg"
                />
              </div>
              <div>
                Products{" "}
                <div class={`${styles.popup} ${styles.arrowTop}`}>
                  <div class={`divide-y ${styles.popupWrapper}`}>
                    <div className="py-4 pl-4"><Link to='/categories'>
                      <h3 className="text-[13px] text-start font-[500]">
                        View Categories
                      </h3>
                      <p className="text-[8px] text-[#6A707E] text-start leading-3">
                        View products categories which are used to group products in ypur store
                      </p></Link>
                    </div>
                    <div className="py-4 pl-4"><Link to='/products'>
                      <h3 className="text-[13px] text-start font-[500]">
                        View Products
                      </h3>
                      <p className="text-[8px] text-[#6A707E] text-start leading-3">
                        View add, and edit products that are shown to the visitoes of your website
                      </p></Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </Link>

        <Link to="/pages?tab=1">
          <div
            className={`z-50 py-[15px] text-center w-full hover:cursor-pointer hover:rounded-xl hover:bg-[#f7f7f7] ${styles.sideBtn}`}
          >
            <li>
              <div>
                <img
                  className="w-[16px] m-auto"
                  src="/images/sidebar/pages.svg"
                />
              </div>
              <div>
                Pages{" "}
                <div class={`${styles.popup} ${styles.arrowTop}`}>
                  <div
                    class={`text-[13px] text-start font-[500] divide-y ${styles.popupWrapper}`}
                    >
                    <p className="py-4 pl-4"><Link to="/pages?tab=1">Banners</Link></p>
                    <p className="py-4 pl-4"><Link to="/pages?tab=2">Branches</Link></p>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </Link>

        <Link to="/users?tab=1">
          <div
            className={`z-50 py-[15px] text-center w-full hover:cursor-pointer hover:rounded-xl hover:bg-[#f7f7f7] ${styles.sideBtn}`}
            >
            <li>
              <div>
                <img
                  className="w-[16px] m-auto"
                  src="/images/sidebar/users.svg"
                />
              </div>
              <div>
                Users{" "}
                <div class={`${styles.popup} ${styles.arrowTop}`}>
                  <div
                    class={`text-[13px] text-start font-[500] divide-y ${styles.popupWrapper}`}
                  >
                    <p className="py-4 pl-4"><Link to="/users?tab=1">Administrators</Link></p>
                    <p className="py-4 pl-4"><Link to="/users?tab=2">Customers</Link></p>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </Link>

        <Link to="/features">
          <div
            className={`z-50 py-[15px] text-center w-full hover:cursor-pointer hover:rounded-xl hover:bg-[#f7f7f7] ${styles.sideBtn}`}
          >
            <li>
              <div>
                <img
                  className="w-[16px] m-auto"
                  src="/images/sidebar/news.svg"
                />
              </div>
              <div>
                Features{" "}
                <div class={`${styles.popup} ${styles.arrowTop}`}>
                  <div
                    class={`text-[13px] text-start font-[500] divide-y ${styles.popupWrapper}`}
                  >
                    <div className="py-4 pl-4"><Link to='/features'>
                      <h3 className="text-[13px] text-start font-[500]">
                        View Features
                      </h3>
                      <p className="text-[8px] text-[#6A707E] text-start leading-3">
                        View add, and edit Features that are shown to the visitoes of your website
                      </p></Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </Link>
      </ul>
      </div>  

    </div>
  );
}

export default SideBar;
