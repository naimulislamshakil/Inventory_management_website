import React from 'react';
import '../../sass/Policy/Policy.css';
import best from '../../img/Policy/best-price.png';
import delivary from '../../img/Policy/free-shipping.png';
import deal from '../../img/Policy/documents.png';
import assortment from '../../img/Policy/assortment.png';
import returns from '../../img/Policy/exchange.png';

const Policy = () => {
	return (
		<section className="container-fluid mt-3 p-3">
			<div className="row d-flex justify-content-center">
				<div
					className="card col-md-12 me-2 mx-md-auto col-lg-2 mt-2"
					style={{ maxWidth: '15rem' }}
				>
					<div className="row d-flex align-items-center">
						<div className="col-7">
							<div className="mt-2 policyCard">
								<h5>Best prices &</h5>
								<h5>offers</h5>
								<p>Orders $50 or more</p>
							</div>
						</div>
						<div className="col-5">
							<img className="img-fluid" src={best} alt="" />
						</div>
					</div>
				</div>
				<div
					className="card col-md-12 me-2 mx-md-auto col-lg-2 mt-2"
					style={{ maxWidth: '15rem' }}
				>
					<div className="row d-flex align-items-center">
						<div className="col-7">
							<div className="mt-2 policyCard">
								<h5>Free delivery</h5>
								<p>24/7 amazing services</p>
							</div>
						</div>
						<div className="col-5">
							<img className="img-fluid" src={delivary} alt="" />
						</div>
					</div>
				</div>
				<div
					className="card col-md-12 me-2 mx-md-auto col-lg-2 mt-2"
					style={{ maxWidth: '15rem' }}
				>
					<div className="row d-flex align-items-center">
						<div className="col-7">
							<div className="mt-2 policyCard">
								<h5>Great daily deal</h5>

								<p>When you sign up</p>
							</div>
						</div>
						<div className="col-5">
							<img className="img-fluid" src={deal} alt="" />
						</div>
					</div>
				</div>
				<div
					className="card col-md-12 me-2 mx-md-auto col-lg-2 mt-2"
					style={{ maxWidth: '15rem' }}
				>
					<div className="row d-flex align-items-center">
						<div className="col-7">
							<div className="mt-2 policyCard">
								<h5>Wide</h5>
								<h5>assortment</h5>
								<p>Mega Discounts</p>
							</div>
						</div>
						<div className="col-5">
							<img className="img-fluid" src={assortment} alt="" />
						</div>
					</div>
				</div>
				<div
					className="card col-md-12 mx-md-auto col-lg-2 mt-2"
					style={{ maxWidth: '15rem' }}
				>
					<div className="row d-flex align-items-center">
						<div className="col-7">
							<div className="mt-2 policyCard">
								<h5>Easy returns</h5>
								<p>Within 30 days</p>
							</div>
						</div>
						<div className="col-5">
							<img className="img-fluid" src={returns} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Policy;
