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
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';




const TabSection = () => {
    const [categoryName, setCategoryName] = useState('All')
    const axiosPublic = useAxiosPublic();
    const { data: studentGallery = [], refetch, isLoading } = useQuery({
        queryKey: ['studentGallery'],
        queryFn: async () => {
            const res = await axiosPublic.get('/studentGallery');
            return res.data;
        }
    })
    if (isLoading) {
        return ''
    }
    console.log(studentGallery);
    const showingGallery = categoryName === 'All' ? studentGallery : studentGallery.filter(gallery => gallery?.category === categoryName)
    return (
        <>
            <p className='text-pink-700 font-bold text-4xl text-center py-5'>Student Photo Gallery</p>
            <Tabs>
                <TabList>
                    <Tab><button className="btn btn-outline btn-secondary" onClick={() => setCategoryName('All')}>All</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary" onClick={() => setCategoryName('Interior Design')}>Interior Design</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary" onClick={() => setCategoryName('Fashion Design')}>Fashion Design</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary" onClick={() => setCategoryName('Merchandising')}>Merchandising</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary" onClick={() => setCategoryName('Computer Operation')}>Computer Operation</button></Tab>
                    <Tab><button className="btn btn-outline btn-secondary" onClick={() => setCategoryName('Pattern Design')}>Pattern Design</button></Tab>
                </TabList>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                    {
                        showingGallery?.map(gallery => <img key={gallery?._id} className='w-full h-full rounded-2xl shadow-2xl' src={gallery?.image} alt="" />)
                    }
                </div>


            </Tabs>
        </>
    )
};
export default TabSection;