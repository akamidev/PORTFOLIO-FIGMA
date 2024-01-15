import React from 'react';
import "./style.scss"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function AdminHeader(props) {
    return (
        <>
            <div className="header-admin"><FontAwesomeIcon icon={faPenToSquare} />Mode édition</div>
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
        </>
    );
}

export default AdminHeader;