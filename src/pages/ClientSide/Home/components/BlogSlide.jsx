import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

const BlogSlide = ({blog}) => {
    return (
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
    );
};

export default BlogSlide;