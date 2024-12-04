import React from 'react';
import { useCart } from '../../context/ShoppingCartContext.js';
import { fields } from '../../data/fields.js';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';

import { validateForm } from '../../helpers/validateForm.js';
const AddressForm = () => {
  const { address, setAddress } = useCart();
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
    console.log(address.errors, 'sss');
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
    <div>
      <h3>Update User Data</h3>
      <form action="" onSubmit={handleSubmit}>
        {allFields}
        <Button
          buttonStyle="buttonAddProduct"
          text="GO TO PAYMENT"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddressForm;
