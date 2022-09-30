import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import SecondNavbar from './Component/Navbar/SecondNavbar';
import './sass/App/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProduct from './AllProduct/AllProduct';
import ProductDetils from './Component/Home/ProductDetils';

function App() {
	return (
		<div className="bg">
			<Navbar />
			<SecondNavbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/all_product" element={<AllProduct />}></Route>
				<Route path="/:id" element={<ProductDetils />}></Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
