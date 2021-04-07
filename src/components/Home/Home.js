import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../App';
import Header from '../Header/Header';
import Search from '../Search/Search';
import ShowProduct from '../ShowProduct/ShowProduct';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useContext(ProductContext)
    // const [search, setSearch] = useState()

    useEffect(() => {
        fetch('https://boiling-spire-94969.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setProduct(data)
            })

    }, [])

    return (
        <div>
            <Header />
            <Search />
            {/* 
            <div style={{ margin: "50px" }}>
                <input type="search" onChange={handleInput} class="form-control" name="" id="" placeholder="search...." />
            </div> */}

            <div className="row homeContainer">
                <div className="productContainer">
                    {
                        product.length === 0 && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate("-50%,-50%")' }} className="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span></div>

                    }
                    {
                        product.map(pd => <ShowProduct pd={pd} key={pd._id}></ShowProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
