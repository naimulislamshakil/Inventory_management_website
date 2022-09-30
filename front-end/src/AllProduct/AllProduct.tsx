import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = () => {
	const navbar = (
		<>
			<h5 className="text-dark">Category</h5>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Rice
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Dal
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Oil
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Salt & Sugar
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Tea & Coffee
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Local Brackfast
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Honey
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Energy Booster
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Jams & Jellies
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Chocolates
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Handwash & Handrub
				</label>
			</div>
			<h5 className="text-dark mt-3">Price</h5>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					High To Low
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className="form-check-label text-dark"
					htmlFor="flexCheckDefault"
				>
					Low To High
				</label>
			</div>
		</>
	);
	return (
		<section className="container-fluid mt-3">
			<div>
				<div className="row flex-nowrap p-3">
					<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white">
						<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
							<ul
								className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start justify-content-center"
								id="menu"
							>
								{navbar}
							</ul>
						</div>
					</div>
					<div className="col py-3 content-bg">
						<h1>All Product</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AllProduct;
