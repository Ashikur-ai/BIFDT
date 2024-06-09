import React from 'react';
import HeaderText from '../../../components/HeaderText';
import Blogs from '../Home/components/Blogs';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    return (
        <div className='px-20 mt-10  min-h-screen'>
            <p className="text-4xl m-10"><span className='text-pink-600 border-b-2'>Latest</span> News</p>

            <Blogs></Blogs>
            <Blogs></Blogs>
            <Blogs></Blogs>
            <Blogs></Blogs>
            <Blogs></Blogs>
            <Blogs></Blogs>
        </div>
    );
};

export default BlogPage;