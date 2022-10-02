import React from 'react';
import { dinamicTitle } from '../../Utilites/DainamicTitle';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import Category from './Category';
import Policy from './Policy';
import PopularProduct from './PopularProduct';
import Subscribe from './Subscribe';
import TrandingProduct from './TrandingProduct';

const Home = () => {
	dinamicTitle('(Home Page)');

	return (
		<section>
			<Banner />
			<Category />
			<Banner2 />
			<PopularProduct />
			<TrandingProduct />
			<Subscribe />
			<Policy />
		</section>
	);
};

export default Home;
