export default function SubmitVerification({userInput}){

    const { firstName, lastName, day, month, year, lifeLengthGuess } = userInput;
    
    function handleSubmit(e){
        e.preventDefault()
        if(firstName === "" || lastName === "" || day === "" || month === "" || year === "" || lifeLengthGuess === ""){
            alert("All sections in form must be complete")}
        else {setSave(()=>!save)}
      };
    
}