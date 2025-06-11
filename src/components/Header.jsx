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
            <button
                className="menu-toggle"
                onClick={handleMenuToggle}
                aria-label="Toggle navigation"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <nav className={`navigation${menuOpen ? ' open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/platforms">Platforms</a></li>
                    <li><a href="/education">Education</a></li>
                    <li><a href="/contact">Contact</a></li>
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
            <div className="header-info">
                <span>Trade Forex, Commodities, Indices &amp; Shares</span>
                <span>Ultra-fast Execution</span>
                <span>24/5 Support</span>
            </div>
        </header>
    );
};

export default Header;