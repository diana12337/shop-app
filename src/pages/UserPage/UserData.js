/* import React, { useState, useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';
import { fields } from '../../data/fields.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';

const UserData = () => {
  const { user } = useContext(LocalStorageContext);
  console.log(user);
  const [userDataState, setUserDataState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: {},
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setUserDataState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
  const updateUserProfile = async (firstName, lastName) => {
    if (user) {
      const userId = user.uid;
      try {
        await setDoc(
          doc(db, 'carts', userId),
          {
            data: [
              {
                firstName: firstName,
                lastName: lastName,
              },
            ],
          },
          { merge: true }
        );
        console.log('User profile updated successfully');
      } catch (error) {
        console.error('Error updating user profile:', error);
      }
    } else {
      console.log('No user is signed in');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const first = userDataState.firstName;
    const last = userDataState.lastName;
    updateUserProfile(first, last);
  };
  return (
    <div>
      <h3>Update User Data</h3>
      <form action="" onSubmit={handleSubmit}>
        {allFields}
        <Button buttonType="buttonForm" text="dconfirm" type="submit" />
      </form>
    </div>
  );
};

export default UserData;
 */
