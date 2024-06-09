import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/backendComponents/Sidebar';
import BackendNavbar from '../components/backendComponents/BackendNavbar';

const DashboardLayout = () => {
    return (
        <>
            <div className="lg:flex h-screen bg-gray-100">
                <Sidebar></Sidebar>
                <div className='flex-1 px-8 py-8'>

                    <BackendNavbar></BackendNavbar>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;