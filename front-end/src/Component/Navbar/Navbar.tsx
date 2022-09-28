import React from 'react';

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
								<a className="navbar-brand fw-bold fs-3" href="#">
									<span className="text-danger">Kana</span>
									<span className="text-warning">Kata</span>
								</a>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<a className="nav-link active" aria-current="page" href="#">
											Home
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Link
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link disabled">Disabled</a>
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
