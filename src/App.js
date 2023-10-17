import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuoteDisplay from './components/QuoteDisplay';
import UserInputForm from './components/UserInputForm';
import LifeCalendar from './components/LifeCalendar';
import About from './Components/About'
import Navbar from './components/Navbar';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <QuoteDisplay/>
      <UserInputForm/>
      <LifeCalendar/>
      <About/>
      <Router>
        <Route path="/" exact Component={QuoteDisplay}/>
        <Route path='/user-info' Component={UserInputForm}/>
        <Route path='/life-calendar' Component={LifeCalendar}/>
        <Route path='/about' Component={About}/>
      </Router>
    </div>
  );
};

export default App;