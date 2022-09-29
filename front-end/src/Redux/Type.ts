export type ProductDetils = {
	status: string;
	data: {
		pageCount: number;
		result: [
			{
				name: string;
				description: string;
				unit: string;
				imageUrls: string[];
				category: string;
				brand: string;
				_id: string;
			}
		];
	};
};

export interface Product {
	products?: ProductDetils | null;
	error: string | null;
	isLoading: boolean;
}
