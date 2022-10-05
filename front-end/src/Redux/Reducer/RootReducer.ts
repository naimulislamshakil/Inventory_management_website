import { combineReducers } from 'redux';
import allProductReducer from './Reducer/AllProductReducer';
import productReducer from './Reducer/ProductReducer';
import SingleProductReducer from './Reducer/SingleProductReducer';
import trandingProductReducer from './Reducer/TrandingReducer';

const RootReducer = combineReducers({
	products: productReducer,
	trandings: trandingProductReducer,
	single: SingleProductReducer,
	allProducts: allProductReducer,
});

export default RootReducer;
