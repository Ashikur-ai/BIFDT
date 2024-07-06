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
import faceIllutionImg from '../../../assets/images/faceIllution.jpg'
import parallax1 from '../../../assets/images/parallax/parallax1.jpeg'
import parallax2 from '../../../assets/images/parallax/parallax2.jpg'
import parallax3 from '../../../assets/images/parallax/parallax3.jpg'
import parallax4 from '../../../assets/images/parallax/parallax4.png'
import { Parallax } from 'react-parallax'


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
        <Marquee className="bg-[#f6861f] py-1.5 text-white">
          <p dangerouslySetInnerHTML={{ __html: notice }}></p>
        </Marquee>

        {/* second section image and bullet point  */}
        <Parallax strength={600} bgImage={parallax2}>
          <HomePageCoursePlayer />

        </Parallax>

        {/* third section Homepage */}

        <div className="px-2 sm:px-10 md:px-20 py-20 bg-[#f6861f] ">
          <p className=" text-4xl text-center py-5 text-white">Home Page</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 bg-white p-5">
            <div className=" relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full object-cover z-10 bg-[#f6861f]"></div>
              <img className="absolute top-0 left-0 w-full h-full object-cover z-0" src={faceIllutionImg} alt="" />
              <div className="z-20 p-5 relative">
                <p className="text-white text-2xl py-5 z-10">Home</p>
                <p className="text-white" dangerouslySetInnerHTML={{ __html: description }}>
                </p>
              </div>

            </div>
            <div>
              <img src={imageUrl || banner} alt="" />
            </div>
          </div>
        </div>

        {/* fourth section animation part  */}
        <Parallax strength={600} bgImage={parallax4}>
          <HomePageCourses />
        </Parallax>

        {/*fith section countdown part  */}
        <HomePageCountDown allData={{ since, student, rating, instructor, guarantee, ratio }} />

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
        <Videos video_url={video_url} />

        {/* tenth section Google Map  */}
        <div className="">
          <Maps></Maps>
        </div>
      </div>



    </>
  );
};
export default HomePage;
