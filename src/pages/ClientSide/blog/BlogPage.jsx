import React from 'react';
import HeaderText from '../../../components/HeaderText';
import Blogs from '../Home/components/Blogs';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    return (
        <div className='px-20 mt-10  min-h-screen'>
            <p className="text-4xl m-10"><span className='text-pink-600 border-b-2'>Latest</span> News</p>

            <div className='py-10 grid lg:grid-cols-4 gap-5'>
                <div className="card bg-base-100  shadow-2xl border border-pink-800">
                    <figure className="">
                        <img
                            src="https://hips.hearstapps.com/hmg-prod/images/01-fendi-women-fw-22-23-jpg-1645720448.jpg?crop=1xw:0.33336951801997394xh;center,top&resize=640:*"
                            alt="Shoes"
                            className=" h-44"
                        />
                    </figure>
                    <div className="card-body items-center text-left">
                        <p className="card-title">
                            Summer 2024 Fashion Trends: What to Wear This Season
                        </p>

                        <p>
                            Dive into the hottest trends of Summer 2024 with our
                            comprehensive guide. From bold prints to sustainable fashion,...
                        </p>
                        <div className="card-actions">
                            <div className="flex justify-between gap-5 items-center">
                            <Link to="/blogDetails">
                                    <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                                        Read More
                                    </button>
                                </Link>

                                <p className="text-sm">15 june, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100  shadow-2xl border border-pink-800">
                    <figure className="">
                        <img
                            src="https://hips.hearstapps.com/hmg-prod/images/spring-summer-2024-fashion-trends-65fdb5a49a846.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*"
                            alt="Shoes"
                            className=" h-44"
                        />
                    </figure>
                    <div className="card-body items-center text-left">
                        <p className="card-title">
                        Accessorizing 101: Elevate Your Outfits with the Right Accessories
                        </p>

                        <p>
                            Dive into the hottest trends of Summer 2024 with our
                            comprehensive guide. From bold prints to sustainable fashion,...
                        </p>
                        <div className="card-actions">
                            <div className="flex justify-between gap-5 items-center">
                                <Link to="/blogDetails">
                                    <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                                        Read More
                                    </button>
                                </Link>

                                <p className="text-sm">2 March, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="card bg-base-100  shadow-2xl border border-pink-800">
                    <figure className="">
                        <img
                            src="https://www.boxmark.com/0cache/bilder152_900x600_f_center_middle.jpg"
                            alt="Shoes"
                            className=" h-44"
                        />
                    </figure>
                    <div className="card-body items-center text-left">
                        <p className="card-title">
                            Summer 2024 Fashion Trends: What to Wear This Season
                        </p>

                        <p>
                            Dive into the hottest trends of Summer 2024 with our
                            comprehensive guide. From bold prints to sustainable fashion,...
                        </p>
                        <div className="card-actions">
                            <div className="flex justify-between gap-5 items-center">
                            <Link to="/blogDetails">
                                    <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                                        Read More
                                    </button>
                                </Link>

                                <p className="text-sm">6 May, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100  shadow-2xl border border-pink-800">
                    <figure className="">
                        <img
                            src="https://cdn.dribbble.com/userupload/8647640/file/original-4215771ec4810cd6ecf1485df5d55d96.png?resize=400x300&vertical=center"
                            alt="Shoes"
                            className=" h-44"
                        />
                    </figure>
                    <div className="card-body items-center text-left">
                        <p className="card-title">
                        Accessorizing 101: Elevate Your Outfits with the Right Accessories
                        </p>

                        <p>
                            Dive into the hottest trends of Summer 2024 with our
                            comprehensive guide. From bold prints to sustainable fashion,...
                        </p>
                        <div className="card-actions">
                            <div className="flex justify-between gap-5 items-center">
                            <Link to="/blogDetails">
                                    <button className="btn bg-pink-700 text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">
                                        Read More
                                    </button>
                                </Link>

                                <p className="text-sm">5 March, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPage;