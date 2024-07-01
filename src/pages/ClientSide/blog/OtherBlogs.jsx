import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { makeVisibleTime } from "../../../makeVisibleTime";

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
    console.log(showingBlogs?.length);
    return (
        <>
            {
                showingBlogs?.map(blog => <div key={blog?._id} className='flex pt-5'>
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={blog?.blogImageUrl} />
                        </div>
                    </div>
                    <div className='p-2'>
                        <p className='text-sm'>{blog?.title}</p>
                        <p className='text-sm font-bold pt-2'>{makeVisibleTime(blog?.date)}</p>
                    </div>
                </div>)
            }

        </>
    );
};

export default OtherBlogs;