import { configureStore } from '@reduxjs/toolkit';
import FilterProductSlice from './Slice/Filter.slice';
import ProductSlice from './Slice/Product.Slice';
import SingleProductSlice from './Slice/SingleProduct.slice';
import TrandingSlice from './Slice/TrandingProduct.slice';

export const Store = configureStore({
	reducer: {
		products: ProductSlice,
		singleProsucts: SingleProductSlice,
		trandings: TrandingSlice,
		filters: FilterProductSlice,
	},
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
