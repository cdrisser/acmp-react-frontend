import React from 'react';
import ProfilesInd from './ProfilesInd';
const ProfilesList = (props)=>{
    if(props.profiles.length === 0){
        return(
            <div className = "center">
                <p>There aren't any profiles.  Be the first to add one!</p>
            </div>
        );
    }
    return (
        <div>
            {props.profiles.map(indprofiles=>(
              <ProfilesInd 
                key={indprofiles.id}
                firstname = {indprofiles.firstname}
                lastname = {indprofiles.lastname}
                image={indprofiles.image}
                linkedin = {indprofiles.linkedin}
                elevator={indprofiles.elevator}
                delete = {props.delete}
                id={indprofiles.id}
                />
            ))}
        </div>
    );
}

export default ProfilesList;