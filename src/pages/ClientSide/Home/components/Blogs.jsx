import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import teacher1 from "../../../../assets/images/teacher1.jpg";
import teacher2 from "../../../../assets/images/teacher2.jpg";
import teacher3 from "../../../../assets/images/teacher3.jpg";
import teacher4 from "../../../../assets/images/teacher4.jpg";



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Blogs = () => {

    return (
        <>
            <p className='text-pink-700 font-bold text-4xl text-center py-5'>Blogs</p>

            <Swiper
                slidesPerView={1}
                spaceBetween={100}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className="card bg-base-100  shadow-2xl border border-pink-800">
                        <figure className="px-10 pt-10">
                            <img src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*" alt="Shoes" className="rounded-xl h-44" />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="card-title">Summer 2024 Fashion Trends: What to Wear This Season</p>
                            <p>Dive into the hottest trends of Summer 2024 with our comprehensive guide. From bold prints to sustainable fashion,...
                            </p>
                            <div className="card-actions">
                                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">View Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card bg-base-100  shadow-2xl border border-pink-800">
                        <figure className="px-10 pt-10">
                            <img src="https://media.vogue.co.uk/photos/5d54494ddf3584000807c201/16:9/w_4880,h_2745,c_limit/original" alt="Shoes" className="rounded-xl h-44" />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="card-title">Summer 2024 Fashion Trends: What to Wear This Season</p>
                            <p>Dive into the hottest trends of Summer 2024 with our comprehensive guide. From bold prints to sustainable fashion,...
                            </p>
                            <div className="card-actions">
                                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">View Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="card bg-base-100  shadow-2xl border border-pink-800">
                        <figure className="px-10 pt-10">
                            <img src="https://nypost.com/wp-content/uploads/sites/2/2021/01/paris-fashion-week-78.jpg?quality=75&strip=all" alt="Shoes" className="rounded-xl h-44" />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="card-title">Summer 2024 Fashion Trends: What to Wear This Season</p>
                            <p>Dive into the hottest trends of Summer 2024 with our comprehensive guide. From bold prints to sustainable fashion,...
                            </p>
                            <div className="card-actions">
                                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">View Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card bg-base-100  shadow-2xl border border-pink-800">
                        <figure className="px-10 pt-10">
                            <img src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*" alt="Shoes" className="rounded-xl h-44" />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="card-title">Summer 2024 Fashion Trends: What to Wear This Season</p>
                            <p>Dive into the hottest trends of Summer 2024 with our comprehensive guide. From bold prints to sustainable fashion,...
                            </p>
                            <div className="card-actions">
                                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">View Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card bg-base-100  shadow-2xl border border-pink-800">
                        <figure className="px-10 pt-10">
                            <img src="https://media.vogue.co.uk/photos/5d54494ddf3584000807c201/16:9/w_4880,h_2745,c_limit/original" alt="Shoes" className="rounded-xl h-44" />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="card-title">Summer 2024 Fashion Trends: What to Wear This Season</p>
                            <p>Dive into the hottest trends of Summer 2024 with our comprehensive guide. From bold prints to sustainable fashion,...
                            </p>
                            <div className="card-actions">
                                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">View Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="card bg-base-100  shadow-2xl border border-pink-800">
                        <figure className="px-10 pt-10">
                            <img src="https://nypost.com/wp-content/uploads/sites/2/2021/01/paris-fashion-week-78.jpg?quality=75&strip=all" alt="Shoes" className="rounded-xl h-44" />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="card-title">Summer 2024 Fashion Trends: What to Wear This Season</p>
                            <p>Dive into the hottest trends of Summer 2024 with our comprehensive guide. From bold prints to sustainable fashion,...
                            </p>
                            <div className="card-actions">
                                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">View Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>













            </Swiper>
        </>
    )
};

export default Blogs;