// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tab, Tabs, Paragraph, Grommet } from 'grommet';
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
                    color: '#f6861f',
                },
                hover: {
                    color: '#f6861f',
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
    console.log(studentGallery);
    const showingGallery = categoryName === 'All' ? studentGallery : studentGallery.filter(gallery => gallery?.category === categoryName)
    return (
        <div className='  mx-auto py-20 '>
            <p className='text-black font-bold text-4xl text-center py-5'>Student Photo Gallery</p>
           <div className='pr-12'>
                <Grommet Grommet theme={customTheme}>
                    <Tabs justify="start">
                        <Tab className='text-black' title={<span className={`text-black border border-[#f6861f]  px-5 rounded-md py-1 transition-all duration-300 hover:font-bold ${categoryName === 'All' && 'font-bold'}`}>All</span>} onClick={() => setCategoryName('All')}></Tab>
                        {
                            allCategory?.map(category => <Tab onClick={() => setCategoryName(category?.category_name)} key={category?._id} title={<span className={`text-black border border-[#f6861f]  px-5 rounded-md py-1 transition-all duration-300 hover:font-bold ${categoryName === category?.category_name && 'font-bold'}`}>{category?.category_name}</span>}></Tab>)
                        }
    
                    </Tabs>
                </Grommet>
           </div>
            <div className='flex justify-center items-center flex-wrap gap-5'>

                {
                    showingGallery?.map(gallery => <img key={gallery?._id} className='w-[46%] sm:w-[320px] sm:h-[170px] object-cover rounded-2xl shadow-2xl' src={gallery?.image} alt="" />)
                }
            </div>
           
        </div>
    )
};
export default TabSection;