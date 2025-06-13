import React, { useEffect, useRef } from 'react';
import logo from '../bullcfdicon2.png';

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

@keyframes fadeInUp {
  from { 
    opacity: 0; 
    transform: translateY(60px) scale(0.95);
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1);
  }
}

@keyframes slideInLeft {
  from { 
    opacity: 0; 
    transform: translateX(-60px);
  }
  to { 
    opacity: 1; 
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from { 
    opacity: 0; 
    transform: translateX(60px);
  }
  to { 
    opacity: 1; 
    transform: translateX(0);
  }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 27, 0.3); }
  50% { box-shadow: 0 0 40px rgba(220, 38, 27, 0.6); }
}

.animated-section {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animated-section-left {
  animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animated-section-right {
  animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.hero-bg {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 30%, #1a1a1a 100%);
  border-radius: 32px;
  padding: 80px 40px;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
  border: 2px solid #333;
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(239, 104, 54, 0.1), rgba(220, 38, 27, 0.1), rgba(169, 169, 169, 0.05));
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

.hero-bg > * {
  position: relative;
  z-index: 1;
}

.logo-container {
  width: 200px;
  height: 200px;
  margin: 0 auto 40px;
  background: linear-gradient(135deg, #EF6836, #DC261B);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(239, 104, 54, 0.3);
  animation: pulse 4s ease-in-out infinite;
}

.main-title {
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #EF6836, #DC261B, #A9A9A9);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  text-shadow: 0 4px 20px rgba(239, 104, 54, 0.3);
}

.main-subtitle {
  font-size: 1.4rem;
  color: #B0B0B0;
  margin-bottom: 40px;
  font-weight: 400;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  padding: 18px 40px;
  background: linear-gradient(135deg, #EF6836, #DC261B);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 10px 30px rgba(239, 104, 54, 0.4);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(239, 104, 54, 0.6);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #EF6836, #DC261B, #A9A9A9);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(239, 104, 54, 0.3);
}

.analytics-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
}

.analytics-card {
  flex: 1 1 300px;
  min-width: 300px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 40px 30px;
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.analytics-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #EF6836, #DC261B, #A9A9A9);
}

.analytics-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 60px rgba(239, 104, 54, 0.2);
}

.analytics-card:nth-child(1) {
  background: linear-gradient(135deg, rgba(239, 104, 54, 0.1), rgba(255,255,255,0.05));
}

.analytics-card:nth-child(2) {
  background: linear-gradient(135deg, rgba(220, 38, 27, 0.1), rgba(255,255,255,0.05));
}

.analytics-card:nth-child(3) {
  background: linear-gradient(135deg, rgba(169, 169, 169, 0.1), rgba(255,255,255,0.05));
}

.analytics-value {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #EF6836, #DC261B);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  line-height: 1;
}

.analytics-label {
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.feature-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 40px;
  border-radius: 20px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(239, 104, 54, 0.1) 0%, transparent 70%);
  transform: scale(0);
  transition: transform 0.5s ease;
}

.feature-card:hover::before {
  transform: scale(1);
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: rgba(239, 104, 54, 0.3);
  box-shadow: 0 20px 60px rgba(239, 104, 54, 0.15);
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #EF6836;
  position: relative;
  z-index: 1;
}

.feature-card p {
  color: #888;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.step-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
}

.step-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #EF6836, #DC261B, #A9A9A9);
  border-radius: 18px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.step-card:hover::before {
  opacity: 1;
}

.step-card:hover {
  transform: translateY(-5px);
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #EF6836, #DC261B);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 10px 30px rgba(239, 104, 54, 0.3);
}

.benefits-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem; /* Reduce this value to decrease space between items */
  /* Or remove gap entirely for no extra space: */
  /* gap: 0; */
}

.benefit-item {
 
  backdrop-filter: blur(20px);
 
  padding: 10px;
  
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: translateX(10px);
  border-color: rgba(239, 104, 54, 0.3);
}

.benefit-icon {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #EF6836, #DC261B);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  flex-shrink: 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.pricing-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 40px;
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
}

.pricing-card.featured {
  background: linear-gradient(135deg, rgba(239, 104, 54, 0.2), rgba(220, 38, 27, 0.1));
  border-color: #EF6836;
  animation: glow 3s ease-in-out infinite;
}

.pricing-card:hover {
  transform: translateY(-10px) scale(1.02);
}

.testimonial-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 4rem;
  color: rgba(239, 104, 54, 0.3);
  font-family: serif;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: rgba(239, 104, 54, 0.3);
}

.testimonial-quote {
  color: #ccc;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-author {
  color: #EF6836;
  font-weight: 600;
  font-size: 1rem;
}

.animate-pointer {
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  0% { transform: translateY(0);}
  100% { transform: translateY(-10px);}
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }
  
  .hero-bg {
    padding: 60px 20px;
  }
  
  .logo-container {
    width: 150px;
    height: 150px;
  }
  
  .analytics-card,
  .feature-card {
    min-width: 280px;
  }
  
  .section-title {
    font-size: 2rem;
    text-align: center;
  }
}
`;

// Animated number component
function AnimatedNumber({ value, duration, decimals = 0, prefix = "", suffix = "", delay = 0 }) {
  const ref = useRef();
  
  useEffect(() => {
    let start = 0;
    let startTimestamp = null;
    let frame;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = start + (value - start) * progress;
      
      if (ref.current) {
        ref.current.textContent =
          prefix +
          current.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) +
          suffix;
      }
      
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };
    
    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(step);
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [value, duration, decimals, prefix, suffix, delay]);
  
  return <span ref={ref}>{prefix}{(0).toFixed(decimals)}{suffix}</span>;
}

const Body = () => {
  const analyticsData = [
    {
      value: 358,
      suffix: "+",
      label: "Trading instruments and scripts for all markets, including NSE, MCX, Crypto, Forex, and Global",
      duration: 1200,
      delay: 250
    },
    {
      value: 963,
      suffix: "+",
      label: "Satisfied clients with user-friendly interface, lightning-fast executions, and expert support",
      duration: 1200,
      delay: 350
    },
    {
      value: 532,
      suffix: "+",
      label: "Awards won for unmatched reliability, innovation, and client satisfaction",
      duration: 1200,
      delay: 450
    }
  ];

  const testimonialsData = [
    {
      quote: "I started with zero experience and now trade global markets weekly. Bull CFD made it incredibly easy and profitable.",
      author: "Rahul M."
    },
    {
      quote: "Outstanding support and intuitive interface. I trade daily and absolutely love the seamless experience.",
      author: "Priya D."
    },
    {
      quote: "The platform's reliability and advanced features have transformed my trading approach completely.",
      author: "Amit K."
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <style>{styles}</style>
      
      {/* Hero Section */}
      <div
        className="hero-bg animated-section"
        style={{
          animationDelay: '0.1s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '40vh', // reduced height for a smaller hero section
          textAlign: 'center',
        }}
      >
        <div className="logo-container">
          <div
            style={{
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#EF6836',
              margin: '0 auto',
            }}
          >
            <img
              src={logo}
              alt="Bull CFD Logo"
              style={{
                width: '150px',
                marginBottom: '20px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </div>
        </div>

        <h1
          className="main-title animated-section"
          style={{ animationDelay: '0.2s', margin: '20px 0 10px 0' }}
        >
          Start with Just ₹1,000
        </h1>

        <p
          className="main-subtitle animated-section"
          style={{ animationDelay: '0.3s', margin: '0 0 20px 0' }}
        >
          NSE, MCX, Crypto, Forex, and Global markets - all in one powerful platform designed for modern traders
        </p>

        <a
          href="https://crm.bullcfd.com/front_form/?referral=420040&tracking_id=109"
          className="cta-button animated-section"
          style={{ animationDelay: '0.4s' }}
        >
          Start Trading Now
        </a>
      </div>

      {/* Analytics Section */}
      <div className="animated-section" style={{ 
        marginTop: '80px',
        textAlign: 'center',
        animationDelay: '0.5s'
      }}>
        <h2 className="section-title">No KYC Needed. Real Tools for Real Markets.</h2>
        
        <div className="analytics-section">
          {analyticsData.map((item, idx) => (
            <div className="analytics-card" key={idx} style={{ animationDelay: `${0.6 + idx * 0.1}s` }}>
              <div className="analytics-value">
                <AnimatedNumber
                  value={item.value}
                  duration={item.duration}
                  suffix={item.suffix}
                  delay={item.delay}
                />
              </div>
              <div className="analytics-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="animated-section" style={{ 
        marginTop: '120px',
        textAlign: 'center',
        animationDelay: '0.9s'
      }}>
        <h2 className="section-title">All-in-One Trading Platform</h2>
        
        <div className="feature-grid">
          <div className="feature-card animated-section-left" style={{ animationDelay: '1s' }}>
            <h3>⚡ Lightning Fast Execution</h3>
            <p>Execute trades instantly with our ultra-fast order processing engine designed for professional traders.</p>
          </div>
          
          <div className="feature-card animated-section" style={{ animationDelay: '1.1s' }}>
            <h3>📊 Real-Time Analytics</h3>
            <p>Access live charts, advanced technical indicators, and real-time market news all in one unified interface.</p>
          </div>
          
          <div className="feature-card animated-section-right" style={{ animationDelay: '1.2s' }}>
            <h3>📱 Multi-Device Access</h3>
            <p>Trade seamlessly on web, desktop, or mobile - your portfolio accessible anywhere, anytime.</p>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="animated-section" style={{ 
        marginTop: '120px',
        textAlign: 'center',
        animationDelay: '1.3s'
      }}>
        <h2 className="section-title">How to Get Started</h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginTop: '60px'
        }}>
          <div className="step-card animated-section-left" style={{ animationDelay: '1.4s' }}>
            <div className="step-number">1</div>
            <h4 style={{ color: '#EF6836', marginBottom: '15px' }}>Create Your Account</h4>
            <p style={{ color: '#aaa' }}>Create your free account in just minutes with our streamlined registration process.</p>
          </div>
          
          <div className="step-card animated-section" style={{ animationDelay: '1.5s' }}>
            <div className="step-number">2</div>
            <h4 style={{ color: '#DC261B', marginBottom: '15px' }}>Make Your First Deposit</h4>
            <p style={{ color: '#aaa' }}>Deposit securely using multiple payment options with instant processing.</p>
          </div>
          
          <div className="step-card animated-section-right" style={{ animationDelay: '1.6s' }}>
            <div className="step-number">3</div>
            <h4 style={{ color: '#A9A9A9', marginBottom: '15px' }}>Start Trading</h4>
            <p style={{ color: '#aaa' }}>Access global markets and start trading with professional-grade tools.</p>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
     <div
        className="animated-section"
        style={{
          marginTop: '120px',
          textAlign: 'center',
          animationDelay: '1.7s',
        }}
      >
        <h2 className="section-title">Key Benefits of Bull CFD</h2>

        <div className="benefits-grid">
          <div
            className="benefit-item animate-pointer"
            style={{
              animation: 'fadeInUp 0.6s ease',
              animationDelay: '1.8s',
              animationFillMode: 'both',
            }}
          >
            <div className="benefit-icon">✓</div>
            <span style={{ color: '#ccc', fontSize: '1.1rem' }}>
              A Futuristic Trading Platform
            </span>
          </div>
          
          <div
            className="benefit-item"
            style={{
              animation: 'fadeInUp 0.6s ease',
              animationDelay: '1.9s',
              animationFillMode: 'both',
            }}
          >
            <div className="benefit-icon">✓</div>
            <span style={{ color: '#ccc', fontSize: '1.1rem' }}>
              Low Brokerage
            </span>
          </div>

          <div
            className="benefit-item"
            style={{
              animation: 'fadeInUp 0.6s ease',
              animationDelay: '2.0s',
              animationFillMode: 'both',
            }}
          >
            <div className="benefit-icon">✓</div>
            <span style={{ color: '#ccc', fontSize: '1.1rem' }}>
              Up to 50X Leverage*
            </span>
          </div>

          <div
            className="benefit-item"
            style={{
              animation: 'fadeInUp 0.6s ease',
              animationDelay: '2.1s',
              animationFillMode: 'both',
            }}
          >
            <div className="benefit-icon">✓</div>
            <span style={{ color: '#ccc', fontSize: '1.1rem' }}>
              Access to NSE, MCX, Forex, Global, Crypto Markets
            </span>
          </div>
          
          <div
            className="benefit-item"
            style={{
              animation: 'fadeInUp 0.6s ease',
              animationDelay: '2.2s',
              animationFillMode: 'both',
            }}
          >
            <div className="benefit-icon">✓</div>
            <span style={{ color: '#ccc', fontSize: '1.1rem' }}>
              Instant Deposits & Withdrawals
            </span>
          </div>
          
          <div
            className="benefit-item"
            style={{
              animation: 'fadeInUp 0.6s ease',
              animationDelay: '2.3s',
              animationFillMode: 'both',
            }}
          >
            <div className="benefit-icon">✓</div>
            <span style={{ color: '#ccc', fontSize: '1.1rem' }}>
              Realtime Customer Support
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="animated-section" style={{ 
        marginTop: '120px',
        textAlign: 'center',
        animationDelay: '2.4s'
      }}>
        <h2 className="section-title"> 
 	
Why is BullCFD different?</h2>
        
        <div className="pricing-grid">
          <div className="pricing-card" style={{ animationDelay: '2.5s',marginTop: '40px' }}>
            <h3 style={{ color: '#A9A9A9', marginBottom: '20px' }}>Zero Taxes </h3>
        
            <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
              <li style={{ marginBottom: '10px' }}>✓ Keep 100% of what you earn </li>
              <li style={{ marginBottom: '10px' }}>✓ with no tax deductions on your trades.</li>
             
            </ul>
          </div>
          
          <div className="pricing-card featured" style={{ animationDelay: '2.6s',marginTop: '40px' }}>
            <h3 style={{ color: 'white', marginBottom: '20px' }}>No KYC Needed</h3>
           
            <ul style={{ listStyle: 'none', padding: 0, color: '#eee' }}>
              <li style={{ marginBottom: '10px' }}>✓ Skip the long forms  </li>
              <li style={{ marginBottom: '10px' }}>✓ start trading in minutes</li>
             
            </ul>
          </div>
          
          <div className="pricing-card" style={{ animationDelay: '2.7s' ,marginTop: '40px' }}>
            <h3 style={{ color: '#DC261B', marginBottom: '20px' }}>Start with ₹ 1000 </h3>
           
            <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
              <li style={{ marginBottom: '10px' }}>✓  Begin your trading journey with just ₹1,000.</li>
              <li style={{ marginBottom: '10px' }}>✓ No big capital needed to get started</li>
            
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="animated-section" style={{ 
        marginTop: '120px',
        textAlign: 'center',
        animationDelay: '2.8s'
      }}>
        <h2 className="section-title">What Our Traders Say</h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginTop: '60px'
        }}>
          {testimonialsData.map((testimonial, idx) => (
            <div className="testimonial-card" key={idx} style={{ animationDelay: `${2.9 + idx * 0.1}s` }}>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="animated-section" style={{ 
        marginTop: '120px',
        textAlign: 'center',
        animationDelay: '3.2s',
        paddingBottom: '80px'
      }}>
        <h2 className="section-title">Ready to Start Your Trading Journey?</h2>
        <p style={{ 
          maxWidth: '600px',
          margin: '0 auto 40px',
          fontSize: '1.2rem',
          color: '#aaa',
          lineHeight: '1.6'
        }}>
          Join thousands of successful traders worldwide who trust Bull CFD for their financial growth.
        </p>
        
        <a href="https://crm.bullcfd.com/front_form/?referral=420040&tracking_id=109" className="cta-button">
          Create Your Free Account
        </a>
      </div>
    </div>
  );
};

export default Body;