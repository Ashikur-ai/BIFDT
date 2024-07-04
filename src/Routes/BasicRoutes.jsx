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
import AddBlogPage from "../pages/AdminSide/addBlog/AddBlogPage";
import AdminLogin from "../pages/AdminSide/login/AdminLogin";
import ManageBlog from "../pages/AdminSide/manageBlog/ManageBlog";
import UpdateBlog from "../pages/AdminSide/updateBlog/UpdateBlog";
import ManageHomepageContent from "../pages/AdminSide/manageHomepageContent/ManageHomepageContent";
import ManageCountDown from "../pages/AdminSide/manageCountDown/ManageCountDown";
import AddFacultyPage from "../pages/AdminSide/addFaculty/AddFacultyPage";
import AddTestimonialPage from "../pages/AdminSide/addTestimonial/AddTestimonialPage";
import ManageFacultyPage from "../pages/AdminSide/manageFaculty/ManageFacultyPage";
import UpdateFacultyPage from "../pages/AdminSide/updateFaculty/UpdateFacultyPage";
import ManageTestimonialPage from "../pages/AdminSide/manageTestimonial/ManageTestimonialPage";
import AddStudentGallary from "../pages/AdminSide/addStudentGallary/AddStudentGallary";
import ManageStudentGallary from "../pages/AdminSide/manageStudentGallary/ManageStudentGallary";
import ManageCoursePage from "../pages/AdminSide/manageCourse/ManageCoursePage";
import UpdateCoursePage from "../pages/AdminSide/updateCourse/UpdateCoursePage";
import CreateSeminar from "../pages/AdminSide/seminar/CreateSeminar";
import ManageSeminar from "../pages/AdminSide/seminar/ManageSeminar";
import UpdateTestimonials from "../pages/updateTestimonials/UpdateTestimonials";
import { backendURL } from "../backendURL";
import UpdateGallery from "../pages/AdminSide/UpdateGallery/UpdateGallery";
import Faculties from "../pages/ClientSide/Faculties/Faculties";
import AboutUs from "../pages/ClientSide/aboutUs/AboutUs";

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
                path: "/faculties",
                element: <Faculties/>
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails></BlogDetails>
            },
            {
                path: "/freeSeminar",
                element: <Seminar></Seminar>
            },
            {
                path: "/seminarForm/:id",
                element: <SeminarForm></SeminarForm>,
                loader: ({ params }) => fetch(`${backendURL}/seminar/${params.id}`)
            },
            {
                path: "adminLogin",
                element: <AdminLogin></AdminLogin>
            },
            {
                path: "aboutUs",
                element: <AboutUs></AboutUs>
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
                element: <AdmissionRequest></AdmissionRequest>,
                
            },
            {
                path: "profile",
                element: <Profile></Profile>
            },

            {
                path: "createSeminar",
                element: <CreateSeminar></CreateSeminar>
            },
            {
                path: "manageSeminar",
                element: <ManageSeminar></ManageSeminar>
            },

            {
                // for manage seminar reqeust from student 
                path: "seminar", 
                element: <SeminarPage></SeminarPage>
            },
            {
                path: "addBlog",
                element: <AddBlogPage></AddBlogPage>
            },
            {
                path: "manageBlog",
                element: <ManageBlog></ManageBlog>
            },
            {
                path: "/dashboard/updateBlog/:id",
                element: <UpdateBlog></UpdateBlog>
            },
            {
                path: "manageHomepageContent",
                element: <ManageHomepageContent></ManageHomepageContent>
            },
            {
                path: "manageCountDown",
                element: <ManageCountDown></ManageCountDown>
            },
            {
                path: "addFaculty",
                element: <AddFacultyPage></AddFacultyPage>
            },
            {
                path: "addTestimonial",
                element: <AddTestimonialPage></AddTestimonialPage>
            },
            {
                path: "manageFaculty",
                element: <ManageFacultyPage></ManageFacultyPage>
            },
            {
                path: "/dashboard/updateFaculty/:id",
                element: <UpdateFacultyPage></UpdateFacultyPage>
            },
            {
                path: "manageTestimonial",
                element: <ManageTestimonialPage></ManageTestimonialPage>
            },
            {
                path: "/dashboard/updateTestimonial/:id",
                element: <UpdateTestimonials></UpdateTestimonials>
            },
            {
                path: "addStudentGallary",
                element: <AddStudentGallary></AddStudentGallary>
            },
            {
                path: "manageStudentGallary",
                element: <ManageStudentGallary></ManageStudentGallary>
            },
            {
                path: "/dashboard/updateGallery/:id",
                element: <UpdateGallery/>
            },
            {
                path: "manageCourses",
                element: <ManageCoursePage></ManageCoursePage>
            },
            {
                path: "updateCourse",
                element: <UpdateCoursePage></UpdateCoursePage>
            }
            
            
        ]
    }
]);
export default BasicRoutes;