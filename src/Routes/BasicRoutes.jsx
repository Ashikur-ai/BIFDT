import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/ClientSide/Home/HomePage";
import CourseDetails from "../pages/ClientSide/course/CourseDetails";
import AdmissionPage from "../pages/ClientSide/onlineAdmission/AdmissionPage";

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
            }
        ]
    }
]);
export default BasicRoutes;