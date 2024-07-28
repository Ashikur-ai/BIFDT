/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { makeVisibleTime } from "../../../makeVisibleTime";
import ResponsiveButton from "../../../components/ResponsiveButton";

const BlogCard = ({ blog, slide = false }) => {
    const description = blog?.description || 'No description available.';
    const truncatedDescription = description.slice(0, 20).split(' ').slice(0, -1).join(' ') + (description.length > 200 ? '...' : '');
    return (

        // <div className={`card bg-white min-h-full overflow-hidden shadow-md rounded-lg flex flex-col gap-2 ${slide ? 'w-[50vw]' : 'w-[80%]'} sm:w-[320px]`}>
        //     <div className="min-h-48 w-full overflow-hidden ">
        //         <img className="min-h-48 max-h-48 w-full object-cover" src={blog?.blogImageUrl} />
        //     </div>
        //     <div className="p-4 flex-grow flex flex-col   overflow-hidden">
        //         <h2 className="text-lg font-bold mb-2">{blog?.title.slice(0, 70)}</h2>
        //         <p className="min-h-[100px] max-h-[100px] overflow-hidden" dangerouslySetInnerHTML={{ __html: blog?.description }}></p>
        //     </div>
        //     <div className="px-3 mx-auto mb-5 flex justify-between gap-5 items-center">
        //         <Link to={`/blogDetails/${blog?._id}`}>
        //             <button className="btn bg-primary text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max">
        //                 Read More
        //             </button>
        //         </Link>

        //         <p className="text-sm">{makeVisibleTime(blog?.date)}</p>

        //     </div>

        // </div>

        <div className={`card max-w-[160px] sm:max-w-[320px] sm:w-[320px] border border-gray-500 bg-base-100 ml-5 shadow-xl ${slide ? 'w-[60vw]' : 'w-[45%] md:w-[30%] lg:w-[20%]'}`}>
            <figure className="px-2 sm:px-10 pt-2 sm:pt-10 h-40 lg:h-full w-full ">
                <img
                    src={blog?.blogImageUrl}
                    alt="Blog"
                    className="rounded-xl w-full h-full object-cover"
                />
            </figure>
            <div className="card-body text-center flex flex-col justify-between p-2 sm:p-4">
                <div className="flex justify-center items-center flex-col">
                    <h2 className="card-title font-semibold text-sm sm:text-2xl">
                        {slide ? (blog?.title || 'Not Given') : (blog?.title || 'Not Given')}
                    </h2>
                    <p className=" overflow-hidden text-[10px] lg:text-sm" dangerouslySetInnerHTML={{ __html: truncatedDescription }}>
                    </p>
                </div>
                {/* <div className="px-3 mx-auto mb-5 lg:flex justify-center lg:justify-between  items-center">
                    <ResponsiveButton title={ "Read More" } link={`/blogDetails/${blog?._id}`} />
                    <p className="text-sm">{makeVisibleTime(blog?.date)}</p>

                </div> */}

                <div className="px-3 mx-auto mb-5 lg:flex justify-center lg:justify-between items-center">
                    <div className="flex flex-col lg:flex-row lg:gap-5 items-center">
                        <div className="pl-7 lg:pl-0">
                            {/* <ResponsiveButton title="Read More" link={`/blogDetails/${blog?._id}`} /> */}
                            <div className="lg:py-5 pb-2 lg:text-xl mt-2 text-[10px] flex  justify-center items-center">
                                <Link to={`/blogDetails/${blog?._id}`}>
                                    <button className="lg:p-3 p-1 rounded-lg bg-primary text-white hover:text-black  active:bg-white-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max mr-9 lg:mr-0">Read More
                                    </button>
                                </Link>

                            </div>
                        </div>
                        <p className="text-[8px] lg:text-sm -ml-2 lg:ml-0">{makeVisibleTime(blog?.date)}</p>
                    </div>
                </div>


            </div>
        </div>


    );
};

export default BlogCard;