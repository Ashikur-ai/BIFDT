import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { FaFacebook } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard | Profile</title>
            </Helmet>
            <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto">
                <figure><img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Ms. Maria</h2>
                    <p>Admin</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;