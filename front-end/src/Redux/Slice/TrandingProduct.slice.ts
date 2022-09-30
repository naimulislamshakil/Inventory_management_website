import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PopularProductDetils, TrandingProduct } from '../Type';

const initialState = {
	isLoading: false,
	error: null,
	products: {},
} as TrandingProduct;

export const getTranding = createAsyncThunk(
	'product/getTrandingProduct',
	async (data, thunkApi) => {
		try {
			const res = await axios.get<PopularProductDetils>(
				'http://localhost:5000/api/v1/tranding'
			);
			return res.data;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const TrandingSlice = createSlice({
	name: 'tranding',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getTranding.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(
			getTranding.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.products = action.payload;
				state.error = null;
				state.isLoading = false;
			}
		);
		builder.addCase(
			getTranding.rejected,
			(state, action: PayloadAction<any>) => {
				state.error = action.payload;
				state.isLoading = false;
			}
		);
	},
});

export default TrandingSlice.reducer;
