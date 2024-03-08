

import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../Admin Panel Assets/upload_area.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AvatarVoices from '../Voice/AvatarVoices';

const AddProduct2=()=>{
    const navigate=useNavigate();
    const [image, setImage] = useState(false);
  const [avatarImages, setAvatarImages] = useState([]);
  const [selectedImageType, setSelectedImageType] = useState('thumbnail');
  const [selectedOriginalImage, setSelectedOriginalImage] = useState(null);
  const [selectedThumbnailImage, setSelectedThumbnailImage] = useState(null);
  const [mainImage, setMainImage] = useState(null); // State for main image
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatarImagesFetched, setAvatarImagesFetched] = useState(false);
  const [avatarDetails, setAvatarDetails] = useState({
    name: "",
    gender: "",
    ageRange: "",
    profileType: "",
    avatarType: "",
    // visibility: "",
    // generatedBy: "",
    voiceId: "",
    userId: "",
    // profileSummary: "",
    // operatorId: "",
    tags: [],
    backStory: "",
    requestId: "",
    // profilePic: { original: '', thumbnail: '' }
  });


  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    
    // For tags field, split the comma-separated string into an array
    if (name === 'tags') {
      const tagsArray = value.split(',');
      setAvatarDetails(prevState => ({
        ...prevState,
        [name]: tagsArray
      }));
    } else {
      // For other fields, directly update the state
      setAvatarDetails(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const generateProfilePic = async () => {
    try {
    //   const response = await axios.post('http://localhost:8080/v1/avatar/generate-profilePic', avatarDetails);
    //   const response = await axios.post('http://3.111.182.11:5441/avatar/v1/avatar/generate-profilePic', avatarDetails);
    // const response = await axios.post('http://localhost:8080/v1/avatar/create', avatarData);
    console.log('Profile picture generated request:');  
    const response = await axios.post('http://3.111.182.11:5441/avatar/v1/avatar/create', avatarDetails);
      console.log('Profile picture generated:', response.data);
      if (response.data.statuscode === 200) {
        console.log('Request ID:', response);
      }
    } catch (error) {
      console.error('Error generating profile picture:', error);
    }
  };

  const fetchAvatarImages = async () => {
    const data1 = {
      operatorId: 0,
      language: "en",
      requestId: avatarDetails.requestId,
    }
    try {
      console.log("requestId", avatarDetails.requestId)
    //   const response = await axios.get(`http://localhost:8080/v1/avatar/generate-profilePic/${avatarDetails.requestId}`, data1);
      const response = await axios.get(`http://3.111.182.11:5441/avatar/v1/avatar/generate-profilePic/${avatarDetails.requestId}`, data1);
      console.log('Avatar images fetched:', response.data);
      setAvatarImages(response.data.data.profilePic); 
      
    } catch (error) {
      console.error('Error fetching avatar images:', error);
    }
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setMainImage(image.original); // Set main image
    setSelectedOriginalImage(image.original); // Set selected original image
    setSelectedThumbnailImage(image.original);
  };

  const handleImageTypeChange = (type) => {
    setSelectedImageType(type);
  };

  const saveAvatarDetails = async () => {
    // Implement logic to save avatar details along with selected image
    const avatarData = {
        ...avatarDetails,
        // profilePic: {
        //   original: selectedOriginalImage,
        //   thumbnail: selectedThumbnailImage,
        // },
        voiceId: avatarDetails.voiceId,
      };
    try {
      console.log("gender",avatarDetails.gender)
      console.log("voiceId",avatarDetails.voiceId)
      console.log("avatar",avatarDetails)
      // const response = await axios.post('http://localhost:8080/v1/avatar/create', avatarData);
      const response = await axios.post('http://3.111.182.11:5441/avatar/v1/avatar/create', avatarData);
      console.log('Avatar details saved:', response.data);
      alert('Avatar details saved successfully');
      navigate('/home')
      
    } catch (error) {
      console.error('Error saving avatar details:', error);
    }
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const mainImageHandler = (e) => {
    if (e.target.files.length > 0) {
      const mainImageFile = e.target.files[0];
      const mainImageUrl = URL.createObjectURL(mainImageFile);
      setMainImage(mainImageUrl);
    }
  };

  // const handleImageSelect = (image) => {
  //   setSelectedImage(image);
  // };


  const handleSelectedVoice = (voiceId) => {
    setAvatarDetails((prevState) => ({
      ...prevState,
      voiceId: voiceId,
    }));
  };
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
                    <option value={0}>MALE</option>
                    <option value={1}>FEMALE</option>
                    <option value={2}>NON_BINARY</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Age Range</p>
                <input value={avatarDetails.ageRange} onChange={changeHandler} type="text" name='ageRange' placeholder='Enter Age Range' />
            </div>

            <div className="addproduct-itemfield">
                <p>Tags</p>
                <input value={avatarDetails.tags} onChange={changeHandler} type="text" name='tags' placeholder='Enter Tags (comma-separated)' />
            </div>
            <div className="addproduct-itemfield">
                <p>request Id</p>
                <input value={avatarDetails.requestId} onChange={changeHandler} type="text" name='requestId' placeholder='Enter requestId ' />
            </div>
            <div className="addproduct-itemfield">
                <p>Back Story</p>
                <textarea value={avatarDetails.backStory} onChange={changeHandler} name="backStory" className='add-product-textarea' placeholder="Enter Back Story"></textarea>
            </div>
            <div className="addproduct-itemfield">
                <p>User Id</p>
                <input value={avatarDetails.userId} onChange={changeHandler} type="text" name='userId' placeholder='Enter your UserId' />
            </div>
             {<AvatarVoices setSelectedVoice={handleSelectedVoice}/>}
            <div>

            <button onClick={generateProfilePic} className="addproduct-btn">Generate Profile Picture</button>
            </div> 

            <div>
        </div>
        
        <div className="main-image">
        {selectedImage && <img src={selectedImage.original} alt="Main Image" />}
      </div>
      <div className="images-container">
        <div className="original-images">
        {avatarImages && avatarImages.map((image, index) => (
        <div key={index}>
            <img src={image.original} alt={`Original Image ${index}`} onClick={() => handleImageSelect(image)} />
        </div>
        ))}
        </div>
      </div>
      <button onClick={fetchAvatarImages} className="addproduct-btn">Fetch Profile pic</button>
      {/* Conditionally render AvatarVoices component */}
      
      <button 
    //   onClick={saveAvatarDetails} 
      className="addproduct-btn" >Save Avatar Details</button>
        </div>
    );
};

export default AddProduct2;

