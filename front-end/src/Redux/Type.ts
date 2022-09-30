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

export interface Product {
	products?: ProductDetils | null;
	error: string | null;
	isLoading: boolean;
}

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
