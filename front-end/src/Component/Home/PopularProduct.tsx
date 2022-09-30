import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks';
import { getProduct } from '../../Redux/Slice/Product.Slice';
import { errorHandeler } from '../../Utilites/ErrorHandeler';
import Loading from '../Shared/Loading';
import Popular from './Popular';

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
	if (error) {
		errorHandeler(error);
	}
	console.log(products);
	return (
		<section className="container-fluid mt-3">
			<div>
				<h2>Popular Products</h2>
				<div className="row">
					{products?.status === 'Successfully' ? (
						products.data.result.map((product) => (
							<Popular key={product._id} product={product}></Popular>
						))
					) : (
						<div>
							<h1>No Product Now For Sell.</h1>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default PopularProduct;
