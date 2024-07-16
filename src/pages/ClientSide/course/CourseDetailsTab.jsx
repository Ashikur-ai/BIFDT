import React, { useEffect, useState } from 'react';

import 'react-tabs/style/react-tabs.css';
import { Component } from 'react';
import Faq from 'react-faq-component';
import { Grommet, Tab, Tabs } from 'grommet';


const CourseDetailsTab = () => {
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
    useEffect(() => {
        rows && rows[0].expand()
    }, [ rows])
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
    const config = {
        animate: true,
        arrowIcon: "V",
        openOnload: 0,
        expandIcon: "+",
        collapseIcon: "-",
    };
    const btnStyle = 'border-primary hover:bg-primary btn text-white border  md:px-5 px-3 rounded-md  py-1 transition-all duration-300 hover:font-bold  md:h-16 md:w-[190px] flex justify-center items-center tabBtn active:border-2 active:border-gray-500 text-xs sm:text-sm md:text-base'
    return (
        <div className='overflow-x-hidden'>
            <Grommet Grommet theme={customTheme}>
                <Tabs justify="start">


                    <Tab className='text-red-500' title={<div className={`${btnStyle} ${TabName === '2nd' ? 'font-bold bg-primary' : 'bg-primary/80'}`}>
                        <p className='transition-all duration-300 '>1-year Course <br /> 12-Month</p>
                    </div>} onClick={() => setTabName('2nd')}>
                    </Tab>

                    <Tab className='text-red-500' title={
                        <div
                            className={`${btnStyle} ${TabName === '3rd' ? 'font-bold bg-primary' : 'bg-primary/80'}`}><p className='tabBtnText transition-all duration-300'
                            >6-Month Course</p></div>
                    } onClick={() => setTabName('3rd')}></Tab>

                    <Tab className='text-red-500' title={<div className={`${btnStyle} ${TabName === '4th' ? 'font-bold bg-primary' : 'bg-primary/80'}`}><p className='tabBtnText transition-all duration-300'>Semester Details</p></div>} onClick={() => setTabName('4th')}></Tab>
                    <Tab className='text-red-500' title={<div className={`${btnStyle} ${TabName === '1st' ? 'font-bold bg-primary' : 'bg-primary/80'}`}><p className='tabBtnText transition-all duration-300'>Career objective in <br /> fashion design</p></div>} onClick={() => setTabName('1st')}></Tab>

                </Tabs>
            </Grommet>
            {TabName === '1st' && <div className='pl-2  '>
                <Faq getRowOptions={setRowsOption} config={config} data={data} />
            </div>}
            {TabName === '2nd' && <div className='pb-10'>
                <div className="overflow-x-auto w-full ">
                    <table className="table overflow-hidden w-[800px] mx-auto text-base bg-primary/30">
                        {/* head */}
                        <thead className='bg-primary/90 text-white text-base '>
                            <tr>
                                <th>Course Title</th>
                                <th>:</th>
                                <th className="w-[570px] whitespace-normal">1 Year Diploma in Apparel Merchandising & Buying Management (Normal Credits System)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="">
                                <th>Course Duration</th>
                                <td>:</td>
                                <td>12-Month Theoretical & Practical classes for (Woven, Knit & Sweater) Consolidated by Merchandising, Production planning, Textile science , Industrial Engineering, Types of costing in garment industry, Commercial , Internet & Buyer Sourcing,  Pattern Top, Pattern Bottom, Garments Construction, Fully Fashion, CAD Design. Spoken English, Computer training.  followed by Factory Visit.  followed by Factory Visit.</td>
                            </tr>
                            {/* row 2 */}
                            <tr className='bg-gray-300'>
                                <th> Regular Batch</th>
                                <td>:</td>
                                <td>3/4 days in a week for general students, morning, afternoon, evening and various times of the week..</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>Executive Batch </th>
                                <td>:</td>
                                <td>3 days in a week including Friday and Saturday, and evening classes  are available for working people.</td>
                            </tr>
                            <tr className='bg-gray-300'>
                                <th></th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Total Classes</th>
                                <td>:</td>
                                <td>Minimum total-144/192 Classes. Theoretical class(1.5-2) Hours, Practical class(2-3) Hours. Total 30 Credits.            ( Normal Credits System )</td>
                            </tr>
                            <tr className='bg-gray-300'>
                                <th>Qualification</th>
                                <td>:</td>
                                <td>H.S.C/Bachelor's /Master's  (Any age)</td>
                            </tr>
                            <tr>
                                <th>Course Fee</th>
                                <td>:</td>
                                <td>Total payable TK 54,000/=.
                                    At the time of Admission, TK 6,000/= and the rest will  have to be paid Monthly TK 4,000/= × 12 Installments = TK 48000/=.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>}
            {TabName === '3rd' && <div>
                <div className='pl-2  '>

                    <div className='pl-2  '>
                        <p className='font-bold text-xl pb-2'>6-Month Certificate Course in Fashion Design.</p>
                        <div className='space-y-3'>
                            <div className='flex gap-4'>
                                <div className='w-1/4'>Course Title :</div>
                                <div className='w-3/4'>6-Month Certificate Course in Fashion Design.</div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='w-1/4'>Course Duration :</div>
                                <div className='w-3/4'>6-Month theoretical & practical classes in this Institute. 16 Credits.<span className='font-bold'> Minimum Total -72/96 Classes</span>
                                    <p>Theoretical class(1.5-2)Hours, Practical class(2-3)Hours. 3/4 days in a week.</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='w-1/4'>Course Fee :</div>
                                <div className='w-3/4'>Total payable TK 30,000/=. At the time of Admission, TK 6,000/= and the rest will
                                    have to be paid Monthly TK 4,000/= × 6 Installments = TK 24,000/=</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>}
            {TabName === '4th' && <div>
                <div>
                    <div className="overflow-x-auto max-w-[800px] mx-auto">
                        <table className="min-w-full border-collapse border border-gray-200 bg-primary/20 ">
                            <thead>
                                <tr className="bg-primary/90 text-white">
                                    <th colSpan="2" className="border border-gray-200 px-4 py-2 text-left">First Semester</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">1</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Production & Designing Department</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">2 Credits</td>
                                </tr>
                                <tr className=" ">
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">2</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Textile Department</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">2 Credits</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">3</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Business Communication (Spoken) Department</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">2 Credits</td>
                                </tr>
                                <tr className=" ">
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">4</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Commercial Department</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">1 Credit</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">5</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Industrial Engineering Department</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">2 Credits</td>
                                </tr>
                                <tr className=" ">
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">6</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Merchandising Department</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">2 Credits</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">7</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Internet & Buyer Sourcing Department</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">1 Credit</td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <th colSpan="2" className="border border-gray-200 px-4 py-2 text-left">Second Semester</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Credits</th>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">8</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Computer Fundamental Department</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">3 Credits</td>
                                </tr>
                                <tr className=" ">
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">9</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Basic Pattern Department (1) Top Variation</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">4 Credits</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">10</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Basic Pattern Department (2) Bottom Variation</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">4 Credits</td>
                                </tr>
                                <tr className=" ">
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">11</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Garments Construction Department</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">2 Credits</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">12</td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Merchandising Department (2)</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">3 Credits</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]"></td>
                                    <td className="border-0 border-r-2 border-black px-4 py-2 border-b-[1.5px] border-b-primary">Total</td>
                                    <td className="px-4 py-2 border-r-2 border-0 border-black border-b-[1.5px] border-b-primary border-l-[2px]">30 Credits</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>}
            {/* <Tabs>
                <TabList>
                    <Tab><button className="btn btn-outline btn-secondary">Career objective in fashion design</button></Tab>

                    <Tab><button className="btn btn-outline btn-secondary">1-year Course 12-Month</button></Tab>

                    <Tab><button className="btn btn-outline btn-secondary">6-Month Course</button></Tab>

                    <Tab><button className="btn btn-outline btn-secondary">Semester Details</button></Tab>


                </TabList>



                <TabPanel>
                    
                </TabPanel>

                <TabPanel>
                    
                </TabPanel>

                <TabPanel>
                    
                </TabPanel>

                <TabPanel>
                    
                </TabPanel>


            </Tabs> */}
        </div>
    );
};

export default CourseDetailsTab;