import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { makeVisibleTime } from '../../../makeVisibleTime';
import OtherBlogs from './OtherBlogs';

const BlogDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: blogData = {}, refetch: blogDataRefetch, isLoading } = useQuery({
        queryKey: ['blogData', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/singleBlog/${id}`)
            return res?.data
        }
    })
    if(isLoading){
        return ''
    }
    console.log(blogData);
    const {author, blogImageUrl, date, description, meta_word, title,_id} = blogData;
    console.log(author);
    return (
        <div className='lg:px-20'>
            <p className="text-4xl m-10"><span className='text-pink-600 '>Blog</span> Details</p>
            <div className='lg:flex gap-5 sm:m-4 pb-20'>
                <div className='lg:w-3/4 mx-auto bg-gray-200'>
                    <img
                    className='w-full'
                        src={blogImageUrl}
                        alt="Shoes"

                    />
                    <div className='flex items-center gap-10 pt-10'>
                        <p className='pt-2 text-white px-10 bg-pink-600'>{makeVisibleTime(date)}</p>
                        <p className='text-2xl font-bold'>{title}</p>
                    </div>

                    <div className='py-10'>
                        <p dangerouslySetInnerHTML={{ __html: description }} className='px-2'>
                        </p>
                    </div>
                </div>
                <div className='lg:w-1/4 pt-10 px-2 text-2xl'> Another Blogs
                    
                    <OtherBlogs detailsBlogId={_id} />



                </div>


            </div>

            <div className="lg:px-5 px-2 mb-20">
                <p>Leave a comment</p>
                <input type="text" placeholder="Your Name" className="input mb-5 input-bordered w-full max-w-xs" /> <br />
                <input type="text" placeholder="Leave a Comment" className="input input-bordered w-full max-w-xs" /> <br />
                <button className='p-2 mt-2 rounded-lg text-white px-10 bg-pink-600'>Submit</button>
            </div>
        </div>
    );
};

export default BlogDetails;