import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { errorHandeler } from '../../Utilites/ErrorHandeler';
// import Loading from '../Shared/Loading';
import { RootStore } from '../../Redux/Store';
import Popular from './Popular';
import { GetProduct } from '../../Redux/Action/Action/ProductAction';

const PopularProduct = () => {
	const dispatch = useDispatch();
	const { Product } = useSelector((state: RootStore) => state.products);

	useEffect(() => {
		dispatch(GetProduct());
	}, [dispatch]);
	console.log(Product?.data);
	return (
		<section className="container-fluid mt-3">
			<div>
				<h2>Popular Products</h2>
				<div className="row">
					{Product?.status === 'Successfully' ? (
						Product?.data?.map((product) => (
							<Popular key={product._id} product={product}></Popular>
						))
					) : (
						<div>
							<h2>No product Found</h2>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default PopularProduct;
