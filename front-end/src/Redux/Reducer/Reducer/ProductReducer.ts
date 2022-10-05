import {
	PopularProductDetils,
	ProductDispatchType,
	PRODUCT_LOADING,
	PRODUCT_FAIL,
	PRODUCT_SUCCESS,
} from '../../Action/ActionType/ProductActionType';

interface DefaultState {
	loading: boolean;
	Product?: PopularProductDetils;
}

const initialState: DefaultState = {
	loading: false,
};

const productReducer = (
	state: DefaultState = initialState,
	action: ProductDispatchType
): DefaultState => {
	switch (action.type) {
		case PRODUCT_LOADING:
			return {
				loading: true,
			};

		case PRODUCT_FAIL:
			return {
				loading: false,
			};
		case PRODUCT_SUCCESS:
			return {
				loading: false,
				Product: action.payload,
			};
		default:
			return state;
	}
};

export default productReducer;
