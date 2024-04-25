import { combineReducers } from 'redux';

import users from './user';
import orders from './order';
import orderItems from './orderItems';
import features from './feature';
import banners from './banner';
import branches from './branch';
import products from './product';
import categories from './category';
import categoriesProducts from './categoryProducts';
import mesures from './mesure';



export const reducers = combineReducers({ users, orders, orderItems, features, banners, branches, products, categories, categoriesProducts, mesures });