import { SingleProduct, PerProduct } from '../Type';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	isLoading: false,
	error: null,
	products: {},
} as SingleProduct;

export const getSingleProduct = createAsyncThunk(
	'product/getSingleProduct',
	async ({ id }: any) => {
		try {
			const res = await axios.get<PerProduct>(
				`http://localhost:5000/api/v1/product/${id}`
			);
			return res.data;
		} catch (error: any) {
			console.log(error.message);
		}
	}
);

export const SingleProductSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getSingleProduct.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(
			getSingleProduct.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.products = action.payload;
				state.error = null;
				state.isLoading = false;
			}
		);
		builder.addCase(
			getSingleProduct.rejected,
			(state, action: PayloadAction<any>) => {
				state.error = action.payload;
				state.isLoading = false;
			}
		);
	},
});

export default SingleProductSlice.reducer;
