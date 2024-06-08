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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper bg-white   "
      >
        <SwiperSlide>
          <div className="card bg-white shadow-2xl border border-pink-800">
            <figure className="">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*"
                alt="Shoes"
                className=" h-44"
              />
            </figure>
            <div className="card-body items-center text-left">
              <p className="card-title">
                Summer 2024 Fashion Trends: What to Wear This Season
              </p>
              
              <p>
                Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...
              </p>
              <div className="card-actions">
                <div className="flex justify-between gap-5 items-center">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  Read More
                  </button>
                  
                  <p className="text-sm">15 june, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="card bg-base-100  shadow-2xl border border-pink-800">
            <figure className="">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/spring-summer-2024-fashion-trends-65fdb5a49a846.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*"
                alt="Shoes"
                className=" h-44"
              />
            </figure>
            <div className="card-body items-center text-left">
              <p className="card-title">
                What the NewYork Fashion did: What to Wear This Season
              </p>
              
              <p>
                Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...
              </p>
              <div className="card-actions">
                <div className="flex justify-between gap-5 items-center">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  Read More
                  </button>
                  
                  <p className="text-sm">15 june, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div className="card bg-base-100  shadow-2xl border border-pink-800">
            <figure className="">
              <img
                src="https://www.boxmark.com/0cache/bilder152_900x600_f_center_middle.jpg"
                alt="Shoes"
                className=" h-44"
              />
            </figure>
            <div className="card-body items-center text-left">
              <p className="card-title">
                Leather Design Course 
              </p>
              
              <p>
                Dive into the hottest trends of Summer 2024 with our
               Lorem ipsum dolor sit amet consectetur adit Lorem ipsum dolor d .
              </p>
              <div className="card-actions">
                <div className="flex justify-between gap-5 items-center">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  Read More
                  </button>
                  
                  <p className="text-sm">15 june, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div className="card bg-base-100  shadow-2xl border border-pink-800">
            <figure className="">
              <img
                src="https://cdn.dribbble.com/userupload/8647640/file/original-4215771ec4810cd6ecf1485df5d55d96.png?resize=400x300&vertical=center"
                alt="Shoes"
                className=" h-44"
              />
            </figure>
            <div className="card-body items-center text-left">
              <p className="card-title">
                Pattern Design Course
              </p>
              
              <p>
                Dive into the hottest trends o our
                comprehensive guide. From bold prints to sustainable fashion,...
              </p>
              <div className="card-actions">
                <div className="flex justify-between gap-5 items-center">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  Read More
                  </button>
                  
                  <p className="text-sm">15 june, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>



      </Swiper>
    </div>
  );
};

export default Blogs;
