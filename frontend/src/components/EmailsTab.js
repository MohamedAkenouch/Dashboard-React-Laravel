import React from "react";
import {
  HomePage,
  ProductsPage,
  ContactUsPage,
  WhoWeArePage,
  PrivacyPolicy,
  Careers,
} from "./PagesTabs";
import { AdminUsers, Customers } from "./UsersTabs";
import { Activities, News } from "./NewsTabs";
import { Offers, Coupons } from "./OffersTabs";
import { JobApplications, JobsManagement } from "./CareersTabs";
import { Preferences, GeneralSettings, ShipmentFee } from "./SettingsTabs";
import {
  SubSubCategories,
  SubCategories,
  EditCategory,
  ProductsByCategory,
} from "./CategoryDetailsTabs";
import { EditCooksCategory, CooksByCategory } from "./CooksCategoryDetailsTabs";
import {
  StockInventory,
  Features,
  EditProduct,
  Settings,
} from "./ProductDetailsTabs";
import styles from "../styles/tabs.module.css";

function Tab({ title, value, handleCheck, labelId, selectedTab, content }) {
  const tabs = {};

  return (
    <div key={selectedTab} className={`${styles.tab} flex`}>
      <div>

      <input
        onChange={(e) => {
          handleCheck(e);
        }}
        value={value}
        type="radio"
        name="email-tabs"
        id={value}
        defaultChecked={selectedTab === value}
        className={`${styles.tabSwicth}`}
      />
      <label
        htmlFor={value}
        id={labelId}
        className={`${styles.tabLabel} ${styles[labelId]}`}
      >
        <span className={`${styles.tabSpan} font-[400] text-[14px]`}>
          {title}
        </span>
      </label>
      </div>
      <div
        className={`${styles.tabContent} `}
      >
        <span>"tabs[content]"</span>
      </div>
    </div>
  );
}

export default Tab;
