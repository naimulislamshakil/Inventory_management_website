import { toast } from 'react-toastify';

export const errorHandeler = (error: any) => {
	toast.error(error);
};
