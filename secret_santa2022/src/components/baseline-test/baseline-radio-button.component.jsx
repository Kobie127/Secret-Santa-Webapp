import React from 'react';

const BaselineRadioButton = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    className,
    ...props
  }) => {

    return(
        <div className='baseline-radio'>
            <input
                name={name}
                id={id}
                type="radio"
                value={id}
                checked={id === value}
                onChange={onChange}
                onBlur={onBlur}
                className="radio-button"
                {...props}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default BaselineRadioButton;