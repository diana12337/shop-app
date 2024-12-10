import React, { useState } from 'react';
import Notification from '../Notification/Notification.js';
import Button from '../Button/Button.js';
const CopyButton = ({ text, number }) => {
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(number)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div>
      <Button
        onClick={copyToClipboard}
        buttonStyle="defaultButton"
        text="copy"
      />
      {showNotification && (
        <Notification message={`Number for ${text} copied to clipboard!`} />
      )}
    </div>
  );
};

export default CopyButton;
