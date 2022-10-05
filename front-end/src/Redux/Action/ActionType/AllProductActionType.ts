export const ALL_PRODUCT_FAIL = 'ALL_PRODUCT_FAIL';
export const ALL_PRODUCT_LOADING = 'ALL_PRODUCT_LOADING';
export const ALL_PRODUCT_SUCCESS = 'ALL_PRODUCT_SUCCESS';

export type ProductDetils = {
	status: string;
	data: {
		pageCount: number;
		result: [
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
};

export interface AllProductLoading {
	type: typeof ALL_PRODUCT_LOADING;
}
export interface AllProductFail {
	type: typeof ALL_PRODUCT_FAIL;
}
export interface AllProductSuccess {
	type: typeof ALL_PRODUCT_SUCCESS;
	payload: ProductDetils;
}

export type AllProductDispatchType =
	| AllProductLoading
	| AllProductFail
	| AllProductSuccess;
