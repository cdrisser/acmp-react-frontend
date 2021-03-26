import React,{useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {AuthContext} from '../../shared/context/auth-context'
import Button from '../../shared/FormElements/Button';

import "./ProfilesInd.css";

const ProfileInd = (props)=>{
    console.log(props)
    console.log('here')
    const auth = useContext(AuthContext);
    const location = useLocation().pathname === '/admin';

    return(
        
            <div className = "ind-profile">
                <div className ="topsideprofile">
                    <img className="profile-pic" src={`http://localhost:5000/${props.image}`} alt ={props.profilename} />
                    <div className='right-side-profile-column'>
                        <div className='profile-name'>{`${props.firstname} ${props.lastname}`}</div>
                        <div className ='profile-email'> <a className = "social-icon" href={`mailto:${props.email}`} rel="noopener noreferrer">{props.email}</a></div>
                        <Button href ={props.linkedin} styleBut={{ width:'100%', textAlign:'center'}}  inverse>Linkedin</Button>
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