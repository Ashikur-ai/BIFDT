import React from 'react';

const BlogDetails = () => {
    return (
        <div className='lg:px-20'>
            <p className="text-4xl m-10"><span className='text-pink-600 '>Blog</span> Details</p>
            <div className='lg:flex gap-5 sm:m-4 pb-20'>
                <div className='lg:w-3/4 mx-auto bg-gray-200'>
                    <img
                        src="https://static-cse.canva.com/blob/567558/50stunninglybeautifulgeometricpatternsingraphicdesign.jpg"
                        alt="Shoes"

                    />
                    <div className='flex items-center gap-10 pt-10'>
                        <p className='pt-2 text-white px-10 bg-pink-600'>15 june, 2024</p>
                        <p className='text-2xl font-bold'>Pattern Design Course</p>
                    </div>

                    <div className='py-10'>
                        <p className='px-2'>
                            ★★ Pattern Design Course at 50% Less Cost!!! <br />

                            The Pattern Design course is designed for individuals interested in learning the art and science of creating textile patterns and designs. This course is ideal for aspiring fashion designers, textile artists, and anyone with a passion for fabric design. Students will gain hands-on experience with various techniques, tools, and software used in the industry to create unique and marketable patterns.
                            <br />

                            [Visit our company anytime for detailed information] <br />
                            Address- 21/A, Road/2, Block A, Aftab Nagar (adjacent to East West University), Merul Badda, Dhaka-1212. <br />
                            Total number of classes: 36  <br />
                            ✅ Total class duration: 72 hours <br />
                            ✅ Regular Course Fee: 19000/- <br />
                            ✅ 50% Discount Offer Course Fee 9500/- <br />
                            ★★ COURSE REGISTRATION INBOX OR CALL DIRECTLY: +8801886061401-5
                        </p>
                    </div>
                </div>
                <div className='lg:w-1/4 pt-10 px-2 text-2xl'> Another Blogs
                    
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*" />
                            </div>
                        </div>
                        <div className='p-2'>
                            <p className='text-sm'>Summer 2024 Fashion Trends: What to Wear This Season.</p>
                            <p className='text-sm font-bold pt-2'>15 june, 2024</p>
                        </div>
                    </div>

                    <div className='flex pt-5'>
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://hips.hearstapps.com/hmg-prod/images/spring-summer-2024-fashion-trends-65fdb5a49a846.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*" />
                            </div>
                        </div>
                        <div className='p-2'>
                            <p className='text-sm'>Accessorizing 101: Elevate Your Outfits with the Right Accessories</p>
                            <p className='text-sm font-bold pt-2'>20 january, 2024</p>
                        </div>
                    </div>



                </div>


            </div>

            <div className="lg:px-5 px-2 mb-20">
                <p>Leave a comment</p>
                <input type="text" placeholder="Your Name" className="input mb-5 input-bordered w-full max-w-xs" /> <br />
                <input type="text" placeholder="Leave a Comment" className="input input-bordered w-full max-w-xs" />
            </div>
        </div>
    );
};

export default BlogDetails;