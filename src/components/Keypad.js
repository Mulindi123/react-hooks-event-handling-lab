// Code Keypad Component Here

function Keypad (){


    function passwordHandler(e){
        e.preventDefault()
        console.log('Entering password...')
    }

    return (
            <input type="password" onChange={passwordHandler} />
    )
}

export default Keypad;