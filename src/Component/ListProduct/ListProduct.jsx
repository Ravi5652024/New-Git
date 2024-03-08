import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import remove_icon from '../Admin Panel Assets/cross_icon.png'
import edit_icon from '../Assets/Edit_menu.jpeg'
import edit_icon2 from '../Assets/edit_menu2.jpeg'
import EditAvatar from '../EditAvatar/EditAvatar'
import { Link } from 'react-router-dom'
import { config } from '../../config'
const ListProduct=()=>{

    const [all_avatars, setAllAvatars] = useState([]);
    const [error, setError] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const fetchAvatars = async () => {
        const url=config.baseUrl +config.path.GET_All_AVATARS
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch avatars');
            }
            const data = await response.json();
            setAllAvatars(data.data); // Adjust to access the 'data' property in the response
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(()=>{
        fetchAvatars();
        console.log("all_avatar",all_avatars);
    },[])

    const removeAvatar = async (id) => {
        const url=config.baseUrl +config.path.REMOVE_AVATAR
        try {
            // Check if user is logged in
            const authToken = localStorage.getItem("auth-token");
            if (!authToken) {
                // User is not logged in, display a message or redirect to login page
                alert("You need to be logged in to perform this action.");
                return;
            }
    
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${authToken}` // Include authorization token in request headers
                },
                body: JSON.stringify({ id: id }) // Include ID in the request body as JSON
            });
            if (!response.ok) {
                alert("Failed to remove avatar");
            }
            else{
                alert("Avatar removed successfully");
            }
            fetchAvatars();
        } catch (error) {
            alert(error.message);
        }
    };
    return(
        <div className='list-product'>
            <h1>Avatars List</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="listproduct-table">
                <table>
                    <thead>
                        <tr>
                            <th>AVATAR ID</th>
                            <th>PROFILE PIC</th>
                            <th>NAME</th>
                            <th>Type</th>
                            <th>EDIT</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all_avatars.map((avatar, index) => (
                            <tr key={index}>
                                <td className="listproduct-avatar-id" >{avatar.id}</td>
                                <td>
                                    <Link to={`/avatar/${avatar.id}`}>
                                        {typeof avatar.profilePic[0].thumbnail === 'string' ? (
                                            <img
                                                onClick={() => window.scrollTo(0, 0)}
                                                src={avatar.profilePic[0].thumbnail}
                                                alt={avatar.name}
                                                className="listproduct-avatar-icon"
                                            />
                                        ) : (
                                            <span>No image available</span>
                                        )}
                                    </Link>
                                </td>
                                <td className="listproduct-avatar-id" >{avatar.name}</td>
                                <td className="listproduct-avatar-id">{avatar.avatarType}</td>
                                {/* <td><img src={edit_icon}  onClick={<EditAvatar/>} alt="" className="edit-avatar" /></td> */}
                                <td><Link to={`/edit-avatar/${avatar.id}`}>
                                    <img  onClick={window.scrollTo(0,0)} img src={edit_icon} alt="" className="edit-avatar" />
                                    {/* add logic to store image in object */}
                                </Link></td>
                                <td><img onClick={() => removeAvatar(avatar.id)} src={remove_icon} alt="" className="listproduct-remove-icon" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListProduct
