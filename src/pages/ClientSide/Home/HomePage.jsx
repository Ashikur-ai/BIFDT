import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import ReactPlayer from "react-player";

// image import
import app from "../../../assets/images/apps.webp";
import python from "../../../assets/images/python.webp";
import graphic from "../../../assets/images/graphic.webp";
import banner from "../../../assets/images/banner.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import AnimatedDiv from "../../../AnimatedDiv";

import CountUp from "react-countup";
import TabSection from "./components/TabSection";
import Faculty from "./components/Faculty";
import Testimonial from "./components/Testimonial";
import Maps from "./components/Maps";
import { Link } from "react-router-dom";
import { MdWhatsapp } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Blogs from "./components/Blogs";
import HomePageCourses from "./components/HomePageCourses";

const HomePage = () => {
  const axiosPublic = useAxiosPublic()
  const { data: homepageContent = [], refetch: homepageContentRefetch, isLoading } = useQuery({
    queryKey: ['homepageContent'],
    queryFn: async () => {
      const res = await axiosPublic.get('/homepageContent')
      return res?.data
    }
  })
  const { description, imageUrl, notice, video_url, since, student, rating, instructor, guarantee, ratio } = homepageContent[0] || []
  if (isLoading) {
    return ''
  }
  console.log(video_url);

  return (
    <>
      <div className="">
        <Helmet>
          <title>BIFDT </title>
        </Helmet>

        {/* Video and Marquee First section  */}
        <div className="">
          <ReactPlayer
            controls="true"
            height="360px"
            url={video_url}
            width="100%"
          />
        </div>
        <Marquee className="bg-pink-700 py-5 text-white">
          <p dangerouslySetInnerHTML={{ __html: notice }}></p>
        </Marquee>

        {/* second section image and bullet point  */}
        <div className="grid md:grid-cols-2 grid-cols-1 py-5">
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
              <SwiperSlide>
                <img src={python} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={app} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={graphic} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <ul className="font-bold text-xl text-center lg:text-left">
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

        {/* third section Homepage */}

        <div className="px-20 py-20 bg-pink-600 my-5">
          <p className=" text-4xl text-center py-5 text-white">Home Page</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 bg-white p-5">
            <div>
              <p className="text-pink-700 text-2xl py-5">Home</p>
              <p dangerouslySetInnerHTML={{ __html: description }}>
              </p>
            </div>
            <div>
              <img src={imageUrl || banner} alt="" />
            </div>
          </div>
        </div>

        {/* fourth section animation part  */}
        <HomePageCourses />

        <div className="w-3/5 mx-auto">
          {/* 8 */}

        </div>

        {/*fith section countdown part  */}
        <div className="mx-20 py-10 my-10 bg-pink-600 grid grid-cols-1 lg:grid-cols-6 justify-items-center">
          {/* since, student, rating, instructor, guarantee, ratio */}
          <div className="m-auto text-white py-5 text-center">
            <CountUp className="text-4xl  font-bold" end={since} duration={9} />
            <p className="text-xl font-bold">Since</p>
          </div>

          <div className="m-auto text-white py-5 text-center">
            <span className="text-4xl  font-bold">
              <CountUp className="" end={student} duration={9} /> +
            </span>
            <p className="text-xl font-bold">Students</p>
          </div>

          <div className="m-auto text-white py-5 text-center">
            <CountUp className="text-4xl  font-bold" end={rating} duration={9} />
            <p className="text-xl font-bold">Education ratings</p>
          </div>

          <div className="m-auto text-white py-5 text-center">
            <span className="text-4xl  font-bold">
              <CountUp className="" end={instructor} duration={9} /> +
            </span>
            <p className="text-xl font-bold">Numbers of Instructors</p>
          </div>

          <div className="m-auto text-white py-5 text-center">
            <CountUp className="text-4xl  font-bold" end={guarantee} duration={9} />
            <p className="text-xl font-bold">Education Guarantee</p>
          </div>
          <div className="m-auto text-white py-5 text-center">
            <span className="text-4xl  font-bold">
              <CountUp className="" end={ratio} duration={9} /> %
            </span>
            <p className="text-xl font-bold">Job Success Ratio</p>
          </div>
        </div>

        {/* sixth section Photo Gallary  */}
        <div className="w-3/4 mx-auto py-20 ">
          <TabSection></TabSection>
        </div>

        {/* seventh section Faculty  */}
        <div className="px-20 py-10 mx-auto">
          <Faculty></Faculty>
          <div className="py-5 flex justify-center items-center"> <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max">See More</button></div>
        </div>

        {/* eighth section Testimonial  */}
        <div>
          <Testimonial></Testimonial>
        </div>

        <div className="">
          {/* ninth section Blogs  */}

          <div className="px-20 ">
            <div className="relative text-pink-700 font-bold text-4xl text-center py-5 bg-white ">
              Blogs

            </div>
            <Blogs></Blogs>
            <Link to={'/blogs'}> <div className="py-5 flex justify-center items-center"> <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max">See More</button></div></Link>
          </div>

        </div>
        {/* tenth section Google Map  */}
        <div className="">
          <Maps></Maps>
        </div>
      </div>



    </>
  );
};
export default HomePage;
