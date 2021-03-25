import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import MemberDashboard from './memberdashboard/pages/Memberdashboard';
import Profiles from './profiles/pages/Members.js';
import MainNavigation from './shared/Navigation/MainNavigation'
import NewProfile from './profiles/pages/NewProfile'
import UpdateProfile from './profiles/pages/UpdateProfile';
import {AuthContext} from './shared/context/auth-context';
import Repository from './repository/pages/Repository'
import Events from './events/pages/Events';
import {useAuth} from './shared/hooks/auth-hook'
import RepoUpdateContainer from './admindashboard/pages/RepoUpdateContainer';
import Footer from './shared/Footer/Footer'
function App() {
  const {token, login, logout, userId, admin, username} = useAuth();
  let routes;
    if(token){
      if(admin){
        routes =(
          <Switch>
            <Route path="/" exact>
                <MemberDashboard/>
              </Route>
              <Route path = "/admin">
                <RepoUpdateContainer/>
              </Route>
              <Redirect to ="/"/>
          </Switch>
        );
      }
      else{
       
        routes =(
          <Switch>
            <Route path="/" exact>
                <MemberDashboard/>
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
              <Route path = "/events">
                <Events/>
              </Route>
              
              <Redirect to ="/"/>
          </Switch>
        );
      }
    }else{

      routes =(
        <Switch>
        <Route path="/" exact>
            <MemberDashboard/>
          </Route>
        <Redirect to ="/"/>
        </Switch>
      );
    }

  return (
    <AuthContext.Provider value={{isLoggedIn:!!token,admin:!!admin, token:token, userId: userId, username:username ,login:login,logout:logout}}>
    <Router>
      <MainNavigation />
      <main>
          {routes}
      </main>
      <Footer/>
    </Router>
    </AuthContext.Provider>
  )
}

export default App;
