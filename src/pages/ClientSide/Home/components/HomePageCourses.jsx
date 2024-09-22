import fashion from "../../../../assets/images/fashion.webp";
import marchen from "../../../../assets/images/marchen.webp";
import cad from "../../../../assets/images/cad.webp";
import clo from "../../../../assets/images/clo.webp";
import digital from "../../../../assets/images/digital.webp";
import gradesign from "../../../../assets/images/gradesign.webp";
import art from "../../../../assets/images/web.webp";
import AnimatedDiv from "../../../../AnimatedDiv";
import interior from "../../../../assets/images/interior.webp";
import leather from "../../../../assets/images/leather.webp";
import admission from "../../../../assets/images/admission.webp";
import seminar from "../../../../assets/images/seminar.webp";
import career from "../../../../assets/images/career.webp";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
const textStyle = "text-white lg:text-2xl font-bold text-center lg:py-16 py-5 hover:scale-110 hover:rotate-3 transition-all duration-700 hover:underline cursor-pointer h-full flex justify-center items-center"
import parallax4 from '../../../../assets/images/parallax/parallax4.png'
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const HomePageCourses = () => {
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
        <div className="w-[90%] sm:w-3/5 mx-auto overflow-hidden py-10">
            {
                courses?.map((course, idx) => <AnimatedDiv key={idx} value={(idx % 2) === 0 ? 300 : -300}>
                    <div className={`flex flex-col  ${(idx % 2) === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <div className="w-full lg:w-1/2 bg-primary">
                            <Link to={`/courseDetails/${idx+1}/education/course&career/bifdt/${course?._id}`}>
                                <p className={`${textStyle}`}>
                                    {course.title}
                                </p>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={course.bannerImages[0] || ''} className=" w-full h-40 lg:h-64" alt="" />
                        </div>
                    </div>
                </AnimatedDiv>)
            }

        </div>

    );
};

export default HomePageCourses;