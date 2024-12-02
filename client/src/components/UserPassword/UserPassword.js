import React, { useState } from 'react';

import { fields } from '../../data/fields.js';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import { validateForm } from '../../helpers/validateForm.js';
import { updatePassword } from '../../modules/database/database.actions.js';
const UserPassword = () => {
  const [userPassword, setUserPassword] = useState({
    newPassword: '',
    confirmPassword: '',
    currentPassword: '',
    errors: {},
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

    setUserPassword((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

      /*       const email = userDataState.email; */
      /*   updateUserEmail(userDataState.email); */
      if (userPassword.newPassword === userPassword.confirmPassword) {
        updatePassword(currentPassword, password);
      } else {
        console.log('hasła niezgodne ');
      }
    }
  };
  return (
    <div>
      <h3>Update User Data</h3>
      <form action="" onSubmit={handleSubmit}>
        {allFields}
        <Button
          buttonStyle="buttonAddProduct"
          text="SAVE CHANGES"
          type="submit"
        />
      </form>
    </div>
  );
};

export default UserPassword;
