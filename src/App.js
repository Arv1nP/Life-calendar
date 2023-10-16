import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuoteDisplay from './components/QuoteDisplay';
import UserInputForm from './components/UserInputForm';
import LifeCalendar from './components/LifeCalendar';
import Navbar from './components/Navbar';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Route path="/" exact>
          <QuoteDisplay />
          <UserInputForm />
        </Route>

        <Route path="/life-calendar">
          <LifeCalendar />
        </Route>
      </div>
    </Router>
  );
};

export default App;