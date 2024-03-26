import React from 'react';
import Navbar from './Nav-Bar';
import { Outlet } from 'react-router-dom';



const MainLayOut = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayOut;