import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// images
import gallary1 from "../../../../assets/images/gallary1.jpg";
import gallary2 from "../../../../assets/images/gallary2.jpg";
import gallary3 from "../../../../assets/images/gallary3.jpg";
import gallary4 from "../../../../assets/images/gallary4.jpg";
import gallary5 from "../../../../assets/images/gallary5.jpg";
import gallary6 from "../../../../assets/images/gallary6.jpg";
import gallary7 from "../../../../assets/images/gallary7.jpg";
import gallary8 from "../../../../assets/images/gallary8.jpg";




const TabSection = () => {
    return (
        <>
            <p className='text-pink-700 font-bold text-4xl text-center py-5'>Student Photo Gallery</p>
            <Tabs>
                <TabList>
                    <Tab><button className="btn btn-outline btn-secondary">All</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary">Interior Design</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary">Fashion Design</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary">Merchandising</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary">Computer Operation</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary">Pattern Design</button></Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary1} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary2} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary3} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary4} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary5} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary6} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary7} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary8} alt="" />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary3} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary4} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary5} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary6} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary7} alt="" />
                    </div>
                </TabPanel>

                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary4} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary5} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary6} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary7} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary3} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary1} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary2} alt="" />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary5} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary6} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary1} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary2} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary3} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary4} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary7} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary8} alt="" />

                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary8} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary5} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary6} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary7} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary1} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary2} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary3} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary4} alt="" />

                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        
                       
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary1} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl ' src={gallary2} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary3} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary4} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary8} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary5} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary6} alt="" />
                        <img className='w-full h-full rounded-2xl shadow-2xl' src={gallary7} alt="" />

                    </div>
                </TabPanel>

                
            </Tabs>
        </>
    )
};
export default TabSection;