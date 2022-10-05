import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popular from '../Component/Home/Popular';
import { GetAllProduct } from '../Redux/Action/Action/AllProductAction';
import { RootStore } from '../Redux/Store';
import { dinamicTitle } from '../Utilites/DainamicTitle';

const AllProduct = () => {
	dinamicTitle('All Product');
	const dispatch = useDispatch();
	const { Product } = useSelector((state: RootStore) => state.allProducts);
	console.log(Product);
	// const getPrice = 'price';

	useEffect(() => {
		dispatch(GetAllProduct());
	}, [dispatch]);

	return (
		<section className="container-fluid mt-3">
			<h2>All Product</h2>
			<div className="row">
				{Product?.status === 'Successfully' ? (
					Product.data.result.map((product) => (
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
