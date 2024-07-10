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
const textStyle = "text-white text-2xl font-bold text-center py-16 hover:scale-110 hover:rotate-3 transition-all duration-700 hover:underline cursor-pointer h-full flex justify-center items-center"
import parallax4 from '../../../../assets/images/parallax/parallax4.png'
const HomePageCourses = () => {
    return (
            <div className="w-[90%] sm:w-3/5 mx-auto overflow-hidden py-10">
                {/* 1 */}
                <AnimatedDiv value={300}>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 bg-primary">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Fashion Design
                                </p>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={fashion} className=" w-full h-64" alt="" />
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 2         */}
                <AnimatedDiv value={-300}>
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <img src={marchen} className=" w-full h-64" alt="" />
                        </div>
                        <div className="w-full lg:w-1/2 bg-primary">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Apparel Merchandising
                                </p>
                            </Link>
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 3 */}
                <AnimatedDiv value={300}>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 bg-primary   ">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Pattern Design & CAD
                                </p>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={cad} className=" w-full h-64" alt="" />
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 4        */}
                <AnimatedDiv value={-300}>
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <img src={clo} className=" w-full h-64" alt="" />
                        </div>
                        <div className="w-full lg:w-1/2 bg-primary ">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    CLO & Browzwear
                                </p>
                            </Link>
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 5 */}
                <AnimatedDiv value={300}>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 bg-primary   ">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Digital Marketing & Branding
                                </p>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={digital} className=" w-full h-64" alt="" />
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 6 */}
                <AnimatedDiv value={-300}>
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <img src={gradesign} className=" w-full h-64" alt="" />
                        </div>
                        <div className="w-full lg:w-1/2 bg-primary ">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Graphic Design
                                </p>
                            </Link>
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 7 */}
                <AnimatedDiv value={300}>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 bg-primary ">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Art Essentials Course
                                </p>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={art} className=" w-full h-64" alt="" />
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 8 */}
                <AnimatedDiv value={-300}>
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <img src={interior} className=" w-full h-64" alt="" />
                        </div>
                        <div className="w-full lg:w-1/2 bg-primary">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Interior Design
                                </p>
                            </Link>
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 9 */}
                <AnimatedDiv value={300}>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 bg-primary">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Leather Design
                                </p>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={leather} className=" w-full h-64" alt="" />
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 10 */}
                <AnimatedDiv value={-300}>
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <img src={admission} className=" w-full h-64" alt="" />
                        </div>
                        <div className="w-full lg:w-1/2 bg-primary">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Online Admission
                                </p>
                            </Link>
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 11 */}
                <AnimatedDiv value={300}>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 bg-primary ">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Free Seminar
                                </p>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={seminar} className=" w-full h-64" alt="" />
                        </div>
                    </div>
                </AnimatedDiv>
                {/* 12 */}
                <AnimatedDiv value={-300} >
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <img src={career} className=" w-full h-64" alt="" />
                        </div>
                        <div className="w-full lg:w-1/2 bg-primary">
                            <Link to={'/courseDetails'}>
                                <p className={`${textStyle}`}>
                                    Career blogs
                                </p>
                            </Link>
                        </div>
                    </div>
                </AnimatedDiv>
            </div>

    );
};

export default HomePageCourses;