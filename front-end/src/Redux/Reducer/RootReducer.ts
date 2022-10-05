import { combineReducers } from 'redux';
import productReducer from './Reducer/ProductReducer';
import SingleProductReducer from './Reducer/SingleProductReducer';
import trandingProductReducer from './Reducer/TrandingReducer';

const RootReducer = combineReducers({
	products: productReducer,
	trandings: trandingProductReducer,
	single: SingleProductReducer,
});

export default RootReducer;
