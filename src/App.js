import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { NavHashLink  as Link } from 'react-router-hash-link';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab);

function App() {

  const [ toggle , setToggle ] = useState(false);

  return (
    <Router>
      <header id="mySidenav" className={toggle ? 'sidenav pushed' : 'sidenav'}>
        <div id="mobile-nav" className={toggle ? 'open' : ''} onClick={() => setToggle(!toggle) }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="avatar">
          <img src="/me.jpg" alt="avatar"></img>
        </div>
        <div className="name">
          <h1>Hong Wei, Siew </h1>
          <span>Full Stack Engineer</span>
        </div>
        <div className="contact">
          <h3>Contact Me</h3>
          <ul>
            <li><FontAwesomeIcon icon={faEnvelopeOpen} fixedWidth /> hw.siew.work@gmail.com</li>
            <li><FontAwesomeIcon icon={faMobileAlt} fixedWidth /> +60 19-679 2120</li>
          </ul>
        </div>
        
        <div className="social-list">
          <a href="https://www.linkedin.com/in/hw-siew/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} fixedWidth size="2x" />
          </a>
          <a href="https://github.com/hwsiew" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} fixedWidth size="2x" />
          </a>
          <a href="https://stackoverflow.com/users/5150558/hw-siew" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'stack-overflow']} fixedWidth size="2x" />
          </a>
        </div>

        <ul id="nav">
          <li>
            <Link smooth to="#about" activeClassName="active">About Me</Link>
          </li>
          <li>
            <Link smooth to="#experience" activeClassName="active">Experience</Link>
          </li>
          <li>
            <Link smooth to="#education" activeClassName="active">Education</Link>
          </li>
          <li>
            <Link smooth to="#publications" activeClassName="active">Publications</Link>
          </li>
          <li>
            <Link smooth to="#certificates" activeClassName="active">Certificates</Link>
          </li>
        </ul>
      </header>

      <div id="main" className={toggle ? 'main-pushed' : ''}>

        {/* About */}
        <section id="about">
          <div className="section-header">
            <a 
              href="/Hong Wei, Siew-20210512.pdf"
              target="_blank"
              className="resume-download">Download Resume</a>
            <h2>About me</h2>
          </div>
          <div>
            <p>
              I am an experienced Full Stack Web Engineer with holistic knowledge of software development and design. Since 2015, I have participated in various small and mid-scale web developments.  I am familiar with a number of programming languages, frameworks, and tools such as MERN stack, VueJs, Typescript, jQuery, Bootstrap, Docker, Git, Webpack, WordPress, Python, Django, Nginx, and Linux server configuration using GCP and AWS.  
            </p>
            <p>
              I have also experience in algorithm design with proven track records and publications.  I am a self-motivated and self-taught professional who likes to solve problems. 
            </p>
          </div>
          <div className="skills-container">
            <div>
              <p>JavaScript <span>90%</span></p>
              <div className="container">
                <div className="skills js"></div>
              </div>
            </div>
            <div>
              <p>ReactJs <span>85%</span></p>
              <div className="container">
                <div className="skills reactjs"></div>
              </div>
            </div>
            <div>
              <p>ExpressJs <span>75%</span></p>
              <div className="container">
                <div className="skills expressjs"></div>
              </div>
            </div>
            <div>
              <p>NodeJs <span>75%</span></p>
              <div className="container">
                <div className="skills nodejs"></div>
              </div>
            </div>
            <div>
              <p>Docker <span>70%</span></p>
              <div className="container">
                <div className="skills docker"></div>
              </div>
            </div>
            <div>
              <p>Linux <span>60%</span></p>
              <div className="container">
                <div className="skills linux"></div>
              </div>
            </div>
          </div>
          <div>
            <h4>Others</h4>
            <p> CSS, Redux, Webpack, Git, MongoDB, Python, Gulp, Typescript, Django, WordPress, GCP, AWS and more to learn...</p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <div className="section-header">
            <h2>Experience</h2>
          </div>
          <div>
            <h3>Research Engineer</h3>
            <span>Multimedia University | Jan, 2019 - PRESENT</span>
            <ul>
              <li>Collaborated with the largest ISP in Malaysia</li>
              <li>Design and develop algorithms for network migration</li>
              <li>Integrate the proposed algorithms into next-gen network operation and monitoring systems</li>
              <li>1 patent had been filed</li>
            </ul>
          </div>
          <div>
            <h3>Full Stack Web Engineer</h3>
            <span>Treazpass Advertising Sdn Bhd | Jan, 2017 - Dec, 2018</span>
            <ul>
              <li>End-to-end web application development as per client requirement</li>
              <li>Completed and successfully launched a number of mid-scale projects using various technology stacks.</li>
            </ul>
          </div>
          <div>
            <h3>Full Stack Web Engineer</h3>
            <span>Thesigner | Sept, 2015 - Dec, 2016</span>
            <ul>
              <li>A startup to develop an online marketplace for fashion designer</li>
              <li>Responsible for all aspects of product development from design, development to deployment over public cloud.</li>
            </ul>
          </div>
        </section>

        {/* Eduction */}
        <section id="education">
          <div className="section-header">
            <h2>Education</h2>
          </div>
          <div>
            <h3>Master of Science</h3>
            <span>Multimedia University | March, 2013 - July, 2015</span>
            <ul>
              <li>Major in Information Technology</li>
              <li>The thesis involved studying security vulnerability in All-Optical Network and proposed various algorithms to detect the location(s) of attack.</li>
            </ul>
          </div>
          <div>
            <h3>Bachelor of Computer Science</h3>
            <span>Multimedia University | Jun, 2009 - Nov, 2012</span>
            <ul>
              <li>First Class Honors with CGPA: 3.91/4</li>
            </ul>
          </div>
        </section>       

        {/* Publications */}
        <section id="publications">
          <div className="section-header">
            <h2>Publications</h2>
          </div>
          <div>
            <h3>
              <a href="https://link.springer.com/article/10.1007/s10472-021-09750-6" target="_blank" rel="noreferrer">
                Cost-Location Aware Heuristic Algorithm for Hybrid SDN Deployment 
              </a>
            </h3>
            <span>Annals of Mathematics and Artificial Intelligence | 06 May 2021 </span>
          </div>
          <div>
            <h3>
              <a href="https://link.springer.com/chapter/10.1007/978-3-030-20518-8_52" target="_blank" rel="noreferrer">
                Machine Learning as a Means to Adapt Requirement Changes for SDN Deployment Process in SDN Migration
              </a>
            </h3>
            <span>International Work-Conference on Artificial Neural Networks | 16 May 2019 </span>
          </div>
          <div>
            <h3>
              <a href="https://www.semanticscholar.org/paper/Summation-and-Division-of-Status-algorithm-for-Siew-Tan/0cdeeef8b0d8afac6584ccdf3b2f6f38f8428ff6" target="_blank" rel="noreferrer">
                Summation and Division of Status algorithm for multiple crosstalk attacks source identification
              </a>
            </h3>
            <span> International Journal for Light and Electron Optics | 2017 </span>
          </div>
          <div>
            <h3>
              <a href="https://link.springer.com/chapter/10.1007/978-3-319-49151-6_10" target="_blank" rel="noreferrer">
                Masking Algorithm for Multiple Crosstalk Attack Source Identification Under Greedy Sparse Monitoring
              </a>
            </h3>
            <span> International Conference on Information Security Practice and Experience | 05 Nov 2016 </span>
          </div>
          <div>
            <h3>
              <a href="https://www.semanticscholar.org/paper/Genetic-based-Multiple-Crosstalk-Attacks-in-All-Siew-Tan/99e0307487fd043373b4a8ad087267d03e682497" target="_blank" rel="noreferrer">
                Genetic-based Multiple Crosstalk Attacks Localization in All Optical Networks
              </a>
            </h3>
            <span> International Conference on Information Technology and Application | July 2014 </span>
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates">
          <div className="section-header">
            <h2>Certificates</h2>
          </div>
          <div>
            <h3>Google IT Automation with Python Specialization</h3>
            <span>By Coursera | Credential ID T4QKF23F4Y8D</span>
          </div>
          <div>
            <h3>Fundamentals of Reinforcement Learning</h3>
            <span>By Coursera | Credential ID TZZD5DFMZVTP</span>
          </div>
          <div>
            <h3>Neural Networks and Deep Learning</h3>
            <span>By Coursera | Credential ID ZP8DXASW9NJ4</span>
          </div>
          <div>
            <h3>JavaScript Algorithms and Data Structures</h3>
            <span>By freeCodeCamp | Issued Nov 2020</span>
          </div>
        </section>
    
      </div>
    </Router>
  );
}

export default App;
