import { PopularProductDetils, Product } from '../Type';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	isLoading: false,
	error: null,
	products: {},
} as Product;

export const getTrandingProduct = createAsyncThunk(
	'product/getSingleProduct',
	async () => {
		try {
			const res = await axios.get<PopularProductDetils>(
				'http://localhost:5000/api/v1/tranding'
			);
			return res.data;
		} catch (error: any) {
			console.log(error.message);
		}
	}
);

export const TrandingProductSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getTrandingProduct.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(
			getTrandingProduct.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.products = action.payload;
				state.error = null;
				state.isLoading = false;
			}
		);
		builder.addCase(
			getTrandingProduct.rejected,
			(state, action: PayloadAction<any>) => {
				state.error = action.payload;
				state.isLoading = false;
			}
		);
	},
});

export default TrandingProductSlice.reducer;
