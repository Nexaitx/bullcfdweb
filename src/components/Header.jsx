import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">Bull CFD</div>
           
            <nav className={`navigation${menuOpen ? ' open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="https://bullcfd.com/index.php/about-us">About</a></li>
                    {/* <li><a href="/services">Services</a></li> */}
                    <li><a href="https://bullcfd.com/index.php/app-download">Platforms</a></li>
                    <li><a href="https://bullcfd.com/tutorial">Education</a></li>
                    <li><a href="https://bullcfd.com/contact-us">Contact</a></li>
                    <li>
                        <a
                            href="https://crm.bullcfd.com/front_form/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "#28a745",
                                color: "#fff",
                                borderRadius: "4px",
                                padding: "6px 16px",
                                fontWeight: "bold"
                            }}
                        >
                            Sign Up
                        </a>
                    </li>
                </ul>
            </nav>
            {/* <div className="header-info">
                <span>Trade Forex, Commodities, Indices &amp; Shares</span>
                <span>Ultra-fast Execution</span>
                <span>24/5 Support</span>
            </div> */}
        </header>
    );
};

export default Header;