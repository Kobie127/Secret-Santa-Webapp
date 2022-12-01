import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question7 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 7: Have you ever stolen from Target?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question7'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question7;