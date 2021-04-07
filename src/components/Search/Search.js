import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import { ProductContext } from '../../App';

const Search = () => {
    const [name, setName] = useState("")
    const [product, setProduct] = useContext(ProductContext)
    const handleSubmit = (event) => {
        fetch('https://boiling-spire-94969.herokuapp.com/products?name=' + name)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))
    }

    const handleBlur = (event) => {
        setName(event.target.value)
    }

    return (
        <div className="input-group  ml-auto mr-auto mt-5 mb-5" style={{ margin: '0 auto!important' }}>
            <input type="text" name="hi" onBlur={handleBlur} className="form-control" placeholder="Search Books" />
            <div className="input-group-append">
                <Button onClick={handleSubmit} className="pl-5 pr-5">Search</Button>
            </div>
        </div>
    );
};

export default Search;