import React from 'react';
import { Link } from 'react-router-dom';

export default function LifeCalendar({ userInput }) {
  const {day, month, year, lifeLengthGuess } = userInput;
  
  const years = (2021-year)*52
  const months = month*4
  const days = Math.ceil(day/7)
  const weeksLived = years+months+days

  const yearsInput = parseInt(lifeLengthGuess)*52;
  const yearsGuessed = new Array(yearsInput).fill("");

  const headers = [];
  for (let i = 1; i <= 52; i++) {
    headers.push("");
  }
  

  return (
  <section>
    <table className="life-calendar">
      <h2 className='weeksHeading'>⬅ 52 Weeks ➡</h2>
      <h2 className='yearsHeading'>⬅ {lifeLengthGuess} Years ➡</h2>
      <tbody>
        <tr>
          {headers.map((header) => 
            <th key={header} className="Headers" scope='col'>
              {header}
            </th>
          )}
        </tr>
        {yearsGuessed.map((week, index) => (
          <tr key={index}>
              <td key={index} className= {index<=weeksLived? "weeksLived": "week"}>
                {week}
              </td>
          </tr>
        ))}
      </tbody>
    </table>
      <Link className="link" to="/about">Next ⇒</Link>
  </section>
  );
}