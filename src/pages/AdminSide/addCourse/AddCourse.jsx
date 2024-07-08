import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';

const AddCourse = () => {
    const [formData, setFormData] = useState({
        objectives: '',
        notice: '',
        bangla: '',
        subtext: ''
    });



    const handleObjectivesChange = (value) => {
        setFormData({ ...formData, objectives: value });
    };

    const handleNoticeChange = (value) => {
        setFormData({ ...formData, notice: value });
    };



    const handleSubtextChange = (value) => {
        setFormData({ ...formData, subtext: value });
    };


    const handleBanglaChange = (value) => {
        setFormData({ ...formData, bangla: value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const notice = formData.notice;

        const objectives = formData.objectives;
        const banglatext = formData.bangla;
        const Subtext = formData.subtext;



        console.log(objectives, notice, banglatext, Subtext);
    }



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



    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isSemesterVisible, setIsSemesterVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const toggleSemesterVisibility = () => {
        setIsSemesterVisible(!isSemesterVisible);
    };

    return (
        <>
            <Helmet>
                <title>Dashboard | Add Course</title>
            </Helmet>
            <div className=''>
                <div className=''>
                    <section className="text-gray-600 body-font relative">
                        <div className="container mx-auto min-w-full">
                            <div className="lg:w-[75vw] w-full mx-auto bg-white mt-2 rounded-xl">
                                <div className="shadow-2xl  px-10 rounded-2xl">


                                    <p className='text-center text-2xl font-bold pb-5'>Add Course</p>
                                    <form action="" onSubmit={handleSubmit} className=''>

                                       <div className='grid grid-cols-1 md:grid-cols-2'>
                                            {/* Banner image */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Upload Course Banner image</label><br />
                                                    <input type="file" className="file-input file-input-bordered file-input-md w-full" />
                                                </div>
                                            </div>
    
                                            {/* title */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Course Title</label>
                                                    <input type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
    
    
                                            {/* Main course video */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Upload Course Main Video</label><br />
                                                    <input type="file" className="file-input file-input-bordered file-input-md w-full" />
                                                </div>
                                            </div>
                                       </div>



                                        <div className='flex pb-20'>

                                            {/* Notice */}
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm font-bold text-gray-600">Course Notice</label>
                                                    <ReactQuill value={formData.notice} onChange={handleNoticeChange} theme="snow"
                                                        modules={modules}
                                                        formats={formats}
                                                        placeholder="Enter course admission notice..."
                                                        readOnly={false}
                                                        bounds={'.app'}
                                                        scrollingContainer={'.app'} className="h-40" />
                                                </div>
                                            </div>


                                            {/* Subtext */}
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm font-bold text-gray-600">Course Subtext</label>
                                                    <ReactQuill value={formData.subtext} onChange={handleSubtextChange} theme="snow"
                                                        modules={modules}
                                                        formats={formats}
                                                        placeholder="Enter course subtext here..."
                                                        readOnly={false}
                                                        bounds={'.app'}
                                                        scrollingContainer={'.app'} className="h-40" />
                                                </div>
                                            </div>
                                        </div>



                                        <div className='flex pb-20'>
                                            {/* Bangla text */}
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Bangla Text</label>
                                                    <ReactQuill value={formData.bangla} onChange={handleBanglaChange} theme="snow"
                                                        modules={modules}
                                                        formats={formats}
                                                        placeholder="Enter Bangla Text..."
                                                        readOnly={false}
                                                        bounds={'.app'}
                                                        scrollingContainer={'.app'} className="h-40" />
                                                </div>
                                            </div>

                                            {/* Course objectives */}
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm font-bold text-gray-600">Course objectives</label>
                                                    <ReactQuill value={formData.objectives} onChange={handleObjectivesChange} theme="snow"
                                                        modules={modules}
                                                        formats={formats}
                                                        placeholder="Enter course objectives..."
                                                        readOnly={false}
                                                        bounds={'.app'}
                                                        scrollingContainer={'.app'} className="h-40" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="p-2 w-full">
                                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AddCourse;
