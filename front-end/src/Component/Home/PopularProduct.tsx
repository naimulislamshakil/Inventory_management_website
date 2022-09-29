import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks';
import { getProduct } from '../../Redux/Slice/Product.Slice';
import Loading from '../Shared/Loading';

const PopularProduct = () => {
	const dispatch = useAppDispatch();
	const { products, error, isLoading } = useAppSelector(
		(state) => state.products
	);
	useEffect(() => {
		dispatch(getProduct());
	}, [dispatch]);
	if (isLoading) {
		return <Loading />;
	}
	return (
		<section className="container-fluid mt-3">
			<div>
				<h2>Popular Products</h2>
			</div>
		</section>
	);
};

export default PopularProduct;
