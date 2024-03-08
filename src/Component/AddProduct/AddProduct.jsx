

import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../Admin Panel Assets/upload_area.svg'
import axios from 'axios';

const AddProduct=()=>{
    const [image,setImage]=useState(false);
    const imageHandler=(e)=>{
        setImage(e.target.files[0]);
    }
    const [avatarDetails, setAvatarDetails] = useState({
        name: "",
        gender: "",
        ageRange: "",
        profileType: "",
        avatarType: "",
        visibility: "",
        generatedBy: "",
        voiceId: "",
        userId: "",
        profileSummary: "",
        operatorId: "",
        tags: [],
        backStory: "",
        requestId: "123456789",
        profilePic: { original: '', thumbnail: '' }
    });

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
    

    
    const Add_Avatar = async () => {
        const imageDetails = {
            file: image,
            mediaType: 'IMAGE_AVATAR_PROFILE'
          };
        try {
          
            const responseImage = await axios.post('http://localhost:8080/v1/media/upload/IMAGE_AVATAR_PROFILE', imageDetails, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
          console.log("image uploaded suceesfully")
          const imageUrl = responseImage;
          console.log("image url",imageUrl)
          setAvatarDetails(prevDetails => ({
            ...prevDetails,
            profilePic: { original: imageUrl, thumbnail: imageUrl } // Assuming the same URL for both original and thumbnail
          }));
          console.log('Avatar details:', avatarDetails);
          console.log('tags',avatarDetails.tags)
          
          // Call your API to save the avatar details
          const responseSave = await axios.post('http://localhost:8080/v1/avatar/create', avatarDetails);



          console.log('Save response:', responseSave.data);
    
          // Handle success response from save API
          if (responseSave.data.statuscode === 200) {
            alert('Avatar added successfully');
            // Clear form or redirect to another page as needed
          } else {
            // Handle error response from save API
            alert('Failed to add avatar');
          }
        } catch (error) {
          console.error('Error adding avatar:', error);
          // Handle error (e.g., show error message to user)
          alert('Error adding avatar');
        }
      };





    // const Add_Avatar=async()=>{
    //     console.log(avatarDetails);
    //     let responseData;
    //     let avatar=avatarDetails;
    //     let formData=new FormData();
    //     formData.append('product',avatar.image);

    //     await fetch('https://localhost:4000/upload',{
    //         method:'POST',
    //         headers:{
    //             Accept:'application/json',
    //         },
    //         body:formData,
    //     }).then(res=>res.json()).then(data=>{responseData=data});
    //     if(responseData.success){
    //         product.image=responseData.image_url;
    //         console.log(product);

    //         await fetch('https://localhost:4000/addproduct',{
    //             method:'POST',
    //             headers:{Accept:'application/json', 'Content-Type':'application/json'},
    //             body:JSON.stringify(product),

    //         }).then(res=>res.json()).then(data=>{data.sucess?alert("Product Added"):alert("failed")});
    //     }
    //     else{
    //         alert(responseData.console.error())
    //     }
    // }
    return(
        <div className='add-product'>
            <h1>ADD Avatar</h1>
            <div className="addproduct-itemfield">
                <p>Avatar Name</p>
                <input value={avatarDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Enter the Avatar Name' />
            </div>
            <div className="addproduct-itemfield">
                <p>Gender</p>
                <select value={avatarDetails.gender} onChange={changeHandler} name="gender" className='add-product-selector'>
                    <option value="">Select Gender</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="NON_BINARY">NON_BINARY</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Age Range</p>
                <input value={avatarDetails.ageRange} onChange={changeHandler} type="text" name='ageRange' placeholder='Enter Age Range' />
            </div>
            <div className="addproduct-itemfield">
                <p>Profile Type</p>
                <select value={avatarDetails.profileType} onChange={changeHandler} name="profileType" className='add-product-selector'>
                    <option value="">Select Profile Type</option>
                    <option value="PREMIUM">PREMIUM</option>
                    <option value="CLASSIC">CLASSIC</option>
                    <option value="PERSONALISED">PERSONALISED</option>
                    <option value="MOST_POPULAR">MOST_POPULAR</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Avatar Type</p>
                <select value={avatarDetails.avatarType} onChange={changeHandler} name="avatarType" className='add-product-selector'>
                    <option value="">Select Avatar Type</option>
                    
                    <option value="SYSTEMDEFINED">SYSTEMDEFINED</option>
                    <option value="USERDEFINED">USERDEFINED</option>
                    <option value="SELF">SELF</option>
                </select>
            </div>

            <div className="addproduct-itemfield">
                <p>User Id</p>
                <input value={avatarDetails.userId} onChange={changeHandler} type="text" name='userId' placeholder='Enter your UserId' />
            </div>
            <div className="addproduct-itemfield">
                <p>Voice Id</p>
                <input value={avatarDetails.voiceId} onChange={changeHandler} type="text" name='voiceId' placeholder='Enter voiceId' />
            </div>
            <div className="addproduct-itemfield">
                <p>Profile Summary</p>
                <textarea value={avatarDetails.profileSummary} onChange={changeHandler} name="profileSummary" className='add-product-textarea' placeholder="Enter Profile Summary"></textarea>
            </div>
            <div className="addproduct-itemfield">
                <p>Tags</p>
                <input value={avatarDetails.tags} onChange={changeHandler} type="text" name='tags' placeholder='Enter Tags (comma-separated)' />
            </div>
            <div className="addproduct-itemfield">
                <p>Back Story</p>
                <textarea value={avatarDetails.backStory} onChange={changeHandler} name="backStory" className='add-product-textarea' placeholder="Enter Back Story"></textarea>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img' alt="" />
                </label>
                <input type="file" name='image' id='file-input' hidden onChange={imageHandler} />
            </div>
            <button onClick={Add_Avatar} className="addproduct-btn">ADD</button>
        </div>
    );
};

export default AddProduct;

