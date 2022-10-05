import {
	TrandingPopularProductDetils,
	TrandingProductDispatchType,
	TRANDING_PRODUCT_FAIL,
	TRANDING_PRODUCT_LOADING,
	TRANDING_PRODUCT_SUCCESS,
} from '../../Action/ActionType/TrandingProductActionType';

interface DefaultState {
	loading: boolean;
	Product?: TrandingPopularProductDetils;
}

const initialState: DefaultState = {
	loading: false,
};

const trandingProductReducer = (
	state: DefaultState = initialState,
	action: TrandingProductDispatchType
): DefaultState => {
	switch (action.type) {
		case TRANDING_PRODUCT_LOADING:
			return {
				loading: true,
			};

		case TRANDING_PRODUCT_FAIL:
			return {
				loading: false,
			};
		case TRANDING_PRODUCT_SUCCESS:
			return {
				loading: false,
				Product: action.payload,
			};
		default:
			return state;
	}
};

export default trandingProductReducer;
