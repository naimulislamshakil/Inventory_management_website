import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="container-fluid bg-white">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-lg bg-light">
						<div className="container-fluid">
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarTogglerDemo01"
								aria-controls="navbarTogglerDemo01"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarTogglerDemo01"
							>
								<Link className="navbar-brand fw-bold fs-3" to="/">
									<span className="text-danger">Kana</span>
									<span className="text-warning">Kata</span>
								</Link>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<Link
											className="nav-link active"
											aria-current="page"
											to="/"
										>
											Home
										</Link>
									</li>
									<li className="nav-item dropdown">
										<Link
											className="nav-link text-black dropdown-toggle"
											to="/"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Category
										</Link>
										<ul className="dropdown-menu">
											<li>
												<Link className="dropdown-item" to="/">
													Action
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" to="/">
													Another action
												</Link>
											</li>

											<li>
												<Link className="dropdown-item" to="/">
													Something else here
												</Link>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link active"
											aria-current="page"
											to="/"
										>
											About Us
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link active"
											aria-current="page"
											to="/"
										>
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link active"
											aria-current="page"
											to="/"
										>
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link active"
											aria-current="page"
											to="/"
										>
											Home
										</Link>
									</li>
								</ul>
								<form className="d-flex" role="search">
									<input
										className="form-control me-2"
										type="search"
										placeholder="Search"
										aria-label="Search"
									/>
									<button className="btn btn-outline-success" type="submit">
										Search
									</button>
								</form>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
