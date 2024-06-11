import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GiConfirmed } from 'react-icons/gi';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ManageFacultyPage = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Faculty</title>
           </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
            <p className='text-2xl font-bold text-center'>Manage Faculty</p>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Image</th>
                                <th>Social Links</th>
                                <th>Contact No</th>
                                <th>Designation</th>
                                
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john.doe@example.com</td>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://bifdt-4b534.web.app/assets/teacher1-Bkr5Xt4C.jpg" />
                                        </div>
                                    </div>
                                    <div>
                                        
                                        
                                    </div>
                                </div>
                            </td>
                                <td>
                                    <p>https://www.facebook.com/</p>
                                    <p>https://www.whatsapp.com/</p>
                                    <p>https://www.twitter.com/</p>
                                </td>
                                <td>+1234567890</td>
                                <td>Lecturer</td>
                                
                                <td><Link to="/dashboard/updateFaculty"><MdUpdate className="text-2xl text-green-600" /></Link></td>
                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john.doe@example.com</td>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://bifdt-4b534.web.app/assets/teacher2-CqON6YkW.jpg" />
                                        </div>
                                    </div>
                                    <div>
                                        
                                        
                                    </div>
                                </div>
                            </td>
                                <td>
                                    <p>https://www.facebook.com/</p>
                                    <p>https://www.whatsapp.com/</p>
                                    <p>https://www.twitter.com/</p>
                                </td>
                                <td>+1234567890</td>
                                <td>Lecturer</td>
                                
                                <td><Link to="/dashboard/updateFaculty"><MdUpdate className="text-2xl text-green-600" /></Link></td>
                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>


                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john.doe@example.com</td>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://bifdt-4b534.web.app/assets/teacher1-Bkr5Xt4C.jpg" />
                                        </div>
                                    </div>
                                    <div>
                                        
                                        
                                    </div>
                                </div>
                            </td>
                                <td>
                                    <p>https://www.facebook.com/</p>
                                    <p>https://www.whatsapp.com/</p>
                                    <p>https://www.twitter.com/</p>
                                </td>
                                <td>+1234567890</td>
                                <td>Lecturer</td>
                                
                                <td><Link to="/dashboard/updateFaculty"><MdUpdate className="text-2xl text-green-600" /></Link></td>
                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>
                            


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageFacultyPage;