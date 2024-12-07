import React /* , { useEffect } */ from 'react';
import { useCart } from '../../context/ShoppingCartContext.js';
import { fields } from '../../data/fields.js';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import StyledAddressForm from './AddressForm.styled.js';
import { validateForm } from '../../helpers/validateForm.js';
/* import { db, auth } from '../../firebase.js'; */
const AddressForm = () => {
  const { address, setAddress } = useCart();
  const navigate = useNavigate();

  /*   useEffect(() => {
    let unsubscribe;
    const fetchUserData = () => {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userDoc = doc(db, 'carts', userId);

       
        unsubscribe = onSnapshot(
          userDoc,
          (userSnapshot) => {
            if (userSnapshot.data()) {
              const userData = userSnapshot.data().data[0];

              setAddress({
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
  }, []); */

  /*   const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
    city: '',
    errors: {},
  }); */
  const allFields = fields.addressForm.map((field) => (
    <Input
      key={field.id}
      field={field}
      handleFieldChange={(e) => handleFieldChange(e)}
      state={address}
      setState={setAddress}
    />
  ));
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(fields.addressForm, address);

    setAddress((prevState) => ({
      ...prevState,
      errors: errors,
    }));
    const values = Object.values(errors);
    if (values.every((val) => val === 'Field valid')) {
      navigate('/cart/order');
    }
  };
  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setAddress((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };
      const errorsData = validateForm(fields.addressForm, newState);
      return {
        ...newState,
        errors: {
          ...newState.errors,
          [name]: errorsData[name],
        },
      };
    });
  };
  return (
    <StyledAddressForm>
      <h3>Shipping details</h3>
      <form action="" onSubmit={handleSubmit}>
        {allFields}
        <Button
          buttonStyle="buttonAddProduct"
          text="GO TO PAYMENT"
          type="submit"
        />
      </form>
    </StyledAddressForm>
  );
};

export default AddressForm;
