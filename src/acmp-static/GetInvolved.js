    import React from 'react'
import Footer from '../shared/Footer/Footer';
import MainNav from './MainNav';
    
    const GetInvolved = ()=>{

        const goToVolunteer = ()=>{
            document.getElementById('volunteer-main').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        const goToMember = ()=>{
            document.getElementById('member-main').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        const goToSponsor = ()=>{
            document.getElementById('sponsor-main').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return (
        <React.Fragment>
            <MainNav/>
        <section>
            <p className = "mtt-h1 js--sectionabout"><span className = "h1-break-color">Your Support</span><br></br>is Important To Our Work</p>
            </section>
        <section className = "getinvolved-options">

        <article className="specific-about">

            <img className ="get-involved-photo" src = {require("./vendors/css/img/perry-grone-lbLgFFlADrY-unsplash (1).jpg")} alt="Volunteer Photo"></img>
                
                
            <h3 className = "get-involved-h3">Volunteer</h3>
                
                
            <p >
                Show your support!  This is one of the simplest ways to help out ACMP Arizona.
            </p>
                
            
                <a className="involved-button js-go-to-volunteer" onClick={goToVolunteer}>Learn More</a>

        </article>
        <article className="specific-about">
            
            <img className ="get-involved-photo" src = {require("./vendors/css/img/smartworks-coworking-cW4lLTavU80-unsplash.jpg")} alt="Member Photo"></img>
                
            
            <h3 className = "get-involved-h3">Become a Member</h3>
                
                
            <p >
                Partner with us and become connected with fellow change management professionals.
            </p>
                    
            
                <a className="involved-button js-go-to-member" onClick={goToMember}>Learn More</a>
            
                

        </article>
        <article className="specific-about ">
            
            <img className ="get-involved-photo" src = {require("./vendors/css/img/lina-trochez-ktPKyUs3Qjs-unsplash.jpg")} alt="Sponsor Photo"></img>
               
            
            <h3 className = "get-involved-h3">Become a Sponsor</h3>
                
            
             <p >
                
                It is a vehicle to share your organization’s value and expertise in the change community.
            </p>
               
            
                <a className="involved-button js-go-to-sponsor" onClick={goToSponsor}>Learn More</a>
            
        </article>
        
            </section>
        
        
        <section id = "volunteer-main">
        <p className ="volunteer-header js--sectionabout js-scroll-volunteer"> Volunteer </p>
            <p>This is one of the simplest ways to help out our cause.  We believe the best way for our initiatives to be successful is for the community to actively get involved. This is an easy and efficient way of contributing to the great work we do at ACMP Arizona Chapter. &nbsp; <a href="contact.html" className = "hyperlink" >Click here to get in touch</a> to volunteer your time today.
            </p>
        </section>
        
        <section id ="member-main">
        <p className ="member-header js-scroll-member">Become a Member</p>
            <p> Formal membership is required through ACMP Global before affiliating with any of its local chapters. To join the Association of Change Management Professionals, please visit  https://www.acmpglobal.org/page/join_acmp.</p>
            <p>Then, since you reside in Arizona, we invite you to affiliate with our chapter and be a part of the change movement here in the Grand Canyon state. By affiliating with us, you will receive news, updates, and event information, along with access to an energetic change network.</p>
            <p>After joining ACMP Global, affiliate with our chapter by navigating to "Groups" under "My ACMP Profile" box. Then, in the Primary Group Management section, select “Chapters: Arizona Chapter” and click UPDATE.
            </p>
        
        </section>
        
        <section id ="sponsor-main">
        <p className ="sponsor-header js-scroll-sponsor">Become a Sponsor</p>
            <h4>Make A True Change</h4>
            <br></br>
            <p> Sponsor relationships are a key enabler of local ACMP activities. We value our sponsor relationships, because they enable us to advance the discipline of change management throughout Arizona and across the ACMP global network. Sponsorship assists in the funding of educational offerings, networking and professional development.</p>
            <br></br>
            <h4>Sponsor Benefits</h4>
            <br></br>
            <div>Sponsorship provides you the opportunity to network with local professionals who may benefit from your service offerings. It is a vehicle to share your organization’s value and expertise in the local change community. Your gift will result in the following:
            <ul>
                <li>Raised Communication Platform -  Whether in our virtual environments or at face-to-face meetings, sponsors of the chapter gain a platform to make their organizations visible to audiences consisting of various industries, practices, and disciplines. </li>
                <li>Heightened Brand Visibility – Inclusion in ACMP Arizona’s marketing and communication collateral provides sponsors a heightened level of visibility to a variety of professionals.</li>
                <li>Stronger Networking Structure - Sponsors of the chapter are invited to all professional development, networking, and collaboration events free of charge.</li>
            </ul>
            </div>
            <br></br>
            <h4>All Sponsors Receive:</h4>
            <br></br>
            <div>
                <ul>
                    <li>Logo placement on the ACMP Arizona Chapter website and select promotional communications</li>
                    <li>Slide placement at all ACMP Arizona events and meetings</li>
                    <li>Slide placement and/or signage at the meeting you host (if applicable)</li>
                </ul>
            </div>
            <br></br>
            <h4>Sponsor Levels</h4>
            <br></br>
            <p>ACMP Arizona is currently revamping our sponsor levels to ensure each sponsor organization finds great value in supporting our mission.  Once complete, they will be posted here.  In the interim, please feel free to email acmparizona@gmail.com for more information.
            </p><br></br>
            <p><i>
                ACMP Arizona views sponsorship as the financial or in-kind support of an organization and/or activity, used primarily to reach defined goals. Sponsoring ACMP Arizona is not to be confused with advertising. Advertising is considered a quantitative medium, whereas sponsorship is considered a qualitative medium. It promotes a company in association with the sponsor based on these shared objectives. The ACMP Arizona chapter is a recognized 501(c)3 organization and donations are tax deductible. Equivalent in-kind contributions (meeting space, refreshments, professional services, etc.) will also be recognized as sponsorship support. <a href="contact.html" className ="hyperlink">Contact us</a> to learn more. 
                </i></p>
        
        </section>
        <Footer/>
        </React.Fragment>
        )};

        export default GetInvolved;