import { useState } from "react"

export default function UserInputForm(){
    const [userInput, setUserInput]= useState({
        firstName: "",
        lastName: "",
        DOB: "",
        lifeLengthGuess: ""
    });
    function handleUserInput(e){
        setUserInput({...userInput, [e.target.name]: e.target.value});
        console.log([e.target.name], e.target.value)        
    };
    function handleSubmit(e){
        e.preventDefault();
        console.log(userInput)
    };


    return(
        <section className="user-input-form">
          <h2>Your info</h2>
          <form  onSubmit={handleSubmit}>
            <label>Your first name
                <input type="text" name="firstName" value={userInput.firstName} onChange={handleUserInput}/>
            </label>
            <label>Your last name
                <input type="text" name="lastName" value={userInput.lastName} onChange={handleUserInput}/>
            </label>
            <label>Your date of birth
                <input type="text" placeholder="DD/MM/YY" name="DOB" value={userInput.DOB} onChange={handleUserInput}/>
            </label>
            <label>How long you think you would live
                <input type="text" placeholder="Years" name="lifeLengthGuess" value={userInput.lifeLengthGuess} onChange={handleUserInput}/>
            </label>
          </form>
        </section>
    )
}