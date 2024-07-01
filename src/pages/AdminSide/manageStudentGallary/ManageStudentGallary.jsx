import { Helmet } from 'react-helmet-async';
import HeaderText from '../../../components/HeaderText';
import { Link } from 'react-router-dom';
import { BiLogoTwitter } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { MdDelete, MdEditSquare } from 'react-icons/md';
import Swal from 'sweetalert2';
import AddStudentGallary from '../addStudentGallary/AddStudentGallary';

const ManageStudentGallary = () => {
    const axiosPublic = useAxiosPublic();
    const { data: studentGallery = [], refetch, isLoading } = useQuery({
        queryKey: ['studentGallery'],
        queryFn: async () => {
            const res = await axiosPublic.get('/studentGallery');
            return res.data;
        }
    })
    if(isLoading){
        return ''
    }

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
                axiosPublic.delete(`/studentGallery/${id}`)
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
    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Student Gallery</title>
            </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
                <p className='text-2xl font-bold text-center'>Manage Student Gallery</p>
               <AddStudentGallary refetch={refetch} studentGallery={studentGallery} handleDelete={handleDelete} />
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                studentGallery.map((gallery, idx) => <tr key={gallery._id}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td className="min-w-[200px]">
                                    <p className="font-bold">{gallery.category}</p>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={gallery?.image || "https://static-cse.canva.com/blob/567558/50stunninglybeautifulgeometricpatternsingraphicdesign.jpg"} />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                               
                                
                                <td className='text-2xl text-green-500'>
                                    <Link to={`/dashboard/updateGallery/${gallery._id}`}><MdEditSquare /></Link>
                                </td>

                                <td>
                                    <button 
                                    onClick={() => handleDelete(gallery?._id)}
                                    ><MdDelete className="text-2xl text-red-600" /></button>
                                </td>
                            </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageStudentGallary;