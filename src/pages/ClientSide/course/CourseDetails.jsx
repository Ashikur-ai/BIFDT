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
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseDetailsTab from "./CourseDetailsTab";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import ResponsiveButton from "../../../components/ResponsiveButton";


import parallax4 from '../../../assets/images/parallax/parallax4.png';
import HomePageCoursePlayer from "../Home/components/HomePageCoursePlayer";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// slider import

// Import Swiper React components

const CourseDetails = () => {

  const axiosPublic = useAxiosPublic()
  const { data: homepageContent = [], refetch: homepageContentRefetch, isLoading } = useQuery({
    queryKey: ['homepageContent'],
    queryFn: async () => {
      const res = await axiosPublic.get('/homepageContent')
      return res?.data
    }
  })

  const videoDivStyle = 'rounded-md overflow-hidden k w-[230px] h-[130px]'
  const titleStyle = 'text-black font-medium py-1 max-w-[230px]'
  const subtext = "Fashion has become an important a part of 21st-century life. Our Fashion Design Course has been Specifically created to provide you with everything you need to know in order to take those first steps to make your designs a  reality and beyond. It features a unique combination of 17modules(30 Credits) to equip you with all the knowledge, skills & requisites that any budding fashion designer requires.";

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const firstSection = document.getElementById('blogDetailsFirstSection');
    console.log(firstSection);
    if (firstSection) {
      firstSection.scrollIntoView();
    }
  }, []);



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
            className="mySwiper md:h-[calc(100vh-350px)] overflow-hidden"
          >
            <SwiperSlide>
              <img className="h-[250px] sm:h-[350px] md:h-[calc(100vh-150px)] w-full object-cover" src={banner} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[250px] sm:h-[350px] md:h-[calc(100vh-150px)] w-full object-cover" src={banner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[250px] sm:h-[350px] md:h-[calc(100vh-150px)] w-full object-cover" src={banner3} alt="" />
            </SwiperSlide>
          </Swiper>

        </div>
        {/*2. Marqueee section  */}
        <div className="pr-10">
          <Marquee className="bg-primary py-1.5 text-white">
            ভর্তি চলছে... *** Merchandising : বর্তমানে ক্যারিয়ার নির্বাচনে আকর্ষণীয়,
            সম্মান জনক ও চ্যালেঞ্জিং পেশা হিসাবে বেছে নিতে পারেন মার্চেন্ডাইজিংকে।
            মার্চেন্ডাইজিং-এর একটি ডিপ্লমা কোর্স বদলে দিতে পারে আপনার কর্মময় জীবন।
            কারণ মার্চেন্ডাইজিং এখন লাখ টাকার পেশা! তৈরি পোশাক শিল্পের পণ্যের
            উৎপাদন থেকে শুরু করে বিপণন বা বাজারে বিক্রি পর্যন্ত পুরো প্রক্রিয়া
            গুলো যিনি নিপুণ দক্ষতার সঙ্গে তত্ত্বাবধান করে থাকেন তিনিই Merchandiser।
            আর এ প্রক্রিয়া বা পেশাকেই বলা হয় Merchandising। এটি যথেষ্ট সম্মানজনক ও
            আকর্ষণীয় পেশা এবং এর বেতন অন্য যে কোন পেশার তুলনায় একটু বেশি। বিপুল
            চাহিদার কারণে অন্য সব পেশার চেয়ে এ পেশায় চাকরি পাওয়া অত্যন্ত সহজ। কাজের
            ক্ষেত্র বিশাল, তাই সহজেই মেলে চাকরি। আছে ভালো বেতন, বিদেশ ভ্রমণ সহ নানা
            সুযোগ সুবিধা। আর অল্প সময়ের হওয়া যায় গার্মেন্টস্ বায়িং হাউজের এক জন সফল
            বাণিজ্যিক উদ্যোক্তা। এই জন্য মার্চেন্ডাইজিংকে পোশাক শিল্পের লাইফ লাইন
            বলা হয়। তাই নানা কারণেই ক্যারিয়ার গঠনে মার্চেন্ডাইজিং এখন অনেক
            তরুন-তরুনীদের প্রথম পছন্দ। ***প্রশিক্ষণ শেষে নিজ যোগ্যতায় Buying House
            বা Fashion House-এ, এক জন Fashion Designer বা Merchandiser/ Asst.
            Merchandiser, Commercial Officer, AGM, PM, Technical Officer, TQM
            Officer, IE (Industrial Engineering) Manager/ Officer, Pattern Designer
            বা CAD Specialist, যে কোন পদে চাকুরি অথবা ব্যবসায় মাধ্যমে ক্যারিয়ার গড়তে
            পারবেন। যোগ্যতার ভিত্তিতে যার প্রারম্ভিক বেতন ৩০,০০০/- থেকে ৪৫,০০০/-
            টাকা। তবে অভিজ্ঞতা এবং কর্মদক্ষতার ভিত্তিতে কয়েক বছরের মাথায় একজন
            Merchandiser / Fashion Designer-এর বেতন এক থেকে দের লাখ টাকা ছাড়িয়ে যেতে
            পারে। শুধুই কি চাকুরি, একজন Merchandiser / Fashion Designer কয়েক বছরের
            অভিজ্ঞতা এবং কর্ম জীবনের অর্জিত অর্থের ভিত্তিতে এক পর্যায়ে নিজেই শুরু
            করতে পারেন Buying House বা Garment Factory। আজকের একজন দক্ষ্য
            Merchandiser / Fashion Designer-ই হবে আগামী দিনের Garment / Buying
            House-এর সফল উদ্যোক্তা। আপনি যদি তাদের মধ্যে একজন হতে চান তবে
            BIFDT-Bangladesh Institute of Fashion & Design Technology -এর ৬ মাস বা ১
            বছর মেয়াদি Merchandising / Fashion & Design / Pattern Design & CAD
            Course করুন। সৃজনশীল এ পেশায় চাকুরি অথবা ব্যবসায়ের মাধ্যমে আপনিও হয়ে
            উঠুন একজন কর্মময় ও সফল মানুষ। ***
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
                Fashion Design :: Education for Excellence :: Bangladesh Institute of Fashion & Design Technology (BIFDT)
              </p>
              <hr />
              <p className="pr-10 pl-1 text-sm lg:text-xl">
                {showMore ? subtext : `${subtext.substring(0, 250)}....`} <br />
                <button className="text-blue-500" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
              </p>

              {/* main video  */}
              <div className="w-[85vw] h-[48.9vw] sm:w-[65vw] sm:h-[37vw] lg:h-[370px] lg:w-[650px] lg:mx-auto rounded-lg p-2
              bg-primary">
                <ReactPlayer
                  controls="true"
                  playing={true}
                  url="https://www.youtube.com/watch?v=Z3yqBaGvACM"
                  width="100%"
                  height="100%"
                />
              </div>

              {/* four related video  */}

              <div className="hidden  lg:flex pt-10">
                <Marquee pauseOnHover={true}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pr-10">
                    <div className="  ">
                      <div className={`${videoDivStyle}`}>
                        <ReactPlayer
                          controls="true"

                          url="https://www.youtube.com/watch?v=CW4zNp-HF2Q&t=1s"
                          width="100%"
                          height='100%'
                        />
                      </div>

                      <p className={`${titleStyle}`}>First Video</p>
                    </div>
                    <div>
                      <div className={`${videoDivStyle}`}>
                        <ReactPlayer
                          controls="true"

                          url="https://www.youtube.com/watch?v=VdK0_MzwTsw&t=259s"
                          width="100%"
                          height='100%'
                        />
                      </div>

                      <p className={`${titleStyle}`}>Second Video</p>
                    </div>
                    <div>
                      <div className={`${videoDivStyle}`}>
                        <ReactPlayer
                          controls="true"

                          url="https://www.youtube.com/watch?v=si-mdWiQc34&t=20s"
                          width="100%"
                          height='100%'
                        />
                      </div>

                      <p className={`${titleStyle}`}>Third Video</p>
                    </div>
                    <div>
                      <div className={`${videoDivStyle}`}>
                        <ReactPlayer
                          controls="true"

                          url="https://www.youtube.com/watch?v=Mm5fcw8kStk"
                          width="100%"
                          height='100%'
                        />
                      </div>

                      <p className={`${titleStyle}`}>Fourth Video</p>
                    </div>
                  </div>
                </Marquee>

              </div>

              <div className="pb-10 pt-5"><hr className="w-full border-black" /></div>
              {/* Admission and course detail section */}
              <div>
                <p className="text-primary  text-sm mr-4 lg:ml-3 lg:px-1 bg-white">
                  আপনি কি চাকুরি অথবা ব্যবসায় মাধ্যমে ক্যারিয়ার গড়তে চান ? খুঁজছেন একটি ভালো উপার্জনের সেইফ ক্যারিয়ার? অথবা করতে চান নিজের একটি ফ্যাশন ব্রান্ড ? তবে ফ্যাশন ডিজাইনার হোয়ে নিজেকে মেলে ধরার সময় কিন্তু এখনি .... কারণ ফ্যাশন ডিজাইন এখন লাখ টাকার পেশা! চাকুরি অথবা উদ্যোক্তা ২টি সম্ভাবনার দোয়ারই এক জন ফ্যাশন ডিজাইনারের জন্য খোলা।
                </p>


                <div className="flex justify-between items-center lg:pr-14">
                  <p className="lg:text-2xl font-bold py-5">Admission Notice</p>
                  <ResponsiveButton title={"Enroll Now"} link={"/onlineAdmission"} />

                </div>
                <Marquee className="bg-primary py-1.5 text-white">
                  ভর্তি চলছে... *** Merchandising : বর্তমানে ক্যারিয়ার নির্বাচনে
                  আকর্ষণীয়, সম্মান জনক ও চ্যালেঞ্জিং পেশা হিসাবে বেছে নিতে পারেন
                  মার্চেন্ডাইজিংকে। মার্চেন্ডাইজিং-এর একটি ডিপ্লমা কোর্স বদলে দিতে
                  পারে আপনার কর্মময় জীবন। কারণ মার্চেন্ডাইজিং এখন লাখ টাকার পেশা!
                  তৈরি পোশাক শিল্পের পণ্যের উৎপাদন থেকে শুরু করে বিপণন বা বাজারে
                  বিক্রি পর্যন্ত পুরো প্রক্রিয়া গুলো যিনি নিপুণ দক্ষতার সঙ্গে
                  তত্ত্বাবধান করে থাকেন তিনিই Merchandiser। আর এ প্রক্রিয়া বা
                  পেশাকেই বলা হয় Merchandising। এটি যথেষ্ট সম্মানজনক ও আকর্ষণীয়
                  পেশা এবং এর বেতন অন্য যে কোন পেশার তুলনায় একটু বেশি। বিপুল
                  চাহিদার কারণে অন্য সব পেশার চেয়ে এ পেশায় চাকরি পাওয়া অত্যন্ত
                  সহজ। কাজের ক্ষেত্র বিশাল, তাই সহজেই মেলে চাকরি। আছে ভালো বেতন,
                  বিদেশ ভ্রমণ সহ নানা সুযোগ সুবিধা। আর অল্প সময়ের হওয়া যায়
                  গার্মেন্টস্ বায়িং হাউজের এক জন সফল বাণিজ্যিক উদ্যোক্তা। এই জন্য
                  মার্চেন্ডাইজিংকে পোশাক শিল্পের লাইফ লাইন বলা হয়। তাই নানা
                  কারণেই ক্যারিয়ার গঠনে মার্চেন্ডাইজিং এখন অনেক তরুন-তরুনীদের
                  প্রথম পছন্দ। ***প্রশিক্ষণ শেষে নিজ যোগ্যতায় Buying House বা
                  Fashion House-এ, এক জন Fashion Designer বা Merchandiser/ Asst.
                  Merchandiser, Commercial Officer, AGM, PM, Technical Officer,
                  TQM Officer, IE (Industrial Engineering) Manager/ Officer,
                  Pattern Designer বা CAD Specialist, যে কোন পদে চাকুরি অথবা
                  ব্যবসায় মাধ্যমে ক্যারিয়ার গড়তে পারবেন। যোগ্যতার ভিত্তিতে যার
                  প্রারম্ভিক বেতন ৩০,০০০/- থেকে ৪৫,০০০/- টাকা। তবে অভিজ্ঞতা এবং
                  কর্মদক্ষতার ভিত্তিতে কয়েক বছরের মাথায় একজন Merchandiser /
                  Fashion Designer-এর বেতন এক থেকে দের লাখ টাকা ছাড়িয়ে যেতে পারে।
                  শুধুই কি চাকুরি, একজন Merchandiser / Fashion Designer কয়েক বছরের
                  অভিজ্ঞতা এবং কর্ম জীবনের অর্জিত অর্থের ভিত্তিতে এক পর্যায়ে নিজেই
                  শুরু করতে পারেন Buying House বা Garment Factory। আজকের একজন
                  দক্ষ্য Merchandiser / Fashion Designer-ই হবে আগামী দিনের Garment
                  / Buying House-এর সফল উদ্যোক্তা। আপনি যদি তাদের মধ্যে একজন হতে
                  চান তবে BIFDT-Bangladesh Institute of Fashion & Design
                  Technology -এর ৬ মাস বা ১ বছর মেয়াদি Merchandising / Fashion &
                  Design / Pattern Design & CAD Course করুন। সৃজনশীল এ পেশায়
                  চাকুরি অথবা ব্যবসায়ের মাধ্যমে আপনিও হয়ে উঠুন একজন কর্মময় ও সফল
                  মানুষ। ***
                </Marquee>

              </div>



              <div className="pt-2">
                <p className="lg:text-2xl font-bold py-5">Course Details</p>
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
