import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';

const Login = () => {
	return (
		<section className="container-fluid mt-3">
			<form className="w-50 mx-auto card p-4">
				{/* <!-- Email input --> */}
				<div className="form-outline mb-4 mt-4">
					<input type="email" id="form2Example1" className="form-control" />
					<label className="form-label" htmlFor="form2Example1">
						Email address
					</label>
				</div>

				{/* <!-- Password input --> */}
				<div className="form-outline mb-4">
					<input type="password" id="form2Example2" className="form-control" />
					<label className="form-label" htmlFor="form2Example2">
						Password
					</label>
				</div>

				{/* <!-- 2 column grid layout for inline styling --> */}
				<div className="row mb-4">
					<div className="col d-flex justify-content-center">
						{/* <!-- Checkbox --> */}
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="form2Example31"
								checked
							/>
							<label className="form-check-label" htmlFor="form2Example31">
								{' '}
								Remember me{' '}
							</label>
						</div>
					</div>

					<div className="col">
						{/* <!-- Simple link --> */}
						<a href="#!">Forgot password?</a>
					</div>
				</div>

				{/* <!-- Submit button --> */}
				<button type="button" className="btn btn-primary btn-block mb-4">
					Sign in
				</button>

				{/* <!-- Register buttons --> */}
				<SocialMedia />
			</form>
		</section>
	);
};

export default Login;
