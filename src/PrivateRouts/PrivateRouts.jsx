/* eslint-disable react/prop-types */
// import React from 'react';

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import auth from "../firebase/firebase.init";
import { signOut } from "firebase/auth";

const PrivateRouts = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    console.log(isAdmin);
    
    if (loading || isAdminLoading) {
        return 
    }
    
    if (user && isAdmin) {
        return <div>
            {children}
        </div>

    } else {
        signOut(auth)
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRouts;