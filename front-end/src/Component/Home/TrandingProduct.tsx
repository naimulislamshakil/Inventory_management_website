import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks';
import { getTrandingProduct } from '../../Redux/Slice/TrandingProduct.slice';
import Popular from './Popular';

const TrandingProduct = () => {
	const dispatch = useAppDispatch();
	const { products, error, isLoading } = useAppSelector(
		(state) => state.trandings
	);

	useEffect(() => {
		dispatch(getTrandingProduct());
	}, [dispatch]);
	console.log(products);
	return (
		<section className="container-fluid">
			<h2>Tranding Products</h2>
			<div className="row">
				{products?.status === 'Successfully' ? (
					products?.data?.map((product) => (
						<Popular key={product._id} product={product}></Popular>
					))
				) : (
					<div>
						<h1>No Product Now For Sell.</h1>
					</div>
				)}
			</div>
		</section>
	);
};

export default TrandingProduct;
