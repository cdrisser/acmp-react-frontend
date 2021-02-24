import React from 'react';
import "./ProfilesInd.css";
const ProfileInd = (props)=>{
    console.log(props.profilename);
    return(
        <div className = "ind-profile">
            <div className ="leftsideprofile">
                <img className="profile-pic" src={`http://localhost:5000/${props.image}`} alt ={props.profilename} />
                <div>{`${props.firstname} ${props.lastname}`}</div>
                
                <div><a href ={props.linkedin}>LinkedIn</a></div>
            </div>
            <div className ="rightsideprofile">
                <div>{props.elevator}</div>

            </div>
        </div>
    );
}
export default ProfileInd;