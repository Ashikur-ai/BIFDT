
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import FacultyCard from '../../Faculties/FacultyCard';
import ResponsiveButton from '../../../../components/ResponsiveButton';
import Sun from '../../../../components/Sun';

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
      <div
        
        className="px-2 sm:px-10 md:px-20 pb-5 lg:py-10 mx-auto max-w-full overflow-hidden"
        style={{ position: "relative" }}
      >
         <div className="w-max absolute top-[500px] right-0 z-10"><Sun /></div>
         <div className="w-max absolute bottom-[300px] left-0 z-10"><Sun /></div>
         {/* <div className="w-max absolute bottom-[370px] left-20 z-10"><Sun /></div> */}
        
        <div className="relative pt-5 text-black font-bold text-xl lg:text-4xl text-center  ">
          Our Faculties
          <ResponsiveButton title={"See More"} link={"/faculties"} />
        </div>

        <Marquee speed={35} pauseOnHover={true}>
          <div className="flex bg-white gap-10 px-20">
            {faculties?.map((faculty) => (
              <FacultyCard key={faculty._id} faculty={faculty} slide={true} />
            ))}
          </div>
        </Marquee>
        <div className="lg:py-5 pb-2 lg:text-xl mt-2 text-[10px] flex lg:hidden justify-center items-center">
          <Link to="/faculties">
            <button className="lg:p-3 p-1 rounded-lg bg-primary text-white hover:text-black  active:bg-white-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max mr-9 lg:mr-0">
              See more
            </button>
          </Link>
        </div>
      </div>
    );
};
export default FacultySlide;