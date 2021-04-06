import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Order.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderItem, setOrderItem] = useState([])
    useEffect(() => {
        fetch('https://boiling-spire-94969.herokuapp.com/orderCollection?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                // console.log(data[0])
                setOrderItem(data)
            })

    }, [])
    console.log(orderItem);
    const { displayName, email, name, price } = orderItem
    console.log(displayName);

    return (
        <div>
            <Header />
            {
                orderItem.map(orderItem =>


                    // <div className="style">
                    //     <div className="order">
                    //         <h5>{orderItem.name}</h5>
                    //         <img src={orderItem.imageURL} alt="Avatar" class="avatar"></img>
                    //         <h5>{orderItem.wight}</h5>
                    //         <h5>{orderItem.price}</h5>
                    //     </div>
                    // </div>
                    <div class="card m-5 bg-warning" style={{ width: "18rem" }}>
                        <div class="card-header">
                            Client Information :  <span> {orderItem.email}</span>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> <b>Product Name :</b> {orderItem.name}</li>
                            <li class="list-group-item"><b>Product Weight :</b> {orderItem.wight}</li>
                            <li class="list-group-item"><b>Product Price :</b> {orderItem.price}$</li>
                            <li class="list-group-item"><b>Order Time :</b> {orderItem.orderTime}</li>
                        </ul>
                    </div>

                )
            }

        </div>
    );
};

export default Orders;