import Marquee from "react-fast-marquee";
import banner from "../../../assets/images/coursePage/banner.jpg";
import { Helmet } from "react-helmet-async";


// import required modules
import ReactPlayer from "react-player";
import TabSection from "../Home/components/TabSection";

import Maps from "../Home/components/Maps";
import Blogs from "../Home/components/Blogs";
import VideoGrid from "./VideoGrid";

// slider import

// Import Swiper React components

const CourseDetails = () => {
  return (
    <>
      <Helmet>
        <title>BIFDT | CouseDetails</title>
      </Helmet>

      {/* Header part  */}

      <img className="h-96" src={banner} alt="" />
      <Marquee className="bg-pink-700 py-5 text-white">
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

      <div className="flex flex-col-reverse gap-5 lg:flex-row">


        {/* first half */}
        <div className="lg:w-1/4 hidden lg:block bg-pink-600">

          <p className="text-pink-700 text-center font-bold text-2xl pt-5 bg-white ">
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
          <p className="text-pink-700 text-center font-bold text-2xl pt-20 bg-white ">
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


          <p className="text-pink-700 text-center font-bold text-2xl pt-20 bg-white ">
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
        <div className="lg:w-3/4 p-5">
          <span
            className="text-white  mt-10 px-5 rounded-lg bg-pink-600">
            Free Seminar/Counseling
          </span>

          <p className="text-pink-700 font-bold text-xl py-5 bg-white ">
            Graphic Design & Web Design :: Education for Excellence ::
            Bangladesh Institute of Fashion & Design Technology (BIFDT)
          </p>

          {/* main video  */}
          <div className="h-96">
            <ReactPlayer
              controls="true"

              url="https://www.youtube.com/watch?v=f_ZxgQQ74Lc"
              width="100%"
            />
          </div>

          {/* four related video  */}

          <div className="hidden lg:flex">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="aspect-w-16 aspect-h-9">
                <ReactPlayer
                  controls="true"

                  url="https://www.youtube.com/watch?v=gHrS5X4nKbU"
                  width="100%"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <ReactPlayer
                  controls="true"

                  url="https://www.youtube.com/watch?v=UVH72mDzeas"
                  width="100%"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <ReactPlayer
                  controls="true"

                  url="https://www.youtube.com/watch?v=rZs_UnrCiw8"
                  width="100%"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <ReactPlayer
                  controls="true"

                  url="https://www.youtube.com/watch?v=MZfdtr8TTgg"
                  width="100%"
                />
              </div>
            </div>
          </div>


          {/* Admission and course detail section */}
          <div>
            <p className="text-pink-700 text-xl pt-5 bg-white ">
              আপনি কি চাকুরি অথবা ব্যবসায় মাধ্যমে ক্যারিয়ার গড়তে চান ? খুঁজছেন একটি ভালো উপার্জনের সেইফ ক্যারিয়ার? অথবা করতে চান নিজের একটি ফ্যাশন ব্রান্ড ? তবে ফ্যাশন ডিজাইনার হোয়ে নিজেকে মেলে ধরার সময় কিন্তু এখনি .... কারণ ফ্যাশন ডিজাইন এখন লাখ টাকার পেশা! চাকুরি অথবা উদ্যোক্তা ২টি সম্ভাবনার দোয়ারই এক জন ফ্যাশন ডিজাইনারের জন্য খোলা।
            </p>


            <p className="text-xl py-5">Admission Notice</p>
            <Marquee className="bg-pink-700 py-5 text-white">
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

          {/* table section  */}
          <div>
            <p className="text-xl text-center py-10">
              Fashion Design Course & tuition fees
            </p>



            <div className="w-full overflow-x-auto">
              <table className="table-auto   border-collapse border border-gray-400">
                <thead>
                  <tr>
                    <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                      Career objective in fashion design
                    </th>
                    <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                      6-Month Course
                    </th>
                    <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                      1-year Course 12-Month
                    </th>
                    <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                      1-year Course 7-Month
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">
                      Gain foundational skills in fashion design and start a
                      junior designer role.
                    </td>
                    <td className="px-4 py-2 border border-gray-400">
                      Introduction to Fashion Design, Basic Sewing Techniques
                    </td>
                    <td className="px-4 py-2 border border-gray-400">
                      Advanced Fashion Design, Fashion Illustration, Fabric
                      Studies
                    </td>
                    <td className="px-4 py-2 border border-gray-400">
                      Fashion Marketing, Portfolio Development, Pattern Making
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">
                      Develop comprehensive design skills and secure a
                      position as an assistant designer.
                    </td>
                    <td className="px-4 py-2 border border-gray-400">
                      Creative Design Process, Textile Science
                    </td>
                    <td className="px-4 py-2 border border-gray-400">
                      Digital Fashion Design, Advanced Sewing Techniques
                    </td>
                    <td className="px-4 py-2 border border-gray-400">
                      Fashion Forecasting, Internship Opportunities
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* student gallary section  */}
          <div className="py-20">
            <TabSection ></TabSection>
          </div>

          <div>
            <Blogs></Blogs>
          </div>

          <div>
            <Maps></Maps>
          </div>

        </div>


      </div>
    </>
  );
};
export default CourseDetails;
