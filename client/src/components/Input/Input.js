import React from 'react';

import InputStyled from './Input.styled.js';

function Input({ field, handleFieldChange, state }) {
  return (
    <InputStyled error={state.errors[field.name]}>
      <div>
        <label> {field.label} </label>
        <input
          type={field.type}
          name={field.name}
          onChange={handleFieldChange}
          value={state[field.name]}
          placeholder={field.placeholder}
        />
        {state.errors[field.name] && <p>{state.errors[field.name]}</p>}
        <span />
      </div>
    </InputStyled>
  );
}

export default Input;
