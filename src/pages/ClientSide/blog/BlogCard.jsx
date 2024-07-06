/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { makeVisibleTime } from "../../../makeVisibleTime";

const BlogCard = ({ blog }) => {
    return (

        <div className="bg-white shadow-md rounded-lg flex flex-col gap-2 max-w-[320px]">
            <div className="min-h-48 w-full overflow-hidden ">
                <img className="min-h-48 max-h-48 w-full object-cover" src={blog?.blogImageUrl} />
            </div>
            <div className="p-4 flex-grow flex flex-col h-[150px] overflow-hidden">
                <h2 className="text-lg font-bold mb-2">{blog?.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: blog?.description }}></p>
            </div>
            <div className="px-3 mx-auto mb-5 flex justify-between gap-5 items-center">
                <Link to={`/blogDetails/${blog?._id}`}>
                    <button className="btn bg-[#f6861f] text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max">
                        Read More
                    </button>
                </Link>

                <p className="text-sm">{makeVisibleTime(blog?.date)}</p>

            </div>

        </div>

    );
};

export default BlogCard;