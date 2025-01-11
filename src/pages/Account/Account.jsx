// import React from 'react';
import NavBar from "@/components/NavBar/NavBar.jsx";

const Account = () => {
    return (
        <div className="container-flex-center--md">
            <header className="container-flex-center__header">
                <NavBar />
            </header>

            <main className="container-flex-center__body container-sm--md">
                <h1 className="title-h1 mb-2">My account</h1>
            </main>
        </div>
    );
};

export default Account;