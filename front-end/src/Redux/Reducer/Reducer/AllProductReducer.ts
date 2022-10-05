import {
	AllProductDispatchType,
	ALL_PRODUCT_FAIL,
	ALL_PRODUCT_LOADING,
	ALL_PRODUCT_SUCCESS,
	ProductDetils,
} from '../../Action/ActionType/AllProductActionType';

interface DefaultState {
	loading: boolean;
	Product?: ProductDetils;
}

const initialState: DefaultState = {
	loading: false,
};

const allProductReducer = (
	state: DefaultState = initialState,
	action: AllProductDispatchType
): DefaultState => {
	switch (action.type) {
		case ALL_PRODUCT_FAIL:
			return {
				loading: true,
			};

		case ALL_PRODUCT_LOADING:
			return {
				loading: false,
			};
		case ALL_PRODUCT_SUCCESS:
			return {
				loading: false,
				Product: action.payload,
			};
		default:
			return state;
	}
};

export default allProductReducer;
