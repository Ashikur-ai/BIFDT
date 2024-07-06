import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import app from "../../../../assets/images/apps.webp";
import python from "../../../../assets/images/python.webp";
import graphic from "../../../../assets/images/graphic.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const HomePageCoursePlayer = () => {
    const coursesName = ['Fashion Design', 'Apparel Merchandising', 'Pattern Design & CAD', 'CLO & Browzwear', 'Digital Marketing & Branding', 'Graphics Design', 'Web Design', 'Interior Design', 'Lather Design', 'Career blogs']
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 py-5 overflow-hidden">
            <div className="mx-auto rotation w-64 h-64">
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
                    <SwiperSlide>
                        <img src={python} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={app} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={graphic} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <ul className="font-bold text-xl flex flex-col gap-3">
                    {
                        coursesName?.map((name, idx) => <Link key={idx} to={'/courseDetails'}><button className="border  border-white bg-[#f6861f] hover:bg-pink-700/15 rounded-md w-full max-w-[230px] p-0.5 px-2 transition-all duration-300 text-white"><span></span> {name}</button></Link>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default HomePageCoursePlayer;