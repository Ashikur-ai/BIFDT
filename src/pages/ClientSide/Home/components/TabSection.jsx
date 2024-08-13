// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tab, Tabs, Paragraph, Grommet } from 'grommet';
import 'react-tabs/style/react-tabs.css';
import { FaAngleDown } from "react-icons/fa";
// images
import { PhotoProvider, PhotoView } from "react-photo-view";
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import StudentGalleryTabs from '../../../AdminSide/manageStudentGallary/StudentGalleryTabs';




const TabSection = () => {
    const [categoryName, setCategoryName] = useState('All')
    const [seeMore, setSeeMore] = useState(false)
    const axiosPublic = useAxiosPublic();
    const { data: studentGallery = [], refetch, isLoading } = useQuery({
        queryKey: ['studentGallery'],
        queryFn: async () => {
            const res = await axiosPublic.get('/studentGallery');
            return res.data;
        }
    })
    const { data: allCategory = [], refetch: allCategoryRefetch, isLoading: allCategoryIsLoading } = useQuery({
        queryKey: ['allCategory'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allCategory');
            return res.data;
        }
    })
    if (isLoading || allCategoryIsLoading) {
        return ''
    }
    console.log(studentGallery);
    const showingGallery = categoryName === 'All' ? studentGallery : studentGallery.filter(gallery => gallery?.category === categoryName)
    return (
        <div className='  mx-auto lg:py-20 '>
            <p className='text-black font-bold text-xl lg:text-4xl text-center lg:py-5'>Student Photo Gallery</p>
            <div className='pr-12 w-max max-w-full mx-auto'>
            <div className=' pb-10'><StudentGalleryTabs tabName={categoryName} setTabName={setCategoryName} studentCategory={allCategory} /></div>
            </div>
            <div className='flex justify-center  items-center flex-wrap gap-5 md:gap-10 max-w-[1200px] mx-auto'>

                {
                    (showingGallery?.slice(0, seeMore ? showingGallery?.length : 9))?.map(gallery => <PhotoProvider key={gallery?._id}><PhotoView src={gallery?.image}><img key={gallery?._id} className='w-[46%] sm:w-[320px] sm:h-[170px] object-cover rounded-2xl shadow-2xl cursor-pointer' src={gallery?.image} alt="" /></PhotoView></PhotoProvider>)
                }
            </div>
            {
                showingGallery.length > 9 && <div className='flex justify-center items-center pt-10'>
                    <button onClick={() => setSeeMore(!seeMore)} className='flex flex-col justify-center items-center px-7 py-1 rounded-md bg-primary text-white hover:font-bold transition-all duration-300 hover:bg-[#e55633]  active:bg-primary focus:outline-none focus:ring focus:ring-red-300 active:scale-90 focus:text-white w-max'>
                        <span className='text-[12px] lg:text-lg'>{seeMore ? 'See Less' : 'See More'}</span>
                        <FaAngleDown className={`text-[8px] lg:text-lg transition-all duration-300 ${seeMore ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                </div>
            }
        </div>
    )
};
export default TabSection;