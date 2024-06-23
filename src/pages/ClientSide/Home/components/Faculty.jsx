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
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Faculty = () => {
    const axiosPublic = useAxiosPublic();

    const { data: faculties = [] } = useQuery({
        queryKey: ['facuties'],
        queryFn: async () => {
            const res = await axiosPublic.get('/faculty');
            return res.data;
        }
    })

    const addHttpIfMissing = (url) => {
        if (!/^https?:\/\//i.test(url)) {
            return `https://${url}`;
        }
        return url;
    };

    return (
        <>
            <p className='text-pink-700 font-bold text-4xl text-center py-5'>Our Faculty</p>

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

                {
                    faculties?.map(faculty =>
                        <SwiperSlide key={faculty._id}>
                            <div className="card  h-96 border border-gray-500 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={faculty.image} alt="Shoes" className=" rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title font-black">{faculty.name}</h2>
                                    <p className='font-black'>{faculty.email}</p>
                                    <div className="card-actions">
                                        <span className="inline-flex">
                                            {faculty.facebook && (
                                                <a href={addHttpIfMissing(faculty.facebook)} target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook className="text-2xl" />
                                                </a>
                                            )}

                                            {faculty.whatsapp && (
                                                <a href={addHttpIfMissing(faculty.whatsapp)} target="_blank" rel="noopener noreferrer">
                                                    <FaWhatsapp className="text-2xl mx-3" />
                                                </a>
                                            )}

                                            {faculty.twitter && (
                                                <a href={addHttpIfMissing(faculty.twitter)} target="_blank" rel="noopener noreferrer">
                                                    <FaTwitterSquare className="text-2xl" />
                                                </a>
                                            )}

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
















            </Swiper>
        </>
    )
};
export default Faculty;