import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import TabSection from '../Home/components/TabSection';
import Faculty from '../Home/components/FacultySlide';
import { Helmet } from 'react-helmet-async';
import Testimonial from '../Home/components/Testimonial';
import Maps from '../Home/components/Maps';

const AboutUs = () => {
    const axiosPublic = useAxiosPublic();
    const { data: homepageContent = [], refetch: homepageContentRefetch, isLoading } = useQuery({
        queryKey: ['homepageContent'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res?.data;
        }
    });

    useEffect(() => {
        if (!isLoading && homepageContent.length > 0) {
            const firstSection = document.getElementById('aboutUsFirstSection');
            console.log(firstSection); 
            if (firstSection) {
                firstSection.scrollIntoView();
            }
        }
    }, [isLoading, homepageContent]);

    if (isLoading || homepageContent.length === 0) {
        return null; // You can return a loading indicator or handle the loading state accordingly
    }

    const { description, imageUrl, notice, video_url, since, student, rating, instructor, guarantee, ratio } = homepageContent[0];

    return (
        <>
            <Helmet>
                <title>BIFDT | About Us</title>
            </Helmet>
            {/* First Video and Marquee Section */}
            <div id='aboutUsFirstSection'>
                <ReactPlayer
                    controls={true}
                    height="360px"
                    url={video_url}
                    width="100%"
                />
            </div>

            {/* Second section Photo Gallery */}
            <div className="w-3/4 mx-auto py-20">
                <TabSection />
            </div>

            {/* Third section Faculty */}
            <div className="px-20 py-10 mx-auto">
                <Faculty />
            </div>

            {/* Fourth section Testimonial */}
            <div>
                <Testimonial />
            </div>

            {/* Fifth Video and Marquee Section */}
            <div>
                <ReactPlayer
                    controls={true}
                    height="360px"
                    url={video_url}
                    width="100%"
                />
            </div>

            {/* Sixth section Google Map */}
            <div>
                <Maps />
            </div>
        </>
    );
};

export default AboutUs;
