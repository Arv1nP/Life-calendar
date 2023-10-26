import { useState } from "react";
import { Link } from "react-router-dom"
import { useEffect } from "react";

export default function UserInputForm({ userInput, setUserInput }) {
  
    const [save, setSave]= useState(false)
    
    function handleUserInput(e) {
    const { name, value } = e.target;
    const newInput = { ...userInput, [name]: value };
    setUserInput(newInput);
  };

  function handleSubmit(e){
    e.preventDefault()
    const years = (2021-year)*52
    const months = month*4
    const days = Math.ceil(day/7)
    const weeksLived = years+months+days
    const yearsInput = parseInt(lifeLengthGuess)*52;
    if(firstName === "" || lastName === "" || day === "" || month === "" || year === "" || lifeLengthGuess === ""){
        alert("All sections in form must be complete.")}
    if (weeksLived>yearsInput){
      alert("Your life length guess must be greater than your current age.")
    }
    else {setSave(()=>!save);}
  };


  const { firstName, lastName, day, month, year, lifeLengthGuess } = userInput;

  return (
    <section className="user-input-form">
      <h2 className="form-title">Let's Personalize</h2>
      <form onSubmit={handleSubmit} className="input-form">
        <div className="form-group">
          <label name="firstName" className="input-label">Your first name</label>
          <input
            type="text" id="firstName" className="user-input" name="firstName" value={firstName} onChange={handleUserInput}/>
        </div>
        <div className="form-group">
          <label name="lastName" className="input-label">Your last name</label>
          <input
            type="text" id="lastName" className="user-input" name="lastName" value={lastName} onChange={handleUserInput} />
        </div>
        <div className="form-group">
          <label name="dob" className="input-label">Your date of birth</label>
          <input
            type="text" id="day" className="user-input dob-input" placeholder="DD" name="day" value={day} onChange={handleUserInput} />
          <input
            type="text" id="month" className="user-input dob-input" placeholder="MM" name="month" value={month} onChange={handleUserInput} />
          <input
            type="text" id="year" className="user-input dob-input" placeholder="YY" name="year" value={year} onChange={handleUserInput} />
        </div>
        <div className="form-group">
            <label name="lifeLengthGuess" className="input-label" placeholder="In Years">How long you think you would live</label>
          <input
            type="text" id="lifeLengthGuess" className="user-input" placeholder="Years" name="lifeLengthGuess" value={lifeLengthGuess} onChange={handleUserInput}/>
        </div>
        <button type="submit" className="submit-button">{!save?"Save":"Submitted"}</button>
      </form>
      <Link className={!save?"hidden":"link"} to="/life-calendar">Next ⇒</Link>
    </section>
  );
}