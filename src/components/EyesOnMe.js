import React from "react"

// Code EyesOnMe Component Here
function EyesOnMe(){

    function focusHandler(){

        console.log("Good")
    }
  
    function blurHandler(){
        console.log('Hey! Eyes on me!')
    }

    return(
   
    <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on Me</button>
  
   ) 
}
export default EyesOnMe