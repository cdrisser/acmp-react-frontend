import {createContext} from 'react';

export const AuthContext = createContext(
    {isLoggedIn:false,
        userId:null,
        admin:false,
        token:null,
        login: ()=>{}, 
        logout:()=>{},
         }); 