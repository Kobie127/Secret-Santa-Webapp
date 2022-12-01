import React from 'react';
import CheckboxField from './baseline-checkbox.component';
import { Field } from 'formik';
import { Typography } from '@mui/material';

import "./styles/terms.styles.css";

const Terms = () => {
    return(
        <div className='terms'>
             <p className='termText'>
                The following is a baseline test.  This is to ensure that you are not currently 
                experiencing symptoms of kleptomania.  Please agree to continue.
            </p>
            <div className='checkbox'>
                <Field
                    component={CheckboxField}
                    name="singleCheck"
                    id="singleCheck"
                    label="Must agree to continue"
                />

            </div>
            
        </div>
    )
}
    
   

export default Terms;