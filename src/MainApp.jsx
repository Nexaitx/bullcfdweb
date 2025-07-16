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

    if (!terms) {
      setMessage('Please agree to Terms & Conditions!');
      return;
    }

    try {
      const response = await fetch('https://bullcfdbackend.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, phone, email }),
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '9646815313';
    const messageText = 'Hi Bull CFD! I want trading id.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#1e3a8a',
    color: 'white',
    gap: '20px',
    padding: '20px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '30px',
      padding: '10px'
    }
  };

  const leftSectionStyle = {
    textAlign: 'center',
    maxWidth: '600px',
    padding: '20px',
    width: '100%',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
      padding: '10px'
    }
  };

  const logoStyle = {
    maxWidth: '450px',
    height: '450px',
    width: '100%',
    height: 'auto',
    '@media (max-width: 768px)': {
      maxWidth: '300px',
      height: 'auto'
    }
  };

  const featuresContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    margin: '20px 0',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '15px'
    }
  };

  const featureBoxStyle = {
    background: '#3b82f6',
    padding: '10px',
    borderRadius: '5px',
    minWidth: '120px',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      width: '100%',
      maxWidth: '280px'
    }
  };

  const formContainerStyle = {
    background: '#3b82f6',
    color: '#1e3a8a',
    padding: '40px',
    borderRadius: '5px',
    maxWidth: '600px',
    width: '100%',
    '@media (max-width: 768px)': {
      padding: '20px',
      maxWidth: '100%'
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    background: '#1e3a8a',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  };

  const whatsappStyle = {
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
    zIndex: 1000,
    '@media (max-width: 768px)': {
      width: '50px',
      height: '50px',
      bottom: '15px',
      right: '15px'
    }
  };

  // Media query styles for mobile
  const mobileStyles = `
    @media (max-width: 768px) {
      .container {
        flex-direction: column !important;
        gap: 30px !important;
        padding: 10px !important;
      }
      
      .left-section {
        max-width: 100% !important;
        padding: 10px !important;
      }
      
      .logo {
        max-width: 300px !important;
        height: auto !important;
      }
      
      .features-container {
        flex-direction: column !important;
        gap: 15px !important;
      }
      
      .feature-box {
        width: 100% !important;
        max-width: 280px !important;
      }
      
      .form-container {
        padding: 20px !important;
        max-width: 90% !important;
      }
      
      .submit-button {
        width: 100% !important;
      }
      
      .whatsapp-button {
        width: 50px !important;
        height: 50px !important;
        bottom: 15px !important;
        right: 15px !important;
      }
      
      .whatsapp-button i {
        font-size: 30px !important;
      }
      
      .form-title {
        font-size: 24px !important;
      }
      
      .main-title {
        font-size: 20px !important;
      }
      
      .main-description {
        font-size: 14px !important;
      }
    }
    
    @media (max-width: 480px) {
      .container {
        padding: 5px !important;
      }
      
      .form-container {
        padding: 15px !important;
      }
      
      .logo {
        max-width: 250px !important;
      }
      
      .feature-box {
        font-size: 14px !important;
        padding: 8px !important;
      }
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      <div className="container" style={containerStyle}>
        <div className="left-section" style={leftSectionStyle}>
          <img 
            src={logo1} 
            alt="TradeX Logo" 
            className="logo"
            style={logoStyle}
          />
          <h2 className="main-title" style={{ margin: '20px 0' }}>
            Trade with Zero Tax and 50x Leverage
          </h2>
          <p className="main-description" style={{ margin: '10px 0' }}>
            Indian Stocks (NSE), MCX, US Stocks, Crypto and Forex
          </p>
          <div className="features-container" style={featuresContainerStyle}>
            <div className="feature-box" style={featureBoxStyle}>
              <span role="img" aria-label="check">✅</span> Zero Tax
            </div>
            <div className="feature-box" style={featureBoxStyle}>
              <span role="img" aria-label="clock">⏳</span> 24x7 Deposit and Withdrawal
            </div>
            <div className="feature-box" style={featureBoxStyle}>
              <span role="img" aria-label="chart">📈</span> Upto 50x Leverage
            </div>
          </div>
          <p style={{ margin: '20px 0' }}>Indian + US Stocks & Commodities</p>
        </div>
        
        <div className="form-container" style={formContainerStyle}>
          <h2 className="form-title" style={{ color: 'white', marginBottom: '20px' }}>
            Create Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="+91"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={{ margin: '15px 0' }}>
              <label style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                I agree to Terms & Conditions
              </label>
            </div>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <button 
                type="submit" 
                className="submit-button"
                style={buttonStyle}
              >
                Sign Up
              </button>
            </div>
            <p style={{ color: '#1e3a8a', textAlign: 'center', marginTop: '10px' }}>
              Have an account?
            </p>
            {message && (
              <p style={{ 
                color: 'red', 
                textAlign: 'center', 
                margin: '10px 0',
                fontSize: '14px'
              }}>
                {message}
              </p>
            )}
          </form>
        </div>
        
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleWhatsAppClick();
          }}
          className="whatsapp-button"
          style={whatsappStyle}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '35px', color: 'white' }}></i>
        </a>
      </div>
    </>
  );
};

export default MainApp;