/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

const AddStudentGallary = ({ studentGallery, refetch, handleDelete }) => {
    const [category, setCategory] = useState('')
    const [showingImage, setShowingImage] = useState([])
    const axiosPublic = useAxiosPublic();
    const imgHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

    useEffect(() => {
        const images = category === '' ? [] : studentGallery?.filter(gallery => gallery?.category === category);
        setShowingImage(images);

    }, [category, studentGallery])
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const imageFile = form.image.files[0];


        let galleryImgURL = ''
        if (!imageFile?.name) {
            galleryImgURL = ''
        } else {
            const image = { image: imageFile }

            const res = await axios.post(imgHostingApi, image, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            try {
                galleryImgURL = res?.data?.data?.display_url
            }
            catch (err) {
                console.log(err);
                galleryImgURL = ''
            }
        }


        const data = { category, image: galleryImgURL };

        axiosPublic.post('/studentGallery', data)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    console.log('data added')
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setCategory('')
                    refetch()
                    form.reset();
                }
            })
            .catch()




    }
    const handleChangeCategory = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setCategory(value)


    };
    const handleDeleteImage = (id) => {
        handleDelete(id)
        // const images = value === '' ? [] : studentGallery?.filter(gallery => gallery?.category === value);
        // setShowingImage(images)
    }
    console.log(showingImage);
    return (
        <>
            <section className="text-gray-600 body-font relative w-full">
                <div className="container  mx-auto w-full">

                    <div className="w-full bg-white  py-5 rounded-xl">
                        <p className='text-center text-2xl font-bold'>Add Student Gallery</p>

                        <div className="shadow-md p-10 rounded-2xl">
                            <form action="" onSubmit={handleSubmit} className='flex flex-col -m-2'>

                                {/* Category  */}
                                <div className='p-2 w-full'>
                                    <label className="font-bold">Category</label>
                                    <select onChange={handleChangeCategory} required type="text" name="category" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                        <option value="">Select</option>
                                        <option value="Interior Design">Interior Design</option>
                                        <option value="Fashion Design">Fashion Design</option>
                                        <option value="Merchandising">Merchandising</option>
                                        <option value="Computer Operation">Computer Operation</option>
                                        <option value="Pattern Design">Pattern Design</option>
                                    </select>

                                </div>

                                {/* image url  */}
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600 font-bold">Upload Image</label><br />
                                        <input required type="file" name='image' className="file-input file-input-bordered file-input-md w-full" />
                                    </div>
                                </div>




                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                </div>
                                {
                                    showingImage?.length >= 1 && <div className='space-y-4'>
                                        <h2>Already added images</h2>
                                        <div className='flex flex-col gap-2'>
                                            {
                                                showingImage?.map(image => <div key={image?._id} className='flex gap-3'>
                                                    <img className='w-28 h-16 object-cover overflow-hidden rounded-md' src={image?.image} />
                                                    <p onClick={() => handleDeleteImage(image?._id)} className=' h-6 w-6 flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer transition-all duration-300'>X</p>
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddStudentGallary;