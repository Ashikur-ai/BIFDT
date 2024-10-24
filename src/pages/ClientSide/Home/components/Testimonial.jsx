import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Marquee from 'react-fast-marquee';
import Sun from '../../../../components/Sun';

const Testimonial = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials = [], refetch, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const res = await axiosPublic.get('/testimonial');
      return res.data;
    }
  })
  if (isLoading) {
    return ''
  }
  return (
    <>

      <p className="text-black font-bold lg:text-4xl text-center lg:py-5">
        Testimonials
        
      </p>
      <p className="text-black font-bold text-xl lg:text-6xl text-center lg:py-5">
        Some Users Feedback
        <div className="" style={{ position: "relative" }}>
          <div className="w-max absolute top-[200px] right-0 z-10"><Sun /></div>
          <div className="w-max absolute bottom-[-60px] left-0 z-10"><Sun /></div>
        </div>
      </p>
      <Marquee speed={35} pauseOnHover={true} direction="right">

        <div className="flex gap-10" style={{ position: "relative" }}>
          {testimonials?.map((testimonial) => (
            // <div key={testimonial?._id}>
            //     <section className="text-gray-600 body-font w-[280px] sm:w-[400px]">
            //         <div className="container px-5 pb-3 lg:pb-20 mx-auto">
            //             <div className="xl:w-3/4 lg:w-full w-full mx-auto text-center">
            //                 <div className="avatar">
            //                     <div className="w-28 rounded-full">
            //                         <img src={testimonial?.image} />
            //                     </div>
            //                 </div>

            //                 <p className="text-lg">{testimonial?.opinion}</p>
            //                 <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            //                 <h2 className="text-gray-900 font-medium title-font tracking-wider">{testimonial?.name}</h2>
            //                 <p className="text-gray-500 text-lg">{testimonial?.designation}</p>
            //             </div>
            //         </div>
            //     </section>
            // </div>

            // version -2
            <div
              key={testimonial._id}
              className={`card max-w-[160px] sm:max-w-[320px] sm:w-[320px]  border  bg-base-100 shadow-xl}`}
            >
              <div className="avatar flex justify-center">
                <div className="w-28 rounded-full">
                  <img src={testimonial?.image} />
                </div>
              </div>
              <div className="card-body text-center flex flex-col justify-between p-2 sm:p-4">
                <div className="flex justify-center">
                  <div className="w-1/2 text-center">
                    <h2 className="font-semibold text-sm sm:text-lg">
                      {testimonial?.name}
                    </h2>
                    <p className="text-[9px] lg:text-[12px]">
                      {testimonial?.designation}
                    </p>
                    <hr />
                    <p className="text-[10px] lg:text-sm">
                      {testimonial?.opinion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      ></Swiper>
    </>
  );
};

export default Testimonial;