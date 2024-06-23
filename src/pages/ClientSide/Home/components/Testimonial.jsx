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

const Testimonial = () => {
    return (
        <>
            <p className='text-pink-700 font-bold text-4xl text-center py-5'>Testimonials</p>
            <p className='text-pink-700 font-bold text-6xl text-center py-5'>Some Users Feedback</p>

            <Swiper
                slidesPerView={2}
                spaceBetween={100}
               
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="xl:w-3/4 lg:w-full w-full mx-auto text-center">
                            <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                
                                
                                <p className=" ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="xl:w-3/4 lg:w-full w-full mx-auto text-center">
                            <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                
                                
                                <p className=" ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                

                














            </Swiper>
        </>
    )
};

export default Testimonial;