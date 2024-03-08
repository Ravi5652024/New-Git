import React, { useEffect, useState } from 'react'
import './Classic.css'

import Avatar from '../Item/Avatar'
import { config } from '../../config';
const MostPopular=()=>{

    const [classicAvatars, setClassicAvatars] = useState([]);

    useEffect(() => {
        const url=config.baseUrl +config.path.GET_ALL_CLASSIC_AVATARS
        fetch(url)
            .then(response => response.json())
            .then(data => setClassicAvatars(data))
            .catch(error => console.error('Error fetching premium avatars:', error));
    }, []);
    return(
        <div className='classic'>
            <h1>CLASSIC AVATARS</h1>
            <hr/>
            <div className='classic_item'>
                {classicAvatars.map((avatar, i) => (
                    <Avatar key={i} avatar={avatar} />
                ))}                 
                </div>
        </div>
    )
}

export default MostPopular