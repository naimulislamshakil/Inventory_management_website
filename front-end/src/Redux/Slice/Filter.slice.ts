import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { FilterProduct, ProductDetils } from '../Type';

const initialState = {
	isLoading: false,
	error: null,
	products: {},
} as FilterProduct;

export const getAllProduct = createAsyncThunk(
	'product/getAllProduct',
	async () => {
		try {
			const res = await axios.get<ProductDetils>(
				`https://frozen-gorge-25425.herokuapp.com/api/v1/product`
			);
			return res.data;
		} catch (error: any) {
			console.log(error);
		}
	}
);

export const FilterProductSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getAllProduct.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(
			getAllProduct.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.products = action.payload;
				state.error = null;
				state.isLoading = false;
			}
		);
		builder.addCase(
			getAllProduct.rejected,
			(state, action: PayloadAction<any>) => {
				state.error = action.payload;
				state.isLoading = false;
			}
		);
	},
});

export default FilterProductSlice.reducer;
