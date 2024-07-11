import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';
import { Editor } from '@tinymce/tinymce-react';

const AddCourse = () => {
    const [imageInput, setImageInput] = useState('')
    const [allImages, setAllImages] = useState([])
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isSemesterVisible, setIsSemesterVisible] = useState(false);
    const [formData, setFormData] = useState({
        objectives: '',
        notice: '',
        bangla: '',
        subtext: '',
        admissionNotice: ''
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
    const handleAdmissionNotice = (value) => {
        setFormData({ ...formData, admissionNotice: value });
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



    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const toggleSemesterVisibility = () => {
        setIsSemesterVisible(!isSemesterVisible);
    };
    const handleImageInputField = (e) => {
        console.log(e.target.files[0]);
        setImageInput(e.target.files[0])

    }
    const handleStoreImages = () => {


        if (imageInput === '') {
            return
        }
        console.log([...allImages, imageInput]);
        setAllImages([...allImages, { image: imageInput, id: new Date().getTime() }]);
        setImageInput('');
        document.getElementById('courseImageInputField').value = '';
    }
    const handleDeleteImage = (comingImage) => {
        const newImageArray = allImages.filter(image => image.id !== comingImage.id)
        setAllImages(newImageArray)
    }
    // Array.from(files)
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
                                            {/* title */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Course Title</label>
                                                    <input type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            {/* subtitle */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Course Subtitle</label>
                                                    <input type="text" id="title" name="subtitle" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            {/* Banner images */}
                                            <div className='w-full md:col-span-2'>
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Upload Course Banner images</label>
                                                <div className='w-full'>
                                                    <div className="p-2 w-full">
                                                        <div className="relative space-y-2">
                                                            <label className="leading-7 text-sm text-gray-600 font-medium">Select Image</label><br />
                                                            <input id='courseImageInputField' onChange={handleImageInputField} type="file" name='image1' className="file-input file-input-bordered file-input-md w-full" />
                                                            <p onClick={handleStoreImages} className='btn flex flex-col justify-center items-center px-7 py-1 rounded-md bg-primary text-white hover:font-bold transition-all duration-300 hover:bg-orange-700  active:bg-primary focus:outline-none focus:ring focus:ring-red-300 active:scale-90 focus:text-white w-max'>Add</p>
                                                            <p>Added Image</p>
                                                            {allImages?.length < 1 && <p>No Image Added!!</p>}

                                                            <div className="flex flex-wrap gap-4 pb-5">
                                                                {allImages.map((image, index) => (
                                                                    <div key={index} className="w-28 h-24 relative border border-gray-500 rounded-lg p-1">
                                                                        <p onClick={() => handleDeleteImage(image)} className='text-center bg-gray-200 w-6  h-6 rounded-md ml-auto mb-2 cursor-pointer'>X</p>
                                                                        <img src={URL.createObjectURL(image.image)} alt="preview" className=" h-16 object-cover rounded-md mx-auto pb-2" />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            {/* Main course video */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Upload Course Main Video</label><br />
                                                    <input type="text" name='videoUrl' className="file-input file-input-bordered file-input-md w-full" />
                                                </div>
                                            </div>
                                            {/* Banner images */}
                                            <div className='w-full'>
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Sub Videos</label>
                                                <div className='md:col-span-2 grid md:grid-cols-2'>
                                                    <div className="p-2 w-full">
                                                        <div className="relative">
                                                            <label className="leading-7 text-sm text-gray-600 font-medium">Video title</label><br />
                                                            <input type="text" name='subVideoTitle' className="file-input file-input-bordered file-input-md w-full" />
                                                        </div>
                                                    </div>
                                                    <div className="p-2 w-full">
                                                        <div className="relative">
                                                            <label className="leading-7 text-sm text-gray-600 font-medium">Video Url</label><br />
                                                            <input type="text" name='subVideoUrl' className="file-input file-input-bordered file-input-md w-full" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className='btn flex flex-col justify-center items-center px-7 py-1 rounded-md bg-primary text-white hover:font-bold transition-all duration-300 hover:bg-orange-700  active:bg-primary focus:outline-none focus:ring focus:ring-red-300 active:scale-90 focus:text-white w-max'>Add</button>
                                            </div>
                                        </div>



                                        <div className='flex pb-20'>

                                            {/* Notice */}
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm font-bold text-gray-600">Course Notice</label>
                                                    <Editor
                                                        apiKey='rcgwgkgfl2fboctr4kanu1wyo0q2768tzdj3sxx94rb4s4es'
                                                        init={{
                                                            height: 400,
                                                            max_height: "500",
                                                            width: '100%',
                                                            border: "0px",
                                                            //    menubar: false,
                                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                                            tinycomments_mode: 'embedded',
                                                            tinycomments_author: 'Author name',
                                                            // mergetags_list: [
                                                            //   { value: 'First.Name', title: 'First Name' },
                                                            //   { value: 'Email', title: 'Email' },
                                                            // ],
                                                            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                                        }}
                                                        value={formData.notice}
                                                        onEditorChange={handleNoticeChange} />
                                                </div>
                                            </div>


                                            {/* admission Notice */}
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm font-bold text-gray-600">Admission Notice</label>

                                                    <Editor
                                                        apiKey='rcgwgkgfl2fboctr4kanu1wyo0q2768tzdj3sxx94rb4s4es'
                                                        init={{
                                                            height: 400,
                                                            max_height: "300",
                                                            width: '100%',
                                                            border: "0px",
                                                            //    menubar: false,
                                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                                            tinycomments_mode: 'embedded',
                                                            tinycomments_author: 'Author name',
                                                            // mergetags_list: [
                                                            //   { value: 'First.Name', title: 'First Name' },
                                                            //   { value: 'Email', title: 'Email' },
                                                            // ],
                                                            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                                        }}
                                                        value={formData.admissionNotice}
                                                        onEditorChange={handleAdmissionNotice} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex pb-20'>

                                            {/* Bangla Text */}
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm font-bold text-gray-600">Bangla Text</label>
                                                    <Editor
                                                        apiKey='rcgwgkgfl2fboctr4kanu1wyo0q2768tzdj3sxx94rb4s4es'
                                                        init={{
                                                            height: 400,
                                                            max_height: "500",
                                                            width: '100%',
                                                            border: "0px",
                                                            //    menubar: false,
                                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                                            tinycomments_mode: 'embedded',
                                                            tinycomments_author: 'Author name',
                                                            // mergetags_list: [
                                                            //   { value: 'First.Name', title: 'First Name' },
                                                            //   { value: 'Email', title: 'Email' },
                                                            // ],
                                                            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                                        }}
                                                        value={formData.bangla}
                                                        onEditorChange={handleBanglaChange} />
                                                </div>
                                            </div>


                                            {/* Course Objective */}
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm font-bold text-gray-600">Course Objective</label>

                                                    <Editor
                                                        apiKey='rcgwgkgfl2fboctr4kanu1wyo0q2768tzdj3sxx94rb4s4es'
                                                        init={{
                                                            height: 400,
                                                            max_height: "300",
                                                            width: '100%',
                                                            border: "0px",
                                                            //    menubar: false,
                                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                                            tinycomments_mode: 'embedded',
                                                            tinycomments_author: 'Author name',
                                                            // mergetags_list: [
                                                            //   { value: 'First.Name', title: 'First Name' },
                                                            //   { value: 'Email', title: 'Email' },
                                                            // ],
                                                            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                                        }}
                                                        value={formData.objectives}
                                                        onEditorChange={handleObjectivesChange} />
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
