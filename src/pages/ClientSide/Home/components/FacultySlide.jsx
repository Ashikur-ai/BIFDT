import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import teacher1 from "../../../../assets/images/teacher1.jpg";
import teacher2 from "../../../../assets/images/teacher2.jpg";
import teacher3 from "../../../../assets/images/teacher3.jpg";
import teacher4 from "../../../../assets/images/teacher4.jpg";



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import Marquee from 'react-fast-marquee';
import FacultyCard from '../../Faculties/FacultyCard';

const FacultySlide = () => {
    const axiosPublic = useAxiosPublic();

    const { data: faculties = [] } = useQuery({
        queryKey: ['facuties'],
        queryFn: async () => {
            const res = await axiosPublic.get('/faculty');
            return res.data;
        }
    })

    const addHttpIfMissing = (url) => {
        if (!/^https?:\/\//i.test(url)) {
            return `https://${url}`;
        }
        return url;
    };

    return (
        <div className="px-2 sm:px-10 md:px-20 py-10 mx-auto">
            <p className='text-pink-700 font-bold text-4xl text-center py-5'>Our Faculty</p>
            <Marquee
                speed={35}
                pauseOnHover={true}
            >
                <div className='flex gap-20 px-20'>
                    {
                        faculties?.map(faculty => <FacultyCard key={faculty._id} faculty={faculty} />)
                    }
                </div>

            </Marquee>
            <Link to={'/faculties'}><div className="py-5 flex justify-center items-center"> <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max">See More</button></div></Link>
        </div>
    )
};
export default FacultySlide;