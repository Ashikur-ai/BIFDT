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
import Marquee from "react-fast-marquee";
import BlogCard from "../../blog/BlogCard";

const Blogs = () => {
  const axiosPublic = useAxiosPublic();
  const { data: blogs = [], refetch, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await axiosPublic.get('/blog');
      return res.data;
    }
  });
  return (
    <div className="">

      <Marquee
        speed={35}
        pauseOnHover={true}
      >
        <div className='flex gap-20 px-20'>
          {
            blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
          }
        </div>

      </Marquee>

    </div>
  );
};

export default Blogs;
