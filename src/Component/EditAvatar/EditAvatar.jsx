
import React, { useState, useEffect } from 'react';
import './EditAvatar.css';
import upload_area from '../Admin Panel Assets/upload_area.svg';
import { useParams } from 'react-router-dom';
import { config } from '../../config';

const EditAvatar = () => {
    const { avatarId } = useParams();
    const [image, setImage] = useState(null);
    const [avatarDetails, setAvatarDetails] = useState({
        name: "",
        gender: "",
        ageRange: "",
        profileType: "",
        avatarType: "",
        visibility: "",
        generatedBy: "",
        voiceId: "",
        profileSummary: "",
        operatorId: "",
        tags: [],
        backStory: ""
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("avatarId", avatarId);
        
        const fetchAvatarDetails = async () => {
            const url=config.baseUrl +config.path.GET_AVATAR
            try {
                const response = await fetch(`http://localhost:8080/v1/avatar/getavatars/${avatarId}`);
                if (!response.ok) {
                    alert("Failed to fetch avatar details");
                    throw new Error('Failed to fetch avatar details');
                }
                const data = await response.json();
                console.log("sucees", data.status);
                console.log("data.data", data.data);
                if (data.status) {
                    console.log("Avatardata",data.data);
                    setAvatarDetails(data.data); // Update avatar details state with fetched data
                } else {
                    alert("Failed to fetch avatar details");
                    throw new Error(data.message || 'Failed to fetch avatar details');
                }
            } catch (error) {
                console.error(error);
                alert("Failed to fetch avatar details");
                setTimeout(() => {
                    window.history.back();
                }, 1000); // Redirect back after 3 seconds (3000 milliseconds)
            }
        };
        fetchAvatarDetails();
    }, [avatarId]);

    const changeHandler = (e) => {
        // For tags field, split the comma-separated string into an array
        if (e.target.name === 'tags') {
            const tagsArray = e.target.value.split(',');
            setAvatarDetails({ ...avatarDetails, [e.target.name]: tagsArray });
        } else {
            // For other fields, directly update the state
            setAvatarDetails({ ...avatarDetails, [e.target.name]: e.target.value });
        }
    };
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const EditAvatarDetails = async () => {
        const url=config.baseUrl +config.path.UPDATE_AVATAR
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(avatarDetails)
            });
            const data = await response.json();
            console.log("sucees", data.status);
            
            if (response.ok && data.success) {
                alert('Avatar details updated successfully');
            } else {
                throw new Error(data.message || 'Failed to update avatar details');
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };
    return (
        <div className="main-conatiner">
            <div className="productdisplayleft">
                {/* Render the main image */}
                {avatarDetails.profilePic && avatarDetails.profilePic.length > 0 && (
                     <img src={avatarDetails.profilePic[0].original} alt={avatarDetails.name}/>
                            )}


                </div>

            <div className='Edit-product'>
                <h1>Edit Avatar</h1>
                <div className="Editproduct-itemfield">
                    <p>Avatar Name</p>
                    <input value={avatarDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Enter the Avatar Name' />
                </div>
                <div className="Editproduct-itemfield">
                    <p>Gender</p>
                    <select value={avatarDetails.gender} onChange={changeHandler} name="gender" className='Edit-product-selector'>
                        <option value="">Select Gender</option>
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                        <option value="NON_BINARY">NON_BINARY</option>
                    </select>
                </div>
                <div className="Editproduct-itemfield">
                    <p>Age Range</p>
                    <input value={avatarDetails.ageRange} onChange={changeHandler} type="text" name='ageRange' placeholder='Enter Age Range' />
                </div>
                <div className="Editproduct-itemfield">
                    <p>Profile Type</p>
                    <select value={avatarDetails.profileType} onChange={changeHandler} name="profileType" className='Edit-product-selector'>
                        <option value="">Select Profile Type</option>
                        <option value="PREMIUM">PREMIUM</option>
                        <option value="CLASSIC">CLASSIC</option>
                        <option value="PERSONALISED">PERSONALISED</option>
                        <option value="MOST_POPULAR">MOST_POPULAR</option>
                    </select>
                </div>
                <div className="Editproduct-itemfield">
                    <p>Avatar Type</p>
                    <select value={avatarDetails.avatarType} onChange={changeHandler} name="avatarType" className='Edit-product-selector'>
                        <option value="">Select Avatar Type</option>
                        <option value="SYSTEMDEFINED">SYSTEMDEFINED</option>
                        <option value="USERDEFINED">USERDEFINED</option>
                        <option value="SELF">SELF</option>
                    </select>
                </div>
                <div className="Editproduct-itemfield">
                    <p>Profile Summary</p>
                    <textarea value={avatarDetails.profileSummary} onChange={changeHandler} name="profileSummary" className='Edit-product-textarea' placeholder="Enter Profile Summary"></textarea>
                </div>
                <div className="Editproduct-itemfield">
                    <p>Tags</p>
                    <input value={avatarDetails.tags} onChange={changeHandler} type="text" name='tags' placeholder='Enter Tags (comma-separated)' />
                </div>
                <div className="Editproduct-itemfield">
                    <p>Back Story</p>
                    <textarea value={avatarDetails.backStory} onChange={changeHandler} name="backStory" className='Edit-product-textarea' placeholder="Enter Back Story"></textarea>
                </div>
                <div className="Editproduct-itemfield">
                    <label htmlFor='file-input'>
                        <img src={image ? URL.createObjectURL(image) : upload_area} className='Editproduct-thumbnail-img' alt="" />
                    </label>
                    <input type="file" name='image' id='file-input' hidden onChange={imageHandler} />
                </div>
                <button onClick={EditAvatarDetails} className="Editproduct-btn">Edit</button>
            </div>
        </div>
    );
};

export default EditAvatar;

