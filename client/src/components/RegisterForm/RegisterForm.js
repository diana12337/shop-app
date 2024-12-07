import { React, useState } from 'react';
import { db, auth } from '../../firebase.js';
import { doc, setDoc } from 'firebase/firestore';
/* import Layout from '../../components/Layout/Layout.js'; */
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.js';
import RegisterFormStyled from './RegisterForm.styled.js';
/* import StyledLoginPage from './LoginPage.styled.js'; */
import Input from '../Input/Input.js';
import { validateForm, clearFormFields } from '../../helpers/validateForm.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
/* import { signInWithEmailAndPassword } from 'firebase/auth'; */
import { fields } from '../../data/fields.js';
function RegisterForm({ path }) {
  const navigate = useNavigate();
  const [registerState, setRegisterState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: {},
  });

  const createAccount = async () => {
    const { email, password, firstName, lastName } = registerState;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update the user profile with name and surname
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      const userDoc = doc(db, 'carts', user.uid);
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
        console.log('User created successfully with name and surname', userDoc);
      navigate(path);
    } catch (error) {
      console.log(error.message);
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
      clearFormFields(registerState, setRegisterState);
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
      <h1>Create an account</h1>
      <form action="" onSubmit={handleSubmit}>
        {allRegisterFields}
        <Button buttonStyle="buttonAddProduct" text="dodaj" type="submit" />
      </form>
    </RegisterFormStyled>
  );
}

export default RegisterForm;
