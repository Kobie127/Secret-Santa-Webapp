import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question8 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 8: Have you ever stolen from Wegmans?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question8'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question8;