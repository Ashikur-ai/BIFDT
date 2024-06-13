import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';

const AddFacultyPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const facebook = form.facebook.value;
        const twitter = form.twitter.value;
        const whatsapp = form.whatsapp.value;
        const designation = form.designation.value;



        const data = { name, email, facebook, twitter, whatsapp, designation };
        console.log(data)
    }

    return (
        <>
            <Helmet>
                <title>Dashboard | Add Faculty</title>
            </Helmet>
            <div className='bg-gray-100 text-black'>
                
                {/* form section  */}
                <div className=''>

                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5  mx-auto">
                            
                            <div className="lg:w-3/4 md:w-2/3 mx-auto bg-white px-10 py-5 rounded-xl">
                                <p className='text-center text-2xl font-bold pb-2'>Add Faculty</p>

                                <div className="shadow-2xl  px-10 rounded-2xl">
                                    <form action="" onSubmit={handleSubmit} className='flex flex-wrap -m-2'>
                                        
                                        {/* Name  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Faculty Name</label>
                                                <input type="text" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* email  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Faculty Email</label>
                                                <input type="text" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>

                                          {/* Designation  */}
                                          <div className="p-2 w-full">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Enter Designation</label>
                                                <input type="text" name="designation" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>

                                         {/* Social Link  */}
                                         <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Social Linik</label>
                                                <input type="text" name="facebook" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Facebook' />

                                                <input type="text" name="twitter" className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 my-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Twitter'/>
                                                
                                                <input type="text"  name="whatsapp" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Whatsapp' />
                                            </div>
                                        </div>


                                        {/* image url  */}
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600 font-bold">Faculty Image</label><br />
                                                <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
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