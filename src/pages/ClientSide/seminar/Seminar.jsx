import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Seminar = () => {
    const axiosPublic = useAxiosPublic();
    const { data: seminars = [] } = useQuery({
        queryKey: ['seminars'],
        queryFn: async () => {
            const res = await axiosPublic.get('/seminar');
            return res.data;
        }
    })


    return (
        <div className='flex flex-col justify-center max-w-[100vw] overflow-hidden'>
            <Helmet>
                <title>BFIDT | Seminar</title>
            </Helmet>
            <div className='w-full'>
                <p className='text-4xl text-center p-5 font-bold shadow-xl'>Free Seminar/counselling</p>

            </div>

            <div className='mx-auto pb-20'>
                <div className="max-w-[100vw] overflow-x-auto">
                    <table className="table-auto   border-collapse border border-gray-400">
                        <thead className='bg-primary text-white text-xl font-bold'>
                            <tr>
                                <th className="px-4 py-2  border border-gray-400">
                                    Topics
                                </th>
                                <th className="px-4 py-2  border border-gray-400">
                                    Date
                                </th>
                                <th className="px-4 py-2  border border-gray-400">
                                    Time
                                </th>
                                <th className="px-4 py-2  border border-gray-400">
                                    Link or Registrations
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                seminars?.map(seminar =>
                                    <tr key={seminar._id}>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {seminar.topic}

                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {seminar.date}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {seminar.time}
                                        </td>

                                        <td className="px-4 py-2 border-b text-blue-500 border-gray-400 flex justify-center items-center">
                                            <Link to={`/seminarForm/${seminar._id}`}><button className='bg-primary text-white px-5 py-1.5 rounded-md active:scale-90 transition-all duration-300 font-medium'>Apply Now</button></Link>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Seminar;