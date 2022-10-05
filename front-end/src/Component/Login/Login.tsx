import React, { FormEvent, useState } from 'react';
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
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
			<form className="w-75 mx-auto card p-5">
				<h2 className="text-center">Log In</h2>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div className="mb-3 d-flex justify-content-center">
					<h6>You Are Not A User!</h6>
					<Link to="/register" className="nav-link">
						<h6 className="ms-2 text-decoration-underline text-primary">
							Please LogIn
						</h6>
					</Link>
				</div>
				<input
					type="submit"
					value="Login"
					className="btn w-25 fw-bold mx-auto"
					style={{ backgroundColor: 'turquoise', color: 'white' }}
				/>
			</form>
		</section>
	);
};

export default Login;
