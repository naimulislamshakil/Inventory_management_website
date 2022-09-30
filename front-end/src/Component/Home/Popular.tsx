import React from 'react';
import { PerProduct } from '../../Redux/Type';

interface Porps {
	product: PerProduct;
}

const Popular = ({ product }: Porps) => {
	const { imageUrls } = product;

	return (
		<div
			className="card border-primary mb-3 col-lg-3 col-12 mx-auto"
			style={{ maxWidth: '18rem' }}
		>
			<img className="card-img-top img-fluid" src={imageUrls[0]} alt="" />

			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</p>
			</div>
			<div className="card-footer mx-auto">
				<button className="btn btn-danger">View Details</button>
			</div>
		</div>
	);
};

export default Popular;
