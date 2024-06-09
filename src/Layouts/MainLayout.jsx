import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import FormButton from "../components/FormButton";
import AllSocialLinks from "../components/AllSocialLinks";
import MobileViewButton from "../components/MobileViewButton";

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet>
            </Outlet>
            <Footer></Footer>
            <WhatsAppButton></WhatsAppButton>
            <div className="flex w-full lg:hidden">
                <MobileViewButton></MobileViewButton>
            </div>
            <FormButton></FormButton>
            <AllSocialLinks></AllSocialLinks>
        </>
    )
};
export default MainLayout;