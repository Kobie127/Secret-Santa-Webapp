import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Alert,
  AlertTitle
} from '@mui/material';

export default function RadioButton(props) {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);

  const { setValue } = helper;



  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
            <FormHelperText>{error}</FormHelperText>
        </Alert>
      )
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl {...rest}>
         <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name={field.name}
            value={field.checked}
            onChange={handleChange}
        >
          <FormControlLabel 
                value='no'
                checked={field.checked}
                control={<Radio name='no' />} 
                label="No" 
          />
           <FormControlLabel 
                value='yes'
                checked={field.checked}
                control={<Radio name='yes' />} 
                label="Yes" 
          />
        </RadioGroup>
        {_renderHelperText()}
    </FormControl>
  );
}
