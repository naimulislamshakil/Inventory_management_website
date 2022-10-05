import {
	SingleProductDetils,
	SingleProductDispatchType,
	SINGLE_PRODUCT_FAIL,
	SINGLE_PRODUCT_LOADING,
	SINGLE_PRODUCT_SUCCESS,
} from '../../Action/ActionType/SingleProductActionType';

interface DefaultState {
	loading: boolean;
	Product?: SingleProductDetils;
}

const initialState: DefaultState = {
	loading: false,
};

export const SingleProductReducer = (
	state: DefaultState = initialState,
	action: SingleProductDispatchType
): DefaultState => {
	switch (action.type) {
		case SINGLE_PRODUCT_LOADING:
			return {
				loading: true,
			};

		case SINGLE_PRODUCT_FAIL:
			return {
				loading: false,
			};
		case SINGLE_PRODUCT_SUCCESS:
			return {
				loading: false,
				Product: action.payload,
			};
		default:
			return state;
	}
};

export default SingleProductReducer;
