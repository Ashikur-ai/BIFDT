import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


import teacher1 from "../../../../assets/images/teacher1.jpg";
import teacher2 from "../../../../assets/images/teacher2.jpg";
import teacher3 from "../../../../assets/images/teacher3.jpg";
import teacher4 from "../../../../assets/images/teacher4.jpg";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { makeVisibleTime } from "../../../../makeVisibleTime";

const Blogs = () => {
  const axiosPublic = useAxiosPublic();
  const { data: blogs = [], refetch, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await axiosPublic.get('/blog');
      return res.data;
    }
  });
  console.log(blogs[0]?.blogImageUrl); 
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
        className="mySwiper bg-white"
      >
        {
          blogs.map(blog => <SwiperSlide key={blog._id}>
            <div className="bg-white shadow-md rounded-lg flex flex-col gap-2">
              <div className="min-h-48 w-full overflow-hidden">
                <img className="min-h-48 object-cover" src={blog?.blogImageUrl} />
              </div>
              <div className="p-4 flex-grow flex flex-col h-[150px] overflow-hidden">
                <h2 className="text-lg font-bold mb-2">{blog?.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: blog?.description }}></p>
              </div>
              <div className="px-3 mx-auto mb-5 flex justify-between gap-5 items-center">
                <Link to="/blogDetails">
                  <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max">
                    Read More
                  </button>
                </Link>

                <p className="text-sm">{makeVisibleTime(blog?.date)}</p>
                
              </div>

            </div>
          </SwiperSlide>)
        }

      </Swiper>
    </div>
  );
};

export default Blogs;
