import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './Slice/Product.Slice';

export const Store = configureStore({
	reducer: {
		products: ProductSlice,
	},
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
