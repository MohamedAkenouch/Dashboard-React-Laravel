import './App.css';
import React, { useState, useEffect } from "react";
import { Navigate, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Orders from "./pages/Orders"
import Products from "./pages/Products"
import Categories from "./pages/Categories"
import Pages from "./pages/Pages"
import Users from "./pages/Users"
import News from "./pages/News"
import Kitchen from "./pages/Kitchen"
import Messages from "./pages/Messages"
import Careers from "./pages/Careers"
import Offers from "./pages/Offers"
import Settings from "./pages/Settings"
import CategoryDetails from "./pages/CategoryDetails"
import Features from "./pages/Features"
import CooksCategories from "./pages/CooksCategories"
import CooksCategoryDetails from "./pages/CooksCategoryDetails"
import Cooks from "./pages/Cooks"
import CookEdit from "./pages/CookEdit"
import ProductDetails from "./pages/ProductDetails"
import CustomerDetails from "./pages/CustomerDetails"
import ActivityEdit from "./pages/ActivityEdit"
import NewsEdit from "./pages/NewsEdit"
import JobApplicationInfo from "./pages/JobApplicationInfo"
import JobPositionEdit from "./pages/JobPositionEdit"
import EmailManagement from "./pages/EmailManagement"
import OrderDetails from "./pages/OrderDetails"
import CouponDetails from "./pages/CouponDetails"
import OfferDetails from "./pages/OfferDetails"

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getOrders } from './actions/order';
import { getOrderItems } from './actions/orderitems';
import { getUsers } from './actions/user';
import { getActiveOrders } from './constants/const';
import FeatureDetails from './pages/FeatureDetails';




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getOrders());
    dispatch(getOrderItems());
  }, [dispatch]);

  const orders = useSelector((state) => state.orders);
  const users = useSelector((state) => state.users);
  const allOrdersItems = useSelector((state) => state.orderItems);

  const activeOrders = getActiveOrders(orders, users);

  return (
    <BrowserRouter>      
      <div>
        <Routes>
        <Route path="/" element={<Home orders={activeOrders} users={users} />} />
        <Route path="/orders" element={<Orders orders={activeOrders} users={users}/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/users" element={<Users users={users}/>} />
        <Route path="/news" element={<News />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/:id" element={<FeatureDetails />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/category-details/:id" element={<CategoryDetails />} />
        <Route path="/cooks-categories" element={<CooksCategories />} />
        <Route path="/cooks-category-details" element={<CooksCategoryDetails />} />
        <Route path="/cooks" element={<Cooks />} />
        <Route path="/cook-edit" element={<CookEdit />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/customer" element={<CustomerDetails />} />
        <Route path="/activity-edit" element={<ActivityEdit />} />
        <Route path="/news-edit" element={<NewsEdit />} />
        <Route path="/job-application-info" element={<JobApplicationInfo />} />
        <Route path="/job-position-edit" element={<JobPositionEdit />} />
        <Route path="/emails" element={<EmailManagement />} />
        <Route path="/order-details/:id" element={<OrderDetails allOrdersItems={allOrdersItems} orders={activeOrders} users={users}/>} />
        <Route path="/coupon-details" element={<CouponDetails />} />
        <Route path="/offer-details" element={<OfferDetails />} />
        </Routes>
 
      </div>
    </BrowserRouter>
  );
}

export default App;
