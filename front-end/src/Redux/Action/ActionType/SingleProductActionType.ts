export const SINGLE_PRODUCT_FAIL = 'SINGLE_PRODUCT_FAIL';
export const SINGLE_PRODUCT_LOADING = 'SINGLE_PRODUCT_LOADING';
export const SINGLE_PRODUCT_SUCCESS = 'SINGLE_PRODUCT_SUCCESS';

export type SingleProductDetils = {
	status: string;
	data: {
		name: string;
		description: string;
		unit: string;
		imageUrls: string;
		category: string;
		price: number;
		brand: string;
		_id: string;
		viewCount: number;
		status: string;
	};
};

export interface SingelProductLoading {
	type: typeof SINGLE_PRODUCT_LOADING;
}
export interface SingelProductFail {
	type: typeof SINGLE_PRODUCT_FAIL;
}

export interface SingelProductSuccess {
	type: typeof SINGLE_PRODUCT_SUCCESS;
	payload: SingleProductDetils;
}

export type SingleProductDispatchType =
	| SingelProductLoading
	| SingelProductFail
	| SingelProductSuccess;
