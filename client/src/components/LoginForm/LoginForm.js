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
    loginFailed: '',
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
        errors: {
          ...newState.errors,
          [name]: errorsData[name],
        },
      };
    });
  };

  const handleLogging = async (e) => {
    const { loginEmail, loginPassword } = loginState;
    e.preventDefault();

    const errors = validateForm(fields.loginForm, loginState);

    setLoginState((prevState) => ({
      ...prevState,
      errors: errors,
    }));
    const values = Object.values(errors);

    if (values.every((val) => val === 'Field valid')) {
      try {
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        navigate(path);

        setLoginState((prevState) => ({
          ...prevState,
          loginFailed: '',
        }));
      } catch (error) {
        console.log(error.message);

        setLoginState((prevState) => ({
          ...prevState,
          loginFailed: 'Login attempt failed. Please try again',
        }));
      }
    }
  };
  const handleTestLogin = (e) => {
    e.preventDefault();

    setLoginState((prevState) => ({
      ...prevState,
      loginEmail: 'mail@testowy.te',
      loginPassword: 'Test@1234',
    }));
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
      {loginState.loginFailed && <span>{loginState.loginFailed}</span>}
      <form action="" onSubmit={handleLogging}>
        {allLoggingFields}
        <Button buttonStyle="defaultButton" text="LOGIN" type="submit" />
      </form>

      <article>
        <h2>Use test login data</h2>
        <Button
          text="Paste"
          buttonStyle="defaultButton"
          onClick={handleTestLogin}
        />
      </article>
    </StyledLoginForm>
  );
}

export default LoginForm;
