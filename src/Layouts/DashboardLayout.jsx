import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/backendComponents/Sidebar';
import BackendNavbar from '../components/backendComponents/BackendNavbar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const DashboardLayout = () => {
    return (
        <>
            <ScrollToTop />
            <div className="lg:flex min-h-screen bg-gray-100">
                <Sidebar></Sidebar>
                <div className='flex-1'>

                    <BackendNavbar></BackendNavbar>
                    <div className=''>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;