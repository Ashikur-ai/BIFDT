import React from 'react';
import { FaHome, FaUsers, FaWpforms } from 'react-icons/fa';
import { FaCircleUser, FaFileWaveform } from 'react-icons/fa6';
import { MdAdd, MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem';

const Sidebar = () => {
    return (
        <>
            <div className="lg:w-64 bg-white flex flex-col justify-start py-8">
                <div className="text-2xl text-center font-bold mb-6">BIFDT Dashboard</div>
                <ul className="space-y-2  list-none">

                    <NavigationItem to="/dashboard" icon={FaHome} label="Dashboard" />
                    <NavigationItem to="/dashboard/profile" icon={FaCircleUser} label="Profile" />
                    <NavigationItem to="/dashboard/addCourse" icon={MdAddCircle} label="Add Courses" />
                    <NavigationItem to="/dashboard/admissionRequest" icon={FaWpforms} label="Admission Requests" />
                    <NavigationItem to="/dashboard/seminar" icon={FaUsers} label="Seminar Requests" />
                    

                    
                   

                    


                </ul>
            </div>
        </>
    );
};

export default Sidebar;