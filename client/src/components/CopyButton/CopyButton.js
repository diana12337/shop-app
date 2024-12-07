import React, { useState } from 'react';
import Notification from '../Notification/Notification.js';
const CopyButton = ({ text, number }) => {
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(number)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div>
      <button onClick={copyToClipboard}>COPY{/*  for {text} */}</button>
      {showNotification && (
        <Notification message={`Number for ${text} copied to clipboard!`} />
      )}
    </div>
  );
};

export default CopyButton;
