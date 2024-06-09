import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/ClientSide/Home/HomePage";
import CourseDetails from "../pages/ClientSide/course/CourseDetails";
import AdmissionPage from "../pages/ClientSide/onlineAdmission/AdmissionPage";
import BlogPage from "../pages/ClientSide/blog/BlogPage";
import BlogDetails from "../pages/ClientSide/blog/BlogDetails";
import Seminar from "../pages/ClientSide/seminar/Seminar";
import SeminarForm from "../pages/ClientSide/seminar/SeminarForm";
import Dashboard from "../pages/AdminSide/dashboard/Dashbaord";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddCourse from "../pages/AdminSide/addCourse/AddCourse";
import AdmissionRequest from "../pages/AdminSide/admissionRequest/AdmissionRequest";
import Profile from "../pages/AdminSide/profile/Profile";
import SeminarPage from "../pages/AdminSide/seminar/SeminarPage";

const BasicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/courseDetails",
                element: <CourseDetails></CourseDetails>
                
            },
            {
                path: "/onlineAdmission",
                element: <AdmissionPage></AdmissionPage>
            },
            {
                path: "/blogs",
                element: <BlogPage></BlogPage>
            },
            {
                path: "/blogDetails",
                element: <BlogDetails></BlogDetails>
            },
            {
                path: "/freeSeminar",
                element: <Seminar></Seminar>
            },
            {
                path: "/seminarForm",
                element: <SeminarForm></SeminarForm>
            }
            
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "addCourse",
                element: <AddCourse></AddCourse>
            },
            {
                path: "admissionRequest",
                element: <AdmissionRequest></AdmissionRequest>
            },
            {
                path: "profile",
                element: <Profile></Profile>
            },
            {
                path: "seminar",
                element: <SeminarPage></SeminarPage>
            }
            
        ]
    }
]);
export default BasicRoutes;