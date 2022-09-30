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

export interface Product {
	products?: PopularProductDetils;
	error: string | null;
	isLoading: boolean;
}

export interface SingleProduct {
	products?: PerProduct;
	error: string | null;
	isLoading: boolean;
}
