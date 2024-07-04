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
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Marquee from 'react-fast-marquee';

const Testimonial = () => {
    const axiosPublic = useAxiosPublic();
    const { data: testimonials = [], refetch, isLoading } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await axiosPublic.get('/testimonial');
            return res.data;
        }
    })
    if (isLoading) {
        return ''
    }
    console.log(testimonials);
    return (
        <>
            <p className='text-pink-700 font-bold text-4xl text-center py-5'>Testimonials</p>
            <p className='text-pink-700 font-bold text-6xl text-center py-5'>Some Users Feedback</p>
            <Marquee
                speed={35}
                pauseOnHover={true}
                direction='right'
            >

                <div className='flex gap-60 px-60'>
                    {
                        testimonials?.map(testimonial => <div key={testimonial?._id}>
                            <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="xl:w-3/4 lg:w-full w-full mx-auto text-center">
                                        <div className="avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={testimonial?.image} />
                                            </div>
                                        </div>


                                        <p className="">{testimonial?.opinion}</p>
                                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{testimonial?.name}</h2>
                                        <p className="text-gray-500">{testimonial?.designation}</p>
                                    </div>
                                </div>
                            </section>
                        </div>)
                    }
                </div>
            </Marquee>
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























            </Swiper>
        </>
    )
};

export default Testimonial;