import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetTrandingProduct } from '../../Redux/Action/Action/TrandingProduct';

import { RootStore } from '../../Redux/Store';
import Popular from './Popular';

const TrandingProduct = () => {
	const dispatch = useDispatch();
	const { Product } = useSelector((state: RootStore) => state.trandings);

	useEffect(() => {
		dispatch(GetTrandingProduct());
	}, [dispatch]);

	console.log(Product?.data);
	return (
		<section className="container-fluid">
			<h2>Tranding Products</h2>
			<div className="row">
				{Product?.status === 'Successfully' ? (
					Product?.data?.map((product) => (
						<Popular key={product._id} product={product}></Popular>
					))
				) : (
					<div>
						<h2>No product found.</h2>
					</div>
				)}
			</div>
		</section>
	);
};

export default TrandingProduct;
