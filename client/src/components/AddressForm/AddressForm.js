import React from 'react';
import { useCart } from '../../context/ShoppingCartContext.js';
import { fields } from '../../data/fields.js';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import StyledAddressForm from './AddressForm.styled.js';
import { validateForm } from '../../helpers/validateForm.js';

const AddressForm = () => {
  const { address, setAddress } = useCart();
  const navigate = useNavigate();

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

  const allFields = fields.addressForm.map((field) => (
    <Input
      key={field.id}
      field={field}
      handleFieldChange={(e) => handleFieldChange(e)}
      state={address}
      setState={setAddress}
    />
  ));
  return (
    <StyledAddressForm>
      <h3>Shipping details</h3>
      <form action="" onSubmit={handleSubmit}>
        {allFields}
        <Button
          buttonStyle="defaultButton"
          text="GO TO PAYMENT"
          type="submit"
        />
      </form>
    </StyledAddressForm>
  );
};

export default AddressForm;
