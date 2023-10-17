import { useEffect } from "react"

export default function QuoteDisplay(){

  const [quotes, setQuotes] = useEffect("")
  async function fetchQuotes(){
    const res = await fetch('http://localhost:3001/api/lifeQuotes')
    const data = await res.json()
    console.log(data)
    setQuotes(data)
  }
  
  return(
    <div></div>
  )
}