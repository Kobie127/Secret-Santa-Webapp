import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question2 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 2: Do you conisder yourself a thief?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question2'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question2;