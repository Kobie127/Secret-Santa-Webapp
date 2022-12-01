import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question6 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 6: Are you prepared to be arrested today?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question6'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question6;