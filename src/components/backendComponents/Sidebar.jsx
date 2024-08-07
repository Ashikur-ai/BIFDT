import React from 'react';
import { FaHome, FaUsers, FaWpforms } from 'react-icons/fa';
import { FaCircleUser, FaFileWaveform } from 'react-icons/fa6';
import { MdAdd, MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import { SiNginxproxymanager } from 'react-icons/si';
import Dropdown from './Dropdown';
import { FaRegComments } from "react-icons/fa";
const Sidebar = () => {

    const courseUrls =
        <>
            <NavigationItem to="/dashboard/addCourse" icon={MdAddCircle} label="Add Courses" />
            <NavigationItem to="/dashboard/manageCourses" icon={SiNginxproxymanager} label="Manage Courses" />
        </>

    const blogUrls =
        <>
            <NavigationItem to="/dashboard/addBlog" icon={MdAddCircle} label="Add Blog" />
            <NavigationItem to="/dashboard/manageBlog" icon={SiNginxproxymanager} label="Manage Blogs" />
        </>
    const comments =
        <>
            <NavigationItem to="/dashboard/manageComments" icon={FaRegComments} label="Manage Comments" />
        </>

    const homepageUrls =
        <>
            <NavigationItem to="/dashboard/manageHomepageContent" icon={SiNginxproxymanager} label="Manage Homepage Content" />
            <NavigationItem to="/dashboard/manageCountDown" icon={SiNginxproxymanager} label="Manage CountDown" />
        </>

    const facultyUrls =
        <>
            <NavigationItem to="/dashboard/addFaculty" icon={MdAddCircle} label="Add Faculty" />
            <NavigationItem to="/dashboard/manageFaculty" icon={SiNginxproxymanager} label="Manage Faculty" />
        </>

    const testimonialUrls =
        <>
            <NavigationItem to="/dashboard/addTestimonial" icon={MdAddCircle} label="Add Testimonial" />
            <NavigationItem to="/dashboard/manageTestimonial" icon={SiNginxproxymanager} label="Manage Testimonial" />
        </>

    const studentGallaryUrls =
        <>
            <NavigationItem to="/dashboard/manageStudentGallary" icon={SiNginxproxymanager} label="Manage Student Gallary" />
        </>

    const requestUrls =
        <>
            <NavigationItem to="/dashboard/admissionRequest" icon={FaFileWaveform} label="Admission Requests" />
            <NavigationItem to="/dashboard/seminar" icon={FaUsers} label="Seminar Requests" />
        </>

    const seminarUrls =
        <>
            <NavigationItem to="/dashboard/createSeminar" icon={MdAddCircle} label="Create Seminar" />
            <NavigationItem to="/dashboard/manageSeminar" icon={SiNginxproxymanager} label="Manage Seminar" />
        </>

    return (
      <>
        <div className="lg:w-64 bg-white flex flex-col justify-start py-8 border rounded-lg">
          <Link to="/">
            <div className="mb-5 w-1/2 mx-auto">
              <img
                src="https://i.ibb.co/9V0WwCN/logo.webp"
                className="text-center w-20"
                alt=""
              />
            </div>
          </Link>
          {/* <ul className="space-y-2 pb-20 list-none">


                    

                    <NavigationItem to="/dashboard" icon={FaHome} label="Dashboard" />
                    <NavigationItem to="/dashboard/profile" icon={FaCircleUser} label="Profile" />


                    <NavigationItem to="/dashboard/addCourse" icon={MdAddCircle} label="Add Courses" />
                    <NavigationItem to="/dashboard/manageCourses" icon={SiNginxproxymanager} label="Manage Courses" />

                    <NavigationItem to="/dashboard/admissionRequest" icon={FaFileWaveform} label="Admission Requests" />
                    <NavigationItem to="/dashboard/seminar" icon={FaUsers} label="Seminar Requests" />
                    
                    <NavigationItem to="/dashboard/addBlog" icon={MdAddCircle} label="Add Blog" />
                    <NavigationItem to="/dashboard/manageBlog" icon={SiNginxproxymanager} label="Manage Blogs" />
                    
                    <NavigationItem to="/dashboard/manageHomepageContent" icon={SiNginxproxymanager} label="Manage Homepage Content" />
                    <NavigationItem to="/dashboard/manageCountDown" icon={SiNginxproxymanager} label="Manage CountDown" />
                    
                    <NavigationItem to="/dashboard/addFaculty" icon={MdAddCircle} label="Add Faculty" />
                    <NavigationItem to="/dashboard/manageFaculty" icon={SiNginxproxymanager} label="Manage Faculty" />

                    <NavigationItem to="/dashboard/addTestimonial" icon={MdAddCircle} label="Add Testimonial" />
                    <NavigationItem to="/dashboard/manageTestimonial" icon={SiNginxproxymanager} label="Manage Testimonial" />

                    <NavigationItem to="/dashboard/addStudentGallary" icon={MdAddCircle} label="Add Student Gallary" />
                    <NavigationItem to="/dashboard/manageStudentGallary" icon={SiNginxproxymanager} label="Manage Student Gallary" />













                </ul> */}

          <nav className="flex-1 p-4">
            <ul className="space-y-2 pb-20 list-none">
              {/* <NavigationItem to="/dashboard" icon={FaHome} label="Dashboard" /> */}
              <NavigationItem
                to="/dashboard"
                icon={FaCircleUser}
                label="Profile"
              />

              <li className="mb-4">
                <Dropdown buttonText="Courses" urls={courseUrls} />
              </li>

              <li className="mb-4">
                <Dropdown buttonText="Seminar" urls={seminarUrls} />
              </li>

              <li className="mb-4">
                <Dropdown buttonText="All Requests" urls={requestUrls} />
              </li>

              <li className="mb-4">
                <Dropdown buttonText="Blogs" urls={blogUrls} />
              </li>
              <li className="mb-4">
                <Dropdown buttonText="Comments" urls={comments} />
              </li>

              <li className="mb-4">
                <Dropdown buttonText="HomePage content" urls={homepageUrls} />
              </li>

              <li className="mb-4">
                <Dropdown buttonText="Faculty" urls={facultyUrls} />
              </li>

              <li className="mb-4">
                <Dropdown buttonText="Testimonial" urls={testimonialUrls} />
              </li>

              <li className="mb-4">
                <Dropdown
                  buttonText="Student Gallary"
                  urls={studentGallaryUrls}
                />
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
};

export default Sidebar;