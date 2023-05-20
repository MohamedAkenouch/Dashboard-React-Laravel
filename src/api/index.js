import axios from 'axios';



const url = 'http://localhost:8000/api';
const url_orders = url + '/order';
const url_users = url + '/user';
const url_features = url + '/features';
const url_feature_value = url + '/features-values';
const url_banners = url + '/banners';
const url_branches = url + '/branches';
const url_categories = url + '/categories';
const url_products = url + '/products';

export const getBranches = () => axios.get(url_branches);
export const addBranch= (data) => axios.post(url_branches, data);
export const updateBranch = (id, data) => axios.post(`${url_branches}/update/${id}`, data);
export const deleteBranch = (id) => axios.delete(`${url_branches}/delete/${id}`);

export const getBanners = () => axios.get(url_banners);
export const addBanner = (data) => axios.post(url_banners, data);
export const updateBanner = (id, data) => axios.post(`${url_banners}/update/${id}`, data);
export const deleteBanner = (id) => axios.delete(`${url_banners}/delete/${id}`);

export const getOrders = () => axios.get(url_orders);
export const updateOrder = (id, data) => axios.post(`${url_orders}/update/${id}`, data);
export const getOrderItems = (id) => axios.get(`${url_orders}/ordredItem/${id}`);
export const getAllOrderItems = () => axios.get(`${url_orders}/ordredItems/all`);


export const getUser = (id) => axios.get(`${url_users}/fetch/${id}`);
export const getUsers = () => axios.get(`${url_users}/get/all`);
export const deleteUser = (phone) => axios.delete(`${url_users}/${phone}`);

export const getFeatures = () => axios.get(url_features);
export const addFeature = (data) => axios.post(url_features, data);
export const updateFeature = (id, data) => axios.post(`${url_features}/update/${id}`, data);
export const deleteFeature = (id) => axios.delete(`${url_features}/delete/${id}`);

export const getFeatureValues = () => axios.get(url_feature_value);
export const addFeatureValue = (idFeature, data) => axios.post(`${url_feature_value}/${idFeature}`, data);
export const updateFeatureValue = (idFeature, idFeatureValue, data) => axios.post(`${url_feature_value}/${idFeature}/update/${idFeatureValue}`, data);
export const deleteFeatureValue = (id) => axios.delete(`${url_feature_value}/delete/${id}`);

export const getCategories = () => axios.get(url_categories);
export const updateCategory = (id, category) => axios.post(`${url_categories}/update/${id}`, category);
export const addCategory = (category) => axios.post(`${url_categories}/add`, category);
export const getCategoryProducts = () => axios.get(`${url}/CategoryProduct`);
export const deleteCategory = (id) => axios.delete(`${url_categories}/delete/${id}`);

export const getProducts = () => axios.get(url_products);
export const updateProduct = (id, product) => axios.post(`${url}/product/update/${id}`, product);
export const addProduct = (product) => axios.post(`${url}/product/store`, product);

export const addImage = (image) => axios.post(`${url}/image/store`, image);
export const deleteImage = (id) => axios.delete(`${url}/image/delete/${id}`);


export const getMesures = () => axios.get(`${url}/mesures`);