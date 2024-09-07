// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed for navigation

const Sidebar = () => {
    return (
        <div className="w-96 h-screen mt-10 w-full text-black flex flex-col">
            
            <nav className="flex-grow">
                <ul>
                    
                    <li className="hover:bg-black hover:text-white hover:rounded-xl p-4 w-64 text-lg font-bold">
                        <Link to="/products">Rocking Chair</Link>
                    </li>
                    <li className="hover:bg-black hover:text-white hover:rounded-xl p-4 w-64 text-lg font-bold">
                        <Link to="/about">Side Chair</Link>
                    </li>
                    <li className="hover:bg-black hover:text-white hover:rounded-xl p-4 w-64 text-lg font-bold">
                        <Link to="/contact">Lounge Chair</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
