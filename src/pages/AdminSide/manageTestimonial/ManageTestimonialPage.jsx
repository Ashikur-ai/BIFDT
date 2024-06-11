import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GiConfirmed } from 'react-icons/gi';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ManageTestimonialPage = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Testimonial</title>
            </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
                <p className='text-2xl font-bold text-center'>Manage Testimonial</p>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Image</th>
                                <th>Opinion</th>


                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Web Designer</td>
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
                                    <p>Build successful career with Fashion Design, Apparel Merchandising, Pattern Making, Garments CAD Design, Graphic Design, Web Design, Interior Design, Lather Design, Computer Fundamentals & Operation, courses. BIFDT has been formed to excel the career path of those individuals who want to explore their career in R.M.G (Ready Made Garments) sector in both home and international markets in the post M.F.A(Multi Fiber Agreement)era.</p>
                                </td>


                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Merchandiser</td>
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
                                <td>Build successful career with Fashion Design, Apparel Merchandising, Pattern Making, Garments CAD Design, Graphic Design, Web Design, Interior Design, Lather Design, Computer Fundamentals & Operation, courses. BIFDT has been formed to excel the career path of those individuals who want to explore their career in R.M.G (Ready Made Garments) sector in both home and international markets in the post M.F.A(Multi Fiber Agreement)era.</td>


                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Merchandiser</td>
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
                                <td>Build successful career with Fashion Design, Apparel Merchandising, Pattern Making, Garments CAD Design, Graphic Design, Web Design, Interior Design, Lather Design, Computer Fundamentals & Operation, courses. BIFDT has been formed to excel the career path of those individuals who want to explore their career in R.M.G (Ready Made Garments) sector in both home and international markets in the post M.F.A(Multi Fiber Agreement)era.</td>


                                <td className='text-2xl text-red-500'><MdDelete /></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Web Designer</td>
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
                                    <p>Build successful career with Fashion Design, Apparel Merchandising, Pattern Making, Garments CAD Design, Graphic Design, Web Design, Interior Design, Lather Design, Computer Fundamentals & Operation, courses. BIFDT has been formed to excel the career path of those individuals who want to explore their career in R.M.G (Ready Made Garments) sector in both home and international markets in the post M.F.A(Multi Fiber Agreement)era.</p>
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

export default ManageTestimonialPage;