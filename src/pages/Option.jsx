import React from 'react'
import './CSS/Option.css'
import { Link } from 'react-router-dom'
import addavatar_icon from '../Component/Admin Panel Assets/Product_Cart.svg'
import listprod from '../Component/Admin Panel Assets/Product_list_icon.svg'
import AddProduct from '../Component/AddProduct/AddProduct'
import Addavatar from '../Component/Assets/add_avatar.jpeg'
import Chatlist from '../Component/Assets/chatlist.jpeg'
const Option=()=>{
    return(
        <div className='slidebar'> 
           <Link to={'/menu/addproduct'} style={{textDecoration:"none"}}>
           <div className="sidebar-item">
            <img src={Addavatar} alt="" />
            <p>Add Avatar</p>z
           </div>
           </Link>

           <Link to={'/menu/listproduct'} style={{textDecoration:"none"}}>
           <div className="sidebar-item">
            <img src={listprod} alt="" />
            <p>Avatar List</p>
           </div>
           </Link>

           <Link to={'/menu/listchat'} style={{textDecoration:"none"}}>
           <div className="sidebar-item">
            <img src={Chatlist} alt="" />
            <p>Chats List</p>
           </div>
           </Link>

        </div>
    )
}

export default Option














// import React, { useState } from 'react';
// import './CSS/Option.css';
// import addavatar_icon from '../Component/Admin Panel Assets/Product_Cart.svg';
// import listprod from '../Component/Admin Panel Assets/Product_list_icon.svg';
// import AddProduct from '../Component/AddProduct/AddProduct';
// import ListProduct from '../Component/ListProduct/ListProduct';

// const Option = () => {
//     const [showAddProduct, setShowAddProduct] = useState(false);
//     const [showListProduct, setShowListProduct] = useState(false);

//     const handleAddProductClick = () => {
//         setShowAddProduct(true);
//         setShowListProduct(false);
//     };

//     const handleListProductClick = () => {
//         setShowAddProduct(false);
//         setShowListProduct(true);
//     };

//     return (
//         <div className='slidebar'> 
//             <div className="sidebar-item" onClick={handleAddProductClick}>
//                 <img src={addavatar_icon} alt="" />
//                 <p>Add Product</p>
//             </div>

//             <div className="sidebar-item" onClick={handleListProductClick}>
//                 <img src={listprod} alt="" />
//                 <p>Product List</p>
//             </div>

//             {showAddProduct && <AddProduct />}
//             {showListProduct && <ListProduct />}
//         </div>
//     );
// }

// export default Option;
