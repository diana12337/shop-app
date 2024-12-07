import { React, useState } from 'react';
import { auth } from '../../firebase.js';

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button.js';
import StyledLoginForm from './LoginForm.styled.js';

import Input from '../../components/Input/Input.js';
import { validateForm } from '../../helpers/validateForm.js';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { fields } from '../../data/fields.js';
function LoginForm({ path }) {
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState({
    loginEmail: '',
    loginPassword: '',
    errors: {},
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setLoginState((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };

      const errorsData = validateForm(fields.loginForm, newState);
      return {
        ...newState,
        errors: errorsData,
      };
    });
  };

  const handleLogging = async (e) => {
    const { loginEmail, loginPassword } = loginState;
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate(path);

      console.log('User signed in successfully');
    } catch (error) {
      console.log(error.message);
    }
  };

  const allLoggingFields = fields.loginForm.map((field) => (
    <Input
      key={field.id}
      field={field}
      handleFieldChange={handleFieldChange}
      state={loginState}
      setState={setLoginState}
    />
  ));
  return (
    <StyledLoginForm>
      <h1>SIGN IN</h1>
      <form action="" onSubmit={handleLogging}>
        {allLoggingFields}
        <Button buttonStyle="buttonAddProduct" text="login" type="submit" />
      </form>
    </StyledLoginForm>
  );
}

export default LoginForm;
