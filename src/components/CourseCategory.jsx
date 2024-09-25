/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SemesterTable from "./SemesterTable";

const CourseCategory = ({ category }) => {
    const axiosPublic = useAxiosPublic()
    const { _id, name, qualification, courseFee, durationDetails, executiveBatch, regularBatch, totalClass, duration, courseId } = category;
    const { data: courseSemesters = [], isLoading: courseSemestersIsLoading } = useQuery({
        queryKey: ['singleCourseIdForSemester', _id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/semesterByCourse/course/${_id}`)
            return res?.data
        }
    })
    if (courseSemestersIsLoading) {
        return ''
    }
    const allSubjects = courseSemesters?.reduce((a, b) => {
        return a.concat(b.subjects)
    }, []);
    const totalCredits = allSubjects.reduce((a, b) => {
        return a + parseInt(b.credit)
    }, 0);
    return (
        <div className="overflow-x-auto w-full max-w-[800px] mx-auto">
            <table className="table overflow-hidden w-full mx-auto text-base bg-primary/30 !rounded-b-none">
                <div className="absolute top-0 left-0  bg-white w-full h-full  -z-10"></div>
                {/* head */}
                <thead className='bg-primary/90 text-white  '>
                    <tr className="text-xs xs:text-sm sm:text-base">
                        <th className="px-0.5 sm:px-2">Course Title</th>
                        <th className="p-0 sm:p-2">:</th>
                        <th className="lg:w-[570px] whitespace-normal pl-1 sm:pl-2 px-0.5 sm:px-2">{name}</th>
                    </tr>
                </thead>
                <tbody className="text-xs xs:text-sm sm:text-base">
                    {/* row 1 */}
                    <tr className="">
                        <th className="px-0.5 sm:px-2">Course Duration</th>
                        <td className="p-0 sm:p-2">:</td>
                        <td className="pl-1 sm:pl-2 px-0.5 sm:px-2">{durationDetails}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className='bg-gray-300'>
                        <th className="px-0.5 sm:px-2"> Regular Batch</th>
                        <td className="p-0 sm:p-2">:</td>
                        <td className="pl-1 sm:pl-2 px-0.5 sm:px-2">{regularBatch}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th className="px-0.5 sm:px-2">Executive Batch </th>
                        <td className="p-0 sm:p-2">:</td>
                        <td className="pl-1 sm:pl-2 px-0.5 sm:px-2">{executiveBatch}</td>
                    </tr>
                    <tr className='bg-gray-300'>
                        <th className="px-0.5 sm:px-2"></th>
                        <td className="p-0 sm:p-2"></td>
                        <td className="pl-1 sm:pl-2 px-0.5 sm:px-2"></td>
                    </tr>
                    <tr>
                        <th className="px-0.5 sm:px-2">Total Classes</th>
                        <td className="p-0 sm:p-2">:</td>
                        <td className="pl-1 sm:pl-2 px-0.5 sm:px-2">{totalClass}</td>
                    </tr>
                    <tr className='bg-gray-300'>
                        <th className="px-0.5 sm:px-2">Qualification</th>
                        <td className="p-0 sm:p-2">:</td>
                        <td className="pl-1 sm:pl-2 px-0.5 sm:px-2">{qualification}</td>
                    </tr>
                    <tr>
                        <th className="px-0.5 sm:px-2">Course Fee</th>
                        <td className="p-0 sm:p-2">:</td>
                        <td className="pl-1 sm:pl-2 px-0.5 sm:px-2">{courseFee}</td>
                    </tr>
                </tbody>
            </table>
            <div className="bg-primary/90 py-2 px-5">
                <p className="text-white font-bold text-center">All Semesters</p>
            </div>
            {courseSemesters?.length>0 ?<div>
                <div >
                    {
                        courseSemesters.map(semester => <SemesterTable key={semester._id} semesterTitle={semester?.semesterTitle} subjects={semester?.subjects} />)
                    }
                    <div className="bg-primary/90 py-2 px-5 flex justify-between font-bold text-white">
                        <p>Total Credits</p>
                        <p>{totalCredits} Credits</p>
                    </div>

                </div>
            </div> : <p className="text-center py-2">No semester available!!</p>}
        </div>
    );
};

export default CourseCategory;