import img1 from '../../../assets/images/aboutus/img1.jpg'
import img2 from '../../../assets/images/aboutus/img2.jpg'
const AboutUsText = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold text-blue-700 px-5 text-center pt-10'>About Us | Bangladesh Institute of Fashion & Design Technology | BIFDT
            </h2>
            <div className='py-10  grid grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
                <div className='space-y-5 px-5'>

                    <p className='text-sm font-medium text-justify'>
                        Are you thinking about a diploma course or a short course to boost up your career?   This might be it !
                        <br /> <br />
                        You can take a short course or diploma course in Fashion Design, Apparel Merchandising, Pattern Making, Garments CAD Design, Graphic Design, Web Design, Interior Design, Leather Design, Computer Fundamentals & Operational courses. Our courses like this one have recently emerged as the most popular, sort-out careers among the youths.
                        <br /> <br />
                        There are many institutes those provides such kind of degrees. Now, we will tell you about a well-renowned fashion designing institute in Bangladesh - Bangladesh Institute of Fashion & Design Technology (BIFDT).
                        <br /> <br />
                        Bangladesh Institute of Fashion & Design Technology (BIFDT) the Leading Institute of Bangladesh has emerged as one of the premier Institute in the technical tool. Education and training are unit thought-about because the best tools for the ready-made clothes (RMG) sector and boutique house Bangladesh is a very important sector wherever desires thousands of technically expert and competent personnel. Bangladesh Institute of Fashion & Design Technology (BIFDT) is one institute for higher education that passionately believes that becoming a distinctively trained Fashion Designer provides a meaningful career while endowing the Fashion Designer with the ability and zeal to make the world a better place to live. It is the ultimate goal of Bangladesh Institute of Fashion & Design Technology (BIFDT) to offer this distinguished academic experience to qualified applicants.
                        <br /><br />
                        Mission & Vision
                        <br />
                        Bangladesh Institute of Fashion & Design Technology (BIFDT) provides a quality Art and Design education that emphasizes individual attention. The Institute promotes a partnership with the local, regional, and global community through exhibits, programs, continuing education, and service projects. They prepare students to think critically and imaginatively. BIFDT is an institution of higher education that intellectually and expressively prepares students to become innovative Fashion Designers with the capacity to create authentic beauty. They want students to mature as Fashion Designers equipped with the skills, knowledge, ability, creativity, and desire to constructively benefit the local and global society and the environment through purposeful design.
                    </p>
                </div>
                <div className='space-y-5'>
                    <img src={img1} className='w-[80%] mx-auto' alt="" />
                    <img src={img2} className='w-[80%] mx-auto' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsText;