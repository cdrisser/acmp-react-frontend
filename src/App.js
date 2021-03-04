import React from 'react';
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
import {useAuth} from './shared/hooks/auth-hook'
import UpdateRepo from './admindashboard/pages/UpdateRepo';

function App() {
  const {token, login, logout, userId,admin} = useAuth();
  let routes;
  console.log(admin)
    if(token){
      
      if(admin){
    
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
              <Route path = "/admin/updaterepo">
                <UpdateRepo/>
              </Route>
              <Redirect to ="/"/>
          </Switch>
        );
      }
      else{
       
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
      }
    }else{

      routes =(
        <Switch>
        <Route path="/" exact>
            <Dash/>
          </Route>
          <Route path = "/authenticate">
          <Userauth/>
        </Route>
        <Redirect to ="/authenticate"/>
        </Switch>
      );
    }

  return (
    <AuthContext.Provider value={{isLoggedIn:!!token,admin:!!admin, token:token, userId: userId ,login:login,logout:logout}}>
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
