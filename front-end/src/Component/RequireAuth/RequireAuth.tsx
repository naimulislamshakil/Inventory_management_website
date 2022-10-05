import { useState } from 'react';
import {
	useAuthState,
	useSendEmailVerification,
	useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.config';

import Loading from '../Shared/Loading';

interface Props {
	children: any;
}

const RequireAuth = ({ children }: Props) => {
	const [displayName, setName] = useState('');

	const [user, loading, error] = useAuthState(auth);
	const [updateProfile, updating, error1] = useUpdateProfile(auth);
	const [sendEmailVerification] = useSendEmailVerification(auth);
	const location = useLocation();

	if (loading || updating) {
		return <Loading />;
	}

	if (error || error1) {
		toast(error?.message);
	}

	const update = async () => {
		if (displayName === '') {
			toast('Enter Your Full Name.');
		} else {
			await updateProfile({ displayName });
			await sendEmailVerification();
			toast('Send Email');
		}
	};

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}
	console.log(user);

	if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
		return (
			<div className="flex items-center justify-center min-h-screen p-5 bg-blue-100 min-w-screen">
				<div className="w-75 mx-auto p-5 text-center text-light bg-white shadow-lg rounded-4">
					<h3 className="h3 text-success">
						Thanks for signing up for KanaKata.com
					</h3>
					<h3>Please Update Your Profile!</h3>

					<div className="mb-3">
						<label
							htmlFor="exampleInputEmail1"
							className="form-label text-dark"
						>
							Full Name
						</label>
						<input
							onBlur={(e) => setName(e.target.value)}
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							required
						/>
					</div>

					<p>We're happy you're here. Let's get your email address verified:</p>
					<div className="mt-4">
						<button
							className="px-2 py-2 text-blue-200 bg-blue-600 rounded"
							onClick={update}
						>
							Click to Verify Email
						</button>
					</div>
				</div>
			</div>
		);
	}

	return children;
};

export default RequireAuth;
