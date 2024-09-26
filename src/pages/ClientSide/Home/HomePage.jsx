import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import ReactPlayer from "react-player";
import banner from "../../../assets/images/banner.webp";
import CountUp from "react-countup";
import TabSection from "./components/TabSection";
import FacultySlide from "./components/FacultySlide";
import Testimonial from "./components/Testimonial";
import Maps from "./components/Maps";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Blogs from "./components/Blogs";
import HomePageCourses from "./components/HomePageCourses";
import HomePageCoursePlayer from "./components/HomePageCoursePlayer";
import HomePageCountDown from "./components/HomePageCountDown";
import Videos from "./components/Videos";
import faceIllutionImg from "../../../assets/images/faceIllution.jpg";
import parallax1 from "../../../assets/images/parallax/parallax1.jpeg";
import parallax2 from "../../../assets/images/parallax/parallax2.jpg";
import parallax3 from "../../../assets/images/parallax/parallax3.jpg";
import parallax4 from "../../../assets/images/parallax/parallax4.png";
import { Parallax } from "react-parallax";

import "../../../App.css";

import { useEffect } from "react";

const HomePage = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: homepageContent = [],
    refetch: homepageContentRefetch,
    isLoading,
  } = useQuery({
    queryKey: ["homepageContent"],
    queryFn: async () => {
      const res = await axiosPublic.get("/homepageContent");
      return res?.data;
    },
  });
  useEffect(() => {
    if (!isLoading && homepageContent.length > 0) {
      const firstSection = document.getElementById("homePageFirstSection");
      if (firstSection) {
        firstSection.scrollIntoView();
      }
    }
  }, [isLoading, homepageContent]);
  const {
    description,
    imageUrl,
    notice,
    video_url,
    since,
    student,
    rating,
    instructor,
    guarantee,
    ratio,
    video_section_video,
    courseImages,
    parallaxImg,
    visitor
  } = homepageContent[0] || [];
  if (isLoading) {
    return "";
  }
  return (
    <>
      <div className="">
        <Helmet>
          <title>BIFDT </title>
        </Helmet>

        {/* Video and Marquee First section  */}
        <div id="homePageFirstSection" className="video-container">
          <ReactPlayer
            controls="true"
            height="100%"
            url={video_url}
            width="100%"
          />
        </div>
        <button></button>
        <Marquee className="bg-primary py-3 -mt-7 text-white">
          <p dangerouslySetInnerHTML={{ __html: notice }}></p>
        </Marquee>

        {/* second section image and bullet point  */}

        <div
          style={{
            backgroundImage: `url(${parallaxImg})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          {" "}
          <HomePageCoursePlayer courseImages={courseImages} parallaxImg={parallaxImg} />
        </div>

        {/* third section Homepage */}

        <div className="px-2 sm:px-10 md:px-20 lg:pb-20 pb-4 bg-primary ">
          <p className="text-xl lg:text-4xl text-center py-2 lg:py-5 font-bold text-white">
            Home Page
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 bg-white p-5">
            <div className=" relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full object-cover z-10 bg-white/80"></div>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={faceIllutionImg}
                alt=""
              />
              <div className="z-10 lg:py-5 relative">
                <p className="lg:text-4xl lg:pb-4">Home</p>
                <p
                  className="text-black text-[8px] lg:text-xl"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-2/3 lg:w-full"
                src={imageUrl || banner}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* fourth section animation part  */}

        <div
          className=""
          style={{
            backgroundImage: `url(${parallaxImg})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <HomePageCourses />
        </div>

        {/*fifth section countdown part  */}
        <div>

          <HomePageCountDown
            allData={{ since, student, rating, instructor, guarantee, ratio, visitor }}
          />
        </div>

        {/* sixth section Photo Gallary  */}
        <div className="">
          <TabSection></TabSection>
        </div>

        {/* seventh section Faculty  */}
        <FacultySlide></FacultySlide>

        {/* eighth section Testimonial  */}
        <div>
          <Testimonial></Testimonial>
        </div>

        {/* blog section  */}
        <Blogs></Blogs>

        {/* videos section  */}
        <Videos video_url={video_section_video} />

        {/* tenth section Google Map  */}
        <div className="">
          <Maps></Maps>
        </div>
      </div>
    </>
  );
};
export default HomePage;
