// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import { useParams } from 'react-router-dom';
// import Breadcrum from '../Component/Breadcrums/Breadcrum';
// import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
// import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
// import RelatedMedia from '../Component/RelatedMedia/RelatedMedia';
// //creating the product personal page
// const Product=()=>{
//     const {all_product}=useContext(ShopContext);
//     const {productId}=useParams();
//     const product=all_product.find((e)=>e.id===Number(productId));
//     return(
//         <div>
//          <Breadcrum product={product}/>
//          <ProductDisplay product={product}/>
//          <DescriptionBox/>
//          <RelatedMedia/>
//         </div>
//     )
// }

// export default Product















import React, { useContext } from 'react'
import { AvatarContext } from '../Context/AvatarContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedMedia from '../Component/RelatedMedia/RelatedMedia';
//creating the product personal page
const Product=()=>{
    const {avatars}=useContext(AvatarContext);
    console.log("avatars", avatars);
    const {productId}=useParams();
    const product=avatars.find((e)=>e.id===String(productId));
    console.log("product",product);
    return(
        <div>
         {/* <Breadcrum product={product}/> */}
         <ProductDisplay product={product}/>    {/* pass the variable if use  */}
         <DescriptionBox product={product}/> 
         <RelatedMedia/>
         {/* pass the variable if use  */}
        </div>
    )
}

export default Product