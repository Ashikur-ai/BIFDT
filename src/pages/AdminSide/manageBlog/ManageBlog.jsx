import { Helmet } from "react-helmet-async";
import { MdDelete, MdEditSquare, MdUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import HTMLContent from "../../../components/backendComponents/HTMLContent";
import DOMPurify from 'dompurify';
import Swal from "sweetalert2";
import { makeVisibleTime } from "../../../makeVisibleTime";

const ManageBlog = () => {


    const axiosPublic = useAxiosPublic();
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blog');
            return res.data;
        }
    })
    const handleDelete = (id) => {

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
                axiosPublic.delete(`/blog/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            }
        });

    }
    console.log(blogs);




    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Blogs</title>
            </Helmet>
            <div className="bg-white mx-5 rounded-lg overflow-x-auto max-w-full">
                <p className="text-2xl font-bold text-center py-2">Manage Blogs</p>
                <table className="table table-zebra overflow-x-auto">
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

                        {
                            blogs?.map((blog, index) =>
                                <tr key={blog._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={blog?.blogImageUrl || "https://static-cse.canva.com/blob/567558/50stunninglybeautifulgeometricpatternsingraphicdesign.jpg"} />
                                                </div>
                                            </div>
                                            <div>

                                                <div className="text-sm opacity-50 min-w-max">{makeVisibleTime(blog?.date)}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="min-w-[200px]">
                                        <p className="font-bold">{blog.title}</p>
                                    </td>
                                    <td className="min-w-[300px]">
                                        <div className="">
                                            {/* {subtext.substring(0, 50)}... */}
                                            {/* <HTMLContent content={blog.description} /> */}
                                            <div
                                                className="blog-content h-[80px] overflow-hidden"
                                                dangerouslySetInnerHTML={{ __html: blog.description }}
                                            ></div>
                                        </div>
                                    </td>
                                    <td>{blog.author}</td>
                                    <td>
                                        {blog.meta_word}
                                    </td>
                                    <td className='text-2xl text-green-500'>
                                        <Link to={`/dashboard/updateBlog/${blog._id}`}><MdEditSquare /></Link>
                                    </td>

                                    <td>
                                        <button onClick={() => handleDelete(blog?._id)}><MdDelete className="text-2xl text-red-600" /></button>
                                    </td>
                                </tr>
                            )
                        }



                    </tbody>


                </table>
            </div>
        </>
    );
};

export default ManageBlog;