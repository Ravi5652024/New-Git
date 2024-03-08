
export const config = {
  // baseUrl: "http://172.16.10.196:8080",
  baseUrl: "http://localhost:8080/v1/avatar",
  path :{
      
    GET_All_AVATARS : "/getAllAvatars",
    GET_ALL_PREMIUM_AVATARS : "/get/premium",
    GET_ALL_CLASSIC_AVATARS : "/get/classic",
    GET_ALL_MOSTPOPULAR_AVATARS : "/get/most-popular",
    GET_ALL_SYSTEMDEFINED_AVATARS : "/get/system-defined",
    GET_ALL_USERDEFINED_AVATARS :"/get/user-defined",
    
    GET_ALL_MALE_AVATARS : "/get/maleAvatar",
    GET_ALL_FEMALE_AVATARS : "/get/femaleAvatar",
    
    GET_AVATAR : "/getavatars/${avatarId}", //check this later
    UPDATE_AVATAR : "/updateAvatar",
    REMOVE_AVATAR : "/deleteAvatars",
    LOGIN : "/login",
    SIGNUP :"/signup"
        
       

  }
}