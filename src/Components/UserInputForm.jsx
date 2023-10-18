import React, { useState } from "react";

export default function UserInputForm() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    lifeLengthGuess: ""
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }



  const { firstName, lastName, day, month, year, lifeLengthGuess } = userInput;

  return (
    <section className="user-input-form">
      <h2>Lets Personalise</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your first name
          <input
            type="text" name="firstName" value={firstName} onChange={handleUserInput}
          />
        </label>
        <label>
          Your last name
          <input
            type="text" name="lastName" value={lastName} onChange={handleUserInput}
          />
        </label>
        <label>
          Your date of birth
          <input
            type="text" placeholder="DD" name="day" value={day} onChange={handleUserInput}
          />
          <input
            type="text" placeholder="MM" name="month" value={month} onChange={handleUserInput}
          />
          <input
            type="text" placeholder="YY" name="year" value={year} onChange={handleUserInput}
          />
        </label>
        <label>
          How long you think you would live
          <input
            type="text" placeholder="Years" name="lifeLengthGuess" value={lifeLengthGuess} onChange={handleUserInput}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </section>
  );
}