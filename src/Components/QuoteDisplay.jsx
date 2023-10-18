import React, { useState, useEffect } from "react";

export default function QuoteDisplay() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const res = await fetch('http://localhost:3001/api/lifeQuotes');
        const data = await res.json();
        setQuotes(data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    }

    fetchQuotes();
  }, []); 

  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <p>{quote.quote}</p>
          <p>- {quote.author}</p>
        </div>
      ))}
    </div>
  );
}