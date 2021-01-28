import React from 'react';
import ProfilesList from '../components/ProfilesList';

const Profiles = ()=>{
    const profiles = [{id : "1", 
    profilename : "Shauna Risser", 
    image:'https://static.wixstatic.com/media/f1a4fe_42fa43ce0c1645788c563f4ff6e3f9c4~mv2_d_1473_2173_s_2.jpg/v1/crop/x_0,y_388,w_1453,h_1453/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01/Shauna%20Risser.webp}',
    linkedin:'https://www.linkedin.com/in/shauna-risser-b142058a/',
    elevator:'I am an Organizational Development expert with 15 years of experience delivering people- focused solutions in complex organizations. I facilitate transformation efforts and deliver organizationally aligned readiness and learning strategies that motivate and engage individuals, maximizing adoption.'
    },{id : "2", 
    profilename : "Shauna Risser", 
    image:'https://static.wixstatic.com/media/f1a4fe_42fa43ce0c1645788c563f4ff6e3f9c4~mv2_d_1473_2173_s_2.jpg/v1/crop/x_0,y_388,w_1453,h_1453/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01/Shauna%20Risser.webp}',
    linkedin:'https://www.linkedin.com/in/shauna-risser-b142058a/',
    elevator:'I am an Organizational Development expert with 15 years of experience delivering people- focused solutions in complex organizations. I facilitate transformation efforts and deliver organizationally aligned readiness and learning strategies that motivate and engage individuals, maximizing adoption.'
    }]
    return( 
    <div>

        <h1>Member Profiles</h1>
        <ProfilesList profiles ={profiles}/>
    </div>
    );
};

export default Profiles;             