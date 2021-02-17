import React, {useState, useCallback} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Dash from './memberdashboard/pages/Memberdashboard.js';
import Profiles from './profiles/pages/Members.js';
import MainNavigation from './shared/Navigation/MainNavigation'
import NewProfile from './profiles/pages/NewProfile'
import UpdateProfile from './profiles/pages/UpdateProfile';
import Userauth from './user/pages/Userauth'
import {AuthContext} from './shared/context/auth-context';
import Repository from './repository/pages/Repository'
import Allusers from './user/pages/Allusers'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(()=>{
    setIsLoggedIn(true)
  },[]);
  const logout = useCallback(()=>{
    setIsLoggedIn(false)
  },[]);

  let routes;
  
    if(isLoggedIn){
      routes =(
        <Switch>
        <Route path="/" exact>
            <Dash/>
          </Route>
        <Route path="/profiles" exact>
            <Profiles />
          </Route>
          <Route path="/newprofile">
            <NewProfile/>
          </Route>
          <Route path = "/updateprofile">
            <UpdateProfile/>
          </Route>
          <Route path = "/repo">
            <Repository/>
          </Route>
          
          <Redirect to ="/"/>
        </Switch>
      );
    }else{
      console.log(isLoggedIn);
      routes =(
        <Switch>
        <Route path="/" exact>
            <Dash/>
          </Route>
          <Route path = "/authenticate">
          <Userauth/>
        </Route>
        <Route path = "/allusers">
            <Allusers/>
          </Route>
        <Redirect to ="/authenticate"/>
        </Switch>
      );
    }

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,login:login,logout:logout}}>
    <Router>
      <MainNavigation />
      <main>
          {routes}
      </main>
    </Router>
    </AuthContext.Provider>
  )
}

export default App;
