import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navigation-panel">
            <div className="container-panel">
                <div>
                    <img
                        className="logo-yamisok"
                        src="https://yamisok.com/assets/images/landing/new/yamisok-white.png"
                        alt="yamisok-logo"
                    />
                </div>
                <button
                    type="button" className="btn--masuk--landing"
                >Masuk/daftar</button>
            </div>
        </div >
    )
}

export default Navbar