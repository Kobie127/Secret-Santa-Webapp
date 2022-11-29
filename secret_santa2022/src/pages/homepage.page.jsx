import React, {useState, useRef, useEffect} from "react";
import Header from "../components/common/header.component";
import LandingPage from "../components/homepage/landing-page";
import Opening from "./opening.page";
import "./styles/homepage.styles.css";


const Homepage = () => {

    const [isCorrect, setIsCorrect] = useState(localStorage.getItem('is-correct') === 'false')
    const [showError, setShowError] = useState(false);
    const [showHint, setShowHint] = useState(false)
    
    const amountOfIncorrectLogins = useRef(0)

    const handleClick = () => {
        var username = document.getElementById("username").value.toLowerCase();
        var password = document.getElementById("password").value.toLowerCase();
        
        console.log(username)
        var correctUsername = "petty"
        var correctPassword = "theft"
        if (username === correctUsername && password === correctPassword) {
            setIsCorrect(true);
        }
        else {
            setShowError(true)
            amountOfIncorrectLogins.current += 1
            console.log(amountOfIncorrectLogins)
            if (amountOfIncorrectLogins.current > 4) {
                setShowHint(true)
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('is-correct', isCorrect);
    }, [isCorrect])
    
    return (
        <div className="homepage">
            {isCorrect && 
               <LandingPage/>
            }
            {!isCorrect && 
                <Opening 
                    onClick={handleClick} 
                    showError={showError}
                    showHint={showHint}
                />
            }
           
        </div>
    )
}

export default Homepage
