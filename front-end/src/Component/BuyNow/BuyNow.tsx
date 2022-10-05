import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootStore } from '../../Redux/Store';
import auth from '../../firebase.config';
import { errorHandeler } from '../../Utilites/ErrorHandeler';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { dinamicTitle } from '../../Utilites/DainamicTitle';
import { GetSingleProduct } from '../../Redux/Action/Action/SingleProductAction';

const BuyNow = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const { Product } = useSelector((state: RootStore) => state.single);

	const [user, loading, error1] = useAuthState(auth);

	useEffect(() => {
		dispatch(GetSingleProduct(id));
	}, [dispatch, id]);

	if (loading) {
		return <Loading />;
	}
	if (error1) {
		errorHandeler(error1.message);
	}
	console.log(user);
	dinamicTitle(`Chackout For ${Product?.data.name}`);

	return (
		<section className="container-fluid mt-3 p-5">
			<div className="row">
				<div className="col-md-4 order-md-2 mb-4">
					<h4 className="d-flex justify-content-between align-items-center mb-3">
						<span className="text-muted">Your cart</span>
						<span className="badge badge-secondary badge-pill">3</span>
					</h4>
					<ul className="list-group mb-3">
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 className="my-0">Product name</h6>
								<small className="text-muted">Brief description</small>
							</div>
							<span className="text-muted">$12</span>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 className="my-0">Second product</h6>
								<small className="text-muted">Brief description</small>
							</div>
							<span className="text-muted">$8</span>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 className="my-0">Third item</h6>
								<small className="text-muted">Brief description</small>
							</div>
							<span className="text-muted">$5</span>
						</li>
						<li className="list-group-item d-flex justify-content-between bg-light">
							<div className="text-success">
								<h6 className="my-0">Promo code</h6>
								<small>EXAMPLECODE</small>
							</div>
							<span className="text-success">-$5</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Total (USD)</span>
							<strong>$20</strong>
						</li>
					</ul>

					<form className="card p-2">
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Promo code"
							/>
							<div className="input-group-append">
								<button type="submit" className="btn btn-secondary">
									Redeem
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="col-md-8 order-md-1">
					<h4 className="mb-3">Billing address</h4>
					<form className="needs-validation">
						<div className="row">
							<div className="col-md-12 mb-3">
								<label htmlFor="lastName">Last name</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									placeholder=""
									value=""
									required
									readOnly
									disabled
								/>
								<div className="invalid-feedback">
									Valid last name is required.
								</div>
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="username">Username</label>
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">@</span>
								</div>
								<input
									type="text"
									className="form-control"
									id="username"
									placeholder="Username"
									required
								/>
								<div className="invalid-feedback" style={{ width: '100%' }}>
									Your username is required.
								</div>
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="email">
								Email <span className="text-muted">(Optional)</span>
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="you@example.com"
							/>
							<div className="invalid-feedback">
								Please enter a valid email address for shipping updates.
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="address">Address</label>
							<input
								type="text"
								className="form-control"
								id="address"
								placeholder="1234 Main St"
								required
							/>
							<div className="invalid-feedback">
								Please enter your shipping address.
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="address2">
								Address 2 <span className="text-muted">(Optional)</span>
							</label>
							<input
								type="text"
								className="form-control"
								id="address2"
								placeholder="Apartment or suite"
							/>
						</div>

						<div className="row">
							<div className="col-md-5 mb-3">
								<label htmlFor="country">Country</label>
								<select
									className="custom-select d-block w-100"
									id="country"
									required
								>
									<option value="">Choose...</option>
									<option>United States</option>
								</select>
								<div className="invalid-feedback">
									Please select a valid country.
								</div>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="state">State</label>
								<select
									className="custom-select d-block w-100"
									id="state"
									required
								>
									<option value="">Choose...</option>
									<option>California</option>
								</select>
								<div className="invalid-feedback">
									Please provide a valid state.
								</div>
							</div>
							<div className="col-md-3 mb-3">
								<label htmlFor="zip">Zip</label>
								<input
									type="text"
									className="form-control"
									id="zip"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">Zip code required.</div>
							</div>
						</div>
						<hr className="mb-4" />
						<div className="custom-control custom-checkbox">
							<input
								type="checkbox"
								className="custom-control-input"
								id="same-address"
							/>
							<label
								className="custom-control-label ms-2"
								htmlFor="same-address"
							>
								Shipping address is the same as my billing address
							</label>
						</div>
						<div className="custom-control custom-checkbox">
							<input
								type="checkbox"
								className="custom-control-input"
								id="save-info"
							/>
							<label className="custom-control-label ms-2" htmlFor="save-info">
								Save this information for next time
							</label>
						</div>
						<hr className="mb-4" />

						<h4 className="mb-3">Payment</h4>

						<div className="d-block my-3">
							<div className="custom-control custom-radio">
								<input
									id="strip"
									name="paymentMethod"
									type="radio"
									className="custom-control-input active"
									required
								/>
								<label className="custom-control-label ms-2" htmlFor="paypal">
									Strip
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="cc-name">Name on card</label>
								<input
									type="text"
									className="form-control"
									id="cc-name"
									placeholder=""
									required
								/>
								<small className="text-muted">
									Full name as displayed on card
								</small>
								<div className="invalid-feedback">Name on card is required</div>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="cc-number">Credit card number</label>
								<input
									type="text"
									className="form-control"
									id="cc-number"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">
									Credit card number is required
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 mb-3">
								<label htmlFor="cc-expiration">Expiration</label>
								<input
									type="text"
									className="form-control"
									id="cc-expiration"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">Expiration date required</div>
							</div>
							<div className="col-md-3 mb-3">
								<label htmlFor="cc-expiration">CVV</label>
								<input
									type="text"
									className="form-control"
									id="cc-cvv"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">Security code required</div>
							</div>
						</div>
						<form className="mb-4">
							<button
								className="btn btn-primary btn-lg btn-block"
								type="submit"
							>
								Continue to checkout
							</button>
						</form>
					</form>
				</div>
			</div>
		</section>
	);
};

export default BuyNow;
