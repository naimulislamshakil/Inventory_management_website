import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';
import SocialMedia from '../SocialMedia/SocialMedia';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { errorHandeler } from '../../Utilites/ErrorHandeler';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';

const Register = () => {
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	// const [user, loading1, error1] = useAuthState(auth);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';
	console.log(email, password);

	const onsubmit = () => {
		if (password === rePassword) {
			createUserWithEmailAndPassword(email, password);
			toast('hi');
		}
	};

	// if (loading || loading1) {
	// 	return <Loading />;
	// }
	// if (error || error1) {
	// 	errorHandeler(error);
	// }
	console.log(user);
	if (user?.user) {
		navigate(from, { replace: true });
	}

	return <section className="container-fluid mt-3"></section>;
};

export default Register;
