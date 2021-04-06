// import React, { useEffect, useState } from 'react';
// import ManageProduct from '../ManageProduct/ManageProduct'
// const ManageProduct = () => {
//     const [manages, setManages] = useState([])
//     useEffect(() => {
//         fetch('https://boiling-spire-94969.herokuapp.com/booking')
//             .then(res => res.json())
//             .then(data => setManages(data))
//     }, [])


//     return (
//         <div >
//             <Admin />
//             {
//                 manages.map(manage => <ManageProduct productItem={manage}></ManageProduct>)
//             }

//         </div>
//     );
// };

// export default ManageProduct;