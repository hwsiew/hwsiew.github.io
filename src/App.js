import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { NavHashLink  as Link } from 'react-router-hash-link';
import List from './components/List';
import styled from 'styled-components';
import classNames from 'classnames';

const Section = styled.section.attrs(props =>({
  className: 'pb-10 border-b-2 border-gray-300 text-justify'
}))`
  h2 {
    margin: 50px auto;
    color: #f74470;
    text-transform: uppercase;
    font-size: 1.75rem;
  }
`;

function App() {

  const [ toggle , setToggle ] = useState(false);
  const [ theme, setTheme] = useState(() => {
    let _theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(_theme);
    return _theme;
  });

  const handleToggleTheme = function(){
    document.documentElement.classList.remove(theme);
    let _theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', _theme);
    document.documentElement.classList.add(_theme);
    setTheme(_theme);
  }

  const handleToggleMenu = function(){
    setToggle(!toggle) 
  }

  // to select active menu tab on page load if hash is not available
  let hash = window.location.hash;

  return (
    <Router>
      <div className="w-full bg-gray-300 dark:bg-black flex">
        <div className="wrapper">
          <header id="mySidenav" className={classNames('sidenav shadow-lg overflow-y-auto', {'pushed': toggle})}>
            <div className="avatar relative">
              <img src="/me.jpg" alt="avatar"></img>
              <button className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 flex">
                <ion-icon name={theme === 'light' ? 'sunny-outline' : 'moon'} onClick={handleToggleTheme} style={{fontSize:32}}></ion-icon>
              </button>
            </div>
            <div className="text-gray-700 dark:text-white pt-5">
              <h1 className="text-3xl">Hong Wei, Siew </h1>
              <span className="text-lg">Full Stack Engineer</span>
            </div>
            <div className="text-gray-700 dark:text-white py-5 text-lg">
              <h3 className="text-base">Contact Me</h3>
              <ul>
                <li style={{display:'flex',alignItems:'center',fontSize:16}}> 
                  <ion-icon name="mail" style={{marginRight:10}}></ion-icon>
                  hw.siew.work@gmail.com
                </li>
                <li style={{display:'flex',alignItems:'center',fontSize:16}}> 
                  <ion-icon name="call" style={{marginRight:10}}></ion-icon>
                  +60 19-679 2120
                </li>
              </ul>
            </div>
            
            <div className="flex text-gray-700 dark:text-white social-list py-3">
              <a href="https://www.linkedin.com/in/hw-siew/" target="_blank" rel="noreferrer">
                <ion-icon name="logo-linkedin" size="large"></ion-icon>
              </a>
              <a href="https://github.com/hwsiew" target="_blank" rel="noreferrer">
                <ion-icon name="logo-github" size="large" ></ion-icon>
              </a>
              <a href="https://stackoverflow.com/users/5150558/hw-siew" target="_blank" rel="noreferrer">
                <ion-icon name="logo-stackoverflow" size='large'></ion-icon>
              </a>
              <a href="https://www.npmjs.com/~hwsiew" target="_blank" rel="noreferrer">
                <ion-icon name="logo-npm" size='large'></ion-icon>
              </a>
            </div>

            <ul id="nav" className="text-gray-700 dark:text-white">
              <li>
                <Link className={!hash ? 'active' : ''} smooth to="#about" activeClassName="active" onClick={handleToggleMenu}>About Me</Link>
              </li>
              <li>
                <Link smooth to="#experience" activeClassName="active" onClick={handleToggleMenu}>Experience</Link>
              </li>
              <li>
                <Link smooth to="#education" activeClassName="active" onClick={handleToggleMenu}>Education</Link>
              </li>
              <li>
                <Link smooth to="#publications" activeClassName="active" onClick={handleToggleMenu}>Publications</Link>
              </li>
              <li>
                <Link smooth to="#certificates" activeClassName="active" onClick={handleToggleMenu}>Certificates</Link>
              </li>
              <li>
                <Link smooth to="#npm-packages" activeClassName="active" onClick={handleToggleMenu}>NPM Pacakages</Link>
              </li>
              <li>
                <Link smooth to="#repositories" activeClassName="active" onClick={handleToggleMenu}>Repositories</Link>
              </li>
            </ul>
          </header>
        </div>

        <div id="main" className={toggle ? 'main-pushed pt-4 pb-64 bg-white md:px-12 px-11' : 'md:px-12 px-11 pt-4 pb-64 bg-white'}>
          
          {/* MOBILE TOGGLE */}
          <div id="mobile-nav" className={classNames('cursor-pointer',{open: toggle})} onClick={() => setToggle(!toggle) }>
            <ion-icon name="menu" style={{fontSize:40,color:'white'}}></ion-icon>
          </div>

          {/* About */}
          <Section  id="about">
            <div className="section-header">
              <a 
                href="/Hong Wei, Siew-20210512.pdf"
                target="_blank"
                className="resume-download bg-gray-700">Download Resume</a>
              <h2 className={'text-2xl'}>About me</h2>
            </div>
            <div>
              <p className={'mt-3 mb-3'}>
                I am an experienced Full Stack Web Engineer with holistic knowledge of software development and design. Since 2015, I have participated in various small and mid-scale web developments.  I am familiar with a number of programming languages, frameworks, and tools such as MERN stack, VueJs, Typescript, jQuery, Bootstrap, Docker, Git, Webpack, WordPress, Python, Django, Nginx, and Linux server configuration using GCP and AWS.  
              </p>
              <p className={'mt-3 mb-3'}>
                I have also experience in algorithm design with proven track records and publications.  I am a self-motivated and self-taught professional who likes to solve problems. 
              </p>
            </div>
            <div className="skills-container">
              <div className={'mt-3 mb-3'}>
                <p>JavaScript <span>90%</span></p>
                <div className="container">
                  <div className="skills js"></div>
                </div>
              </div>
              <div className={'mt-3 mb-3'}>
                <p>ReactJs <span>85%</span></p>
                <div className="container">
                  <div className="skills reactjs"></div>
                </div>
              </div>
              <div className={'mt-3 mb-3'}>
                <p>ExpressJs <span>75%</span></p>
                <div className="container">
                  <div className="skills expressjs"></div>
                </div>
              </div>
              <div className={'mt-3 mb-3'}>
                <p>NodeJs <span>75%</span></p>
                <div className="container">
                  <div className="skills nodejs"></div>
                </div>
              </div>
              <div className={'mt-3 mb-3'}>
                <p>Docker <span>70%</span></p>
                <div className="container">
                  <div className="skills docker"></div>
                </div>
              </div>
              <div className={'mt-3 mb-3'}>
                <p>Linux <span>60%</span></p>
                <div className="container">
                  <div className="skills linux"></div>
                </div>
              </div>
            </div>
            <div className={'mt-3 mb-3'}>
              <h4>Others</h4>
              <p> Styled-components, Tailwind CSS, CSS, Redux, Webpack, Git, MongoDB, Python, Gulp, Typescript, Django, WordPress, GCP, AWS and more to learn...</p>
            </div>
          </Section>

          {/* Experience */}
          <Section id="experience">
            <h2>Experience</h2>
            <List title="Research Engineer" subtitle="Multimedia University | Jan, 2019 - PRESENT">
              <li>Collaborated with the largest ISP in Malaysia</li>
              <li>Design and develop algorithms for network migration</li>
              <li>Integrate the proposed algorithms into next-gen network operation and monitoring systems</li>
              <li>1 patent had been filed</li>
            </List>
            <List title='Full Stack Web Engineer' subtitle='Treazpass Advertising Sdn Bhd | Jan, 2017 - Dec, 2018'>
              <li>End-to-end web application development as per client requirement</li>
              <li>Completed and successfully launched a number of mid-scale projects using various technology stacks.</li>
            </List>
            <List title="Full Stack Web Engineer" subtitle="Thesigner | Sept, 2015 - Dec, 2016">
              <li>A startup to develop an online marketplace for fashion designer</li>
              <li>Responsible for all aspects of product development from design, development to deployment over public cloud.</li>
            </List>
          </Section>

          {/* Eduction */}
          <Section id="education">
            <h2>Education</h2>
            <List title="Master of Science" subtitle='Multimedia University | March, 2013 - July, 2015'>
              <li>Major in Information Technology</li>
              <li>The thesis involved studying security vulnerability in All-Optical Network and proposed various algorithms to detect the location(s) of attack.</li>
            </List>
            <List title='Bachelor of Computer Science' subtitle="Multimedia University | Jun, 2009 - Nov, 2012">
              <li>First Class Honors with CGPA: 3.91/4</li>
            </List>
          </Section>       

          {/* Publications */}
          <Section id="publications">
            <h2>Publications</h2>
            <List
              title={
                <a href="https://link.springer.com/article/10.1007/s10472-021-09750-6" target="_blank" rel="noreferrer">
                  Cost-Location Aware Heuristic Algorithm for Hybrid SDN Deployment
                </a>
              }
              subtitle='Annals of Mathematics and Artificial Intelligence | 06 May 2021'
            ></List>
            <List
              title={
                <a href="https://link.springer.com/chapter/10.1007/978-3-030-20518-8_52" target="_blank" rel="noreferrer">
                  Machine Learning as a Means to Adapt Requirement Changes for SDN Deployment Process in SDN Migration
                </a>
              }
              subtitle='International Work-Conference on Artificial Neural Networks | 16 May 2019'
            ></List>
            <List
              title={
                <a href="https://www.semanticscholar.org/paper/Summation-and-Division-of-Status-algorithm-for-Siew-Tan/0cdeeef8b0d8afac6584ccdf3b2f6f38f8428ff6" target="_blank" rel="noreferrer">
                  Summation and Division of Status algorithm for multiple crosstalk attacks source identification
                </a>
              }
              subtitle='International Journal for Light and Electron Optics | 2017'
            ></List>
            <List
              title={
                <a href="https://link.springer.com/chapter/10.1007/978-3-319-49151-6_10" target="_blank" rel="noreferrer">
                  Masking Algorithm for Multiple Crosstalk Attack Source Identification Under Greedy Sparse Monitoring
                </a>
              }
              subtitle='International Conference on Information Security Practice and Experience | 05 Nov 2016'
            ></List>
            <List
              title={
                <a href="https://www.semanticscholar.org/paper/Genetic-based-Multiple-Crosstalk-Attacks-in-All-Siew-Tan/99e0307487fd043373b4a8ad087267d03e682497" target="_blank" rel="noreferrer">
                  Genetic-based Multiple Crosstalk Attacks Localization in All Optical Networks
                </a>
              }
              subtitle='International Conference on Information Technology and Application | July 2014'
            ></List>
          </Section>

          {/* Certificates */}
          <Section id="certificates">
            <h2>Certificates</h2>
            <List
              title='Google IT Automation with Python Specialization'
              subtitle="By Coursera | Credential ID T4QKF23F4Y8D"
            ></List>
            <List
              title='Fundamentals of Reinforcement Learning'
              subtitle='By Coursera | Credential ID TZZD5DFMZVTP'
            ></List>
            <List
              title='Neural Networks and Deep Learning'
              subtitle='By Coursera | Credential ID ZP8DXASW9NJ4'
            ></List>
            <List
              title='JavaScript Algorithms and Data Structures'
              subtitle='By freeCodeCamp | Issued Nov 2020'
            ></List>
          </Section>
          
          {/* NPM Pacakages */}
          <Section id="npm-packages">
            <h2>NPM Pacakages</h2>
            <List
              title={
                <a 
                  href="https://www.npmjs.com/package/@hwsiew/dsajs"
                  rel="noreferrer"
                  target="_blank"
                >
                  @hwsiew/dsajs
                  <img className='inline-block ml-4' alt="npm (scoped)" src="https://img.shields.io/npm/v/@hwsiew/dsajs"></img>
                </a>
              }
              subtitle="The implementations of advance data structures and algorithm in Javascript"
            ></List>
            <List
              title={
                <a 
                  href="https://www.npmjs.com/package/create-html5-skeleton"
                  target="_blank"
                  rel="noreferrer"
                >
                  create-html5-skeleton
                  <img className='inline-block ml-4' alt="npm (scoped)" src="https://img.shields.io/npm/v/create-html5-skeleton"></img>
                </a>
              }
              subtitle="HTML 5 skeleton generator enforces various SEO best practices and browsers support meta tags for different purpose."
            ></List>
            <List
              title={
                <a 
                  href="https://www.npmjs.com/package/simplychain"
                  target="_blank"
                  rel="noreferrer"
                >
                  simplychain
                  <img className='inline-block ml-4' alt="npm (scoped)" src="https://img.shields.io/npm/v/simplychain"></img>
                </a>
              }
              subtitle="The proof-of-concept of blockchain implementation using Javascript."
            ></List>
          </Section>
          
          <Section id="repositories">
            <h2>Repositories</h2>
            coming soon...
          </Section>
        </div>
      </div>
    </Router>
  );
}

export default App;
