import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import QuoteDisplay from './Components/QuoteDisplay';
import UserInputForm from './Components/UserInputForm';
import LifeCalendar from './Components/LifeCalendar';
import About from './Components/About';

const App = () => {
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
    lifeLengthGuess: ''
  });

  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<QuoteDisplay />} />
          <Route
            path="/userInfo"
            element={<UserInputForm userInput={userInput} setUserInput={setUserInput} />}
          />
          <Route path="/life-calendar" element={<LifeCalendar userInput={userInput} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;