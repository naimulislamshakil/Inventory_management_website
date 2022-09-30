import React from 'react';
import '../../sass/Subscribe/Subscribe.css';

const Subscribe = () => {
	return (
		<section className="container-fluid mt-3">
			<div className="row p-4">
				<div className="col subscribe d-flex flex-column justify-content-center">
					<div>
						<h1>Stay home & get your daily</h1>
						<h1>needs from our shop</h1>
						<p>Start You'r Daily Shopping with KanaKata</p>
						<div className="input-group mb-3 input me-auto mt-4">
							<input
								type="text"
								className="form-control rounded-3 d-flex flex-row"
								placeholder="Enter email"
								aria-label="Recipient's username"
								aria-describedby="button-addon2"
							/>
							<button
								className="btn rounded-3 btn-outline-success ms-3"
								type="button"
								id="button-addon2"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
