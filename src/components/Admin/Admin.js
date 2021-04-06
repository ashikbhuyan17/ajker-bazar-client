import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
const Admin = () => {
    return (
        <div className="productHeaderContainer">
            <div className="productHeader">
                <Link className="nav-link navHeader" to="/home">Ajker-Bazar</Link>
                <Link className="nav-link navHeader " to="/addProduct">Add Product</Link>
                <Link className="nav-link navHeader" to="/manageProduct">Manage Product</Link>
                {/* <Link className="nav-link navHeader" to="/editProduct">Edit Product</Link> */}
            </div>
        </div>

    );
};

export default Admin;