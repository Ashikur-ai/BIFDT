import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link, useParams } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateBlog = () => {
    const { id } = useParams();
    const [descriptionErr, setDescriptionErr] = useState(false)
    const axiosPublic = useAxiosPublic();
    const imgHostingKey = import.meta.env.VITE_IMG_HOSTING_KEY;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
    const formData = {
        description: '',

    }
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
    const { title: incomingTitle, blogImageUrl: incomingBlogImageUrl, date: incomingDate, meta_word: incomingMeta_word, author: incomingAuthor, description: incomingDescription } = blogData
    formData.description = incomingDescription;
    const showingData = new Date(incomingDate || 0);

    // Format the date as YYYY-MM-DD
    const formattedDate = showingData?.toISOString()?.split('T')[0];
    console.log(formattedDate); 
    const handleDescriptionChange = (value) => {
        formData.description = value
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];



    const handleSubmit = async(event) => {
        setDescriptionErr(false)
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const blogImage = form.blogImg.files[0];
        const date = new Date(form.date.value).getTime();
        const meta_word = form.meta_word.value;
        const author = form.author.value;
        const description = formData.description;
        console.log(description);
        if (!description) {
            return setDescriptionErr(true)
        }
        let blogImageUrl = incomingBlogImageUrl
        if (!blogImage?.name) {
            blogImageUrl = incomingBlogImageUrl
        } else {
            const image = { image: blogImage }

            const res = await axios.post(imgHostingApi, image, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            try {
                blogImageUrl = res?.data?.data?.display_url
            }
            catch (err) {
                console.log(err);
                blogImageUrl = incomingBlogImageUrl
            }
        }


        const data = { title, blogImageUrl, date, meta_word, author, description };
        console.log(data)

        axiosPublic.put(`/updateBlog/${id}`, data)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    console.log('data updated')
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Blog has been Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
            .catch()
        form.reset();
    }

    return (
        <>
            <Helmet>
                <title>Dashboard | Update Blog</title>
            </Helmet>
            <div className='bg-gray-100 text-black'>

                {/* form section  */}
                <div className=''>

                    <section className="text-gray-600 body-font relative">
                        <div className="container ml-2  mx-auto">

                            <div className="lg:w-full md:w-2/3 mx-auto bg-white  mt-2 rounded-xl">


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

                                        {/* Date  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Date</label>
                                                <input type="date" defaultValue={formattedDate} name="date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>

                                        {/* Meta keyword  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Meta Keyword</label>
                                                <input defaultValue={incomingMeta_word} type="text" name="meta_word" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>

                                        {/* image url  */}
                                        <div className="p-2 w-1/4">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Blog Banner Image</label><br />
                                                <input type="file" name='blogImg' className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                                            </div>
                                        </div>


                                        {/* Description */}
                                        <div className="p-2 w-full mb-10">
                                            <div className="relative">
                                                <label className="leading-7 text-sm font-bold text-gray-600">Blog Description</label>
                                                <ReactQuill value={formData.description} onChange={handleDescriptionChange} theme="snow"
                                                    modules={modules}
                                                    formats={formats}
                                                    placeholder="Enter course admission notice..."
                                                    readOnly={false}
                                                    bounds={'.app'}
                                                    scrollingContainer={'.app'} className="h-64" />
                                            </div>
                                        </div>

                                        <div className="p-2 w-full">
                                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                        </div>
                                    </form>


                                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                        <a className="text-indigo-500">info@bifdt.com</a>
                                        <p className="leading-normal my-5">House # 3/GA,
                                            <br />Shyamoli, Road # 1. Dhaka-1207.
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