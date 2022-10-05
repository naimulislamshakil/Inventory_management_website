export const TRANDING_PRODUCT_FAIL = 'TRANDING_PRODUCT_FAIL';
export const TRANDING_PRODUCT_LOADING = 'TRANDING_PRODUCT_LOADING';
export const TRANDING_PRODUCT_SUCCESS = 'TRANDING_PRODUCT_SUCCESS';

export type TrandingPopularProductDetils = {
	status: string;
	data: [
		{
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
		}
	];
};

export interface TrandingProductLoading {
	type: typeof TRANDING_PRODUCT_LOADING;
}
export interface TrandingProductFail {
	type: typeof TRANDING_PRODUCT_FAIL;
}
export interface TrandingProductSuccess {
	type: typeof TRANDING_PRODUCT_SUCCESS;
	payload: TrandingPopularProductDetils;
}

export type TrandingProductDispatchType =
	| TrandingProductLoading
	| TrandingProductFail
	| TrandingProductSuccess;
