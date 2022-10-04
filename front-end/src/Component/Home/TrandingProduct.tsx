import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetTrandingProduct } from '../../Redux/Action/ProductAction';
import { RootStore } from '../../Redux/Store';
import Popular from './Popular';

const TrandingProduct = () => {
	const dispatch = useDispatch();
	const Trandings = useSelector((state: RootStore) => state.products);

	useEffect(() => {
		dispatch(GetTrandingProduct());
	}, [dispatch]);

	console.log(Trandings);
	return (
		<section className="container-fluid">
			<h2>Tranding Products</h2>
			<div className="row">
				{Trandings.Product?.data?.map((product) => (
					<Popular key={product._id} product={product}></Popular>
				))}
			</div>
		</section>
	);
};

export default TrandingProduct;
