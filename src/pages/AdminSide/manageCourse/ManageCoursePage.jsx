import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GiConfirmed } from 'react-icons/gi';
import { MdDelete, MdEditSquare, MdUpdate } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ManageCoursePage = () => {
    const objectives = "6000tk";

    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Testimonial</title>
            </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
                <p className='text-2xl font-bold text-center'>Manage Courses</p>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Course Name</th>

                                <th>Course Image</th>
                                <th>Course Fee</th>


                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Fashion Design :: Education for Excellence :: Bangladesh Institute of Fashion & Design Technology (BIFDT)</td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*" />
                                            </div>
                                        </div>
                                        <div>


                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{objectives.substring(0, 150)}</p>
                                </td>

                                <td className='text-2xl text-green-500'>
                                    <Link to="/dashboard/updateCourse"><MdEditSquare /></Link>
                                </td>



                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Fashion Design :: Education for Excellence :: Bangladesh Institute of Fashion & Design Technology (BIFDT)</td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://www.boxmark.com/0cache/bilder152_900x600_f_center_middle.jpg" />
                                            </div>
                                        </div>
                                        <div>


                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{objectives.substring(0, 150)}</p>
                                </td>

                                <td className='text-2xl text-green-500'>
                                    <Link to="/dashboard/updateCourse"><MdEditSquare /></Link>
                                </td>


                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Fashion Design :: Education for Excellence :: Bangladesh Institute of Fashion & Design Technology (BIFDT)</td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://hips.hearstapps.com/hmg-prod/images/spring-summer-2024-fashion-trends-65fdb5a49a846.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*" />
                                            </div>
                                        </div>
                                        <div>


                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{objectives.substring(0, 150)}</p>
                                </td>

                                <td className='text-2xl text-green-500'>
                                    <Link to="/dashboard/updateCourse"><MdEditSquare /></Link>
                                </td>



                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>








                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageCoursePage;