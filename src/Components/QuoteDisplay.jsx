import React, { useState, useEffect } from "react";

export default function QuoteDisplay() {
  const [quotes, setQuotes] = useState([]);
  const [randomIndex, setRandomIndex] = useState(null)


  useEffect(() => {
    async function fetchQuotes() {
      try {
        const res = await fetch('http://localhost:3001/api/lifeQuotes');
        const data = await res.json();
        setQuotes(data);
        const index = Math.floor(Math.random() * data.length);
        setRandomIndex(index)
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    }

    fetchQuotes();
  }, []); 
  

  return (
    <div className="quotedisplay">
      {quotes
        .filter(quote => quote.id === randomIndex)
        .map(quote => (
          <div key={quote.id}>
            <p>{quote.quote}</p>
            <p>- {quote.author}</p>
          </div>
        ))
      }
    </div>
  );
}