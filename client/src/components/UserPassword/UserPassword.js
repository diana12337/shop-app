import React, { useState } from 'react';

import { fields } from '../../data/fields.js';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import { validateForm } from '../../helpers/validateForm.js';
import { updatePassword } from '../../modules/database/database.actions.js';
import StyledUserPassword from './UserPassword.styled.js';
const UserPassword = () => {
  const [userPassword, setUserPassword] = useState({
    newPassword: '',
    confirmPassword: '',
    currentPassword: '',
    errors: {},
    passwordChange: '',
  });
  const allFields = fields.passwordForm.map((field) => (
    <Input
      key={field.id}
      field={field}
      handleFieldChange={(e) => handleFieldChange(e)}
      state={userPassword}
      setState={setUserPassword}
    />
  ));
  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setUserPassword((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };

      const errorsData = validateForm(fields.passwordForm, userPassword);
      return {
        ...newState,
        errors: {
          ...newState.errors,
          [name]: errorsData[name],
        },
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(fields.passwordForm, userPassword);

    setUserPassword((prevState) => ({
      ...prevState,
      errors: errors,
    }));
    const values = Object.values(errors);
    if (values.every((val) => val === 'Field valid')) {
      const password = userPassword.newPassword;
      const currentPassword = userPassword.currentPassword;

      if (userPassword.newPassword === userPassword.confirmPassword) {
        updatePassword(currentPassword, password);
        setUserPassword((prevState) => ({
          ...prevState,
          passwordChange: 'Your password has been updated.',
        }));
      } else {
        setUserPassword((prevState) => ({
          ...prevState,
          passwordChange: 'Passwords do not match. Please try again',
        }));
      }
    }
  };
  return (
    <StyledUserPassword>
      <h3>Update Password</h3>
      {userPassword.passwordChange && (
        <span>{userPassword.passwordChange}</span>
      )}
      <form action="" onSubmit={handleSubmit}>
        {allFields}
        <section>
          <p>
            Password must contain: at least 8 characters, at least one uppercase
            letter, at least one number, at least one special character
            (!@#$%^&*)
          </p>
          <Button
            buttonStyle="defaultButton"
            text="SAVE CHANGES"
            type="submit"
          />
        </section>
      </form>
    </StyledUserPassword>
  );
};

export default UserPassword;
