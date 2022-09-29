import React from 'react';
import { dinamicTitle } from '../../Utilites/DainamicTitle';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import Category from './Category';

const Home = () => {
	dinamicTitle('(Home Page)');
	return (
		<section>
			<Banner />
			<Category />
			<Banner2 />
		</section>
	);
};

export default Home;
