import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/ClientSide/Home/HomePage";
import CourseDetails from "../pages/ClientSide/course/CourseDetails";
import AdmissionPage from "../pages/ClientSide/onlineAdmission/AdmissionPage";
import BlogPage from "../pages/ClientSide/blog/BlogPage";
import BlogDetails from "../pages/ClientSide/blog/BlogDetails";
import Seminar from "../pages/ClientSide/seminar/Seminar";
import SeminarForm from "../pages/ClientSide/seminar/SeminarForm";

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
    }
]);
export default BasicRoutes;