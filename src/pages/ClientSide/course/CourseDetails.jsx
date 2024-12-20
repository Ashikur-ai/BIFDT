import Marquee from "react-fast-marquee";
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

import HomePageCoursePlayer from "../Home/components/HomePageCoursePlayer";
import Share from "./Share";
import { useEffect, useState } from "react";
import Videos from "../Home/components/Videos";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Sun from "../../../components/Sun";
// slider import


const CourseDetails = () => {
  const axiosPublic = useAxiosPublic();
  const [playableVideo, setPlayableVideo] = useState('')
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams()

  const { data: homepageContent = [] } = useQuery({
    queryKey: ['homepageContent'],
    queryFn: async () => {
      const res = await axiosPublic.get('/homepageContent')
      return res?.data
    }
  })

  const videoDivStyle = 'rounded-md overflow-hidde w-[150px] h-[80px] sm:w-[230px] sm:h-[130px]'
  const titleStyle = 'text-xs sm:text-base text-black font-medium py-1 max-w-[150px]  sm:max-w-[230px]'
  const { data: courseData = {}, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/course/${id}`)
      return res?.data
    }
  })
  useEffect(() => {
    if (courseData?.videoUrl) {
      setPlayableVideo(courseData?.videoUrl)
    }
  }, [courseData, isLoading])
  if (isLoading) {
    return ''
  }
  const { title, subtitle, videoUrl, bannerImages, subVideos, notice, bangla, admissionNotice, courseFee, parallaxImages = [], description } = courseData;



  const { courseImages, videoSection_url_text, video_section_video, parallaxImg } = homepageContent[0] || [];
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
              <Facebook />

              {/* instagram  */}
              <p className="text-primary  text-center font-bold text-2xl pt-2 bg-white ">
                Instagram Page
              </p>
              <Instagram />



              {/* <Twitter /> */}



            </div>



            {/* second half */}
            <div className="lg:w-3/4 border border-b-black px-3 lg:px-0 relative ">
            <div className="w-max absolute top-0 left-0 z-10 "><Sun /></div>
              {/* <div className="absolute top-0 left-0  bg-white/60 w-full h-full "></div> */}
              <div
                style={{
                  backgroundImage: `url(${parallaxImages[0] || ''})`,
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  backgroundPosition: 'center'
                }} className="pt-2 sm:pt-5">

                <div className="flex  justify-between relative gap-1 px-2">
                  <div className="flex gap-2  w-max h-max">
                    <span
                      className="text-white text-[8px]   xs:text-xs sm:text-sm lg:text-xl lg:p-3 p-1  lg:px-5 rounded-lg bg-primary ">
                      Free Seminar / Counseling
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Share />
                    <div
                      className="text-white text-[8px] sm:text-sm lg:text-xl lg:p-3 p-1  lg:px-5 rounded-lg bg-primary h-max w-max text-nowrap">
                      <Link to="/onlineAdmission">Enroll Now</Link>
                    </div>
                  </div>
                </div>

                <p className="pr-10 pl-5 text-xs xs:text-sm sm:text-base lg:text-2xl z-10 relative overflow-hidden font-bold text-blue-700 py-2">
                  {subtitle}
                </p>

                <p className="text-black font-bold relative text-justify text-lg hidden sm:block px-5">{showMore ? description : `${description?.slice(0, 200)}...`} <span onClick={() => setShowMore(!showMore)} className="text-black font-medium cursor-pointer hover:text-primar">{showMore ? 'See less' : 'See more'}</span></p>
                <p className="text-gray-800 relative text-justify text-xs sm:text-sm sm:hidden block px-2">{showMore ? description : `${description?.slice(0, 50)}...`} <span onClick={() => setShowMore(!showMore)} className="text-black font-medium cursor-pointer hover:text-primary">{showMore ? 'See less' : 'See more'}</span></p>
                <hr className="border-black my-2" />


                {/* main video  */}
                <div className="relative w-[75vw] h-[43.9vw] z-10 sm:w-full sm:h-[37vw] lg:h-[450px] lg:w-[90%] max-w-[870px] lg:mx-auto rounded-lg p-2
                bg-gray-500 mx-auto">
                  <ReactPlayer
                    controls="true"
                    playing={true}
                    url={playableVideo}
                    width="100%"
                    height="100%"
                  />
                </div>

                {/* four related video  */}

                <div className="relative flex pt-5 sm:pt-10 z-10">
                  <Marquee pauseOnHover={true}>
                    <div className="flex gap-10 pr-10">
                      <div className="">

                        <div className={`${videoDivStyle} relative`}>
                          <div onClick={() => setPlayableVideo(videoUrl)} className="absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer z-20"></div>
                          <ReactPlayer
                            controls="true"

                            url={videoUrl}
                            width="100%"
                            height='100%'
                          />
                        </div>

                        <p className={`${titleStyle}`}>Main Video</p>
                      </div>
                      {
                        subVideos?.map((video, idx) => <div key={idx} className="">

                          <div className={`${videoDivStyle} relative`}>
                            <div onClick={() => setPlayableVideo(video?.url)} className="absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer z-20"></div>
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
                <div className="relative">
                  <hr className="w-full border-black" />
                </div>

              </div>



              <div style={{
                backgroundImage: `url(${parallaxImages[1] || ''})`,
                backgroundSize: 'cover',
                backgroundAttachment: "fixed",
                backgroundPosition: 'center'
              }} className="pt-2 sm:py-5">
                {/* Admission and course detail section */}
                <div className="z-10 relative">
                  <div className="text-black  text-sm mr-4 lg:ml-3 lg:px-1 leading-snug">
                    <div dangerouslySetInnerHTML={{ __html: bangla }}></div>
                  </div>


                  <div className="flex justify-between items-center lg:pr-14">
                    <p className="lg:text-2xl font-bold py-5">Admission Notice</p>
                    <ResponsiveButton title={"Enroll Now"} link={"/onlineAdmission"} />

                  </div>
                  <Marquee className="bg-primary py-1.5 text-white">
                    <p dangerouslySetInnerHTML={{ __html: admissionNotice }}></p>
                  </Marquee>

                </div>
                <div className="sm:pt-20 z-10 relative ">
                  <div className="flex justify-between flex-col sm:flex-row">
                    <p className="lg:text-2xl font-bold py-5">Course Details</p>

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
            <div style={{ backgroundImage: `url(${parallaxImg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
              <HomePageCoursePlayer courseImages={courseImages} />
            </div>
          </div>
          <div id="homePageFirstSection" className="video-container mb-16 sm:mb-[17vw]">

            <Videos video_url={videoSection_url_text || video_section_video} />
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
