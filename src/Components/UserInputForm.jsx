import { useState } from "react"

export default function UserInputForm(){
    const [userInput, setUserInput]= useState({
        firstName: "",
        lastName: "",
        DOB: "",
        lifeLengthGuess: ""
    })
    return(
        <section className="user-input-form">
          <h2>Your info</h2>
          <form>
            <label>Your first name
                <input type="text" name="firstName" value={userInput.firstName} onChange={}/>
            </label>
            <label>Your last name
                <input type="text" name="lastName" value={userInput.lastName} onChange={}/>
            </label>
            <label>Your date of birth
                <input type="text" name="DOB" value={userInput.DOB} onChange={}/>
            </label>
            <label>How long you think you would live
                <input type="text" name="flifeLengthGuess" value={userInput.lifeLengthGuess} onChange={}/>
            </label>
          </form>
        </section>
    )
}