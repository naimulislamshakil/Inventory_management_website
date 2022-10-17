import axios from 'axios';
import { Dispatch } from 'redux';
import {
	AllProductDispatchType,
	ALL_PRODUCT_FAIL,
	ALL_PRODUCT_LOADING,
	ALL_PRODUCT_SUCCESS,
} from '../ActionType/AllProductActionType';

export const GetAllProduct =
	() => async (dispatch: Dispatch<AllProductDispatchType>) => {
		try {
			dispatch({
				type: ALL_PRODUCT_LOADING,
			});

			const res = await axios.get(
				'https://frozen-gorge-25425.herokuapp.com/api/v1/product'
			);

			dispatch({
				type: ALL_PRODUCT_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: ALL_PRODUCT_FAIL,
			});
		}
	};
