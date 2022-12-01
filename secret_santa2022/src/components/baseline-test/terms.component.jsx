import React from 'react';
import CheckboxField from './baseline-checkbox.component';

import "./styles/terms.styles.css";

const Terms = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                The following is a baseline test.  This is to ensure that you are not currently 
                experiencing symptoms of kleptomania.  Please agree to continue.
            </p>
            <div className='checkbox'>
                <CheckboxField
                    name='singleCheck'
                    label='Please agree to the terms above'
                />
            </div>
            
        </div>
    )
}
    
   

export default Terms;