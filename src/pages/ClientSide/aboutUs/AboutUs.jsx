import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReactPlayer from 'react-player';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import TabSection from '../Home/components/TabSection';
import Faculty from '../Home/components/FacultySlide';
import { Helmet } from 'react-helmet-async';
import Testimonial from '../Home/components/Testimonial';
import Maps from '../Home/components/Maps';

const AboutUs = () => {
    const axiosPublic = useAxiosPublic()
    const { data: homepageContent = [], refetch: homepageContentRefetch, isLoading } = useQuery({
        queryKey: ['homepageContent'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent')
            return res?.data
        }
    })
    const { description, imageUrl, notice, video_url, since, student, rating, instructor, guarantee, ratio } = homepageContent[0] || []
    if (isLoading) {
        return ''
    }
    console.log(video_url);
    return (
        <>
            <Helmet>
                <title>BIFDT | About Us</title>
            </Helmet>
            {/* Frist Video and Marquee First section  */}
            <div className="">
                <ReactPlayer
                    controls="true"
                    height="360px"
                    url={video_url}
                    width="100%"
                />
            </div>

            {/* Second section Photo Gallary  */}
            <div className="w-3/4 mx-auto py-20 ">
                <TabSection></TabSection>
            </div>

            {/* Third section Faculty  */}
            <div className="px-20 py-10 mx-auto">
                <Faculty></Faculty>
                
            </div>

            {/* Fourth section Testimonial  */}
            <div>
                <Testimonial></Testimonial>
            </div>

             {/* Fifth Video and Marquee First section  */}
             <div className="">
                <ReactPlayer
                    controls="true"
                    height="360px"
                    url={video_url}
                    width="100%"
                />
            </div>

            {/* Sixth section Google Map  */}
            <div className="">
                <Maps></Maps>
            </div>
        </>
    );
};

export default AboutUs;