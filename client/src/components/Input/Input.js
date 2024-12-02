import React from 'react';
import correct from '../../img/correct.png';
import error from '../../img/error.png';
import InputStyled from './Input.styled.js';

function Input({ field, handleFieldChange, state }) {
  return (
    <InputStyled>
      <div>
        <input
          type={field.type}
          name={field.name}
          onChange={handleFieldChange}
          value={state[field.name]}
          placeholder={field.placeholder}
        />
        <label> {field.label} </label>
        <span />
        <p>
          {' '}
          {state.errors[field.name] === 'Field valid' ? (
            <img src={correct} alt="correctImg" />
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
        </p>
      </div>
    </InputStyled>
  );
}

export default Input;
