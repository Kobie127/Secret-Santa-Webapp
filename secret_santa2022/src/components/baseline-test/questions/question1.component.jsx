import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question1 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 1: Have you stolen an item before?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question1'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question1;