import React from 'react';
import NavigationBarn from '../pages/Shared/NavigationBarN/NavigationBarn';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBarn></NavigationBarn>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;