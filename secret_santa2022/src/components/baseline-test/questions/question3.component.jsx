import React from 'react';
import RadioButton from '../baseline-radio-button-group.component';
import "../styles/terms.styles.css";

const Question3 = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                Question 3: Do you get a thrill from stealing?
            </p>
            <div className='checkbox'>
                <RadioButton
                    name='question3'
                /> 
            </div>
            
        </div>
    )
}
    
   

export default Question3;