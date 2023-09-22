import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import VideoContainer from './components/VideoContainer';
import ImageContainer from './components/ImageContainer';
import BioContainer from './components/BioContainer';
import SkillList from './components/SkillList';
import PersonalInfo from './components/PersonalInfo';
import EducationInfo from './components/EducationInfo';
import WorkInfo from './components/WorkInfo';
import FormContainer from './components/FormContainer';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/video" component={VideoContainer} />
        <Route path="/image" component={ImageContainer} />
        <Route path="/bio" component={BioContainer} />
        <Route path="/skills" component={SkillList} />
        <Route path="/personal-info" component={PersonalInfo} />
        <Route path="/education" component={EducationInfo} />
        <Route path="/work" component={WorkInfo} />
        <Route path="/form" component={FormContainer} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
