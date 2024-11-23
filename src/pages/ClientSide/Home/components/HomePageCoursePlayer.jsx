/* eslint-disable react/prop-types */
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
const HomePageCoursePlayer = ({ courseImages,parallaxImg }) => {
    const coursesName = ['Fashion Design', 'Apparel Merchandising', 'Pattern Design & CAD', 'CLO & Browzwear', 'Digital Marketing & Branding', 'Graphics Design', 'Web Design', 'Interior Design', 'Lather Design', 'Career blogs']
    const axiosPublic = useAxiosPublic();
    const { data: courses = [], refetch: coursesRefetch, isLoading } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosPublic.get('/course');
            return res.data;
        }
    })
    if (isLoading) {
        return ''
    }
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 py-5 overflow-hidden gap-10">
            <div className="mx-auto rotation w-64 h-64 flex justify-center items-center">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-60"
                >
                    {
                        courseImages?.map(image => <SwiperSlide key={image.id}>
                            <img src={image.image} className="rounded-full object-cover size-60" alt="" />
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
            <div>
                <ul className="font-bold text-xl flex flex-col gap-3 justify-center items-center lg:items-start">
                    {
                        courses?.map((course, idx) =>
                            <Link key={idx}  to={`/${course?.title}/courseDetails/${idx}/education/course&career/bifdt/${course?._id}`}>
                                <div className="text-[12px] lg:text-xl font-medium border-white bg-primary hover:bg-primary /15 rounded-md hover:rounded-sm w-[230px] p-0.5 px-2 transition-all duration-300 text-white text-center">
                                    <p className="hover:scale-110 transition-all duration-300">{course?.title}</p>
                                </div>
                            </Link>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default HomePageCoursePlayer;