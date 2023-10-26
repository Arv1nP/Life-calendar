import { useState } from "react"


export default function About({userInput}){
  const { firstName, lastName} = userInput;

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [save, setSave]= useState(false)


  function handleRating(e){
    const value = e.target.value
    setRating(()=>value)
  }
  function handleComment(e){
    const value = e.target.value
    setComment(()=>value)
  }

  const postData = {
    rating: rating,
    firstName: firstName,
    lastName: lastName,
    comment: comment,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    setSave(()=>!save)
  };

    return(
      <div className="conclusion">
        <p>
        In this journey, the Life Calendar project has kindled our passion for understanding the relentless passage of time. It's a gentle reminder of the value of every fleeting moment and the importance of living life to the fullest. As we navigate this unending timeline, may it inspire us to embrace the present, chase our dreams, and cherish every week. The Life Calendar is a visual testament to the beauty of existence and an invitation to make each moment count.
        </p>
        <section className="ratingSection">
          <h3>Let us me know what you think about this concept.</h3>
          <form onSubmit={handleSubmit}>
            <label>Rating:
              <select value={rating} onChange={handleRating}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </label>
            <textarea value={comment} rows={4} onChange={handleComment} type="text"></textarea>
            <button type="submit" className="submit-button">{!save?"Submit Rating":"Submitted"}</button>
          </form>
        </section>
        <footer>
          <p id="myFooter">Copyright © 2023 Arvin Pourabdollah | All rights reserved</p>
        </footer>
      </div>
    )
  }