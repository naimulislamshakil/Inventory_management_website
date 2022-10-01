import React, { useEffect } from 'react';
import Popular from '../Component/Home/Popular';
import Loading from '../Component/Shared/Loading';
import { useAppDispatch, useAppSelector } from '../Redux/Hooks';
import { getAllProduct } from '../Redux/Slice/Filter.slice';
import { errorHandeler } from '../Utilites/ErrorHandeler';

const AllProduct = () => {
	const dispatch = useAppDispatch();
	const { products, error, isLoading } = useAppSelector(
		(state) => state.filters
	);

	// const getPrice = 'price';

	useEffect(() => {
		dispatch(getAllProduct());
	}, [dispatch]);

	if (error) {
		errorHandeler(error);
	}

	if (isLoading) {
		return <Loading />;
	}
	console.log(products);

	return (
		<section className="container-fluid mt-3">
			<h2>All Product</h2>
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
		</section>
	);
};

export default AllProduct;
