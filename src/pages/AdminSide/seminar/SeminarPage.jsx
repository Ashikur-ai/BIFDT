import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GiConfirmed } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md';

const SeminarPage = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard | Seminar</title>
            </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
            <p className='text-2xl font-bold text-center'>Seminar Requests</p>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Course</th>
                                <th>Gender</th>
                                <th>Contact No</th>
                                <th>Segment</th>
                                <th>Confirm</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john.doe@example.com</td>
                                <td>Computer Science</td>
                                <td>Male</td>
                                <td>+1234567890</td>
                                <td>Offline</td>
                                
                                <td className='text-2xl text-green-600'><GiConfirmed /></td>
                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>jane.smith@example.com</td>
                                <td>Business Administration</td>
                                <td>Female</td>
                                <td>+0987654321</td>
                                <td>Offline</td>
                                
                                <td className='text-2xl text-green-600'><GiConfirmed /></td>
                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Michael Johnson</td>
                                <td>michael.johnson@example.com</td>
                                <td>Mechanical Engineering</td>
                                <td>Male</td>
                                <td>+1122334455</td>
                                <td>Offline</td>
                                
                                <td className='text-2xl text-green-600'><GiConfirmed /></td>
                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Emily Brown</td>
                                <td>emily.brown@example.com</td>
                                <td>Nursing</td>
                                <td>Female</td>
                                <td>+2233445566</td>
                                <td>Offline</td>
                                
                                <td className='text-2xl text-green-600'><GiConfirmed /></td>
                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>David Wilson</td>
                                <td>david.wilson@example.com</td>
                                <td>Chemical Engineering</td>
                                <td>Male</td>
                                <td>+3344556677</td>
                                <td>Online</td>

                                <td className='text-2xl text-green-600'><GiConfirmed /></td>
                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Olivia Davis</td>
                                <td>olivia.davis@example.com</td>
                                <td>Psychology</td>
                                <td>Female</td>
                                <td>+4455667788</td>
                                <td>Online</td>
                                <td className='text-2xl text-green-600'><GiConfirmed /></td>
                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SeminarPage;