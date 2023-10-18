import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuoteDisplay from './Components/QuoteDisplay';
import UserInputForm from './Components/UserInputForm';
import LifeCalendar from './Components/ LifeCalendar';
import About from './Components/About'
import Navbar from './Components/ Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <QuoteDisplay/>
      <UserInputForm/>
      <LifeCalendar/>
      <About/>
      <Router>
        <Routes>
          <Route path="/" exact component={QuoteDisplay} />
          <Route path="/userInfo" component={UserInputForm} />
          <Route path="/life-calendar" component={LifeCalendar} />
          <Route path="/about" component={About} />
          </Routes>
    </Router>
    </div>
  );
};

export default App;