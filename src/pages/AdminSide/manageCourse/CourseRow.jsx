/* eslint-disable react/prop-types */
import { MdDelete, MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";
import { TbCategoryPlus } from "react-icons/tb";
import semesterImg from '../../../assets/images/icons/semister.png'
import { PiTargetBold } from "react-icons/pi";
const CourseRow = ({ course, idx, coursesRefetch }) => {
    const axiosPublic = useAxiosPublic()
    const videoDivStyle = 'rounded-md overflow-hidden'
    const titleStyle = 'text-black font-medium py-1 max-w-[230px] max-h-[50px] overflow-hidden'
    const {
        admissionNotice,
        bangla,
        bannerImages = [],
        courseFee,
        notice,
        subVideos,
        subtitle,
        title,
        videoUrl,
        _id
    } = course;
    //                             <th>subtitle</th>
    //                             <th>Notice</th>
    //                             <th>admissionNotice</th>
    //                             <th>bangla</th>
    //                             <th>Main Video</th>
    //                             <th>Sub Videos</th>
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/course/${_id}`)
                    .then(res => {
                        if (res?.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            coursesRefetch()
                        }
                    })
                    .catch(err => {
                    })

            }
        });
    }
    return (
        <tr>
            <td className={`sticky left-0 z-10 ${idx%2===0 ? 'bg-gray-50' : 'bg-base-300'}`}>{idx + 1}</td>

            <td className={` sm:min-w-[190px] sticky left-6  z-10 ${idx%2===0 ? 'bg-gray-50' : 'bg-base-300'}`}>{title}</td>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-28 h-28">
                            <img className="" src={bannerImages[0] || ''} />
                        </div>
                    </div>
                    <div>


                    </div>
                </div>
            </td>

            <td>
                <p>
                    {courseFee ? `${courseFee} BDT` : 'Not Given'}
                </p>
            </td>

            <td>
                <p className="w-[200px] max-h-[50px] overflow-hidden">
                    {subtitle}
                </p>
            </td>

            <td>
                <p className="w-[200px] max-h-[50px] overflow-hidden" dangerouslySetInnerHTML={{ __html: notice }}></p>
            </td>

            <td>
                <p className="w-[200px] max-h-[50px] overflow-hidden" dangerouslySetInnerHTML={{ __html: admissionNotice }}>
                </p>
            </td>

            <td>
                <p className="w-[200px] max-h-[50px] overflow-hidden" dangerouslySetInnerHTML={{ __html: bangla }}>
                </p>
            </td>

           

           
            <td className='text-2xl text-yellow-600'>
                <Link to={`/dashboard/manageCourseCategory/${_id}`}><TbCategoryPlus /></Link>
            </td>
           
            <td className='text-2xl text-blue-600'>
                <Link to={`/dashboard/manageCourseObjective/${_id}`}><PiTargetBold /></Link>
            </td>
            <td className='text-2xl text-green-500'>
                <Link to={`/dashboard/updateCourse/${_id}`}><MdEditSquare /></Link>
            </td>



            <td className='text-2xl text-red-500 '><span className="cursor-pointer" onClick={handleDelete} ><MdDelete /></span></td>
        </tr>
    );
};

export default CourseRow;