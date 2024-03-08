import React, { useEffect, useState } from 'react';
import './Avatar.css';
import { Link } from 'react-router-dom';

const Avatar = ({ avatar }) => {

    const [profilePics, setProfilePics] = useState([]);

    // Extract profile pictures from avatar and store in state
    useEffect(() => {
        if (avatar.profilePic && avatar.profilePic.length > 0) {
            setProfilePics(avatar.profilePic);
        }
    }, [avatar]);
    console.log("profilepic",profilePics)
    return (
        <div className='avatar'>
            {/* <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link> */}
            {/* <Link to={`/product/${avatar.id}`}><img onClick={window.scrollTo(0,0)} src={avatar.image} alt="" /></Link> */}
            {/* Wrap the image inside a Link component */}

            {/* <Link to={`/avatar/${avatar.id}`  }>
                <img  src={avatar.profilePic[0].original} alt={avatar.name} />
            </Link> */}
            
            <Link to={`/avatar/${avatar.id}`} onClick={() => window.scrollTo(0, 0)}>
                <img src={avatar.profilePic[0].original} alt={avatar.name} />
            </Link>
            {/* <img src={avatar.profilePic[0].original} alt={avatar.name} /> */}
            <div className='avatar_info'>
                <h2>{avatar.name}</h2>
                <p>{avatar.gender}</p>
                <p>{avatar.ageRange}</p>
                <p>{avatar.profileType}</p>
                <p>{avatar.avatarType}</p>
                <p hidden>{avatar.visibility}</p>         {/* dont want o display */}
                <p hidden>{avatar.generatedBy}</p>        {/* dont want o display */}
                <p hidden>{avatar.voiceId}</p>           {/* dont want o display */}
                <p hidden>{avatar.profileSummary}</p>
                <p hidden>{avatar.operatorId}</p>
                <p >{avatar.tags.join(', ')}</p>     {/* dont want o display */}
                <p hidden>{avatar.backStory}</p>              {/* dont want o display */}
            </div>
        </div>
    );
}

export default Avatar;
