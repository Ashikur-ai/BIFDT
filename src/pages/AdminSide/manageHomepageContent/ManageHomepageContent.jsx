import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ManageHomepageContent = () => {
    let formData = {
        notice: '',
        description: ''

    }
    const axiosPublic = useAxiosPublic()
    const { data: homepageContent = [], refetch: homepageContentRefetch } = useQuery({
        queryKey: ['homepageContent'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent')
            return res?.data
        }
    })
    const { description: incomingDescription, imageUrl: incomingImageUrl, notice: incomingNotice, video_url: incomingVideo_url, video_section_video: incomingVideo_section_video } = homepageContent[0] || []
    formData.notice = incomingNotice ? incomingNotice : '';
    formData.description = incomingDescription ? incomingDescription : '';
    const imgHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
    const handleNoticeChange = (value) => {
        formData.notice = value
    };

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



    const handleSubmit = async (event) => {
        const toastId = toast.loading("Home page content is updating...");
        event.preventDefault();
        const form = event.target;
        const video_url = form.video_url.value || '';
        const video_section_video = form.video_section_video.value || ''
        const selectedImage = form.image.files[0] || {};
        // const author = form.author.value || '';
        // const meta_word = form.meta_word.value || '';
        const notice = formData.notice || '';
        const description = formData.description || '';
        let imageUrl = ''
        console.log({notice, description});
        if (!selectedImage?.name) {
            imageUrl = incomingImageUrl
        } else {
            const image = { image: selectedImage }

            const res = await axios.post(imgHostingApi, image, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            try {
                imageUrl = res?.data?.data?.display_url
            }
            catch (err) {
                console.log(err);
                imageUrl = incomingImageUrl
                toast.error(err?.message, { id: toastId });
            }
        }


        const data = { video_url, notice, imageUrl: imageUrl ? imageUrl : '', description, video_section_video };
        axiosPublic.post(`/updateHomepageContent/${homepageContent[0]?._id || 'notAvailable'}`, data)
            .then(res => {
                toast.success("Home page Content Updated Successfully!!", { id: toastId });
                if (res.data?.modifiedCount || res.data?.insertedId) {
                    console.log(res.data);
                    homepageContentRefetch()
                }
            })
            .catch(err => {
                console.log(err);
                toast.error(err?.message, { id: toastId });
            })

    }


    return (
        <>
            <Helmet>
                <title>Dashboard | Homepage content</title>
            </Helmet>
            <div className='bg-gray-100 text-black'>

                {/* form section  */}
                <div className=''>

                    <section className="text-gray-600 body-font relative w-full lg:w-[73vw] mx-auto">
                        <div className="container mt-2 mx-auto">

                            <div className="lg:w-full mx-auto bg-white  py-5 rounded-xl">
                                <p className='text-center text-2xl font-bold pb-2'>Manage Homepage Content</p>

                                <div className="shadow-2xl  px-10 rounded-2xl">
                                    <form action="" onSubmit={handleSubmit} className='flex flex-wrap -m-2'>



                                        {/* video upload  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Homepage section video</label><br />
                                                <input defaultValue={incomingVideo_url} name='video_url' type="text" placeholder='Video Url' className="file-input file-input-bordered file-input-md w-full max-w-xs px-2" />
                                            </div>
                                        </div>

                                        {/* image upload  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Homepage section Image</label><br />
                                                <input name='image' type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                                            </div>
                                        </div>

                                        {/* video section video upload upload  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Video section's video</label><br />
                                                <input defaultValue={incomingVideo_section_video || ''} name='video_section_video' type="text" placeholder='Video Url' className="file-input file-input-bordered file-input-md w-full max-w-xs px-2" />
                                            </div>
                                        </div>
                                        <div className='w-1/2'></div>

                                        {/* Notice */}
                                        <div className="p-2 sm:w-1/2 mb-10 h-full">
                                            <div className="relative">
                                                <label className="leading-7 text-sm font-bold text-gray-600">Add Notice</label>
                                                <ReactQuill value={formData.notice} onChange={handleNoticeChange} theme="snow"
                                                    modules={modules}
                                                    formats={formats}
                                                    placeholder="Enter course admission notice..."
                                                    readOnly={false}
                                                    bounds={'.app'}
                                                    scrollingContainer={'.app'} className="min-h-64 border border-gray-300" />
                                            </div>
                                        </div>




                                        {/* Description */}
                                        <div className="p-2 h-full sm:w-1/2 mb-20">
                                            <div className="relative">
                                                <label className="leading-7 text-sm font-bold text-gray-600">Homepage Description</label>
                                                <ReactQuill value={formData?.description} onChange={handleDescriptionChange} theme="snow"
                                                    modules={modules}
                                                    formats={formats}
                                                    placeholder="Enter homepage description..."
                                                    readOnly={false}
                                                    bounds={'.app'}
                                                    scrollingContainer={'.app'} className="min-h-64 border border-gray-300" />
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

export default ManageHomepageContent;