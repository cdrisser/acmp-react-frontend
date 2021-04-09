import React from 'react';
import MainNav from './MainNav';
import './resources/css/style.css'
import './resources/css/queries.css'
const AcmpIndex = ()=>{

    
    return(
    <React.Fragment>
    <div className = 'main-header-acmp'>

            <h1> ACMP - Arizona Chapter </h1>
            <h2>Moving Change Work Forward</h2>
            <div className = "acmp-index-flex">
            <a class = "btn" href="getinvolved.html">Join or Volunteer</a>
            <a class = "btn js-go-to-event" href="#">Current Events</a>
            </div>
       
    </div>
    <div className ='header-background'>

    </div>
    <section className ="section-about ">
        <div className="row">
            <p className ="about-header">ABOUT</p>
            <p className="long-copy">
                Here at the ACMP Arizona Chapter, we are driven by a single goal-
creating a community of like-mind professionals dedicated to leading the way change works.  We strive to build productive relationships, foster personal and professional development, and make a positive impact with all of our pursuits.<br></br><br></br>
                
                
            </p>
        </div>
    </section>
        <section className = 'section-acmp-index'>
        <div className ="about-div">
            <div className = "commited-to-the-cause">
            <i className="icon ion-md-globe about-icon"></i>
            <h3>Commited to the Cause</h3>
            <p>
                Coming together from a wide variety of backgrounds and experiences, our skilled team of professionals is the backbone of the ACMP Arizona Chapter. Their ideas help shape the direction and mission of our organization as it continues to develop.
            </p>
            
        
                </div>
        <div className = "commited-to-the-cause">
            <i className="icon ion-md-rocket about-icon"></i>
            <h3>The ACMP Mission</h3>
            <p>
                The Association of Change Management Professionals (ACMP) serves as an independent and trusted source of professional excellence, advocates for the discipline and creates a thriving change community.
            </p>
                

        </div>
        <div className = "commited-to-the-cause">
            <i className="icon ion-md-contacts involved-icon"></i>
            
            <h3>Get Involved</h3>

           <p className = "get-involved-p"> 
                <span className = "checkmark">&#10003;</span> Become a Member <br></br>
                <span className = "checkmark">&#10003;</span> Volunteer <br></br>
                <span className = "checkmark">&#10003; </span>Become a Sponsor
            </p>
            
        </div>
            </div>
            </section>

    <section className = "event-section ">
        <p className ="event-header"> Current Events </p>
        <article className = "specific-event">
            <div>
             <img src={require("./resources/css/img/chuttersnap-Q_KdjKxntH8-unsplash.jpg")}></img>
                </div>
            <div className = "event-info">
            
               ACMP ARIZONA CONFERENCE <br></br>
                March 29th 2019<br></br>
                Downtown Phoenix at The Wild Rooster<br></br>
            </div>
            
                <div className = "event-cost">
                <p>Free</p>
                </div>
            <div className ="reg-now-width">
                <a className="reg-button" href="#">Register Now!</a>
            </div>
        </article>
        <br></br>
        <article className = "specific-event">
            <div>
             <img src={require("./resources/css/img/scott-warman-rrYF1RfotSM-unsplash.jpg")}></img>
            </div>
            <div className = "event-info">
                ACMP ARIZONA NETWORKING HAPPY HOUR<br></br>
                May 6 2020 <br></br>
                Slalom Consulting 7150 E. Camelback Rd<br></br>
                </div>
            <div className = "event-cost">
                <p>$25</p>
                </div> 
            <div className ="reg-now-width">
                <a className="reg-button" href="#">Register Now!</a>
            </div>
        </article>
        </section>
    </React.Fragment>
  )}
  export default AcmpIndex;