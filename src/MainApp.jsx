import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo1 from './assets/logo1.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const MainApp = () => {
  console.log('MainApp mounted');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [terms, setTerms] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/thank-you'); 
    // if (!terms) {
    //   setMessage('Please agree to Terms & Conditions!');
    //   navigate('/thank-you'); // Navigate to Home page

    //   // return;
    // }

    // try {
    //   const response = await fetch('http://localhost:5000/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ fullName, phone, email }),
    //   });
    //   if (response.ok) {
    //     // navigate('/thank-you'); // Navigate to Thank You page
    //   } else {
    //     setMessage('Registration failed. Please try again.');
    //   }
    // } catch (error) {
    //   setMessage('Something went wrong. Please try again.');
    // }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '9646815313';
    const messageText = 'Hello, this is an automated message from TradeX registration!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '98vh',
        backgroundColor: '#1e3a8a',
        color: 'white',
        gap: '20px', // Matches the spacing in the image
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '20px' }}>
        <img src={logo1} alt="TradeX Logo" style={{ maxWidth: '450px', height: '450px' }} />
        <h2>Trade with Zero Tax and 50x Leverage</h2>
        <p>Indian Stocks (NSE), MCX, US Stocks, Crypto and Forex</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'nowrap', // Changed from 'wrap' to 'nowrap'
          }}
        >
          <div style={{ background: '#3b82f6', padding: '10px', borderRadius: '5px' }}>
            <span role="img" aria-label="check">✅</span> Zero Tax
          </div>
          <div style={{ background: '#3b82f6', padding: '10px', borderRadius: '5px' }}>
            <span role="img" aria-label="clock">⏳</span> 24x7 Deposit and Withdrawal
          </div>
          <div style={{ background: '#3b82f6', padding: '10px', borderRadius: '5px' }}>
            <span role="img" aria-label="chart">📈</span> Upto 50x Leverage
          </div>
        </div>
        <p>Indian + US Stocks & Commodities</p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleWhatsAppClick();
          }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '40px', color: 'white' }}></i>
        </a>
      </div>
      <div style={{ background: '#3b82f6', color: '#1e3a8a', padding: '120px', borderRadius: '5px', maxWidth: '600px' }}>
        <h2 style={{ color: 'white' }}>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: '100%', padding: '10px', margin: '10px 0' }}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="+91"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: '100%', padding: '10px', margin: '10px 0' }}
              required
            />
            {/* <button type="button" onClick={handleRequestOTP} style={{ marginTop: '10px', padding: '10px 20px', background: '#1e3a8a', color: 'white', border: 'none', borderRadius: '5px' }}>
              Request OTP via SMS
            </button> */}
          </div>
          {/* <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ width: '100%', padding: '10px', margin: '10px 0' }}
              required
            />
          </div> */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', margin: '10px 0' }}
              required
            />
          </div>
          <div>
            <label style={{ color: 'white' ,margin:'10px 0'}}>
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              /> I agree to Terms & Conditions|
             
            </label>
          </div>
          <div style={{ textAlign: 'center',margin:'20px 0' }}>
            <button type="submit" style={{ width: '50%', padding: '10px', background: '#1e3a8a', color: 'white', border: 'none', borderRadius: '5px' }}>
              Sign Up
            </button>
          </div>
          <p style={{ color: '#3b82f6', textAlign: 'center', marginTop: '10px' }}>
            Have an account
          </p>
          {message && <p style={{ color: 'red' }}>{message}</p>}
        </form>
      </div>
    </div>
  );
}
export default MainApp;
// Wrap your app with Router and set up routes
