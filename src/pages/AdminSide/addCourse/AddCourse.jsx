import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Helmet } from 'react-helmet-async';
import { Editor } from '@tinymce/tinymce-react';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SubVideos from '../../../components/SubVideos';
import { uploadImg } from '../../../UploadFile/uploadImg';
import AddedImage from '../../../components/backendComponents/AddedImage';
import { uploadVideo } from '../../../UploadFile/uploadVideo';

const AddCourse = () => {
    const axiosPublic = useAxiosPublic()
    const [allImages, setAllImages] = useState([])
    const [imageInputErr, setImageInputErr] = useState('')
    const [allParallaxImages, setParallaxAllImages] = useState([])
    const [parallaxImageInputErr, setParallaxImageInputErr] = useState('')
    const [subVideosArray, setSubVideos] = useState([]);
    const [subVideoTitle, setSubVideoTitle] = useState('');
    const [subVideoUrl, setSubVideoUrl] = useState('')
    const [subVideoErr, setSubVideoErr] = useState('')
    const [formData, setFormData] = useState({
        notice: '',
        bangla: '',
        admissionNotice: ''
    });
    const [formDataErr, setFormDataErr] = useState({
        notice: '',
        bangla: '',
        admissionNotice: ''
    });


    const handleNoticeChange = (value) => {
        setFormData({ ...formData, notice: value });
    };


    const handleBanglaChange = (value) => {
        setFormData({ ...formData, bangla: value });
    };
    const handleAdmissionNotice = (value) => {
        setFormData({ ...formData, admissionNotice: value });
    };
    const handleAddSubVideo = () => {
        setSubVideos([...subVideosArray, { id: new Date().getTime(), title: subVideoTitle, url: subVideoUrl }])
        setSubVideoTitle('')
        setSubVideoUrl('')
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.courseTitle.value;
        const metaTag = form.metaTag.value;
        const subtitle = form.subtitle.value;
        const mainVideo = form.videoUrl.files[0] || {};
        const homePageCourseImage = form.homePageCourseImage.files[0] || {};
        const description = form.description.value
        let isValid = true;
        const newFormDataErr = {
            notice: '',
            bangla: '',
            admissionNotice: ''
        };
        setFormDataErr(newFormDataErr)
        setImageInputErr('');
        setParallaxImageInputErr('');
        setSubVideoErr('')
        if (formData.notice === '') {
            newFormDataErr.notice = 'Notice cannot be empty';
            isValid = false;
        }
        if (formData.bangla === '') {
            newFormDataErr.bangla = 'Bangla cannot be empty';
            isValid = false;
        }
        if (formData.admissionNotice === '') {
            newFormDataErr.admissionNotice = 'Admission notice cannot be empty';
            isValid = false;
        }

        setFormDataErr(newFormDataErr);

        if (allImages.length < 1) {
            setImageInputErr('Please Select minimum one image!!');
            isValid = false;
        }
        if (allParallaxImages.length < 1) {
            setParallaxImageInputErr('Please Select minimum one image!!');
            isValid = false;
        }

        if (subVideosArray.length < 1) {
            setSubVideoErr('Please add minimum 1 sub Video');
            isValid = false;
        }

        if (!isValid) {
            return
        }


        let allImagesArray = [];
        let allParallaxImagesArray = [];
        const toastId = toast.loading("Course is adding...");
        const videoUrl = mainVideo.name ? await uploadVideo(mainVideo) : ''
        const homePageCourseImageUrl = homePageCourseImage.name ? await uploadImg(homePageCourseImage) : ''
        for (let i = 0; i < allImages.length; i++) {
            let galleryImgURL = '';
            if (!allImages[i].image.name) {
                galleryImgURL = '';
            } else {
                galleryImgURL = await uploadImg(allImages[i].image)
                allImagesArray.push(galleryImgURL);
            }
        }
        for (let i = 0; i < allParallaxImages.length; i++) {
            let galleryImgURL = '';
            if (!allParallaxImages[i].image.name) {
                galleryImgURL = '';
            } else {
                galleryImgURL = await uploadImg(allParallaxImages[i].image)
                allParallaxImagesArray.push(galleryImgURL);
            }
        }

        // const uploadPromises = allImages.map((imageUrl) => {
        //     const data = { category, image: imageUrl };
        //     return axiosPublic.post('/studentGallery', data);
        // });
        const data = { title, subtitle, videoUrl, bannerImages: allImagesArray, parallaxImages: allParallaxImagesArray, subVideos: subVideosArray, notice: formData.notice, bangla: formData.bangla, admissionNotice: formData.admissionNotice, description, homePageCourseImageUrl, metaTag };

        axiosPublic.post(`/course`, data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Course has added Successfully!!", { id: toastId });
                    form.reset()
                    setFormData({ ...formData, objectives: '' })
                    setFormData({ ...formData, notice: '' })
                    setFormData({ ...formData, bangla: '' })
                    setFormData({ ...formData, admissionNotice: '' })
                    setAllImages([]);
                    setParallaxAllImages([]);
                    setSubVideos([])
                }

            })
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
                                            {/* title */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Course Menu name</label>
                                                    <input required type="text" name="courseTitle" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            {/* subtitle */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Course Title</label>
                                                    <input required type="text" id="title" name="subtitle" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            {/* Banner images */}
                                            <div className='w-full'>
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Upload Course Banner images</label>
                                                <div className='w-full'>
                                                    <div className="p-2 w-full">
                                                        <div className="relative space-y-2">
                                                            <label className="leading-7 text-sm text-gray-600 font-medium">Select Image</label><br />

                                                            <AddedImage allImages={allImages} imageInputErr={imageInputErr} setAllImages={setAllImages} id={'courseImageInputField'} />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            {/* Parallax images */}
                                            <div className='w-full'>
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Upload Course Parallax images</label>
                                                <div className='w-full'>
                                                    <div className="p-2 w-full">
                                                        <div className="relative space-y-2">
                                                            <label className="leading-7 text-sm text-gray-600 font-medium">Select Parallax Image</label><br />


                                                            <AddedImage allImages={allParallaxImages} imageInputErr={parallaxImageInputErr} setAllImages={setParallaxAllImages} id={'courseImageInputField'} />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            {/* Main course animated image */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Home page course image</label><br />
                                                    <input required type="file" name='homePageCourseImage' className="file-input file-input-bordered file-input-md w-full" />
                                                </div>
                                            </div>

                                            {/* Main course video */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Upload Course Main Video</label><br />
                                                    <input required type="file"
                                                        accept="video/*" name='videoUrl'

                                                        className="file-input file-input-bordered file-input-md w-full" />
                                                </div>
                                            </div>
                                            {/* Sub Video */}
                                            <div className='w-full md:col-span-2 p-2  space-y-2'>
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Sub Videos</label>
                                                <div className=' grid md:grid-cols-2 gap-2'>
                                                    <div className="w-full">
                                                        <div className="relative">
                                                            <label className="leading-7 text-sm text-gray-600 font-medium">Video title</label><br />
                                                            <input onChange={(e) => setSubVideoTitle(e.target.value)} value={subVideoTitle} type="text" name='subVideoTitle' className="file-input file-input-bordered file-input-md w-full" />
                                                        </div>

                                                    </div>
                                                    <div className="w-full">
                                                        <div className="relative">
                                                            <label className="leading-7 text-sm text-gray-600 font-medium">Video Url</label><br />
                                                            <input onChange={(e) => setSubVideoUrl(e.target.value)} value={subVideoUrl} type="text" name='subVideoUrl' className="file-input file-input-bordered file-input-md w-full" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='text-red-600'>{subVideoErr}</p>
                                                <p onClick={handleAddSubVideo} className='btn flex flex-col justify-center items-center px-7 py-1 rounded-md bg-primary text-white hover:font-bold transition-all duration-300 hover:bg-orange-700  active:bg-primary focus:outline-none focus:ring focus:ring-red-300 active:scale-90 focus:text-white w-max'>Add</p>

                                                <SubVideos subVideosArray={subVideosArray} setSubVideos={setSubVideos} />
                                            </div>
                                        </div>
                                        <div className='col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2'>
                                            {/* meta tag */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Course meta tag</label>
                                                    <textarea required type="text" name="metaTag" placeholder='#Meta tag' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out min-h-[150px]" />
                                                </div>
                                            </div>
                                            {/* Description */}

                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-sm text-gray-600 font-bold">Course Description</label>
                                                    <textarea required type="text" name="description" placeholder='Description' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out min-h-[150px]" />
                                                </div>
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
                                                <p className='text-red-600'>{formDataErr.notice}</p>
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
                                                <p className='text-red-600'>{formDataErr.admissionNotice}</p>
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
                                                <p className='text-red-600'>{formDataErr.bangla}</p>
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
