export const PRODUCT_FAIL = 'PRODUCT_FAIL';
export const PRODUCT_LOADING = 'PRODUCT_LOADING';
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';

export type PopularProductDetils = {
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

export interface PerProduct {
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

export interface ProductLoading {
	type: typeof PRODUCT_LOADING;
}
export interface ProductFail {
	type: typeof PRODUCT_FAIL;
}
export interface ProductSuccess {
	type: typeof PRODUCT_SUCCESS;
	payload: PopularProductDetils;
}

export type ProductDispatchType = ProductLoading | ProductFail | ProductSuccess;
