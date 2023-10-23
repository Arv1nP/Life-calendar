export default function LifeCalendar(userInput){
  const { firstName, lastName, day, month, year, lifeLengthGuess } = userInput;
  const totalWeeks = [lifeLengthGuess * 56];
  

  return (
    <div className="lifeGrid">
      <div className="row">
        {totalWeeks.map((week) => (
          <div key={week} className="week">
            {week}
          </div>
        ))}
      </div>
    </div>
  );
};