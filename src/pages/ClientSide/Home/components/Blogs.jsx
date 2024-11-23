

import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import BlogCard from "../../blog/BlogCard";
import ResponsiveButton from "../../../../components/ResponsiveButton";
import Sun from "../../../../components/Sun";

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
    <div className="px-2 sm:px-10 md:px-20 lg:mt-20">
      <div className="relative text-black font-bold text-xl lg:text-4xl text-center bg-white">
        Blogs
        <div className="" style={{ position: "relative" }}>
          <div className="w-max absolute top-[500px] right-0 z-10"><Sun /></div>
          <div className="w-max absolute bottom-[-130px] left-0 z-10"><Sun /></div>
        </div>
        <ResponsiveButton title={"See More"} link={"/blogs"} />
      </div>
      <Marquee speed={35} pauseOnHover={true}>
        <div className="flex gap-5 lg:gap-10" style={{ position: "relative" }}>
        
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} slide={true} />
          ))}
        </div>
      </Marquee>

      <div className="lg:py-5 pb-2 lg:text-xl mt-2 text-[10px] flex lg:hidden justify-center items-center">
        <Link to="/blogs">
          <button className="lg:p-3 p-1 rounded-lg bg-primary text-white hover:text-black  active:bg-white-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max mr-9 lg:mr-0">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
