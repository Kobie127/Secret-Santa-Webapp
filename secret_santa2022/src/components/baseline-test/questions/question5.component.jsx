import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question5 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 5: Would you feel guilty if someone else got penalized for your stealing?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question5'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question5;