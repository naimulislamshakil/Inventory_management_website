import '../../sass/Swiper/Swiper.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';
import Rice from '../../img/Category/rice.webp';
import Dal from '../../img/Category/dal.webp';
import Salt from '../../img/Category/salt-sugar.webp';
import Oil from '../../img/Category/oil.webp';
import Tea from '../../img/Category/tea-coffee.webp';
import Local from '../../img/Category/local-breakfast.webp';
import Honey from '../../img/Category/honey.webp';
import Booster from '../../img/Category/energy-boosters.webp';
import Jams from '../../img/Category/jams-jellies.webp';
import Chocolates from '../../img/Category/chocolates.webp';
import Handwash from '../../img/Category/handwash.webp';

const Category = () => {
	return (
		<section className=" container-fluid mt-3">
			<div>
				<h2>Featured Categories</h2>
				<Swiper
					navigation={true}
					slidesPerView={5}
					pagination={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="card h-25 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Rice} alt="" />
							<h6 className="mb-5">Rice</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-25 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Dal} alt="" />
							<h6 className="mb-5">Dal</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-25 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Salt} alt="" />
							<h6 className="mb-5">Salt & Sugar</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-25 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Oil} alt="" />
							<h6 className="mb-5">Oil</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-25 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Tea} alt="" />
							<h6 className="mb-5">Tea & Coffee</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-25 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Local} alt="" />
							<h6 className="mb-5">Local Breakfast</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-25 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Honey} alt="" />
							<h6 className="mb-5">Honey</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-25 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Booster} alt="" />
							<h6 className="mb-5">Energy Booster</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-25 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Jams} alt="" />
							<h6 className="mb-5">Jams & Jellies</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-50 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Chocolates} alt="" />
							<h6 className="mb-5">Chocolates</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card h-50 mb-2 d-flex flex-column justify-content-center align-items-center">
							<img className="w-50" src={Handwash} alt="" />
							<h6 className="mb-5">Handwash & Handrub</h6>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Category;
