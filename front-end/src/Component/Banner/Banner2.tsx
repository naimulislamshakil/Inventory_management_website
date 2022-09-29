import React from 'react';
import '../../sass/BackBanner/BackBanner.css';

const Banner2 = () => {
	return (
		<section className="container-fluid">
			<div className="row">
				<div className="col-4">
					<div className="card banner1 d-flex justify-content-center">
						<h5>Everyday Fresh &</h5>
						<h5>Clean with Our</h5>
						<h5>Products</h5>
						<button className="btn btn-outline-success">
							Shop Now
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-right-circle ms-2"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="col-4">
					<div className="card banner2 d-flex justify-content-center">
						<h5>Make your Breakfast</h5>
						<h5>Healthy and Easy</h5>
						<button className="btn btn-outline-success">
							Shop Now
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-right-circle ms-2"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="col-4">
					<div className="card banner3 d-flex justify-content-center">
						<h5>The best Organic</h5>
						<h5>Products Online</h5>
						<button className="btn btn-outline-success">
							Shop Now
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-right-circle ms-2"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner2;
