import { Product, PopularProductDetils } from '../Type';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	isLoading: false,
	error: null,
	products: {},
} as Product;

export const getProduct = createAsyncThunk(
	'product/getProduct',
	async (data, thunkApi) => {
		try {
			const res = await axios.get<PopularProductDetils>(
				'https://frozen-gorge-25425.herokuapp.com/api/v1/product/popular'
			);
			return res.data;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const ProductSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getProduct.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(
			getProduct.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.products = action.payload;
				state.error = null;
				state.isLoading = false;
			}
		);
		builder.addCase(
			getProduct.rejected,
			(state, action: PayloadAction<any>) => {
				state.error = action.payload;
				state.isLoading = false;
			}
		);
	},
});

export default ProductSlice.reducer;
