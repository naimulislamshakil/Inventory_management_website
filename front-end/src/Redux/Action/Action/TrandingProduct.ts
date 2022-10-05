import axios from 'axios';
import { Dispatch } from 'redux';
import {
	TrandingProductDispatchType,
	TRANDING_PRODUCT_FAIL,
	TRANDING_PRODUCT_LOADING,
	TRANDING_PRODUCT_SUCCESS,
} from '../ActionType/TrandingProductActionType';

export const GetTrandingProduct =
	() => async (dispatch: Dispatch<TrandingProductDispatchType>) => {
		try {
			dispatch({
				type: TRANDING_PRODUCT_LOADING,
			});

			const res = await axios.get('http://localhost:5000/api/v1/tranding');

			dispatch({
				type: TRANDING_PRODUCT_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: TRANDING_PRODUCT_FAIL,
			});
		}
	};
