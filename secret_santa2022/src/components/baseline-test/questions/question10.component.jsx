import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question10 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 10: Would you consider yourself a kleptomaniac?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question10'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question10;