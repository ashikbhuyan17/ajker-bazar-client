import React from "react";
import { useHistory } from "react-router";
import './ShowProduct.css'

const ShowProduct = ({ pd }) => {
    console.log(pd)
    console.log(pd.name);
    let history = useHistory();
    const buyNowHandler = (id) => {
        // console.log(id)
        history.push(`/checkOut/${id}`)

    }
    return (
        // <div class="card col-md-4">
        //     <img src={product.imageURL} class="card-img-top" alt="..." width="100" />
        //     <div class="card-body">
        //         <h3 class="card-text">
        //             {product.name}
        //         </h3>
        //     </div>
        //     <div class="card-body">
        //         <h4 class="card-link">{product.price}</h4>
        //         <button class="btn btn-primary" onClick={() => buyNowHandler(product._id)}>Buy now</button>
        //         {/* <Link to='/checkOut'><button class="btn btn-primary" onClick={()=>buyNowHandler(product._id)}>Buy now</button> </Link> */}
        //     </div>
        // </div>
        <div>

            <div className="productItem">
                <img src={pd.imageURL} alt="" />
                <h6>{pd.name}</h6>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h4 class="my-2">${pd.price}</h4>
                    <button style={{ color: '#fff', background: '#72BA59', border: 'none', borderRadius: '5px' }} onClick={() => buyNowHandler(pd._id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;
