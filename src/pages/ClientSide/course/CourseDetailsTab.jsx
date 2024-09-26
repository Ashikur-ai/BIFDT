import React, { useEffect, useState } from 'react';

import 'react-tabs/style/react-tabs.css';
import Faq from 'react-faq-component';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SemesterTable from '../../../components/SemesterTable';
import CourseCategory from '../../../components/CourseCategory';
import Tabs from './Tabs';


const CourseDetailsTab = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic()
    const [TabName, setTabName] = useState('Career Objective')
    const [rows, setRowsOption] = useState(null)

   
    const { data: courseCategories = [], isLoading: courseCategoriesIsLoading } = useQuery({
        queryKey: ['courseCategories', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/courseCategory/course/${id}`)
            return res?.data
        }
    })
    const { data: courseObjectives = [], isLoading: courseObjectivesIsLoading } = useQuery({
        queryKey: ['courseObjective', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/objectives/course/${id}`);
            return res?.data;
        }
    });

    useEffect(() => {
        if (courseObjectives.length > 0) {
            rows && rows[0].expand()
        }
    }, [courseObjectives, rows])
    if ( courseCategoriesIsLoading || courseObjectivesIsLoading) {
        return ''
    }
    const showingCategory = courseCategories?.find(category => category?._id === TabName) || {}
    const courseObjective = courseObjectives[0] || {};
    const { objectiveFAQ = [] } = courseObjective;
    let convertedArray = objectiveFAQ.map(item => {
        return {
            title: <div className='flex gap-5 justify-between'>
                <p className='font-bold'>{item.question}</p>
            </div>,
            content: item.answer,

        };
    });
    const showingDataAtFAQ = {
        title: '',
        rows: convertedArray
    }
    const config = {
        animate: true,
        arrowIcon: "V",
        openOnload: 1,
        expandIcon: "+",
        collapseIcon: "-",
    };

    return (
        <div className='overflow-x-hidden w-full lg:w-[70vw] bg-white rounded-lg space-y-2 p-2 sm:p-5 '>
            <Tabs tabName={TabName} setTabName={setTabName} courseCategories={courseCategories} />
            {TabName === 'Career Objective' && <div className='pl-2  '>
                {
                    objectiveFAQ.length < 1 ? <p className="pb-10 pt-5 text-center">No FAQ Found</p> : <Faq config={config} getRowOptions={setRowsOption} data={showingDataAtFAQ} />
                }
            </div>}
            {
                showingCategory?.name && <CourseCategory category={showingCategory} />
            }

            
            {/* {TabName === 'Semester Details' && <div>
                <div >
                    {
                        courseSemesters.map(semester => <SemesterTable key={semester._id} semesterTitle={semester?.semesterTitle} subjects={semester?.subjects} />)
                    }
                    <table className=" border-collapse border border-gray-200 bg-primary/20 text-xs xs:text-sm sm:text-base w-full max-w-[800px] mx-auto">
                        <thead>
                            <tr className="">
                                <th colSpan="2" className="border border-gray-200 px-2 sm:px-4 py-2 text-left"></th>
                                <th className="border border-gray-200 px-2 sm:px-4 py-2 text-left"></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-primary/20 '>
                                <td className="px-2 sm:px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">Total</td>
                                <td className="border-0 border-r-2 border-black px-2 sm:px-4 py-2 border-b-[1.5px] border-b-primary "></td>
                                <td className="border border-gray-200 px-2 sm:px-4 py-2 font-medium border-b-[1.5px border-b-primary border-r-[2px] border-r-black">{totalCredits} Credits</td>

                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>} */}
        </div>
    );
};

export default CourseDetailsTab;