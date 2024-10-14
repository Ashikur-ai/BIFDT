import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageAppUsers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['appUsers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/usersApp');
            return res.data;
        }
    })
    if (isLoading) {
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
            confirmButtonText: "Yes, delete!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/usersApp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User Deleted from database",
                                icon: "success"
                            });
                            refetch();
                        }
                    })


            }
        });
    }
    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Users</title>
            </Helmet>
            <div className="bg-white p-5 rounded-lg w-full lg:w-[calc(100vw-300px)] mx-auto">
                <p className='text-2xl font-bold text-center'>Manage Users</p>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td
                                            onClick={() => handleDelete(item?._id)}
                                            className='text-2xl text-red-500  cursor-pointer'><MdDelete /></td>
                                    </tr>
                                )
                            }





                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageAppUsers;