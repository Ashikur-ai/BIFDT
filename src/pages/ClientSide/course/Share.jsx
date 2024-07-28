import { FaFacebook, FaGoogle, FaWhatsapp } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
const Share = () => {
    console.log();
    const shareText = "Check out this awesome course!";
    const shareUrl = window.location.href; // Replace with your actual URL

    const shareOnFacebook = () => {
        const url = `https://www.facebook.com/dialog/share?app_id=87741124305&href=${encodeURIComponent(`${shareText}
${shareUrl}`)}&display=popup`;
        window.open(url, '_blank');
    };

    const shareOnMail = () => {
        const subject = "Check this out!";
        const body = `${shareText}
${shareUrl}`;
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    const shareOnWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(`${shareText}
${shareUrl}`)}`;
        window.open(url, '_blank');
    };

    const shareIconsStyle = `text-3xl md:text-[45px] border-black rounded-full flex justify-center items-center cursor-pointer`;

    return (
        <div className="space-y-3 pr-5 pb-3">
            <p className="lg:text-lg font-bold text-end">Share</p>
            <div className="flex gap-4 flex-wrap">
                <p onClick={shareOnFacebook} className={`${shareIconsStyle} text-blue-700`}><FaFacebook /></p>
                <p onClick={shareOnWhatsApp} className={`${shareIconsStyle} text-green-600`}><FaWhatsapp /></p>
                <p onClick={shareOnMail} className={`${shareIconsStyle}  text-white bg-gray-500 size-8 md:size-11`}><span className="text-2xl md:text-3xl"><IoMdMail /></span></p>
            </div>
        </div>
    );
};

export default Share;
