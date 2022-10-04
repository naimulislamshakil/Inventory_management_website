import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { errorHandeler } from '../../Utilites/ErrorHandeler';
// import Loading from '../Shared/Loading';
import { RootStore } from '../../Redux/Store';
import Popular from './Popular';
import { GetProduct } from '../../Redux/Action/ProductAction';

const PopularProduct = () => {
	const dispatch = useDispatch();
	const Products = useSelector((state: RootStore) => state.products);

	useEffect(() => {
		dispatch(GetProduct());
	}, [dispatch]);

	return (
		<section className="container-fluid mt-3">
			<div>
				<h2>Popular Products</h2>
				<div className="row">
					{Products.Product?.data?.map((product) => (
						<Popular key={product._id} product={product}></Popular>
					))}
				</div>
			</div>
		</section>
	);
};

export default PopularProduct;
