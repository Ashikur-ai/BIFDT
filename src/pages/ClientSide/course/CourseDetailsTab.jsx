import React, { useEffect, useState } from 'react';

import 'react-tabs/style/react-tabs.css';
import { Component } from 'react';
import Faq from 'react-faq-component';
import { Grommet, Tab, Tabs } from 'grommet';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SemesterTable from '../../../components/SemesterTable';
import CourseCategory from '../../../components/CourseCategory';


const CourseDetailsTab = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic()
    const [TabName, setTabName] = useState('2nd')
    const [rows, setRowsOption] = useState(null)
    const customTheme = {
        tab: {
            active: {
                color: 'black',
            },
            border: {
                side: 'bottom',
                size: 'small',
                color: 'border',
                active: {
                    color: '#FF4e00',
                },
                hover: {
                    color: '#FF4e00',
                },
            },
            color: 'text',
            margin: {
                vertical: 'xsmall',
                horizontal: 'small',
            },
            pad: {
                bottom: 'xsmall',
            },
            extend: ({ theme }) => `
            color: ${theme.global.colors['accent-1']};
            &:hover {
              background-color: ${theme.global.colors['']};
            }
          `,
        },
    };
    const { data: courseSemesters = [], isLoading: courseSemestersIsLoading } = useQuery({
        queryKey: ['singleCourseIdForSemester', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/semesterByCourse/course/${id}`)
            return res?.data
        }
    })
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
    useEffect(() => {
        if (courseCategories?.length > 0) {
            setTabName(courseCategories[0]?._id)
        } else {
            setTabName('4th')
        }
    }, [courseCategories])
    if (courseSemestersIsLoading || courseCategoriesIsLoading || courseObjectivesIsLoading) {
        return ''
    }
    const showingCategory = courseCategories?.find(category => category?._id === TabName) || {}
    const courseObjective = courseObjectives[0] || {};
    const { objectiveFAQ = [] } = courseObjective;
    console.log(objectiveFAQ);
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
    const data = {
        title: "",
        rows: [
            {
                title: <p className='font-bold'>Fashion Designer</p>,
                content: "Fashion designers are involved from conception to completion in the development and production of clothing lines. While some designers work their way up in the industry through on-the-job experience, nowadays a formal education is often the minimum requirement for this position. Designers must have in-depth knowledge of fashion design concepts, sewing, apparel design, and garment construction, and be familiar with different types of textiles and industry trends. Most designers specialize in areas such as women's clothing, children's wear, or casual wear.",

            },
            {
                title: <p className='font-bold'>Assistant Designer</p>,
                content: "Assistant designers help fashion designers with every aspect of the development and production of clothing lines. Typical duties include developing sketches for designers to work from, preparing presentation materials for shows and clothing demos, sourcing fabric, etc. Assistant designers are not required to have a formal education, but many do. Assistant designers often work their way up to become designers."
            },
            {
                title: <p className='font-bold'>Pattern Maker</p>,
                content: "Pattern makers create patterns and specifications for how each part of a garment should be manufactured and assembled. Today, pattern makers often use computer software, CAD, and 3D imaging to create patterns and develop specifications. Pattern making skills can be learned on the job, by earning a specialized degree in fashion design, or through a technical education program."
            },
            {
                title: <p className='font-bold'>Fashion Merchandiser</p>,
                content: "Many aspiring fashion design students and designers end up migrating to a career in fashion merchandising. Merchandisers are generally upper-management and high-level executives responsible for deciding which clothing lines, fashions, and/or accessories a manufacturer should produce. They plan, research, and determine which fashion trends a company should pursue. A 6-month certificate course or a 1-year diploma course in Fashion Design, Fashion Merchandising, Apparel Production, or Marketing is often the minimum educational requirement for this position."
            },
            {
                title: <p className='font-bold'>Assistant Buyer</p>,
                content: "To become a buyer, one must first become an assistant buyer. Assistant buyers help fashion buyers select products, write and price orders, negotiate with vendors, and plan and manage a budget. Most assistant buyers have a 1-year diploma in Fashion Design. This position is highly competitive as it is a stepping stone to becoming a full-fledged buyer."
            },
            {
                title: <p className='font-bold'>Design Director</p>,
                content: "A design director's main duty is to provide color, trend, and fabric direction for all product lines. They also manage design teams, supervise the manufacturing process, and support marketing efforts. Job duties include market research, predicting future demand, production support, and building fabric and material stories."
            },
            {
                title: <p className='font-bold'>Fashion Director</p>,
                content: "Fashion directors are responsible for having intimate knowledge of various market trends and using this knowledge to develop effective marketing and branding strategies. Fashion directors do a significant amount of traveling and are required to attend industry events. They must be able to forecast fashion trends, have strong communication skills, and be experts in design and color. They also develop fashion communication strategies and manage buying teams."
            },
            {
                title: <p className='font-bold'>Visual Merchandising Director</p>,
                content: "Visual merchandising directors work in the retail and wholesale sectors of the fashion design industry, promoting products, services, and brand image. They dress mannequins, develop visually appealing fashion displays, and organize special events to promote brand awareness. They supervise style and concept production, plan presentations, and manage budgets. They need to be experts in color and style, have the ability to manage budgets, and be extremely creative."
            },
            {
                title: <p className='font-bold'>Fashion Editor</p>,
                content: "Fashion editors oversee the creation, development, and presentation of content for fashion-related magazines and publications. They are responsible for fashioning photo shoots, managing teams, staying up-to-date on industry trends, selecting looks to feature, curating photography, and deciding what should be published. They must have exceptional writing skills, be experts in fashion and photography, and have good social communication skills."
            }
        ]
    }

    const btnStyle = 'border-primary hover:bg-primary btn text-white border  md:px-5 px-3 rounded-md  py-1 transition-all duration-300 hover:font-bold  md:h-16 md:w-[190px] flex justify-center items-center tabBtn active:border-2 active:border-gray-500 text-xs sm:text-sm md:text-base'
    return (
        <div className='overflow-x-hidden'>
            <Grommet Grommet theme={customTheme}>
                <Tabs justify="start">
                    {
                        courseCategories?.map(category => <Tab key={category?._id} className='text-red-500' title={<div className={`${btnStyle} ${TabName === category?._id ? 'font-bold bg-primary' : 'bg-primary/80'}`}>
                            <p className='transition-all duration-300 '>{category.duration}</p>
                        </div>} onClick={() => setTabName(category?._id)}>
                        </Tab>)
                    }

                    <Tab className='text-red-500' title={<div className={`${btnStyle} ${TabName === '4th' ? 'font-bold bg-primary' : 'bg-primary/80'}`}><p className='tabBtnText transition-all duration-300'>Semester Details</p></div>} onClick={() => setTabName('4th')}></Tab>
                    <Tab className='text-red-500' title={<div className={`${btnStyle} ${TabName === '1st' ? 'font-bold bg-primary' : 'bg-primary/80'}`}><p className='tabBtnText transition-all duration-300'>Career objective in</p></div>} onClick={() => setTabName('1st')}></Tab>

                </Tabs>
            </Grommet>
            {TabName === '1st' && <div className='pl-2  '>
                {
                    objectiveFAQ.length < 1 ? <p className="pb-10 pt-5 text-center">No FAQ Found</p> : <Faq config={config} getRowOptions={setRowsOption} data={showingDataAtFAQ} />
                }
            </div>}
            {
                showingCategory?.name && <CourseCategory category={showingCategory} />
            }
            {TabName === '4th' && <div>
                <div>
                    {
                        courseSemesters.map(semester => <SemesterTable key={semester._id} semesterTitle={semester?.semesterTitle} subjects={semester?.subjects} />)
                    }
                </div>
            </div>}
        </div>
    );
};

export default CourseDetailsTab;