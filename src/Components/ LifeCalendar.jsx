import React from 'react';

export default function LifeCalendar({ userInput }) {
  const { firstName, lastName, day, month, year, lifeLengthGuess } = userInput;
  const yearsInput = parseInt(lifeLengthGuess);

  const headers = [];
  for (let i = 1; i <= 52; i++) {
    headers.push("");
  }

  const weeks = new Array(yearsInput).fill("");

  return (
    <table className="life-calendar">
      <h2 className='weeksHeading'>⬅ 52 Weeks ➡</h2>
      <h2 className='yearsHeading'>⬅ {lifeLengthGuess} Years ➡</h2>
      <tbody>
        <tr>
          {headers.map((header) => 
            <th key={header} className="Headers">
              {header}
            </th>
          )}
        </tr>
        {weeks.map((week, index) => (
          <tr key={index}>
            {headers.map((header, index) => (
              <td key={index} className="week">
                {week}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}