import React from 'react';

const InputFeedback = ({ error }) =>
        error ? <div className='input-feedback'>{error}</div> : null;

const CheckboxField = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {

  return (
    <div>
      <input
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className='checkboxField'
      />
      <label htmlFor={id}>{label}</label>
      {touched[name] && <InputFeedback error={errors[name]} />
    }
    </div>
  );
};

export default CheckboxField;