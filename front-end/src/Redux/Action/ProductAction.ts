import axios from 'axios';
import { Dispatch } from 'redux';
import {
	ProductDispatchType,
	PRODUCT_FAIL,
	PRODUCT_LOADING,
	PRODUCT_SUCCESS,
} from './ProductActionType';

export const GetProduct =
	() => async (dispatch: Dispatch<ProductDispatchType>) => {
		try {
			dispatch({
				type: PRODUCT_LOADING,
			});

			const res = await axios.get(
				'http://localhost:5000/api/v1/product/popular'
			);

			dispatch({
				type: PRODUCT_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_FAIL,
			});
		}
	};
export const GetTrandingProduct =
	() => async (dispatch: Dispatch<ProductDispatchType>) => {
		try {
			dispatch({
				type: PRODUCT_LOADING,
			});

			const res = await axios.get('http://localhost:5000/api/v1/tranding');

			dispatch({
				type: PRODUCT_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_FAIL,
			});
		}
	};
