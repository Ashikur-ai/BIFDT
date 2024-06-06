import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../onlineAdmission/css/styles.css'

// import images 
import gallary1 from "../../../../src/assets/images/gallary1.jpg";
import gallary2 from "../../../../src/assets/images/gallary2.jpg";
import gallary3 from "../../../../src/assets/images/gallary3.jpg";
import gallary4 from "../../../../src/assets/images/gallary4.jpg";
import gallary5 from "../../../../src/assets/images/gallary5.jpg";
import gallary6 from "../../../../src/assets/images/gallary6.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';


const AdmissionPage = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const data = { name, email };
        console.log(data)
    }
    return (
        <>
            <Helmet>
                <title>BIFDT | Online Admission</title>
            </Helmet>

            {/* Banner section  */}
            <div className='h-96'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={gallary1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary6} alt="" /></SwiperSlide>

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>


            <div className='bg-pink-600 text-white'>
                <div className='pt-24 text-white'>
                    <HeaderText className={'text-white font-bold text-6xl text-center p-5'} title="Online Admission Form"></HeaderText>
                </div>

                {/* form section  */}
                <div>

                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5  mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <p className="lg:w-2/3 mx-auto text-white leading-relaxed text-xl">Unlock Your Creative Potential and Transform Your Fashion Dreams into Reality—Enroll Today!</p>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white px-10 pt-20 rounded-xl">
                                <div className="">
                                    {/* name  */}
                                    <form action="" onSubmit={handleSubmit} className='flex flex-wrap -m-2'>
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label  className="leading-7 text-sm text-gray-600">Name</label>
                                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* email  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label  className="leading-7 text-sm text-gray-600">Email</label>
                                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* message  */}
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Message</label>
                                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                        </div>
                                    </form>


                                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                        <a className="text-indigo-500">info@bifdt.com</a>
                                        <p className="leading-normal my-5">House # 3/GA,
                                            <br />Shyamoli, Road # 1. Dhaka-1207.
                                        </p>
                                        <span className="inline-flex">
                                            <a className="text-gray-500">
                                            <Link to="https://x.com/"><BiLogoTwitter className="text-2xl" /></Link>
                                            </a>
                                            <a className="ml-4 text-gray-500">
                                            <Link to="https://www.youtube.com/"><TbBrandYoutubeFilled className="text-2xl" /></Link>
                                            </a>
                                            <a className="ml-4 text-gray-500">
                                            <Link to="https://www.facebook.com/"><FaFacebook className="text-xl" /></Link>
                                            </a>
                                            
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    );
};

export default AdmissionPage;