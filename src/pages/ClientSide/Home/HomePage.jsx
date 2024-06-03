import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import ReactPlayer from "react-player";

// image import 
import app from "../../../assets/images/apps.webp";
import python from "../../../assets/images/python.webp";
import graphic from "../../../assets/images/graphic.webp";
import banner from "../../../assets/images/banner.webp";


import fashion from "../../../assets/images/fashion.webp";
import marchen from "../../../assets/images/marchen.webp";
import cad from "../../../assets/images/cad.webp";
import clo from "../../../assets/images/clo.webp";
import digital from "../../../assets/images/digital.webp";
import gradesign from "../../../assets/images/gradesign.webp";
import web from "../../../assets/images/web.webp";
import interior from "../../../assets/images/interior.webp";
import leather from "../../../assets/images/leather.webp";
import admission from "../../../assets/images/admission.webp";
import seminar from "../../../assets/images/seminar.webp";
import career from "../../../assets/images/career.webp";


import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import AnimatedDiv from "../../../AnimatedDiv";

const HomePage = () => {
    return (

        <div className="">
            <Helmet>
                <title>BIFDT </title>
            </Helmet>

            {/* Video and Marquee First section  */}
            <div className="">
                <ReactPlayer controls="true" height="460px" url='https://www.youtube.com/watch?v=84r1057ebls&t=1s' width='100%'
                />
            </div>
            <Marquee className="bg-pink-700 py-5 text-white">
                ***Fashion Design: ফ্যাশন ডিজাইন হলো এমন একটি ক্রিয়াকলাপ যেখানে পোশাক, উপাদান, রঙ, স্টাইল ইত্যাদি সমন্বয় করে নতুন ডিজাইন এবং ফ্যাশন তৈরি করা হয়। এটি সৃজনশীল এবং রচনাত্মক প্রক্রিয়া, যা প্রতিটি ফ্যাশন আইটেমের সাথে মিলিত হয়।  ***Merchandising: মার্চান্ডাইজিং হলো একটি ব্যবসায়িক পদ্ধতি যা বিভিন্ন পণ্য বা প্রোডাক্ট এর উত্পাদন, পরিচালনা, এবং বিপণন সংক্রান্ত কাজে মাল্টিপল পদক্ষেপ নেয়। ***Graphics Design: গ্রাফিক্স ডিজাইন হলো কোন মাধ্যম বা প্রোডাক্টের জন্য ভিজ্যুয়াল প্রতিনিধিত্ব তৈরি করা। এটি অনেক ধরনের মাধ্যমে প্রযুক্তি ও কৌশলের মাধ্যমে আকৃতি, রঙ, টেক্সচার, এবং টেক্সটের সমন্বয়ে ভিজ্যুয়াল কমিউনিকেশন তৈরি করে।
            </Marquee>

            {/* second section  */}
            <div className="grid md:grid-cols-2 grid-cols-1 py-20">
                <div className="mx-auto rotation">
                    <Swiper

                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}

                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper w-64"
                    >
                        <SwiperSlide><img src={python} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={app} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={graphic} alt="" /></SwiperSlide>

                    </Swiper>


                </div>
                <div>
                    <ul className="font-bold text-xl text-center lg:text-left" >
                        <li className="py-3">Fashion Design</li>
                        <li className="py-3">Apparel Merchandising</li>
                        <li className="py-3">Pattern Design & CAD</li>
                        <li className="py-3">CLO & Browzwear</li>
                        <li className="py-3">Digital Marketing & Branding</li>
                        <li className="py-3">Graphics Design</li>
                        <li className="py-3">Web Design</li>
                        <li className="py-3">Interior Design</li>
                        <li className="py-3">Lather Design</li>
                        <li className="py-3">Career blogs</li>

                    </ul>
                </div>
            </div>

            {/* third section  */}

            <div className="px-20 py-20">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
                    <div>
                        <p>Home</p>
                        <p
                        >
                            Build successful career with Fashion Design, Apparel Merchandising, Pattern Making, Garments CAD Design, Graphic Design, Web Design, Interior Design, Lather Design, Computer Fundamentals & Operation, courses. BIFDT has been formed to excel the career path of those individuals who want to explore their career in R.M.G (Ready Made Garments) sector in both home and international markets in the post M.F.A(Multi Fiber Agreement)era. We are firmly determined to explore potentials of the students in the area of creativity and imagination with the help of proper care, effective teaching and modern technology. we provide Quality faculty members, who are uncompromising in giving better education through which you can explore yourself in the field of creative world. We ensure smooth and secure professional job prospect to overcome the challenges of 21st century.
                        </p>
                    </div>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>

            {/* fourth section animation part  */}
            <div className="px-20">

                <AnimatedDiv value={300} >
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Fashion Design</p></div>
                    <div className=""><img src={fashion} className=" w-full h-64" alt="" /></div>
                </AnimatedDiv>

                <AnimatedDiv value={-300} >
                    <div className=""><img src={marchen} className=" w-full h-64" alt="" /></div>
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Apparel Merchandising</p></div>
                </AnimatedDiv>

                <AnimatedDiv value={300} >
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Pattern Design & CAD</p></div>
                    <div className=""><img src={cad} className=" w-full h-64" alt="" /></div>
                </AnimatedDiv>

                <AnimatedDiv value={-300} >
                    <div className=""><img src={clo} className=" w-full h-64" alt="" /></div>
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">CLO  &  Browzwear</p></div>
                </AnimatedDiv>

                <AnimatedDiv value={300} >
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Digital Marketing & Branding</p></div>
                    <div className=""><img src={digital} className=" w-full h-64" alt="" /></div>
                </AnimatedDiv>

                <AnimatedDiv value={-300} >
                    <div className=""><img src={gradesign} className=" w-full h-64" alt="" /></div>
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Graphic Design
                    </p></div>
                </AnimatedDiv>
                <AnimatedDiv value={300} >
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Web Design</p></div>
                    <div className=""><img src={web} className=" w-full h-64" alt="" /></div>
                </AnimatedDiv>
            </div>

            <div className="px-20">
                <AnimatedDiv value={-300} >
                    <div className=""><img src={interior} className=" w-full h-64" alt="" /></div>
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Interior Design
                    </p></div>
                </AnimatedDiv>
                
                <AnimatedDiv value={300} >
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Leather Design</p></div>
                    <div className=""><img src={leather} className=" w-full h-64" alt="" /></div>
                </AnimatedDiv>

                <AnimatedDiv value={-300} >
                    <div className=""><img src={admission} className=" w-full h-64" alt="" /></div>
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Online Admission
                    </p></div>
                </AnimatedDiv>

                <AnimatedDiv value={300} >
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Free Seminar</p></div>
                    <div className=""><img src={seminar} className=" w-full h-64" alt="" /></div>
                </AnimatedDiv>
                
                <AnimatedDiv value={-300} >
                    <div className=""><img src={career} className=" w-full h-64" alt="" /></div>
                    <div className=" bg-red-600 w-full  "><p className="text-white text-2xl font-bold text-center pt-20">Career blogs
                    </p></div>
                </AnimatedDiv>
            </div>














        </div >
    )
};
export default HomePage;