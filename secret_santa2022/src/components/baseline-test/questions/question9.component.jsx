import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question9 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 9: Did you enjoy carving that pumpkin?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question9'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question9;