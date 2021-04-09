import React,{useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {AuthContext} from '../../shared/context/auth-context'
import Button from '../../shared/FormElements/Button';

import "./ProfilesInd.css";

const ProfileInd = (props)=>{

    const auth = useContext(AuthContext);
    const location = useLocation().pathname === '/admin';

    return(
        
            <div className = "ind-profile">
                <div className ="topsideprofile">
                    <img className="profile-pic" src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt ={props.profilename} />
                    <div className='right-side-profile-column'>
                        <div className='profile-name'>{`${props.firstname} ${props.lastname}`}</div>
                        <div className='center'>
                            <ion-icon name="send-sharp"></ion-icon>
                        <div className ='profile-email'> <a className = "social-icon" href={`mailto:${props.email}`} rel="noopener noreferrer">{props.email}</a></div>
                        </div>
                        <div className='center'>
                            <ion-icon name="logo-linkedin"></ion-icon>
                            <a className = "social-icon" target = "_blank" href={props.linkedin} rel="noopener noreferrer"> <p>My LinkedIn</p></a>
                        </div>
                        
                    </div>
                </div>
                
                <div className ="bottomsideprofile">
                    <div>{props.elevator}</div>
                    <div className='button-center'>
                        {auth.admin && location && <Button styleBut={{margin:'.5rem 0'}} onClick={()=>{props.delete(props.id)}} danger>Delete</Button>}
                    </div>
                </div>
            </div>
        
    );
}
export default ProfileInd;