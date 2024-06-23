import React from 'react';
import HeaderText from '../../../components/HeaderText';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const SeminarForm = () => {

    const axiosPublic = useAxiosPublic();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const course = form.course.value;
        
        const whatsapp = form.whatsapp.value;
        const segment = form.segment.value;



        const data = { name, email, course, whatsapp, segment };
        console.log(data)

        
        axiosPublic.post('/seminar', data)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success('Seminar request added successfully')
                }
            })
            .catch()
        form.reset();
    }
    return (
        <div>
            <Helmet>
                <title>BIFDT | Seminar</title>
            </Helmet>

            <div className=' text-white'>
                <div className='flex justify-center items-center pt-2'>
                    <img src="https://i.ibb.co/9V0WwCN/logo.webp" className='shadow-lg w-16
                    p-2 bg-white rounded-2xl ' alt="" />
                </div>

                <div className=' text-black'>
                    <HeaderText className={'text-black font-bold text-3xl text-center '} title="Free Seminar"></HeaderText>
                </div>

                {/* form section  */}
                <div className=''>

                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5  mx-auto">
                            <div className="flex flex-col text-center w-full ">
                                <p className="lg:w-2/3 mx-auto  leading-relaxed text-sm pb-2">Fillup the form to attend our free seminar</p>
                            </div>
                            <div className="lg:w-full md:w-2/3   mx-auto bg-white px-10 py-5 rounded-xl">

                                <div className=" rounded-2xl">
                                    <form action="" onSubmit={handleSubmit} className='flex flex-wrap -m-2'>
                                        {/* name  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Name</label>
                                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* email  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Email</label>
                                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* course  */}
                                        <div className='p-2 w-1/2'>
                                            <label className="">Select course</label>
                                            <select name='course' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2">

                                                <option value="" selected>Select Course</option>
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

                                        {/* segment  */}
                                        <div className='p-2 w-1/2'>
                                            <label className="">Select Segment Type</label>
                                            <select name='segment' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2">

                                                <option value="" selected>Select Segment</option>
                                                <option value={"Online Segment"}>Online Segment</option>
                                                <option value={"Offline Segment"}>Offline Segment</option>
                                                

                                            </select>
                                        </div>

                                        {/* mobile  */}
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Whatsapp/Mobile Number</label>
                                                <input type="text" id="" name="whatsapp" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default SeminarForm;