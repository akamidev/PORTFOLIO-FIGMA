import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.scss"
function Header() {
    return (
        <header>
            <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
            <nav>
                <ul>
                    <li>projets</li>
                    <li>contact</li>
                    <NavLink to="/login">login</NavLink>
                    <li><img src="/icons/instagram.png" alt="Instagram" /></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;