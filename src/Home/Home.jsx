import React from 'react';
import Navbar from '../Layouts/Navbar';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../Product/SingleProduct';
import Sidebar from '../Components/Sidebar';

const Home = () => {
    const items = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <Sidebar></Sidebar>
                <SingleProduct items={items}></SingleProduct>
            </div>
        </div>
    );
};

export default Home;