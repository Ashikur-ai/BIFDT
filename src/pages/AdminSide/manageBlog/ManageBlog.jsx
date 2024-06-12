import { Helmet } from "react-helmet-async";
import { MdDelete, MdEditSquare, MdUpdate } from "react-icons/md";
import { Link } from "react-router-dom";


const ManageBlog = () => {
    const subtext = "Fashion has become an important a part of 21st-century life. Our Fashion Design Course has been Specifically created to provide you with everything you need to know in order to take those first steps to make your designs a  reality and beyond. It features a unique combination of 17modules(30 Credits) to equip you with all the knowledge, skills & requisites that any budding fashion designer requires.";




    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Blogs</title>
            </Helmet>
            <div className="overflow-x-auto bg-white mx-5 rounded-lg">
                <p className="text-2xl font-bold text-center py-2">Manage Blogs</p>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Blog</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Author Name</th>
                            <th>Meta keyword</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://static-cse.canva.com/blob/567558/50stunninglybeautifulgeometricpatternsingraphicdesign.jpg" />
                                        </div>
                                    </div>
                                    <div>

                                        <div className="text-sm opacity-50">14 March, 2024</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">Pattern Design Course</p>
                            </td>
                            <td>
                                <div className="">
                                    {subtext.substring(0, 50)}...
                                </div>
                            </td>
                            <td>Mr. Karim</td>
                            <td>
                                #FashionDesign, #Garments, #Economic
                            </td>
                            <td className='text-2xl text-green-500'>
                                <Link to="/dashboard/updateBlog"><MdEditSquare /></Link>
                            </td>

                            <td>
                                <MdDelete className="text-2xl text-red-600" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://static-cse.canva.com/blob/567558/50stunninglybeautifulgeometricpatternsingraphicdesign.jpg" />
                                        </div>
                                    </div>
                                    <div>

                                        <div className="text-sm opacity-50">14 March, 2024</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">Pattern Design Course</p>
                            </td>
                            <td>
                                <div className="">
                                    {subtext.substring(0, 50)}...
                                </div>
                            </td>
                            <td>Mr. Karim</td>
                            <td>
                                #FashionDesign, #Garments, #Economic
                            </td>
                            <td className='text-2xl text-green-500'>
                                <Link to="/dashboard/updateBlog"><MdEditSquare /></Link>
                            </td>

                            <td>
                                <MdDelete className="text-2xl text-red-600" />
                            </td>
                        </tr>


                        <tr>
                            <td>
                                4
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://static-cse.canva.com/blob/567558/50stunninglybeautifulgeometricpatternsingraphicdesign.jpg" />
                                        </div>
                                    </div>
                                    <div>

                                        <div className="text-sm opacity-50">14 March, 2024</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">Pattern Design Course</p>
                            </td>
                            <td>
                                <div className="">
                                    {subtext.substring(0, 50)}...
                                </div>
                            </td>
                            <td>Mr. Karim</td>
                            <td>
                                #FashionDesign, #Garments, #Economic
                            </td>
                            <td className='text-2xl text-green-500'>
                                <Link to="/dashboard/updateBlog"><MdEditSquare /></Link>
                            </td>

                            <td>
                                <MdDelete className="text-2xl text-red-600" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                5
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*" />
                                        </div>
                                    </div>
                                    <div>

                                        <div className="text-sm opacity-50">14 March, 2024</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">Pattern Design Course</p>
                            </td>
                            <td>
                                <div className="">
                                    {subtext.substring(0, 50)}...
                                </div>
                            </td>
                            <td>Mr. Karim</td>
                            <td>
                                #FashionDesign, #Garments, #Economic
                            </td>
                            <td className='text-2xl text-green-500'>
                                <Link to="/dashboard/updateBlog"><MdEditSquare /></Link>
                            </td>

                            <td>
                                <MdDelete className="text-2xl text-red-600" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                5
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*" />
                                        </div>
                                    </div>
                                    <div>

                                        <div className="text-sm opacity-50">14 March, 2024</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">Pattern Design Course</p>
                            </td>
                            <td>
                                <div className="">
                                    {subtext.substring(0, 50)}...
                                </div>
                            </td>
                            <td>Mr. Karim</td>
                            <td>
                                #FashionDesign, #Garments, #Economic
                            </td>
                            <td className='text-2xl text-green-500'>
                                <Link to="/dashboard/updateBlog"><MdEditSquare /></Link>
                            </td>

                            <td>
                                <MdDelete className="text-2xl text-red-600" />
                            </td>
                        </tr>
                    </tbody>


                </table>
            </div>
        </>
    );
};

export default ManageBlog;