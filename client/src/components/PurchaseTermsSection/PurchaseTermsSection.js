import React from 'react';
import StyledPurchaseTerms from './PurchaseTermsSection.styled.js';

function PurchaseTermsSection() {
  return (
    <StyledPurchaseTerms>
      <article>
        <h1>Purchase Terms</h1>
        <h2>
          Welcome to ShoppApp. By making a purchase on our platform, you agree
          to the following terms and conditions:
        </h2>
        <ul>
          <li>
            Product Availability: All products are subject to availability. We
            strive to keep our inventory updated, but if an item you ordered is
            out of stock, we will notify you promptly and offer alternative
            options or a full refund.
          </li>
          <li>
            Pricing and Payment: Prices for products are listed in USD and
            include applicable taxes. We accept various payment methods,
            including credit/debit cards, and more. Payment must be made in full
            at the time of purchase. All transactions are securely processed.
          </li>
          <li>
            Order Confirmation: After placing an order, you will receive an
            order confirmation via email. This email will include your order
            details, shipping address, and estimated delivery time. Please
            review the information carefully and contact us immediately if there
            are any discrepancies.
          </li>
          <li>
            Shipping and Delivery: We offer multiple shipping options to suit
            your needs. Shipping costs and delivery times will vary based on
            your location and chosen shipping method. Please note that delivery
            times are estimates and may be subject to delays beyond our control.
          </li>
          <li>
            Returns and Exchanges: If you are not completely satisfied with your
            purchase, you may return or exchange the item within 30 days of
            receipt. Items must be unused, in their original packaging, and
            accompanied by the original receipt. Please refer to our Return
            Policy for detailed instructions.
          </li>
          <li>
            Refunds: Refunds will be processed within 90 business days after we
            receive your returned item. Refunds will be issued to the original
            payment method. Please note that shipping costs are non-refundable.
          </li>
          <li>
            Warranty and Liability: Products are covered by the manufacturer
            warranty, where applicable. We make no additional warranties or
            representations regarding the products quality or fitness for a
            particular purpose. Our liability is limited to the purchase price
            of the products.
          </li>
          <li>
            Privacy: Your privacy is important to us. We collect and use your
            personal information in accordance with our Privacy Policy. By
            making a purchase, you consent to the collection and use of your
            information as described in our Privacy Policy.
          </li>
          <li>
            Changes to Purchase Terms: We reserve the right to update or modify
            these Purchase Terms at any time. Changes will be effective upon
            posting on our website. We encourage you to review these terms
            periodically to stay informed of any updates.
          </li>
        </ul>
        <div>
          Contact Us: If you have any questions or concerns regarding your
          purchase or these terms, please contact our customer support team. We
          are here to assist you.
        </div>
        <h3>Thank you for shopping with us!</h3>
      </article>
    </StyledPurchaseTerms>
  );
}

export default PurchaseTermsSection;
