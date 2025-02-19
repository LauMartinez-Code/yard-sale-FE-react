// import React from 'react'
import { Link, Outlet } from 'react-router';
import NavBar from '@components/NavBar/NavBar.jsx';
import '@components/FormVertical/FormVertical.css';

const AuthLayout = () => {
    return (
        <div className="container-flex-center">
            <header className="container-flex-center__header d-none d-initial--md">
                <NavBar />
            </header>
            
            <main className="container-flex-center__body container-sm">
                <Link to="/">
                    <img className="main-logo main-logo--lg" src="/logos/logo_yard_sale.svg" alt="Site's Logo" />
                </Link>

                <Outlet/>
            </main>
        </div>
    )
}

export default AuthLayout;