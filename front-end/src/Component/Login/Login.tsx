import React, { useState } from 'react';
import auth from '../../firebase.config';
import { dinamicTitle } from '../../Utilites/DainamicTitle';
import SocialMedia from '../SocialMedia/SocialMedia';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { errorHandeler } from '../../Utilites/ErrorHandeler';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';

	dinamicTitle('Login Page');
	const onSubmit = () => {
		signInWithEmailAndPassword(email, password);
	};

	if (loading) {
		return <Loading />;
	}
	if (error) {
		errorHandeler(error);
	}
	if (user?.user) {
		navigate(from, { replace: true });
	}
	return (
		<section className="container-fluid mt-3">
			<div className="w-50 mx-auto card p-4">
				<h2 className="text-uppercase text-center mb-5">Log In</h2>
				{/* <!-- Email input --> */}
				<div className="form-outline mb-4 mt-4">
					<input
						type="email"
						id="form2Example1"
						className="form-control"
						onBlur={(e) => setEmail(e.target.value)}
						required
					/>
					<label className="form-label" htmlFor="form2Example1">
						Email address
					</label>
				</div>
				{/* <!-- Password input --> */}
				<div className="form-outline mb-4">
					<input
						type="password"
						id="form2Example2"
						className="form-control"
						onBlur={(e) => setPassword(e.target.value)}
						required
					/>
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
				<button
					onClick={onSubmit}
					type="button"
					className="btn w-50 mx-auto fw-bold text-body"
					style={{
						background: 'rgb(138, 230, 211)',
					}}
				>
					Login
				</button>

				<p className="text-center text-muted mt-5 mb-3">
					Have have not any account?{' '}
					<Link to="/register" className="fw-bold text-body">
						<u>Register here</u>
					</Link>
				</p>

				{/* <!-- Register buttons --> */}
				<SocialMedia />
			</div>
		</section>
	);
};

export default Login;
