import React from 'react'
import './about.css'
const About = () => {
  return (
    <div>
      <div id="resume">
        <div className="fill-blue">
            CAREER
        </div>

        <div className="left-column">
            <div className="substrate">
                <h2>My Profile</h2>
                <img className="profilepic" src="https://lh3.googleusercontent.com/llUacYfeIZT3kEz_FCOe-3T3KObXzhrBrUzzAsrQJjE=w702-h527-no" alt="abhaymakadia" />
                <ul className="main-info-list">
                    <li>Name<span>Abhay Makadia</span><div className="floatlimit">
                    </div>
                    </li>
                    <li>Born<span>06 January 1990</span><div className="floatlimit">
                    </div>
                    </li>
                    <li>Address<span>India - Rajkot - Upleta</span><div className="floatlimit">
                    </div>
                    </li>
                    <li>Email<span>abhay.makadia@gmail.com</span><div className="floatlimit">
                    </div>
                    </li>
                </ul>
                <div className="paper-clip">
                </div>
            </div>
            <div className="substrate">
                <h2>Career</h2>
                <div className="left-blue">
                    <div className="time-period-left-blue">
                    </div>
                    <h3>
                        <span className="time-period-right-blue">2013 - Now</span></h3>
                    <h4>Work</h4>
                    <p>
                       I am turning at one Software Company in 2013 as Asp.net Developer.
                    </p>
                    <div className="time-period-left-blue">
                    </div>
                    <h3>
                        <span className="time-period-right-blue">2010 - 2013</span></h3>
                    <h4>M.C.A.</h4>
                    <p>
                        Learn  CSS, HTML, Javascript
                    </p>
                    <div className="time-period-left-blue">
                    </div>
                    <h3>
                        <span className="time-period-right-blue">2007 - 2010</span></h3>
                    <h4>B.C.A</h4>
                    <p>
                        I have Completed My Bachelors in Computer Application from Rajkot.
                    </p>
                </div>
            </div>
        </div>
        <div className="right-column">

            <div className="substrate gradient-blue font-blue">
                <h2>About Me</h2>
                <h3>Hay, I'm Abhay Makadia . . .</h3>
                <div className="p">
                    A 24 year old Indian blogger, Developer, illustrator and a lover of Designs and structure of coding. I took up a Masters in Computer Application and soon after earning my degree, I worked professionally as a .net developer Developer.



I m Beginner. we all are beginners at one point, so Learn as much as you can. I blogged about anything which can be coded. I write what i learn. I love researching, discovering new things, playing around with codes and Designs, just to see what happens. So I learned lots of things about design. by Profession i m not designer but I want to be.
                </div>
            </div>

            <div className="substrate">
                <h2>Skill I</h2>
                <h3>Web Development</h3>
                <ul className="skills">
                    <li className="skill"><span>Asp.net C#</span>
                        <div className="b">
                            <span className="eighty" style={{width: "90%"}}></span>
                        </div>
                    </li>
                    <li className="skill"><span>HTML</span>
                        <div className="b">
                            <span className="eighty" style={{width: "70%"}}></span>
                        </div>
                    </li>
                    <li className="skill"><span>CSS</span>
                        <div className="b">
                            <span className="eighty" style={{width: "60%"}}></span>
                        </div>
                    </li>
                    <li className="skill"><span>JavaScript</span>
                        <div className="b">
                            <span className="eighty" style={{width: "50%"}}></span>
                        </div>
                    </li>
                    <li className="skill"><span>Jquery</span>
                        <div className="b">
                            <span className="eighty" style={{width: "30%"}}></span>
                        </div>
                    </li>
                </ul>
                <div className="paper-clip">
                </div>
            </div>



        </div>

        <div className="floatlimit">
        </div>

    </div>

    </div>
  )
}

export default About
