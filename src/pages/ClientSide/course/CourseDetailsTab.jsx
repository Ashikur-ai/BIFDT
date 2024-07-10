import React, { useState } from 'react';

import 'react-tabs/style/react-tabs.css';
import { Component } from 'react';
import Faq from 'react-faq-component';
import { Grommet, Tab, Tabs } from 'grommet';


const CourseDetailsTab = () => {
    const [TabName, setTabName] = useState('2nd')
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
    const data = {
        title: "",
        rows: [
            {
                title: <p className='font-bold'>Fashion Designer</p>,
                content: "Fashion designers are involved from conception to completion in the development and production of clothing lines. While some designers work their way up in the industry through on-the-job experience, nowadays a formal education is often the minimum requirement for this position. Designers must have in-depth knowledge of fashion design concepts, sewing, apparel design, and garment construction, and be familiar with different types of textiles and industry trends. Most designers specialize in areas such as women's clothing, children's wear, or casual wear."
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
    const btnStyle = 'border-primary hover:bg-primary btn text-white border text-base  px-5 rounded-md  py-1 transition-all duration-300 hover:font-bold  h-16 w-[190px] flex justify-center items-center tabBtn active:border-2 active:border-gray-500'
    return (
        <div className='pr-10'>
            <Grommet Grommet theme={customTheme}>
                <Tabs justify="start">


                    <Tab className='text-red-500' title={<div className={`${btnStyle} ${TabName === '2nd' ? 'font-bold bg-primary' : 'bg-primary/80'}`}><p className='tabBtnText transition-all duration-300'>1-year Course <br /> 12-Month</p></div>} onClick={() => setTabName('2nd')}></Tab>

                    <Tab className='text-red-500' title={
                        <div
                            className={`${btnStyle} ${TabName === '3rd' ? 'font-bold bg-primary' : 'bg-primary/80'}`}><p className='tabBtnText transition-all duration-300'
                            >6-Month Course</p></div>
                    } onClick={() => setTabName('3rd')}></Tab>

                    <Tab className='text-red-500' title={<div className={`${btnStyle} ${TabName === '4th' ? 'font-bold bg-primary' : 'bg-primary/80'}`}><p className='tabBtnText transition-all duration-300'>Semester Details</p></div>} onClick={() => setTabName('4th')}></Tab>
                    <Tab className='text-red-500' title={<div className={`${btnStyle} ${TabName === '1st' ? 'font-bold bg-primary' : 'bg-primary/80'}`}><p className='tabBtnText transition-all duration-300'>Career objective in <br /> fashion design</p></div>} onClick={() => setTabName('1st')}></Tab>

                </Tabs>
            </Grommet>
            {TabName === '1st' && <div className='pl-2 pr-10'>
                <Faq data={data} />
            </div>}
            {TabName === '2nd' && <div>
                <div className='pl-2 pr-10'>
                    <p className='font-bold text-xl pb-2'>1-year Diploma Course in Fashion Design. (Normal Credits System )</p>
                    <div className='space-y-3'>
                        <div className='flex gap-4'>
                            <div className='w-1/4'>Course Title :</div>
                            <div className='w-3/4'>1-year Diploma Course in Fashion Design. (Normal Credits System )</div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1/4'>Course Duration :</div>
                            <div className='w-3/4'>12-Month theoretical & practical classes in this Institute. 30 Credits. <span className='font-bold'>Minimum Total -144/192.</span>
                                <p>Theoretical class(1.5-2)Hours, Practical class(2-3)Hours. 3/4 days in a week. </p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1/4'>Course Fee :</div>
                            <div className='w-3/4'>Total payable TK 54,000/=. At the time of Admission, TK 6,000/= and the rest will
                                have to be paid Monthly TK 4,000/= × 12 Installments = TK 48,000/=  </div>
                        </div>
                    </div>

                </div>

                <div className='pl-2 pr-10 pt-5'>
                    <p className='font-bold text-xl pb-2'>1-year Diploma Course in Fashion Design. ( Open Credits System )</p>
                    <div className='space-y-3'>
                        <div className='flex gap-4'>
                            <div className='w-1/4'>Course Title :</div>
                            <div className='w-3/4'>1-year Diploma Course in Fashion Design. ( Open Credits System )</div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1/4'>Course Duration :</div>
                            <div className='w-3/4'>7-Month theoretical & practical classes in this Institute. 30 Credits.<span className='font-bold'>Minimum Total -144/192.</span>
                                <p>Theoretical class(1.5-2)Hours, Practical class(2-3)Hours. 5/6 days in a week.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1/4'>Course Fee :</div>
                            <div className='w-3/4'>Total payable TK 54,000/=. At the time of Admission, TK 8,500/= and the rest will
                                have to be paid Monthly TK 6,500/= × 7 Installments = TK 45,500/=</div>
                        </div>
                    </div>

                </div>
            </div>}
            {TabName === '3rd' && <div>
                <div className='pl-2 pr-10'>

                    <div className='pl-2 pr-10'>
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
                <div className='pl-2 pr-10'>


                    <table border="0" cellSpacing="5" cellPadding="5" className="table">
                        <tbody>
                            <tr><th colSpan="4" align="left">First Semester</th></tr>
                            <tr>
                                <td colSpan="2">1.</td>
                                <td>Fashion Figure Dries Illustration-1</td>
                                <td>4 Credits</td>
                            </tr>
                            <tr>
                                <td colSpan="2">2.</td>
                                <td colSpan="2">Color Composition.</td>
                            </tr>
                            <tr>
                                <td colSpan="2">3.</td>
                                <td>Basic Pattern Construction 1-Top Variation. (Men's &amp; Women's Wear)</td>
                                <td>4 Credits</td>
                            </tr>
                            <tr>
                                <td colSpan="2">4.</td>
                                <td>Basic Pattern Construction 2- Bottom Variation. (Men's &amp; Women's Wear)</td>
                                <td>4 Credits</td>
                            </tr>
                            <tr>
                                <td colSpan="2">5.</td>
                                <td>History of Costumes. (Worldwide Fashion)</td>
                                <td>1 Credit</td>
                            </tr>
                            <tr>
                                <td colSpan="2">6.</td>
                                <td>Textile science</td>
                                <td>2 Credits</td>
                            </tr>
                            <tr>
                                <td colSpan="2">7.</td>
                                <td>Elements of Design.</td>
                                <td>1 Credit</td>
                            </tr>
                            <tr><th colSpan="4" align="left">Second Semester</th></tr>
                            <tr>
                                <td colSpan="2">8.</td>
                                <td>Fashion Figure Dress Illustration-2 &amp; Surface Ornamentations</td>
                                <td>4 Credits</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td colSpan="3">( Block, Batik, Tie-dye, Ambush, Screenprint )</td>
                            </tr>
                            <tr>
                                <td colSpan="2">9.</td>
                                <td>Garments Construction.</td>
                                <td>1 Credit</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td colSpan="3">(Sewing, Seam, machine Identification, Operation Break Down, Line Balancing)</td>
                            </tr>
                            <tr>
                                <td colSpan="2">10.</td>
                                <td>Pattern grading system</td>
                                <td>1 Credit</td>
                            </tr>
                            <tr>
                                <td colSpan="2">11.</td>
                                <td>Draping.</td>
                                <td>2 Credits</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td colSpan="3">(Women Wear:- Skirt, Tops, Grown, Ladies Pant, Lingerie &amp; all the design Variation)</td>
                            </tr>
                            <tr>
                                <td colSpan="2">12.</td>
                                <td>Product Development.</td>
                                <td>2 Credits</td>
                            </tr>
                            <tr>
                                <td colSpan="2">13.</td>
                                <td>Fashion C.A.D (Computer-Aided Design ).</td>
                                <td>2 Credits</td>
                            </tr>
                            <tr>
                                <td colSpan="2">14.</td>
                                <td>Fashion Marketing.</td>
                                <td>1 Credit</td>
                            </tr>
                            <tr>
                                <td colSpan="2">15.</td>
                                <td>Portfolio/ Final Dress Submission</td>
                                <td>2 Credits</td>
                            </tr>
                        </tbody>
                    </table>

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