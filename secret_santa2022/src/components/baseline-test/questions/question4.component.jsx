import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question4 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 4: Have you ever said "I just don't like paying for things"?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question4'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question4;