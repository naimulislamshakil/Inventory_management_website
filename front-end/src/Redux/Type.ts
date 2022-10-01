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

export interface Product {
	products?: PopularProductDetils;
	error: string | null;
	isLoading: boolean;
}

export interface SingleProduct {
	products?: SingleProductDetils;
	error: string | null;
	isLoading: boolean;
}

export interface TrandingProduct {
	isLoading: boolean;
	error: string | null;
	products?: PopularProductDetils;
}

export interface FilterProduct {
	isLoading: boolean;
	error: string | null;
	products?: ProductDetils;
}
