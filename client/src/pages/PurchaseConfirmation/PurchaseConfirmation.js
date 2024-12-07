import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.js';
import StyledPurchaseConfirmation from './PurchaseConfirmation.styled.js';

import Button from '../../components/Button/Button.js';
function PurchaseConfirmation() {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledPurchaseConfirmation>
        <div>
          <h1>Payment Confirmation</h1>
          <p>
            Thank you! Your payment was successful. Your order is being
            processed.
          </p>
          <Button
            buttonStyle="buttonAddProduct"
            text="RETURN TO SHOP"
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
      </StyledPurchaseConfirmation>
    </Layout>
  );
}

export default PurchaseConfirmation;
