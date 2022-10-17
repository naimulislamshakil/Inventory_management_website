import axios from 'axios';
import { Dispatch } from 'redux';
import {
	ProductDispatchType,
	PRODUCT_FAIL,
	PRODUCT_LOADING,
	PRODUCT_SUCCESS,
} from '../ActionType/ProductActionType';

export const GetProduct =
	() => async (dispatch: Dispatch<ProductDispatchType>) => {
		try {
			dispatch({
				type: PRODUCT_LOADING,
			});

			const res = await axios.get(
				'https://frozen-gorge-25425.herokuapp.com/api/v1/product/popular'
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
