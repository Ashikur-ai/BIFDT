import Marquee from "react-fast-marquee";
import banner from "../../../assets/images/coursePage/banner.jpg";
import banner2 from '../../../assets/images/admission.webp'
import banner3 from '../../../assets/images/gallary1.jpg'
import { Helmet } from "react-helmet-async";
import 'swiper/css/effect-fade';

// import required modules
import ReactPlayer from "react-player";
import TabSection from "../Home/components/TabSection";

import Maps from "../Home/components/Maps";
import Blogs from "../Home/components/Blogs";
import VideoGrid from "./VideoGrid";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseDetailsTab from "./CourseDetailsTab";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import ResponsiveButton from "../../../components/ResponsiveButton";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


import parallax4 from '../../../assets/images/parallax/parallax4.png';
import HomePageCoursePlayer from "../Home/components/HomePageCoursePlayer";
import Share from "./Share";
// slider import


const CourseDetails = () => {
  const axiosPublic = useAxiosPublic()
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams()

  const { data: homepageContent = [], refetch: homepageContentRefetch, isLoading: isLoadingHomepageContent } = useQuery({
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




  const { courseImages } = homepageContent[0] || [];
  return (
    <>
      <Helmet>
        <title>BIFDT | CouseDetails</title>
      </Helmet>

      {/* 1. Header slider part  */}
      <div >
        <div id="blogDetailsFirstSection" >
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
            className="mySwiper h-[calc(100vh-550px)] md:h-[calc(100vh-350px)] overflow-hidden"
          >
            {
              bannerImages?.map((image, idx) => <SwiperSlide key={idx}>
                <img className="h-[250px] sm:h-[350px] md:h-[calc(100vh-150px)] w-full object-cover" src={image} alt="" />
              </SwiperSlide>)
            }
          </Swiper>

        </div>


        {/*2. Marqueee section  */}
        <div className="pr-10">
          <Marquee className="bg-primary py-1.5 text-white">
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
            <div className="lg:w-3/4 border pt-2 border-b-black px-3 lg:px-0">
              <div className="flex justify-between gap-3">
                <span
                  className="text-white   text-sm lg:text-xl px-1  lg:px-5 rounded-lg bg-primary">
                  Free Seminar/Counseling
                </span>
                <span
                  className="text-white  text-sm lg:text-xl px-1  lg:px-5 rounded-lg bg-primary">
                  <Link to="/onlineAdmission">Enroll Now</Link>
                </span>
              </div>

              <p className="text-black font-bold text-sm lg:text-xl p-1 bg-white ">
                {title}
              </p>
              <hr />
              <p className="pr-10 pl-1 text-sm lg:text-xl">
                {showMore ? subtitle : `${subtitle.substring(0, 250)}....`} <br />
                <button className="text-blue-500" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
              </p>

              {/* main video  */}
              <div className="w-[85vw] h-[48.9vw] sm:w-full sm:h-[37vw] lg:h-[370px] lg:w-[650px] lg:mx-auto rounded-lg p-2
              bg-primary">
                <ReactPlayer
                  controls="true"
                  playing={true}
                  url={videoUrl}
                  width="100%"
                  height="100%"
                />
              </div>

              {/* four related video  */}

              <div className="hidden  lg:flex pt-10">
                <Marquee pauseOnHover={true}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pr-10">
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

              <div className="pb-10 pt-5"><hr className="w-full border-black" /></div>
              {/* Admission and course detail section */}
              <div>
                <p className="text-primary  text-sm mr-4 lg:ml-3 lg:px-1 bg-white">
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



              <div className="pt-2">
                <div className="flex justify-between flex-col sm:flex-row">
                  <p className="lg:text-2xl font-bold py-5">Course Details</p>
                  <div className="w-full flex justify-end items-end"><Share/></div>
                </div>
                <CourseDetailsTab></CourseDetailsTab>

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
