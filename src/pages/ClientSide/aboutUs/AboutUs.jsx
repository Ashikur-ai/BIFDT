import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import TabSection from '../Home/components/TabSection';
import Faculty from '../Home/components/FacultySlide';
import { Helmet } from 'react-helmet-async';
import Testimonial from '../Home/components/Testimonial';
import Maps from '../Home/components/Maps';
import AboutUsText from './AboutUsText';
import Videos from '../Home/components/Videos';

const AboutUs = () => {
    const axiosPublic = useAxiosPublic();
    const { data: homepageContent = [], refetch: homepageContentRefetch, isLoading } = useQuery({
        queryKey: ['homepageContent'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res?.data;
        }
    });

    if (isLoading || homepageContent.length === 0) {
        return null; // You can return a loading indicator or handle the loading state accordingly
    }

    const { description, imageUrl, notice, video_url, since, student, rating, instructor, guarantee, ratio, videoSection_url_text, video_section_video } = homepageContent[0];

    return (
        <>
            <Helmet>
                <title>BIFDT | About Us</title>
            </Helmet>
            {/* First Video and Marquee Section */}
            <div className="video-container">

                <ReactPlayer
                    controls="true"
                    height="100%"
                    url={video_url}
                    width="100%"
                />
            </div>
            <AboutUsText />
            {/* Second section Photo Gallery */}
            <div className="">
                <TabSection />
            </div>

            {/* Third section Faculty */}
            <div className="">
                <Faculty />
            </div>

            {/* Fourth section Testimonial */}
            <div>
                <Testimonial />
            </div>

            {/* Fifth Video and Marquee Section */}
            <div id="homePageFirstSection" className="video-container mb-52">

                <Videos video_url={videoSection_url_text || video_section_video} />
            </div>

            {/* Sixth section Google Map */}
            <div>
                <Maps />
            </div>
        </>
    );
};

export default AboutUs;
