import React, {useState, useEffect, useRef} from "react"
import {Link} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import LoadingButton from '@mui/lab/LoadingButton';
import { Container } from "@mui/material";

import "./styles/opening.styles.css"

const Opening = () => {

    const [isCorrect, setIsCorrect] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showHint, setShowHint] = useState(false)
    
    const amountOfIncorrectLogins = useRef(0)

    const handleClick = () => {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
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
       
    }, [isCorrect])

    return(
            <div className="opening" >
                <div className="main_box">
                    <div className="main_box--main">
                        <div className="main_box--main--title">
                            <h4>Rochester Police Database</h4>
                            <p>Use admin panel to login</p>
                        </div>
                        <div className="main_box--main--login">
                            <input
                                type='text'
                                id='username'
                                className='form-control'
                                placeholder='username'
                                autoComplete='false'
                            />
                            <input
                                type="password"
                                id="password"
                                className="
                                form-control"
                                placeholder="password"
                            />
                            <button className="btn btn-success" onClick={handleClick}>
                                LOGIN
                            </button>
                            {showError  &&
                                <p>Incorrect Credentials</p>
                            }
                            {showHint &&
                                <p>Hint: A petty crime</p>
                            }
                        </div>
                    </div>
                </div>          
            </div>
       
    )
}

export default Opening