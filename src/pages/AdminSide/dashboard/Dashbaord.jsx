import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-md p-6 shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="ml-2 text-gray-700">Today's Money</span>
                            </div>
                            <div className="font-bold text-gray-700">$53k</div>
                        </div>
                        <p className="text-green-500">+55% than last week</p>
                    </div>
                    <div className="bg-white rounded-md p-6 shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9a2 2 0 01-2-2V10.34a6 6 0 01-2.778-5.468A5.987 5.987 0 014 5.659V4a2 2 0 012-2h6a2 2 0 012 2v1.659c.887.34.803.928.578 1.433A6 6 0 0115 10.34V19a2 2 0 012 2z" /></svg>
                                <span className="ml-2 text-gray-700">Today's Users</span>
                            </div>
                            <div className="font-bold text-gray-700">2,300</div>
                        </div>
                        <p className="text-green-500">+3% than last month</p>
                    </div>
                    <div className="bg-white rounded-md p-6 shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9a2 2 0 01-2-2V10.34a6 6 0 01-2.778-5.468A5.987 5.987 0 014 5.659V4a2 2 0 012-2h6a2 2 0 012 2v1.659c.887.34.803.928.578 1.433A6 6 0 0115 10.34V19a2 2 0 012 2z" /></svg>
                                <span className="ml-2 text-gray-700">New Clients</span>
                            </div>
                            <div className="font-bold text-gray-700">3,462</div>
                        </div>
                        <p className="text-red-500">-2% than yesterday</p>
                    </div>
                    <div className="bg-white rounded-md p-6 shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                <span className="ml-2 text-gray-700">Sales</span>
                            </div>
                            <div className="font-bold text-gray-700">$103,430</div>
                        </div>
                        <p className="text-green-500">+5% than yesterday</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-white rounded-md p-6 shadow-md">
                        <h3 className="text-lg font-bold mb-4">Website View</h3>
                        <div className="h-48">
                            <canvas id="websiteViewChart"></canvas>
                        </div>
                        <p className="text-gray-500 mt-4">Last Campaign Performance</p>
                        <div className="flex items-center mt-4">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="ml-2 text-gray-500">campaign sent 2 days ago</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-md p-6 shadow-md">
                        <h3 className="text-lg font-bold mb-4">Daily Sales</h3>
                        <div className="h-48">
                            <canvas id="dailySalesChart"></canvas>
                        </div>
                        <p className="text-gray-500 mt-4">15% increase in today sales</p>
                        <div className="flex items-center mt-4">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="ml-2 text-gray-500">updated 4 min ago</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-md p-6 shadow-md">
                        <h3 className="text-lg font-bold mb-4">Completed Tasks</h3>
                        <div className="h-48">
                            <canvas id="completedTasksChart"></canvas>
                        </div>
                        <p className="text-gray-500 mt-4">Last Campaign Performance</p>
                        <div className="flex items-center mt-4">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="ml-2 text-gray-500">just updated</span>
                        </div>
                    </div>
                </div>

            </div>




        </>
    );
};

export default Dashboard;
