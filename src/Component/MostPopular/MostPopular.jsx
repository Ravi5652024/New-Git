import React, { useEffect, useState } from 'react'
import './MostPopular.css'

import Avatar from '../Item/Avatar'
import { config } from '../../config';
const MostPopular=()=>{

    const [popularAvatars, setPopularAvatars] = useState([]);

    useEffect(() => {
        const url=config.baseUrl +config.path.GET_ALL_MOSTPOPULAR_AVATARS
        fetch(url)
            .then(response => response.json())
            .then(data => setPopularAvatars(data))
            .catch(error => console.error('Error fetching premium avatars:', error));
    }, []);
    return(
        <div className='most-popular'>
            <h1>MOST POPULAR AVATARS</h1>
            <hr/>
            <div className='most-popular_item'>
                {popularAvatars.map((avatar, i) => (
                    <Avatar key={i} avatar={avatar} />
                ))}                 
                </div>
        </div>
    )
}

export default MostPopular