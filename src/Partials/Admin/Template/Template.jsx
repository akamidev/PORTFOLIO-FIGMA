import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Footer from "../../Footer/Footer"
import AdminHeader from '../Header/AdminHeader';
import { useNavigate } from 'react-router-dom';

function Template() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [])


    return (
        <>
            <AdminHeader />
            <Outlet />
            <Footer />
        </>
    );
}

export default Template;