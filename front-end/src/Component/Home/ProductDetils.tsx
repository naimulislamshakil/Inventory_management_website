import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { GetSingleProduct } from '../../Redux/Action/Action/SingleProductAction';
import { RootStore } from '../../Redux/Store';
import { dinamicTitle } from '../../Utilites/DainamicTitle';

const ProductDetils = () => {
	const { id } = useParams();
	const navigator = useNavigate();
	const dispatch = useDispatch();
	const { Product } = useSelector((state: RootStore) => state.single);

	useEffect(() => {
		dispatch(GetSingleProduct(id));
	}, [id, dispatch]);

	console.log(Product);

	const buyNow = (id: any) => {
		navigator(`/payment/${id}`);
	};

	dinamicTitle(`${Product?.data.name}`);

	return (
		<section className="container-fluid mt-3">
			<div className="row">
				<div className="col-md-4 col-12 ">
					<img className="w-100" src={Product?.data.imageUrls} alt="" />
				</div>
				<div className="col-md-8 col-12 bg-white p-5">
					<h1>{Product?.data?.name}</h1>
					<p>Category: {Product?.data?.category}</p>
					<div className="d-flex justify-content-between">
						{Product?.data?.status === 'In-Stock' ? (
							<h6 className="text-warning">{Product?.data?.status}</h6>
						) : (
							<h6 className="text-danger">{Product?.data?.status}</h6>
						)}
						<p>Price: ${Product?.data?.price}</p>
						<p>1 {Product?.data?.unit}</p>
					</div>
					<p>
						<span className="fw-bolder ">Product Description:</span>{' '}
						{Product?.data?.description}
					</p>
					<div className="d-lg-flex d-block  justify-content-between">
						<button
							className="btn btn-outline-danger btn-lg "
							onClick={() => buyNow(Product?.data?._id)}
						>
							Buy Now
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								className="bi bi-bag ms-3"
								viewBox="0 0 16 16"
							>
								<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
							</svg>
						</button>
						<button className="btn btn-outline-warning btn-lg mt-2">
							Add To Cart
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								className="bi bi-cart3 ms-3"
								viewBox="0 0 16 16"
							>
								<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
							</svg>
						</button>
						<button className="btn btn-outline-info btn-lg mt-2">
							Add Wishlist
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								className="bi bi-heart ms-3"
								viewBox="0 0 16 16"
							>
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetils;
