import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import teacher1 from "../../../../assets/images/teacher1.jpg";
import teacher2 from "../../../../assets/images/teacher2.jpg";
import teacher3 from "../../../../assets/images/teacher3.jpg";
import teacher4 from "../../../../assets/images/teacher4.jpg";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="">
      

      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper bg-white   "
      >
        <SwiperSlide>
          <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-96 mb-10">
            <div className="h-64 w-full overflow-hidden">
              <img src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h2 className="text-lg font-bold mb-2">Summer 2024 Fashion Trends: What to Wear This Season</h2>
              <p className="flex-grow">Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...</p>
            </div>
            <div className="px-10 mx-auto mb-5 flex justify-between gap-5 items-center">
              <Link to="/blogDetails">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  Read More
                </button>
              </Link>

              <p className="text-sm">6 May, 2024</p>
            </div>

          </div>



        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-96">
            <div className="h-64 w-full overflow-hidden">
              <img src="https://hips.hearstapps.com/hmg-prod/images/spring-summer-2024-fashion-trends-65fdb5a49a846.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h2 className="text-lg font-bold mb-2">Summer 2024 Fashion Trends: What to Wear This Season</h2>
              <p className="flex-grow">Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...</p>
            </div>
            <div className="px-10 mx-auto mb-5 flex justify-between gap-5 items-center">
              <Link to="/blogDetails">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  Read More
                </button>
              </Link>

              <p className="text-sm">6 May, 2024</p>
            </div>

          </div>



        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-96">
            <div className="h-48 w-full overflow-hidden">
              <img src="https://www.boxmark.com/0cache/bilder152_900x600_f_center_middle.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h2 className="text-lg font-bold mb-2">Summer 2024 Fashion Trends: What to Wear This Season</h2>
              <p className="flex-grow">Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...</p>
            </div>
            <div className="px-10 mx-auto mb-5 flex justify-between gap-5 items-center">
              <Link to="/blogDetails">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  Read More
                </button>
              </Link>

              <p className="text-sm">6 May, 2024</p>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-96">
            <div className="h-48 w-full overflow-hidden">
              <img src="https://cdn.dribbble.com/userupload/8647640/file/original-4215771ec4810cd6ecf1485df5d55d96.png?resize=400x300&vertical=center" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h2 className="text-lg font-bold mb-2">Summer 2024 Fashion Trends: What to Wear This Season</h2>
              <p className="flex-grow">Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...</p>
            </div>
            <div className="px-10 mx-auto mb-5 flex justify-between gap-5 items-center">
              <Link to="/blogDetails">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  Read More
                </button>
              </Link>

              <p className="text-sm">6 May, 2024</p>
            </div>

          </div>


         

        </SwiperSlide>

        <SwiperSlide>
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-96">
            <div className="h-48 w-full overflow-hidden">
              <img src="https://cache.careers360.mobi/media/presets/860X430/article_images/2020/6/23/Know_all_about_leather_designing.webp" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h2 className="text-lg font-bold mb-2">Summer 2024 Fashion Trends: What to Wear This Season</h2>
              <p className="flex-grow">Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...</p>
            </div>
            <div className="px-10 mx-auto mb-5 flex justify-between gap-5 items-center">
              <Link to="/blogDetails">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  Read More
                </button>
              </Link>

              <p className="text-sm">6 May, 2024</p>
            </div>

          </div>


         

        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Blogs;
