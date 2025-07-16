import React, { useEffect } from 'react';

const ThankYouPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#3b82f6'; // also covers areas outside your root div
    return () => {
      document.body.style.backgroundColor = ''; // cleans up on unmount
    };
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#3b82f6',
        color: 'white',
        textAlign: 'center',
        margin: 0,
        paddingTop: '100px', 
        fontSize: '24px',
        
      }}
    >
      <h1 style={{}}>Thank You!</h1>
      <p>Your registration was successful.</p>
      <p>We will be in touch shortly.</p>
    </div>
  );
};

export default ThankYouPage;
