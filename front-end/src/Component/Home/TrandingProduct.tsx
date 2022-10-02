import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks';
import { getTranding } from '../../Redux/Slice/TrandingProduct.slice';
import { errorHandeler } from '../../Utilites/ErrorHandeler';
import Loading from '../Shared/Loading';
import Popular from './Popular';

const TrandingProduct = () => {
	const dispatch = useAppDispatch();
	const { error, isLoading, products } = useAppSelector(
		(state) => state.trandings
	);

	useEffect(() => {
		dispatch(getTranding());
	}, [dispatch]);

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		errorHandeler(error);
	}
	return (
		<section className="container-fluid">
			<h2>Tranding Products</h2>
			<div className="row">
				{products?.status === 'Successfully' ? (
					products?.data.map((product) => (
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
