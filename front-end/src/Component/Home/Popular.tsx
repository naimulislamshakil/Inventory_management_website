import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PerProduct } from '../../Redux/Action/ProductActionType';

interface Porps {
	product: PerProduct;
}

const Popular = ({ product }: Porps) => {
	const { imageUrls, name, description, price, status, _id, unit, category } =
		product;
	const navigate = useNavigate();

	const productDatils = (id: string) => {
		navigate(`/${id}`);
	};

	return (
		<div
			className="card border-primary mb-3 col-lg-3 col-12 mx-auto"
			style={{ maxWidth: '20rem' }}
		>
			<img className="card-img-top img-fluid" src={imageUrls} alt="" />

			<div className="card-body">
				<div className="d-flex justify-content-between">
					{status === 'In-Stock' ? (
						<h6 className="text-warning">{status}</h6>
					) : (
						<h6 className="text-danger">{status}</h6>
					)}
					<p>Price: ${price}</p>
					<p>1 {unit}</p>
				</div>

				<h5 className="card-title">{name}</h5>
				<p>Category: {category}</p>
				<p className="card-text">{description.slice(0, 250)}</p>
			</div>
			<div className="card-footer mx-auto">
				<button className="btn btn-danger" onClick={() => productDatils(_id)}>
					View Details
				</button>
			</div>
		</div>
	);
};

export default Popular;
