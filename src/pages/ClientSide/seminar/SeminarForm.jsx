import React from 'react';
import HeaderText from '../../../components/HeaderText';

const SeminarForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const course = form.course.value;
        
        const mobile = form.mobile.value;
        const segment = form.segment.value;



        const data = { name, email, course, mobile, segment };
        console.log(data)
    }
    return (
        <div>

            <div className='bg-pink-600 text-white'>
                <div className='flex justify-center items-center pt-10'>
                    <img src="https://i.ibb.co/9V0WwCN/logo.webp" className='shadow-lg w-20 bg-white rounded-2xl p-5' alt="" />
                </div>

                <div className=' text-white'>
                    <HeaderText className={'text-white font-bold text-6xl text-center p-5'} title="Free Seminar "></HeaderText>
                </div>

                {/* form section  */}
                <div className=''>

                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5  mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <p className="lg:w-2/3 mx-auto text-white leading-relaxed text-xl">Fillup the form to attend our free seminar</p>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white px-10 py-20 rounded-xl">
                                <p className='text-center text-2xl font-bold'>Seminar form</p>

                                <div className="shadow-2xl pt-20 px-10 rounded-2xl">
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
                                        <div className='p-2 w-full'>
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

                                        {/* mobile  */}
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label className="leading-7 text-sm text-gray-600">Whatsapp/Mobile Number</label>
                                                <input type="text" id="name" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>

                                        <div className='p-2 w-full'>
                                            <label className="">Select Segment Type</label>
                                            <select name='segment' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2">

                                                <option value="" selected>Select Segment</option>
                                                <option value={"Online Segment"}>Online Segment</option>
                                                <option value={"Offline Segment"}>Offline Segment</option>
                                                

                                            </select>
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