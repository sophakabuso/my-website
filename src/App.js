import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SobVerticals from './components/SobVerticals';
import MainContainer from './components/MainContainer';
import VideoBackground from './components/VideoBackground';
import ImageContainer from './components/ImageContainer';
import BioContainer from './components/BioContainer';
import SkillList from './components/SkillList';
import PersonalInfo from './components/PersonalInfo';
import EducationInfo from './components/EducationInfo';
import WorkInfo from './components/WorkInfo';
import FormContainer from './components/FormContainer';
import SiteNav from './components/SiteNav';
import Projects from './components/Projects';
import Header from './components/Header';
import Qonda from './components/Qonda';


function App() {
  return (
    
    <Router>
        <Route exact path="/" component={MainContainer} />
        <Route path="/siteNav" component={SiteNav}/>
        <Route path ="/videoBackground" component={VideoBackground} />
        <Route path="/image" component={ImageContainer} />
        <Route path="/bio" component={BioContainer} />
        <Route path="/skills" component={SkillList} />
        <Route path="/personal-info" component={PersonalInfo} />
        <Route path="/education" component={EducationInfo} />
        <Route path="/work" component={WorkInfo} />
        <Route path="/form" component={FormContainer} />
        <Route path="/sob-verticals" component={SobVerticals}/> 
        <Route path="/projects" component={Projects}/>
        <Route path="/header" component = {Header}/>
        <Route path="/Qonda" component = {Qonda}/>
    </Router>
  
  );
}

export default App;
