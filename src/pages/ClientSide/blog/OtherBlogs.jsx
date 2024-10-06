import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { makeVisibleTime } from "../../../makeVisibleTime";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const OtherBlogs = ({ detailsBlogId }) => {
    const axiosPublic = useAxiosPublic();
    const { data: blogs = [], refetch, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blog');
            return res.data;
        }
    });
    if (isLoading) {
        return ''
    }
    const showingBlogs = blogs?.filter(blog => blog?._id !== detailsBlogId);
    return (
        <>
            {
                showingBlogs?.map(blog =>
                    <Link key={blog?._id} to={`/blogDetails/${blog?._id}`}>
                        <div className='flex pt-5'>
                            <div className="avatar">
                                <div className="w-24 rounded">
                                    {
                                        blog?.videoUrl ? <ReactPlayer
                                            controls="true"
                                            url={blog?.videoUrl}
                                            width="100%"
                                            height={'100%'}
                                        /> : <img
                                            className='w-full h-full object-cover'
                                            src={blog?.blogImageUrl}
                                            alt="Shoes"

                                        />
                                    }
                                </div>
                            </div>
                            <div className='p-2'>
                                <p className='text-sm'>{blog?.title}</p>
                                <p className='text-sm font-bold pt-2'>{makeVisibleTime(blog?.date)}</p>
                            </div>
                        </div>
                    </Link>
                )
            }

        </>
    );
};

export default OtherBlogs;