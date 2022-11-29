import React, {useState, useRef, useEffect} from 'react';
import Homepage from "../src/pages/homepage.page";
import Opening from "../src/pages/opening.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log('dwadwad')

  const [isCorrect, setIsCorrect] = useState(localStorage.getItem('is-correct') === 'false')
  const [showError, setShowError] = useState(false);
  const [showHint, setShowHint] = useState(false)
  
  const amountOfIncorrectLogins = useRef(0)

  const handleClick = () => {
      var username = document.getElementById("username").value.toLowerCase();
      var password = document.getElementById("password").value.toLowerCase();
      
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
    <BrowserRouter>
       <div className="App">
        {!isCorrect && 
          <Opening 
              onClick={handleClick} 
              showError={showError}
              showHint={showHint}
          />
        }
        {isCorrect &&
          <Homepage/>
        }
      
    </div>
    </BrowserRouter>
   
  );
}

export default App;
