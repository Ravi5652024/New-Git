


import React, { useContext } from 'react';
import './CSS/AvatarCategory.css';
import { AvatarContext } from '../Context/AvatarContext';
import dropdown_icon from '../Component/Assets/dropdown_icon.png';

import Avatar from '../Component/Item/Avatar';

const AvatarCategory = (props) => {
    const { avatars } = useContext(AvatarContext); // Using avatars from ShopContext instead of all_product
    console.log("category",avatars); // Log the avatars to check the data
    console.log("category", props.category); // Log the category to check the data
    console.log("avatargender",avatars.gender); // Log the avatarType to check the data (should be same as category)
    return (
        <div className='shop-category'>
            <div className="shopcategory-indexSort">
                {/* <p><span>Showing 1-12</span> out of {avatars.length} avatars</p> */}
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>

            <div className="shopcategory-products">
                {avatars.map((avatar, i) => { // Map through avatars instead of all_product
                    if (props.category === avatar.gender || props.category === avatar.avatarType) { // Check the category against avatarType
                        return (
                          <Avatar key={i} avatar={avatar} />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
}



export default AvatarCategory;
