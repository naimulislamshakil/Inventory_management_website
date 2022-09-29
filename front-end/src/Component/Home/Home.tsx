import React from 'react';
import { dinamicTitle } from '../../Utilites/DainamicTitle';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import Category from './Category';
import PopularProduct from './PopularProduct';

const Home = () => {
	dinamicTitle('(Home Page)');
	return (
		<section>
			<Banner />
			<Category />
			<Banner2 />
			<PopularProduct />
		</section>
	);
};

export default Home;
