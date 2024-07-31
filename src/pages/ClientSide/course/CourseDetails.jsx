import Marquee from "react-fast-marquee";
import banner3 from '../../../assets/images/gallary1.jpg'
import { Helmet } from "react-helmet-async";
import 'swiper/css/effect-fade';

// import required modules
import ReactPlayer from "react-player";
import TabSection from "../Home/components/TabSection";

import Maps from "../Home/components/Maps";
import Blogs from "../Home/components/Blogs";
import { Link, useParams } from "react-router-dom";
import CourseDetailsTab from "./CourseDetailsTab";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import ResponsiveButton from "../../../components/ResponsiveButton";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import courseParallax1 from '../../../assets/images/parallax/courseParallax1.jpg';
import courseParallax2 from '../../../assets/images/parallax/courseParallax2.jpg';
import parallax4 from '../../../assets/images/parallax/parallax4.png';
import HomePageCoursePlayer from "../Home/components/HomePageCoursePlayer";
import Share from "./Share";
import { useState } from "react";
// slider import


const CourseDetails = () => {
  const axiosPublic = useAxiosPublic()
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams()

  const { data: homepageContent = [] } = useQuery({
    queryKey: ['homepageContent'],
    queryFn: async () => {
      const res = await axiosPublic.get('/homepageContent')
      return res?.data
    }
  })

  const videoDivStyle = 'rounded-md overflow-hidden k w-[230px] h-[130px]'
  const titleStyle = 'text-black font-medium py-1 max-w-[230px]'
  const { data: courseData = {}, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/course/${id}`)
      return res?.data
    }
  })
  if (isLoading) {
    return ''
  }
  const { title, subtitle, videoUrl, bannerImages, subVideos, notice, bangla, admissionNotice, courseFee } = courseData;


  console.log(bannerImages);

  const { courseImages } = homepageContent[0] || [];
  return (
    <>
      <Helmet>
        <title>BIFDT | CouseDetails</title>
      </Helmet>

      {/* 1. Header slider part  */}
      <div className="relative">

        <div className="z-10" id="blogDetailsFirstSection" >
          <Swiper
            spaceBetween={50}
            speed={1000}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper max-h-[33vh] sm:max-h-[67vh] overflow-hidden"
          >
            {
              bannerImages?.map((image, idx) => <SwiperSlide key={idx}>
                <img className="object-cover w-full" src={image} alt="" />
              </SwiperSlide>)
            }
          </Swiper>

        </div>


        {/*2. Marqueee section  */}
        <div className="pr-10">
          <Marquee className="bg-primary py-1 xs:py-1.5 text-white">
            <p dangerouslySetInnerHTML={{ __html: notice }}></p>
          </Marquee>

          <div className="flex flex-col-reverse lg:flex-row">


            {/* first half */}
            <div className="lg:w-1/4 hidden lg:block border border-black">

              <p className="text-primary  text-center font-bold text-2xl  bg-white ">
                Facebook Page
              </p>
              <div className="border border-t-black">
                <div className="flex items-center justify-center bg-gray-100">
                  <div className="w-full max-w-md h-96 overflow-y-auto p-4 bg-gray-200 rounded-lg shadow-lg">

                    <div className="card  bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwbTixnmLkOmISG9YsIvC0w_VjjvWYvEnvg&s"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Facebook</h2>
                        <p>
                          This a facebook Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Ea placeat sequi magnam reprehenderit
                          explicabo voluptatum tenetur quam, error nesciunt
                          expedita facere magni facilis illum omnis nulla, optio
                          debitis hic veritatis. he choose?
                        </p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>

                    <div className="card  bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              {/* instagram  */}
              <p className="text-primary  text-center font-bold text-2xl pt-2 bg-white ">
                Instagram Page
              </p>
              <div className="border border-t-black">
                <div className="flex items-center justify-center bg-gray-100">
                  <div className="w-full max-w-md h-96 overflow-y-auto p-4 bg-gray-200 rounded-lg shadow-lg">

                    <div className="card  bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwbTixnmLkOmISG9YsIvC0w_VjjvWYvEnvg&s"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Facebook</h2>
                        <p>
                          This a facebook Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Ea placeat sequi magnam reprehenderit
                          explicabo voluptatum tenetur quam, error nesciunt
                          expedita facere magni facilis illum omnis nulla, optio
                          debitis hic veritatis. he choose?
                        </p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>

                    <div className="card  bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              <p className="text-primary  text-center font-bold text-2xl pt-2 bg-white ">
                Twitter Page
              </p>
              <div className="border border-t-black">
                <div className="flex items-center justify-center bg-gray-100">
                  <div className="w-full max-w-md h-96 overflow-y-auto p-4 bg-gray-200 rounded-lg shadow-lg">

                    <div className="card  bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwbTixnmLkOmISG9YsIvC0w_VjjvWYvEnvg&s"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Facebook</h2>
                        <p>
                          This a facebook Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Ea placeat sequi magnam reprehenderit
                          explicabo voluptatum tenetur quam, error nesciunt
                          expedita facere magni facilis illum omnis nulla, optio
                          debitis hic veritatis. he choose?
                        </p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>

                    <div className="card  bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>



            </div>



            {/* second half */}
            <div className="lg:w-3/4 border border-b-black px-3 lg:px-0 relative ">
              <div className="absolute top-0 left-0  bg-white/60 w-full h-full "></div>
              <div
                style={{
                  backgroundImage: `url(${courseParallax1})`,
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  backgroundPosition:'center'
                }} className="pt-2 sm:py-5">

                <div className="flex  justify-between relative">
                  <div className="flex gap-2 flex-col sm:flex-row px-2">
                    <span
                      className="text-white   text-xs sm:text-sm lg:text-xl px-1  lg:px-5 rounded-lg bg-primary">
                      {title}
                    </span>
                    <span
                      className="text-white   text-xs sm:text-sm lg:text-xl px-1  lg:px-5 rounded-lg bg-primary ">
                      Free Seminar <br className="block sm:hidden" /> / Counseling
                    </span>
                  </div>
                  <span
                    className="text-white   text-xs sm:text-sm lg:text-xl px-1  lg:px-5 rounded-lg bg-primary h-max">
                    <Link to="/onlineAdmission">Enroll Now</Link>
                  </span>
                </div>
                
                <p className="pr-10 pl-1 text-xs sm:text-sm lg:text-2xl z-10 relative overflow-hidden text-center font-bold text-black py-2 max-w-[700px] mx-auto">
                  {subtitle}
                </p>

                <hr className="border-black my-2" />


                {/* main video  */}
                <div className="relative w-[75vw] h-[43.9vw] z-10 sm:w-full sm:h-[37vw] lg:h-[370px] lg:w-[650px] lg:mx-auto rounded-lg p-2
                bg-primary mx-auto">
                  <ReactPlayer
                    controls="true"
                    playing={true}
                    url={videoUrl}
                    width="100%"
                    height="100%"
                  />
                </div>

                {/* four related video  */}

                <div className="relative hidden  lg:flex pt-10 z-10">
                  <Marquee pauseOnHover={true}>
                    <div className="flex gap-10 pr-10">
                      {
                        subVideos?.map((video, idx) => <div key={idx}>
                          <div className={`${videoDivStyle}`}>
                            <ReactPlayer
                              controls="true"

                              url={video?.url}
                              width="100%"
                              height='100%'
                            />
                          </div>

                          <p className={`${titleStyle}`}>{video?.title}</p>
                        </div>)
                      }
                    </div>
                  </Marquee>

                </div>

                <div className="pb-10 pt-5 relative"><hr className="w-full border-black relative" /></div>

              </div>



              <div style={{
                backgroundImage: `url(${courseParallax2})`,
                backgroundSize:'cover',
                backgroundAttachment: "fixed",
                backgroundPosition:'center'
              }} className="pt-2 sm:py-5">
                {/* Admission and course detail section */}
                <div className="z-10 relative">
                  <p className="text-black  text-sm mr-4 lg:ml-3 lg:px-1 leading-snug">
                    <p dangerouslySetInnerHTML={{ __html: bangla }}></p>
                  </p>


                  <div className="flex justify-between items-center lg:pr-14">
                    <p className="lg:text-2xl font-bold py-5">Admission Notice</p>
                    <ResponsiveButton title={"Enroll Now"} link={"/onlineAdmission"} />

                  </div>
                  <Marquee className="bg-primary py-1.5 text-white">
                    <p dangerouslySetInnerHTML={{ __html: admissionNotice }}></p>
                  </Marquee>

                </div>
                <div className="pt-20 z-10 relative">
                  <div className="flex justify-between flex-col sm:flex-row">
                    <p className="lg:text-2xl font-bold py-5">Course Details</p>
                    <div className="w-full md:w-max flex justify-end items-end"><Share /></div>
                  </div>
                  <CourseDetailsTab></CourseDetailsTab>

                </div>
              </div>

            </div>


          </div>



          <div className="">
            {/* student gallary section  */}
            <div className="pb-10">
              <TabSection ></TabSection>
            </div>

            <div>
              <Blogs></Blogs>
            </div>
          </div>

          {/* images with bullet  */}
          {/* second section image and bullet point  */}

          <div className="py-4">
            <div style={{ backgroundImage: `url(${parallax4})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
              <HomePageCoursePlayer courseImages={courseImages} />
            </div>
          </div>


          <div className="">

            <Maps></Maps>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseDetails;
