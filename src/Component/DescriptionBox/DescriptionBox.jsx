import React from 'react'
import './Description.css'


const DescriptionBox=(props)=>{
    const {product}=props;
    console.log("description",product)
    return(
        <div className='descriptionbox'>
           <div className="descriptionbox-navigator">
               <div className="descriptionbox-nav-box">Description</div>
               
           </div>
           <div className="description-description">
            <p>Back Story: {product.backStory}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?</p>
            <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
           </div>
        </div>
    )
}

export default DescriptionBox