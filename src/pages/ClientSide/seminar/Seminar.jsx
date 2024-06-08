import React from 'react';
import { Link } from 'react-router-dom';

const Seminar = () => {
    return (
        <div className='flex flex-col justify-center'>
            <div className='w-full'>
                <p className='text-4xl text-center p-5 font-bold shadow-xl'>Seminar</p>
                <p className="text-2xl py-5 text-center ">
                    Online Seminar
                </p>
            </div>

            <div className='mx-auto'>
                <div className="pb-20  overflow-x-auto">
                    <table className="table-auto   border-collapse border border-gray-400">
                        <thead className='bg-pink-600 text-white text-xl font-bold'>
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

                            <tr>
                                <td className="px-4 py-2 border border-gray-400">
                                    Merchandising

                                </td>
                                <td className="px-4 py-2 border border-gray-400">
                                    15 june, 2024
                                </td>
                                <td className="px-4 py-2 border border-gray-400">
                                    10:00 pm at Night sharp
                                </td>

                                <td className="px-4 py-2 border text-blue-500 border-gray-400">
                                    <Link to="/seminarForm">Apply Now</Link>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Seminar;