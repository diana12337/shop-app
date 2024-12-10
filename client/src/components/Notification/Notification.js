import React from 'react';
import StyledNotification from './Notification.styled.js';

function Notification({ message }) {
  return (
    <StyledNotification>
      <p>{message}</p>
    </StyledNotification>
  );
}

export default Notification;
