import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Editor } from '@tinymce/tinymce-react';
import { uploadImg } from '../../../UploadFile/uploadImg';
import { uploadVideo } from '../../../UploadFile/uploadVideo';
import toast from 'react-hot-toast';
const UpdateBlog = () => {
    const [tinyDescription, setTinyDescription] = useState('')
    const { id } = useParams();
    const [descriptionErr, setDescriptionErr] = useState(false)
    const axiosPublic = useAxiosPublic();

    const { data: blogData = {}, refetch: blogDataRefetch, isLoading } = useQuery({
        queryKey: ['blogData', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/singleBlog/${id}`)
            return res?.data
        }
    })
    useEffect(() => {
        if (!isLoading) {
            setTinyDescription(blogData.description);
        }
    }, [blogData, isLoading]);
    if (isLoading) {
        return ''
    }
    const { title: incomingTitle, blogImageUrl: incomingBlogImageUrl, date: incomingDate, meta_word: incomingMeta_word, author: incomingAuthor, description: incomingDescription, videoUrl: incomingVideoUrl } = blogData;

    // Format the date as YYYY-MM-DD
    const handleDescriptionChange = (value) => {
        setTinyDescription(value)
    };



    const handleSubmit = async (event) => {
        setTinyDescription(tinyDescription)
        setDescriptionErr(false)
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const blogImage = form.blogImg.files[0];
        let videoUrl = form.videoUrl.value;
        const video = form.video.files[0];
        const date = form.date.value
        const meta_word = form.meta_word.value;
        const author = form.author.value;
        const description = tinyDescription;
        if (!description) {
            setTinyDescription(tinyDescription)
            return setDescriptionErr(true)
        }
        const toastId = toast.loading("Blog is updating...");
        let blogImageUrl = incomingBlogImageUrl
        if (!blogImage?.name) {

            blogImageUrl = incomingBlogImageUrl
        } else {
            blogImageUrl = await uploadImg(blogImage) || incomingBlogImageUrl
        }

        if (!videoUrl) {
            if (video?.name) {
                videoUrl = await uploadVideo(video)
            } else {
                videoUrl = ''
            }
        }
        const data = { title, blogImageUrl, meta_word, author, description, date, videoUrl };

        axiosPublic.put(`/updateBlog/${id}`, data)
            .then(res => {
                setTinyDescription(tinyDescription)
                if (res.data.modifiedCount) {
                    toast.success("Blog added Successfully!!", { id: toastId });

                }
            })
            .catch((err) => {
                toast.error(err?.message, { id: toastId });
            })
    }

    return (
        <>
            <Helmet>
                <title>Dashboard | Update Blog</title>
            </Helmet>
            <div className='bg-gray-100 text-black'>

                {/* form section  */}
                <div className=''>

                    <section className="text-gray-600 body-font relative  w-full lg:w-[73vw] mx-auto">
                        <div className="container   mx-auto">

                            <div className="lg:w-full mx-auto bg-white  mt-2 rounded-xl">


                                <div className="shadow-2xl  px-10 rounded-2xl">
                                    <p className='text-center text-2xl font-bold py-2'>Update Blog</p>
                                    <form action="" onSubmit={handleSubmit} className='flex flex-wrap -m-2'>

                                        {/* Title  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Blog title</label>
                                                <input type="text" name="title" defaultValue={incomingTitle} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* author  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Author Name</label>
                                                <input type="text" defaultValue={incomingAuthor} name="author" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/*videoUrl  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Video Url</label>
                                                <input defaultValue={incomingVideoUrl} type="text" name="videoUrl" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>


                                        {/* video upload  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Upload Video</label><br />
                                                <input type="file" name='video'
                                                    accept="video/*" className="file-input file-input-bordered file-input-md w-full  " />
                                            </div>
                                        </div>
                                        {/* image url  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative w-full">
                                                <label className="leading-7 text-sm text-gray-600">Blog Banner Image</label><br />
                                                <input type="file" name='blogImg' className="file-input file-input-bordered file-input-md w-full" />
                                            </div>
                                        </div>


                                        {/* Meta keyword  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative ">
                                                <label className="leading-7 text-sm text-gray-600">Meta Keyword</label>
                                                <input defaultValue={incomingMeta_word} type="text" name="meta_word" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* Date  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Date</label>
                                                <input defaultValue={incomingDate} type="date" name="date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>



                                        {/* Description */}
                                        <div className="p-2 w-full mb-10 h-full">
                                            <div className="relative">
                                                <label className="leading-7 text-sm font-bold text-gray-600">Blog Description</label>
                                                <Editor
                                                    apiKey='rcgwgkgfl2fboctr4kanu1wyo0q2768tzdj3sxx94rb4s4es'
                                                    init={{
                                                        height: 500,
                                                        max_height: "500",
                                                        width: '100%',
                                                        border: "0px",
                                                        //    menubar: false,
                                                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                                        tinycomments_mode: 'embedded',
                                                        tinycomments_author: 'Author name',

                                                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                                    }}
                                                    value={tinyDescription}
                                                    onEditorChange={handleDescriptionChange} />
                                            </div>
                                        </div>

                                        <div className="p-2 w-full">
                                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                        </div>
                                    </form>


                                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                        <a className="text-indigo-500">info@bifdt.info</a>
                                        <p className="leading-normal my-5">House # 3/GA, Shyamoli
                                            <br /> Road # 1. Dhaka-1207.
                                        </p>
                                        <span className="inline-flex">
                                            <a className="text-gray-500">
                                                <Link to="https://x.com/"><BiLogoTwitter className="text-2xl" /></Link>
                                            </a>
                                            <a className="ml-4 text-gray-500">
                                                <Link to="https://www.youtube.com/"><TbBrandYoutubeFilled className="text-2xl" /></Link>
                                            </a>
                                            <a className="ml-4 text-gray-500">
                                                <Link to="https://www.facebook.com/"><FaFacebook className="text-xl" /></Link>
                                            </a>

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default UpdateBlog;