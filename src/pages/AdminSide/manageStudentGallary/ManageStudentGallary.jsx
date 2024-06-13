import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';

const ManageStudentGallary = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const email = form.email.value;
        const course = form.course.value;
        const gender = form.gender.value;
        const contact = form.contact.value;
        const address = form.address.value;
        const website = form.website.value;



        const data = { name, email, course, gender, contact, address, website };
        console.log(data)
    }
    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Student Gallary</title>
            </Helmet>
            <div className='bg-gray-100 text-black'>

                {/* form section  */}
                <div className=''>

                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5  mx-auto">

                            <div className="lg:w-3/4 md:w-2/3 mx-auto bg-white px-10 py-5 rounded-xl">
                                <p className='text-center text-2xl font-bold'>Manage Student Gallary</p>

                                <div className="shadow-2xl  p-10 rounded-2xl">
                                    <form action="" onSubmit={handleSubmit} className='flex flex-wrap -m-2'>

                                        {/* Category  */}
                                        <div className='p-2 w-3/4'>
                                            <label className="font-bold text-sm">Select Category</label>
                                            <select name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2">

                                                <option value="" selected>Select Category</option>
                                                <option value={"Fashion Design"}>Fashion Design</option>
                                                <option value={"Merchandising"}>Merchandising
                                                </option>
                                                <option value={"Pattern Design"}>Pattern Design
                                                </option>
                                                <option value={"Interior Design"}>Interior Design</option>
                                                <option value={"Leather Design"}>Leather Design</option>
                                                <option value={"Computer Operator"}>Computer Operator
                                                </option>

                                            </select>
                                        </div>



                                        <form className=' pl-4 pb-4 my-10 justify-center items-center'>
                                            <p className=' text-sm font-bold '>Add Picture URL</p>

                                            <input type="text" placeholder="provide picture link" className="input input-bordered input-accent w-full max-w-xs" />
                                            <div className="p-2 w-full">
                                                <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
                                            </div>
                                        </form>




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

export default ManageStudentGallary;