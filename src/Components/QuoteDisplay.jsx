import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"


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
    <div className="quoteDisplay">
      {quotes
        .filter(quote => quote.id === randomIndex)
        .map(quote => (
          <div key={quote.id}>
            <p className="quote">"{quote.quote}"</p>
            <p className="quoteAuthor">- {quote.author}</p>
          </div>
        ))
      }
      <Link className="link" to="/user-Info">Next ⇒</Link>
    </div>
  );
}