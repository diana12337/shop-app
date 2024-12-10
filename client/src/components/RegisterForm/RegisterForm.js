import { React, useState } from 'react';
import { db, auth } from '../../firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.js';
import RegisterFormStyled from './RegisterForm.styled.js';
import Input from '../Input/Input.js';
import { validateForm } from '../../helpers/validateForm.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { fields } from '../../data/fields.js';

function RegisterForm({ path }) {
  const navigate = useNavigate();
  const [registerState, setRegisterState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: {},
    registerFailed: '',
  });

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  const createAccount = async () => {
    const { email, password, firstName, lastName } = registerState;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      const userDoc = doc(db, 'users', user.uid);
      await setDoc(
        userDoc,
        {
          data: [
            {
              firstName: firstName,
              lastName: lastName,
              email: email,
            },
          ],
        },
        { merge: true }
      ),
        navigate(path);
    } catch (error) {
      setRegisterState((prevState) => ({
        ...prevState,
        registerFailed: 'Email already in use',
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(fields.registerForm, registerState);

    setRegisterState((prevState) => ({
      ...prevState,
      errors: errors,
    }));
    const values = Object.values(errors);

    if (values.every((val) => val === 'Field valid')) {
      createAccount();

      const errors = {};
      setRegisterState((prevState) => ({
        ...prevState,
        errors: errors,
      }));
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setRegisterState((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };

      const errorsData = validateForm(fields.registerForm, newState);

      if (name === 'password') {
        setIsTypingPassword(true);
        setPasswordValidation({
          length: value.length >= 8,
          uppercase: /[A-Z]/.test(value),
          number: /[0-9]/.test(value),
          specialChar: /[!@#$%^&*]/.test(value),
        });
      }

      return {
        ...newState,
        errors: {
          ...newState.errors,
          [name]: errorsData[name],
        },
      };
    });
  };
  const allRegisterFields = fields.registerForm.map((field) => (
    <Input
      key={field.id}
      field={field}
      handleFieldChange={(e) => handleFieldChange(e)}
      state={registerState}
      setState={setRegisterState}
    />
  ));

  return (
    <RegisterFormStyled>
      <h1>CREATE AN ACCOUNT</h1>
      {registerState.registerFailed && (
        <span>{registerState.registerFailed}</span>
      )}
      <form action="" onSubmit={handleSubmit}>
        {allRegisterFields}
        <Button
          buttonStyle="defaultButton"
          text="CREATE ACCOUNT"
          type="submit"
        />
      </form>

      {isTypingPassword ? (
        <div>
          <h4>Password must contain:</h4>
          <ul>
            <li style={{ color: passwordValidation.length ? 'green' : 'red' }}>
              At least 8 characters
            </li>
            <li
              style={{ color: passwordValidation.uppercase ? 'green' : 'red' }}
            >
              At least one uppercase letter
            </li>
            <li style={{ color: passwordValidation.number ? 'green' : 'red' }}>
              At least one number
            </li>
            <li
              style={{
                color: passwordValidation.specialChar ? 'green' : 'red',
              }}
            >
              At least one special character (!@#$%^&*)
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </RegisterFormStyled>
  );
}

export default RegisterForm;
