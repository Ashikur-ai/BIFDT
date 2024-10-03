/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const Tabs = ({ tabName, setTabName, courseCategories }) => {

    const categories = ['Career Objective']
    const tabStyle = (incomingTabName) => {
        return `text-xs sm:text-xs  font-medium  rounded-t-lg active:scale-90 transition-all duration-300 ${incomingTabName === tabName ? 'border-b-2 border-gray-700' : 'border-b-2 border-transparent hover:border-gray-300'} px-2 py-1`
    }

    return (
        <div className={` relative flex pr-12 gap-2`}>
            <button 
                className={`${tabStyle('Career Objective')}`}
                onClick={() => setTabName('Career Objective')}
            >Career <br /> Objective</button>
            {
                courseCategories?.map((course) => 
                <div key={course?.type} className='flex items-center'>
                    <div className='h-7 w-[1px] bg-gray-500'></div>
                    <button title={course?.type} key={course?._id}
                        className={`${tabStyle(course?._id)} text-nowrap`}
                        onClick={() => setTabName(course?._id)}
                    >{course?.duration} <br />
                        ({course?.type?.split(' ').map(item => item[0]).join('')})
                    </button>
                </div>)
            }
        </div>
    );
};

export default Tabs;