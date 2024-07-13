

// import required modules
import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';

import toast from 'react-hot-toast';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const AdmissionPage = () => {
    const axiosPublic = useAxiosPublic();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const course = form.course.value;
        const gender = form.gender.value;
        const contact = form.contact.value;
        const address = form.address.value;
        const website = form.website.value;



        const data = { name, email, course, gender, contact, address, website };

        axiosPublic.post('/admission', data)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success('Admission request added successfully')
                }
            })
            .catch()
        form.reset();


    }
    return (
        <>
            <Helmet>
                <title>BIFDT | Online Admission</title>
            </Helmet>

            {/* Banner section  */}
            {/* <div className='h-96'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={gallary1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gallary6} alt="" /></SwiperSlide>

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div> */}

            <div>
            </div>

            <div className=' text-white px-10 '>
                <div className='flex justify-center items-center pt-1'>
                    <img src="https://i.ibb.co/9V0WwCN/logo.webp" className='shadow-lg w-16
                    p-2 bg-white rounded-2xl ' alt="" />
                </div>

                <div className='text-black'>
                    <HeaderText className={' text-black font-bold  lg:text-3xl text-center'} title="Online Admission Form"></HeaderText>
                </div>

                {/* form section  */}
                <div className=''>

                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5  mx-auto">
                            <div className="flex flex-col text-center w-full ">
                                <p className="lg:w-full mx-auto  leading-relaxed text-[10px] lg:text-[12px] lg:text-sm pb-2">Unlock Your Creative Potential and Transform Your Fashion Dreams into Reality—Enroll Today!</p>
                            </div>
                            <div className="lg:w-full md:w-full mx-auto bg-white py-5 rounded-xl">

                                <div className="   rounded-2xl">
                                    <form action="" onSubmit={handleSubmit} className='   w-full -m-2'>
                                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                                            {/* name  */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-[12px] lg:text-sm text-gray-600">Name</label>
                                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            {/* email  */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-[12px] lg:text-sm text-gray-600">Email</label>
                                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            {/* course  */}
                                            <div className='p-2 w-full'>
                                                <label className="text-[12px] lg:text-sm">Select course</label>
                                                <select name='course' className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2">
    
                                                    <option value="" defaultChecked>Select Course</option>
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
    
    
                                            {/* contact number  */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-[12px] lg:text-sm text-gray-600">Contact No.</label>
                                                    <input type="text" name="contact" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            {/* address  */}
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="leading-7 text-[12px] lg:text-sm text-gray-600">Address</label>
                                                    <input type="text" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
    
                                            {/* Gender  */}
                                            <div className="p-2 w-full">
                                                <label className="leading-7 text-[12px] lg:text-sm text-gray-600">Gender</label>
                                                <div className="relative flex justify-start gap-5">
                                                    <br />
                                                    <input type="radio" name="gender" value={"male"} className="radio radio-secondary border-primary text-[12px] lg:text-sm" /> Male
                                                    <input type="radio" name="gender" value={"female"} className="radio radio-secondary border-primary text-[12px] lg:text-sm" /> Female
                                                </div>
    
                                            </div>
                                        </div>


                                        {/* website  */}
                                        {/* <div className="p-2 w-full">
                                            <div className="relative">
                                                <label className="leading-7 text-[12px] lg:text-sm text-gray-600">How you know About Our Website?</label>
                                                <input type="text"  name="website" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div> */}

                                        {/* website  */}
                                        <div className="p-2 sm:w-1/2 mx-auto">
                                            <div className="relative">
                                                <label className="leading-7 text-[12px] lg:text-sm text-gray-600">How you know About Our Website?</label>
                                                <textarea name="website" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <button className="flex mx-auto text-white bg-primary border-0 py-1 lg:py-2 px-1 lg:px-8 focus:outline-none hover:bg-orange-800 rounded lg:text-lg">Submit</button>
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

export default AdmissionPage;