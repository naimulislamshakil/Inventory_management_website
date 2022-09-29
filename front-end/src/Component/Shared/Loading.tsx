import React from 'react';

const Loading = () => {
	return (
		<section className="container-fluid">
			<div className="spinner-grow" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</section>
	);
};

export default Loading;
