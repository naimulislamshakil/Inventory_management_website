import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './Slice/Product.Slice';
import SingleProductSlice from './Slice/SingleProduct.slice';

export const Store = configureStore({
	reducer: {
		products: ProductSlice,
		singleProsucts: SingleProductSlice,
	},
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
