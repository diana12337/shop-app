import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase.js';

import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  updateEmail,
  sendEmailVerification,
} from 'firebase/auth';
export default class ExchangeApi {
  constructor(collection = '') {
    this.collection = collection;
  }

  getData = async (id) => {
    const docRef = doc(db, this.collection, id.toString());

    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  // Function to reauthenticate user
  reauthenticateUser = async (password) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const credential = EmailAuthProvider.credential(user.email, password);
        await reauthenticateWithCredential(user, credential);
        console.log('User reauthenticated');
        return true;
      } catch (error) {
        console.error('Error reauthenticating user:', error);
        return false;
      }
    } else {
      console.log('No user is signed in');
      return false;
    }
  };

  // Function to update user's password
  updateUserPassword = async (currentPassword, newPassword) => {
    const reauthenticated = await this.reauthenticateUser(currentPassword);
    if (reauthenticated) {
      const user = auth.currentUser;
      if (user) {
        try {
          await updatePassword(user, newPassword);
          console.log('Password updated successfully');
        } catch (error) {
          console.error('Error updating password:', error);
        }
      } else {
        console.log('No user is signed in');
      }
    }
  };

  updateUserData = async (firstName, lastName, newEmail, password) => {
    const reauthenticated = await this.reauthenticateUser(password);

    if (reauthenticated) {
      const user = auth.currentUser;
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        try {
          if (newEmail !== user.email) {
            await updateEmail(user, newEmail);
            await sendEmailVerification(user);
            await updateDoc(userDoc, {
              data: [
                {
                  firstName: firstName,
                  lastName: lastName,
                  email: newEmail,
                },
              ],
            });

            return {
              success: true,
              message:
                'Verification email sent. Please verify your new email address.',
            };
          } else {
            await updateDoc(userDoc, {
              data: [
                {
                  firstName: firstName,
                  lastName: lastName,
                  email: newEmail,
                },
              ],
            });
          }
        } catch (error) {
          console.error('Error updatingdata:', error);
        }
      } else {
        return { success: false, message: 'No user is signed in' };
      }
    } else {
      return { success: false, message: 'Reauthentication failed' };
    }
  };

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp;
  }
}
