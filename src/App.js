import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuoteDisplay from './Components/QuoteDisplay';
import UserInputForm from './Components/UserInputForm';
import LifeCalendar from './Components/ LifeCalendar';
import About from './Components/About';
import Navbar from './Components/ Navbar';
import SubmitVerification from './Components/SubmitVerification';

function App(){
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    lifeLengthGuess: ""
  });

  return (
    <div className="app">
      <Router>
        <Navbar />
        <SubmitVerification userInput={userInput} />
        <Routes>
          <Route path="/" element={<QuoteDisplay />} />
          <Route path="/user-info" element={<UserInputForm userInput={userInput} setUserInput={setUserInput} />} />
          <Route path="/life-calendar" element={<LifeCalendar userInput={userInput} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

