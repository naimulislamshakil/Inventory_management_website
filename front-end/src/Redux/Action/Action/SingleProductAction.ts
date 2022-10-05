import {
	SingleProductDispatchType,
	SINGLE_PRODUCT_FAIL,
	SINGLE_PRODUCT_LOADING,
	SINGLE_PRODUCT_SUCCESS,
} from '../ActionType/SingleProductActionType';
import axios from 'axios';
import { Dispatch } from 'redux';

export const GetSingleProduct =
	(id: string | undefined) =>
	async (dispatch: Dispatch<SingleProductDispatchType>) => {
		try {
			dispatch({
				type: SINGLE_PRODUCT_LOADING,
			});

			const res = await axios.get(`http://localhost:5000/api/v1/product/${id}`);

			dispatch({
				type: SINGLE_PRODUCT_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: SINGLE_PRODUCT_FAIL,
			});
		}
	};
