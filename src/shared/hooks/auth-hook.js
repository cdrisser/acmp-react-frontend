import {useState,useCallback, useEffect} from 'react';

let logoutTimer;

export const useAuth = ()=> {
    const [token, setToken] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userId, setUserId] = useState();
    const [admin, setAdmin] = useState();
    const [username, setUserName] = useState();
    
     
    const login = useCallback((uid,username, token, admin, expirationDate)=>{
      setToken(token)
      setUserId(uid);
      setAdmin(admin);
      setUserName(username);
      const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpirationDate(tokenExpirationDate);
        console.log(uid)
      localStorage.setItem('userData', JSON.stringify({userId:uid, username:username,token:token, admin:admin, expiration:tokenExpirationDate.toISOString()}));
    },[]);
  
    const logout = useCallback(()=>{
      setToken(null);
      setTokenExpirationDate(null)
      setUserId(null);
      setAdmin(null);
      setUserName(null);
      localStorage.removeItem('userData');
    },[]);
  

    useEffect(()=>{
      if(token && tokenExpirationDate){
        const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
        logoutTimer = setTimeout(logout, remainingTime)
      }
      else{
        clearTimeout(logoutTimer);
      }
    },[token,logout,tokenExpirationDate]);

    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('userData'));
        console.log(storedData)
          if(storedData && storedData.token && new Date(storedData.expiration)>new Date()){
            login(storedData.userId,storedData.username,storedData.token, storedData.admin, new Date(storedData.expiration))
          }
      },[login]);
      return {token, login, logout, userId, admin, username};
}