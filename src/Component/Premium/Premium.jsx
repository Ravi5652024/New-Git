import React, { useEffect, useState } from 'react'
import './Premium.css'

import Avatar from '../Item/Avatar'
import { config } from '../../config';
const Premium=()=>{

    const [premiumAvatars, setPremiumAvatars] = useState([]);

    useEffect(() => {
        const url=config.baseUrl +config.path.GET_ALL_PREMIUM_AVATARS
        fetch(url)
            .then(response => response.json())
            .then(data => setPremiumAvatars(data))
            .catch(error => console.error('Error fetching premium avatars:', error));
    }, []);
    return(
        <div className='premium'>
            <h1>PREMIUM AVATARS</h1>
            <hr/>
            <div className='premium_item'>
                {/* {premiumAvatars.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })} */}

                {premiumAvatars.map((avatar, i) => (
                    <Avatar key={i} avatar={avatar} />
                ))}                 
                </div>
        </div>
    )
}

export default Premium