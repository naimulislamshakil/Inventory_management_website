import React, { FormEvent, useState } from 'react';
import auth from '../../firebase.config';
import { dinamicTitle } from '../../Utilites/DainamicTitle';
import SocialMedia from '../SocialMedia/SocialMedia';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';

	dinamicTitle('Login Page');
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if (userCredential.user) {
					navigate(from, { replace: true });
				}
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	return (
		<section className="container-fluid mt-3">
			<form onSubmit={onSubmit} className="w-75 mx-auto card p-5">
				<h2 className="text-center">Log In</h2>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						onBlur={(e) => setEmail(e.target.value)}
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
						onBlur={(e) => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div className="mb-3 d-lg-flex justify-content-lg-center d-block">
					<h6>You Are Not A User!</h6>
					<Link to="/register" className="nav-link">
						<h6 className="ms-2 text-decoration-underline text-primary">
							Please Register.
						</h6>
					</Link>
				</div>
				<input
					type="submit"
					value="Login"
					className="btn w-lg-25 w-100 fw-bold mx-auto"
					style={{ backgroundColor: 'turquoise', color: 'white' }}
				/>
				<div className="mt-3">
					<SocialMedia />
				</div>
			</form>
		</section>
	);
};

export default Login;
