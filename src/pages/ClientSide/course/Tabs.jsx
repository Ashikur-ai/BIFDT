/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const Tabs = ({ tabName, setTabName, courseCategories }) => {

    const categories = ['Career Objective']
    const tabStyle = (incomingTabName) => {
        return `text-[10px] sm:text-xs  font-medium  rounded-t-lg active:scale-90 transition-all duration-300 ${incomingTabName === tabName ? 'border-b-2 border-white' : 'border-b-2 border-transparent hover:border-gray-300'} sm:ml-1 px-1 sm:px-2 py-1`
    }

    return (
        <div className={` relative flex pr-12 gap-2 py-2 bg-primary text-white rounded-t-lg w-full max-w-[800px] mx-auto`}>
            <button 
                className={`${tabStyle('Career Objective')}`}
                onClick={() => setTabName('Career Objective')}
            >Career <br className='md:hidden' /> Objective</button>
            {
                courseCategories?.map((course) => 
                <div key={course?.type} className='flex items-center'>
                    <div className='h-7 w-[1px] bg-white'></div>
                    <button title={course?.type} key={course?._id}
                        className={`${tabStyle(course?._id)} text-nowrap`}
                        onClick={() => setTabName(course?._id)}
                    >{course?.duration} <br className='md:hidden' />
                        ({course?.type?.split(' ').map(item => item[0]).join('')})
                    </button>
                </div>)
            }
        </div>
    );
};

export default Tabs;