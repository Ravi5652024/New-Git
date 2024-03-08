import React, { createContext, useEffect, useState } from "react";


export const AvatarContext = createContext(null);
const AvatarContextProvider = (props)=>{

    const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/v1/avatar/getAllAvatars") // Replace "api_url_here" with the actual URL of your API
      .then((response) => response.json())
      .then((data) => {
        setAvatars(data.data);
      })
      .catch((error) => console.error("Error fetching avatars:", error));
  }, []);

  const contextValue = { avatars };
 console.log("AvatarContext  ",avatars);
  return (
    <AvatarContext.Provider value={contextValue}>
      {props.children}
    </AvatarContext.Provider>
  );
}
export default AvatarContextProvider;


//by the help this file we  use the products any where or filter it ater

