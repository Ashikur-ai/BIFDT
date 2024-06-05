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
      <p className="text-pink-700 font-bold text-4xl text-center py-5 bg-white ">
        Blogs
      </p>

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
        className="mySwiper bg-white  rounded "
      >
        <SwiperSlide>
          <div className="card bg-base-100  shadow-2xl border border-pink-800">
            <figure className="px-10 pt-10">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*"
                alt="Shoes"
                className="rounded-xl h-44"
              />
            </figure>
            <div className="card-body items-center text-left">
              <p className="card-title">
                Summer 2024 Fashion Trends: What to Wear This Season
              </p>
              <div className="flex justify-between gap-5 items-center">
                <h1 className="flex items-center gap-5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="size-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                  </svg>{" "}
                  <span className="-mb-2">Sarah Adams</span>
                </h1>
                <h1 className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  <span className="-mb-2">May 10, 2024</span>
                </h1>
              </div>
              <p>
                Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...
              </p>
              <div className="card-actions">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100  shadow-2xl border border-pink-800">
            <figure className="px-10 pt-10">
              <img
                src="https://media.vogue.co.uk/photos/5d54494ddf3584000807c201/16:9/w_4880,h_2745,c_limit/original"
                alt="Shoes"
                className="rounded-xl h-44"
              />
            </figure>
            <div className="card-body items-center text-left">
              <p className="card-title">
                Summer 2024 Fashion Trends: What to Wear This Season
                          </p>
                          <div className="flex justify-between gap-5 items-center">
                <h1 className="flex items-center gap-5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="size-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                  </svg>{" "}
                  <span className="-mb-2">Sarah Adams</span>
                </h1>
                <h1 className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  <span className="-mb-2">May 10, 2024</span>
                </h1>
              </div>
              <p>
                Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...
              </p>
              <div className="card-actions">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100  shadow-2xl border border-pink-800">
            <figure className="px-10 pt-10">
              <img
                src="https://nypost.com/wp-content/uploads/sites/2/2021/01/paris-fashion-week-78.jpg?quality=75&strip=all"
                alt="Shoes"
                className="rounded-xl h-44"
              />
            </figure>
            <div className="card-body items-center text-left">
              <p className="card-title">
                Summer 2024 Fashion Trends: What to Wear This Season
                          </p>
                          <div className="flex justify-between gap-5 items-center">
                <h1 className="flex items-center gap-5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="size-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                  </svg>{" "}
                  <span className="-mb-2">Sarah Adams</span>
                </h1>
                <h1 className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  <span className="-mb-2">May 10, 2024</span>
                </h1>
              </div>
              <p>
                Dive into the hottest trends of Summer 2024 with our
                comprehensive guide. From bold prints to sustainable fashion,...
              </p>
              <div className="card-actions">
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100  shadow-2xl border border-pink-800">
            <figure className="px-10 pt-10">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*"
                alt="Shoes"
                className="rounded-xl h-44"
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
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100  shadow-2xl border border-pink-800">
            <figure className="px-10 pt-10">
              <img
                src="https://media.vogue.co.uk/photos/5d54494ddf3584000807c201/16:9/w_4880,h_2745,c_limit/original"
                alt="Shoes"
                className="rounded-xl h-44"
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
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100  shadow-2xl border border-pink-800">
            <figure className="px-10 pt-10">
              <img
                src="https://nypost.com/wp-content/uploads/sites/2/2021/01/paris-fashion-week-78.jpg?quality=75&strip=all"
                alt="Shoes"
                className="rounded-xl h-44"
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
                <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blogs;
