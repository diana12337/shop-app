import React, { useState, useEffect } from 'react';

import { doc, onSnapshot } from 'firebase/firestore';
/* import { updateEmail } from 'firebase/auth'; */
import { db, auth } from '../../firebase.js';
import { fields } from '../../data/fields.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import StyledUserData from './UserDataForm.styled.js';
import {
  /*  changeDataInFirestore, */
  updateData,
} from '../../modules/database/database.actions.js';
import { validateForm } from '../../helpers/validateForm.js';
const UserData = () => {
  const [userDataState, setUserDataState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: {},
    responseFromApi: '',
  });

  useEffect(() => {
    let unsubscribe;
    const fetchUserData = () => {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userDoc = doc(db, 'carts', userId);

        // Set up real-time listener
        unsubscribe = onSnapshot(
          userDoc,
          (userSnapshot) => {
            if (userSnapshot.data()) {
              const userData = userSnapshot.data().data[0];

              setUserDataState({
                firstName: userData.firstName || '',
                lastName: userData.lastName || '',
                email: userData.email || '',
                password: '',
                errors: {},
              });
              console.log('User data updated in real-time:', userData);
            } else {
              console.log('No such document!');
            }
          },
          (error) => {
            console.error('Error fetching real-time data:', error);
          }
        );
      }
    };

    fetchUserData();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setUserDataState((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };
      const errorsData = validateForm(fields.userPanel, newState);
      return {
        ...newState,
        errors: {
          ...newState.errors,
          [name]: errorsData[name],
        },
      };
    });
  };

  const allFields = fields.userPanel.map((field) => (
    <Input
      key={field.id}
      field={field}
      handleFieldChange={(e) => handleFieldChange(e)}
      state={userDataState}
      setState={setUserDataState}
    />
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(fields.userPanel, userDataState);

    setUserDataState((prevState) => ({
      ...prevState,
      errors: errors,
    }));
    const values = Object.values(errors);
    if (values.every((val) => val === 'Field valid')) {
      const first = userDataState.firstName;
      const last = userDataState.lastName;
      const email = userDataState.email;
      const password = userDataState.password;
      /*   updateUserEmail(userDataState.email); */
      updateData(first, last, email, password);
      /* changeDataInFirestore(first, last, email); */
      /*   setUserDataState((prevState) => ({
        ...prevState,
        responseFromApi: resp,
      }));
    } */
    }
  };
  return (
    <StyledUserData>
      <h3>Update User Data</h3>
      <form action="" onSubmit={handleSubmit}>
        {allFields}
        <Button
          buttonStyle="buttonAddProduct"
          text="SAVE CHANGES"
          type="submit"
        />
      </form>
    </StyledUserData>
  );
};

export default UserData;
