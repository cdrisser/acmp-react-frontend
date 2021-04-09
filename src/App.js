import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

// import MemberDashboard from './memberdashboard/pages/Memberdashboard';
// import Profiles from './profiles/pages/Members.js';
// import NewProfile from './profiles/pages/NewProfile';
// import UpdateProfile from './profiles/pages/UpdateProfile';
// import Repository from './repository/pages/Repository';
// import Events from './events/pages/Events';
// import RepoUpdateContainer from './admindashboard/pages/RepoUpdateContainer';

import {useAuth} from './shared/hooks/auth-hook'
import Footer from './shared/Footer/Footer';
import {AuthContext} from './shared/context/auth-context';
import Spinner from './shared/UIElements/Spinner';
import AcmpIndex from './acmp-static/AcmpIndex';
import MeetTheTeam from './acmp-static/MeetTheTeam';
import GetInvolved from './acmp-static/GetInvolved';
import MainNavigation from './shared/Navigation/MainNavigation';
import Contact from './acmp-static/Contact';
import MainNav from './acmp-static/MainNav';


const MemberDashboard = React.lazy(()=> import('./memberdashboard/pages/Memberdashboard'));
const Profiles = React.lazy(()=> import('./profiles/pages/Members.js'));
const NewProfile = React.lazy(()=> import('./profiles/pages/NewProfile'));
const UpdateProfile = React.lazy(()=> import('./profiles/pages/UpdateProfile'));
const Repository = React.lazy(()=> import('./repository/pages/Repository'));
const Events = React.lazy(()=> import('./events/pages/Events'));
const RepoUpdateContainer = React.lazy(()=> import('./admindashboard/pages/RepoUpdateContainer'));

function App() {
  const {token, login, logout, userId, admin, username} = useAuth();
  let routes;

    if(token){
      if(admin){
        routes =(
          <Switch>
            <Route path="/members" >
              <MainNavigation />
                <MemberDashboard/>
              <Footer/>
              </Route>
              <Route path = "/admin">
              <MainNavigation/>
                <RepoUpdateContainer/>
              <Footer/>
              </Route>
              <Redirect to ="/members"/>
          </Switch>
        );
      }
      else{
    
         routes =(
          <Switch>
            <Route path="/members" >
              <MainNavigation />
                <MemberDashboard/>
              <Footer/>
              </Route>
            <Route path="/profiles" >
            <MainNavigation />
                <Profiles />
                <Footer/>
              </Route>
              <Route path="/newprofile">
              <MainNavigation />
                <NewProfile/>
                <Footer/>
              </Route>
              <Route path = "/updateprofile">
              <MainNavigation />
                <UpdateProfile/>
                <Footer/>
              </Route>
              <Route path = "/repo">
              <MainNavigation />
                <Repository/>
                <Footer/>
              </Route>
              <Route path = "/events">
              <MainNavigation />
              <Events/>
              <Footer/>
              </Route>
              <Redirect to ="/members"/>
          </Switch>
        );
      }
    }
    else{
      routes =
      (
        <Switch>
        <Route path = "/" exact >
        <MainNav/>
          <AcmpIndex/>
        <Footer/>
        </Route>
        <Route path = "/meettheteam" >
        <MainNav/>
          <MeetTheTeam/>
          <Footer/>
          </Route>
        <Route path = "/getinvolved">
          <GetInvolved/>
        </Route>
        <Route path = "/contact">
          <Contact/>
        </Route>
        <Route path="/members" >
          <MainNavigation />
              <MemberDashboard/>
          <Footer/>
        </Route>
        <Redirect to ="/"/>
        </Switch>
      );
    }

  return (
    <AuthContext.Provider value={{isLoggedIn:!!token,admin:!!admin, token:token, userId: userId, username:username ,login:login,logout:logout}}>
    <Router>
      
      <main>
        <Suspense fallback={<div className = 'center'> <Spinner/></div>}>
       {routes}
          </Suspense>
      </main>
      
    </Router>
    </AuthContext.Provider>
  )
}

export default App;
