import React from 'react';
import banner1 from '../../img/Banner/slider--h4-1.webp';
import banner2 from '../../img/Banner/slider--h4-2.webp';

const Banner = () => {
	return (
		<section className="container-fluid mt-1">
			<div className="row">
				<div className="col">
					<div
						id="carouselExampleCaptions"
						className="carousel slide"
						data-bs-ride="false"
					>
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselExampleCaptions"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleCaptions"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src={banner1} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5 className="text-dark">Fresh Vegetables, Big discount</h5>
									<p className="text-dark">Tell your story</p>
									<div className="input-group mb-3 w-50 mx-auto mt-4">
										<input
											type="text"
											className="form-control rounded-3"
											placeholder="Enter email"
											aria-label="Recipient's username"
											aria-describedby="button-addon2"
										/>
										<button
											className="btn rounded-3 btn-outline-success border-rad ms-3"
											type="button"
											id="button-addon2"
										>
											Subscribe
										</button>
									</div>
								</div>
							</div>

							<div className="carousel-item">
								<img src={banner2} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5 className="text-dark">Fresh Vegetables </h5>
									<p className="text-dark">
										Some representative placeholder content for the third slide.
									</p>
									<div className="input-group mb-3 w-50 mx-auto mt-4">
										<input
											type="text"
											className="form-control rounded-3"
											placeholder="Enter email"
											aria-label="Recipient's username"
											aria-describedby="button-addon2"
										/>
										<button
											className="btn rounded-3 btn-outline-success  border-rad ms-3"
											type="button"
											id="button-addon2"
										>
											Subscribe
										</button>
									</div>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
