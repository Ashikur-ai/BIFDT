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
        <div className="flex justify-center items-center  min-h-screen">
          <p className='text-center text-5xl font-bold'>
            Welcome to Bangladesh Institute of
            Fashion & Design Technology
          </p>
        </div>
      </>
    );
};

export default Profile;