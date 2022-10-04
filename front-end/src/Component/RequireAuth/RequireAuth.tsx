import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.config';

import Loading from '../Shared/Loading';

interface Props {
	children: any;
}

const RequireAuth = ({ children }: Props) => {
	const [user, loading, error] = useAuthState(auth);
	const location = useLocation();

	if (loading) {
		return <Loading />;
	}

	if (error) {
		toast(error?.message);
	}

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}

	return children;
};

export default RequireAuth;
