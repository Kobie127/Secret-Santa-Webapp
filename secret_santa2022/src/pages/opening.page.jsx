import React from "react"

import "./styles/opening.styles.css"

const Opening = ({
    onClick, 
    showError, 
    showHint
}) => {

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
                            <button className="btn btn-success" onClick={onClick}>
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