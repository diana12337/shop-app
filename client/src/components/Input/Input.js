import React from 'react';
/* import correct from '../../img/correct.png'; */
/* import error from '../../img/error.png'; */
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

{
  /* <p>
{' '}
{state.errors[field.name] === 'Field valid' ? (
   <img src={correct} alt="correctImg" /> 
  <p>Field valid</p>
) : (
  ''
)}{' '}
</p>
<p>
{' '}
{state.errors[field.name] === 'Field invalid' ? (
  <img src={error} alt="errortImg" />
) : (
  ''
)}{' '}
</p> */
}
