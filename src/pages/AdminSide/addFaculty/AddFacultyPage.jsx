import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddFacultyPage = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            // now send all into to server 
            const information = {
                name: data.name,
                email: data.email,
                background_of_study: data.background_of_study,
                job_experience: data.job_experience,
                contact: data.contact,
                facebook: data.facebook,
                twitter: data.twitter,
                whatsapp: data.whatsapp,
                designation: data.designation,
                image: res.data.data.display_url
            }

            const infoRes = await axiosPublic.post('/faculty', information);

            console.log(infoRes.data);
            if (infoRes.data.insertedId) {
                // show success popup 
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to Faculty Database.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        console.log(res.data);

    };


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const contact = form.contact.value;
    //     const facebook = form.facebook.value;
    //     const twitter = form.twitter.value;
    //     const whatsapp = form.whatsapp.value;
    //     const designation = form.designation.value;
    //     const image = form.image.value;



    //     const data = { name, email, contact, facebook, twitter, whatsapp, designation, image };
    //     console.log(data)

    //     axiosPublic.post('/faculty', data)
    //         .then(res => {
    //             console.log(res.data)
    //             if (res.data.insertedId) {
    //                 Swal.fire({
    //                     title: "Success!",
    //                     text: "Faculty added to database",
    //                     icon: "success"
    //                 });
    //             }
    //         })
    //         .catch()
    //     form.reset();
    // }

    return (
        <>
            <Helmet>
                <title>Dashboard | Add Faculty</title>
            </Helmet>
            <div className='bg-gray-100 text-black'>

                {/* form section  */}
                <div className=''>

                    <section className="text-gray-600 body-font relative">
                        <div className="container  px-4  mx-auto">

                            <div className="lg:w-full md:w-2/3 mx-auto bg-white px-10 py-5 rounded-xl">
                                <p className='text-center text-2xl font-bold pb-2'>Add Faculty</p>

                                <div className="   rounded-2xl">
                                    <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap -m-2'>

                                        {/* Name  */}
                                        <div className="p-2 w-1/3">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Faculty Name</label>
                                                <input type="text" {...register("name")} name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* email  */}
                                        <div className="p-2 w-1/3">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Faculty Email</label>
                                                <input type="text" {...register('email')} name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>

                                        {/* Designation  */}
                                        <div className="p-2 w-1/3">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Enter Designation</label>
                                                <input type="text" {...register('designation')} name="designation" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>

                                        {/* background Of study  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Background Of Study</label>
                                                <input type="text" {...register('background_of_study')}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* job experience  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Job Experience</label>
                                                <input type="text" {...register('job_experience')}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>


                                        {/* Social Link  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Social Link</label>
                                                <input type="text" {...register('facebook')} name="facebook" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Facebook' />

                                                <input type="text" {...register('twitter')} name="twitter" className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 my-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Twitter' />

                                                <input type="text" {...register('whatsapp')} name="whatsapp" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Whatsapp' />
                                            </div>
                                        </div>

                                        {/* Contact  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Contact Number</label>
                                                <input type="number" {...register('contact')} name="contact" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>


                                        {/* image url  */}
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Faculty Image</label><br />
                                                <input type="file" {...register('image')} name='image' className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                                            </div>
                                        </div>

                                        <div className="p-2 w-full">
                                            <button className="flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
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

export default AddFacultyPage;