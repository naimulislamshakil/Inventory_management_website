import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import SecondNavbar from './Component/Navbar/SecondNavbar';
import './sass/App/App.css';

function App() {
	return (
		<div className="bg">
			<Navbar />
			<SecondNavbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default App;
