import React from 'react'
import {HomePage, BannersPage, BranchesPage, WhoWeArePage, PrivacyPolicy, Careers} from './PagesTabs'
import {AdminUsers, Customers} from './UsersTabs'
import {Activities, News} from './NewsTabs'
import {Offers, Coupons} from './OffersTabs'
import {JobApplications, JobsManagement} from './CareersTabs'
import {Preferences, GeneralSettings, ShipmentFee} from './SettingsTabs'
import {SubSubCategories, SubCategories, EditCategory, ProductsByCategory} from './CategoryDetailsTabs'
import {EditCooksCategory, CooksByCategory} from './CooksCategoryDetailsTabs'
import {StockInventory, Features, EditProduct, Settings} from './ProductDetailsTabs'
import { EditFeature, FeatureValues } from './FeatureDetailsTabs'
import styles from "../styles/tabs.module.css"

function Tab({title, value, handleCheck, labelId, selectedTab, content, users, category_id,categories,CategoriesProducts, products, category}) {
  const tabs = {
    HomePage: (<HomePage/>),
    BannersPage: (<BannersPage/>),
    BranchesPage: (<BranchesPage/>),
    WhoWeArePage: (<WhoWeArePage/>),
    PrivacyPolicy: (<PrivacyPolicy/>),
    Careers: (<Careers/>),
    AdminUsers: (<AdminUsers/>),
    Customers: (<Customers users={users}/>),
    Activities: (<Activities/>),
    News: (<News/>),
    Offers: (<Offers/>),
    Coupons: (<Coupons/>),
    JobsManagement: (<JobsManagement/>),
    JobApplications: (<JobApplications/>),
    Preferences: (<Preferences/>),
    GeneralSettings: (<GeneralSettings/>),
    ShipmentFee: (<ShipmentFee/>),
    ProductsByCategory: (<ProductsByCategory category_id = {category_id} products={products}/>),
    SubCategories: (<SubCategories category_id = {category_id} categories = {categories} CategoriesProducts = {CategoriesProducts}/>),
    // SubSubCategories: (<SubSubCategories/>),
    EditCategory: (<EditCategory category_id = {category_id} category= {category} categories={categories}/>),
    EditCooksCategory: (<EditCooksCategory/>),
    CooksByCategory: ( <CooksByCategory/>),
    Settings: ( <Settings/>),
    Features: ( <Features/>),
    StockInventory: ( <StockInventory/>),
    EditProduct: ( <EditProduct/>),
    EditFeature: ( <EditFeature/> ),
    FeatureValues: ( <FeatureValues/> ),
  };

  return (
    <div key={selectedTab} className={`${styles.tab}`}>
      <input
        onChange={(e) => {
          handleCheck(e)
        }}
        value={value}
        type="radio"
        name="css-tabs"
        id={value}
        defaultChecked={selectedTab === value}
        className={`${styles.tabSwicth}`}
      />
      <label htmlFor={value} id={labelId}  className={`${styles.tabLabel} ${styles[labelId]}`}>
        <span className={`${styles.tabSpan} font-[400] text-[14px]`} >
          {title}
        </span>
      </label>
      <div className={`${styles.tabContent} scrollbar-thin scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full`} >
        <div >
          {tabs[content]}
        </div>
      </div>
    </div>
  )
}

export default Tab