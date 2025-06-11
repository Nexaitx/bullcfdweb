import React, { useEffect, useRef } from 'react';

const styles = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: translateY(0);}
}
.analytics-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
  align-items: center;
}
.analytics-card {
  flex: 1 1 200px;
  min-width: 200px;
  background: linear-gradient(135deg, #e3f0ff 60%, #ffe3ec 100%);
  padding: 24px 16px;
  border-radius: 18px;
  box-shadow: 0 2px 16px #b39ddb33;
  text-align: center;
  animation: fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both;
  border: 2px solid #b3e5fc44;
  margin-bottom: 12px;
  transition: box-shadow 0.3s;
}
.analytics-card:nth-child(2) {
  background: linear-gradient(135deg, #ffe3ec 60%, #e3f0ff 100%);
  border-color: #f8bbd0;
}
.analytics-card:nth-child(3) {
  background: linear-gradient(135deg, #e3ffe3 60%, #e3f0ff 100%);
  border-color: #b2dfdb;
}
.analytics-card:nth-child(4) {
  background: linear-gradient(135deg, #fffde3 60%, #e3f0ff 100%);
  border-color: #ffe082;
}
.analytics-value {
  font-size: 2.2rem;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 8px;
  min-height: 2.5rem;
}
.analytics-label {
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
}
.hero-bg {
  background: linear-gradient(120deg, #e3f0ffcc 0%, #ffe3ecc0 100%), url('/src/background.jpg') center/cover no-repeat;
  border-radius: 24px;
  box-shadow: 0 4px 32px #b39ddb22;
  padding: 48px 24px 40px 24px;
  margin-bottom: 36px;
  position: relative;
  overflow: hidden;
}
@media (max-width: 900px) {
  .analytics-section {
    flex-direction: column;
    gap: 16px;
  }
  .hero-bg {
    padding: 32px 8px 28px 8px;
  }
}
`;

const analyticsData = [
  {
    value: 1.2,
    suffix: "B+",
    label: "Total Trading Volume",
    prefix: "$",
    decimals: 1,
    duration: 1200,
    delay: 250
  },
  {
    value: 50000,
    suffix: "+",
    label: "Active Traders",
    prefix: "",
    decimals: 0,
    duration: 1200,
    delay: 350
  },
  {
    value: 99.99,
    suffix: "%",
    label: "Order Execution Rate",
    prefix: "",
    decimals: 2,
    duration: 1200,
    delay: 450
  },
  {
    value: 30,
    suffix: "ms",
    label: "Avg. Execution Speed",
    prefix: "< ",
    decimals: 0,
    duration: 1200,
    delay: 550
  }
];

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
  return <span ref={ref} style={{ color: "#1976d2" }}>{prefix}{(0).toFixed(decimals)}{suffix}</span>;
}

const Body = () => {
    return (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          background: 'linear-gradient(120deg, #e3f0ff 0%, #ffe3ec 100%)'
        }}>
            <style>{styles}</style>
            <div
  style={{
    background: `url('../background.jpg') center/cover no-repeat`,
    borderRadius: 24,
    boxShadow: '0 4px 32px #b39ddb22',
    padding: '48px 24px 40px 24px',
    marginBottom: 36,
    position: 'relative',
    overflow: 'hidden'
  }}
>
  <h1 className="animated-section" style={{
    animationDelay: '0.1s',
    color: '#1a237e',
    background: 'none',
    boxShadow: 'none',
    marginBottom: 0
  }}>
    Trade Smarter with Bull CFD
  </h1>
  <p className="animated-section" style={{
    animationDelay: '0.2s',
    fontSize: '1.2rem',
    color: '#333',
    background: 'none',
    boxShadow: 'none',
    marginTop: 0
  }}>
    Experience next-generation trading with advanced tools, real-time analytics, and a seamless user interface.
  </p>
  <a 
    href="https://crm.bullcfd.com/front_form/" 
    className="animated-btn animated-section"
    style={{ 
      display: 'inline-block', 
      marginTop: '20px', 
      padding: '12px 28px', 
      color: '#fff', 
      textDecoration: 'none', 
      borderRadius: '5px',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      animationDelay: '0.3s',
      boxShadow: '0 2px 8px #007bff44'
    }}
  >
    Start Trading Now
  </a>
</div>

            {/* Analytical Data Section */}
            <div className="animated-section" style={{
              marginTop: '40px',
              background: 'linear-gradient(90deg, #e3f0ff 60%, #ffe3ec 100%)',
              animationDelay: '0.22s',
              borderRadius: 20,
              boxShadow: '0 4px 24px #b39ddb22',
              padding: '24px 0'
            }}>
                <h2 style={{
                  color: '#1976d2',
                  marginBottom: 0,
                  fontWeight: 700,
                  fontSize: '2.2rem'
                }}>Bull CFD in Numbers</h2>
                <div className="analytics-section">
                  {analyticsData.map((item, idx) => (
                    <div
                      className="analytics-card"
                      key={item.label}
                      style={{
                        animationDelay: `${item.delay}ms`
                      }}
                    >
                      <div className="analytics-value">
                        <AnimatedNumber
                          value={item.value}
                          duration={item.duration}
                          decimals={item.decimals}
                          prefix={item.prefix}
                          suffix={item.suffix}
                          delay={item.delay}
                        />
                      </div>
                      <div className="analytics-label">{item.label}</div>
                    </div>
                  ))}
                </div>
            </div>

            {/* Platform Features with left/right animation */}
            <div className="animated-section" style={{ marginTop: '48px', animationDelay: '0.4s' }}>
                <h2 style={{ color: '#007bff' }}>All-in-One Trading Platform</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginTop: '24px' }}>
                    <div className="animated-section-left" style={{ flex: '1 1 260px', minWidth: '260px', padding: '24px', borderRadius: '10px', boxShadow: '0 2px 8px #0001', animationDelay: '0.5s', color: '#1a237e' }}>
                        <h3>Lightning Fast Execution</h3>
                        <p style={{ color: '#333' }}>Place trades instantly with our ultra-fast order execution engine.</p>
                    </div>
                    <div className="animated-section" style={{ flex: '1 1 260px', minWidth: '260px', padding: '24px', borderRadius: '10px', boxShadow: '0 2px 8px #0001', animationDelay: '0.6s', color: '#007bff' }}>
                        <h3>Real-Time Analytics</h3>
                        <p style={{ color: '#333' }}>Access live charts, technical indicators, and market news in one place.</p>
                    </div>
                    <div className="animated-section-right" style={{ flex: '1 1 260px', minWidth: '260px', padding: '24px', borderRadius: '10px', boxShadow: '0 2px 8px #0001', animationDelay: '0.7s', color: '#388e3c' }}>
                        <h3>Multi-Device Access</h3>
                        <p style={{ color: '#333' }}>Trade on web, desktop, or mobile—your account, anywhere, anytime.</p>
                    </div>
                </div>
            </div>

            {/* Account Types */}
            <div className="animated-section" style={{ marginTop: '48px', animationDelay: '0.8s' }}>
                <h2 style={{ color: '#388e3c' }}>Account Types for Every Trader</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginTop: '24px' }}>
                    <div className="animated-section-left" style={{ flex: '1 1 220px', minWidth: '220px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 4px #0001', animationDelay: '0.9s', color: '#1a237e' }}>
                        <h4>Standard</h4>
                        <p style={{ color: '#333' }}>Perfect for beginners. Low minimum deposit and access to all basic features.</p>
                    </div>
                    <div className="animated-section" style={{ flex: '1 1 220px', minWidth: '220px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 4px #0001', animationDelay: '1.0s', color: '#007bff' }}>
                        <h4>Pro</h4>
                        <p style={{ color: '#333' }}>For experienced traders. Lower spreads, higher leverage, and premium support.</p>
                    </div>
                    <div className="animated-section-right" style={{ flex: '1 1 220px', minWidth: '220px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 4px #0001', animationDelay: '1.1s', color: '#388e3c' }}>
                        <h4>VIP</h4>
                        <p style={{ color: '#333' }}>Exclusive benefits, dedicated account manager, and priority withdrawals.</p>
                    </div>
                </div>
            </div>

            {/* How to Start */}
            <div className="animated-section" style={{ marginTop: '48px', animationDelay: '1.2s' }}>
                <h2 style={{ color: '#1a237e' }}>How to Get Started</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginTop: '24px' }}>
                    <div className="animated-section-left" style={{ flex: '1 1 200px', minWidth: '200px', background: '#f8f9fa', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 4px #0001', animationDelay: '1.3s', color: '#1a237e' }}>
                        <h4>1. Register</h4>
                        <p style={{ color: '#333' }}>Create your free account in minutes.</p>
                    </div>
                    <div className="animated-section" style={{ flex: '1 1 200px', minWidth: '200px', background: '#f8f9fa', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 4px #0001', animationDelay: '1.4s', color: '#007bff' }}>
                        <h4>2. Fund</h4>
                        <p style={{ color: '#333' }}>Deposit securely with multiple payment options.</p>
                    </div>
                    <div className="animated-section-right" style={{ flex: '1 1 200px', minWidth: '200px', background: '#f8f9fa', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 4px #0001', animationDelay: '1.5s', color: '#388e3c' }}>
                        <h4>3. Trade</h4>
                        <p style={{ color: '#333' }}>Access global markets and start trading instantly.</p>
                    </div>
                </div>
            </div>

            {/* Why Bull CFD */}
            <div className="animated-section" style={{ marginTop: '48px', animationDelay: '1.6s' }}>
                <h2 style={{ color: '#007bff' }}>Why Bull CFD?</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginTop: '24px' }}>
                    <div className="animated-section-left" style={{ flex: '1 1 220px', minWidth: '220px', background: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 2px 8px #0001', animationDelay: '1.7s', color: '#1a237e' }}>
                        <h3>Regulated & Secure</h3>
                        <p style={{ color: '#333' }}>Your funds and data are protected with industry-leading security.</p>
                    </div>
                    <div className="animated-section" style={{ flex: '1 1 220px', minWidth: '220px', background: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 2px 8px #0001', animationDelay: '1.8s', color: '#007bff' }}>
                        <h3>24/5 Support</h3>
                        <p style={{ color: '#333' }}>Our expert team is here to help you anytime, anywhere.</p>
                    </div>
                    <div className="animated-section-right" style={{ flex: '1 1 220px', minWidth: '220px', background: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 2px 8px #0001', animationDelay: '1.9s', color: '#388e3c' }}>
                        <h3>Education & Resources</h3>
                        <p style={{ color: '#333' }}>Free webinars, tutorials, and market analysis for all clients.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="animated-section" style={{ marginTop: '48px', animationDelay: '2.0s', background: 'linear-gradient(90deg, #e3f0ff 60%, #ffe3ec 100%)' }}>
                <h2 style={{ color: '#388e3c' }}>Ready to Start?</h2>
                <p style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.1rem', color: '#444' }}>
                    Join thousands of traders worldwide who trust Bull CFD for their trading journey.
                </p>
                <a 
                    href="https://crm.bullcfd.com/front_form/" 
                    className="animated-btn animated-btn-success animated-section"
                    style={{ 
                        display: 'inline-block', 
                        marginTop: '28px', 
                        padding: '12px 32px', 
                        color: '#fff', 
                        textDecoration: 'none', 
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        animationDelay: '2.1s',
                        boxShadow: '0 2px 8px #28a74544'
                    }}
                >
                    Create Your Free Account with us
                </a>
            </div>

            <div
  style={{
    marginTop: 48,
    marginBottom: 36,
    borderRadius: 20,
    boxShadow: '0 4px 24px #b39ddb22',
    padding: '32px 16px',
    background: '#fff',
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  }}
>
  <h2 style={{ color: '#1976d2', marginBottom: 24, fontWeight: 700 }}>Choose Your Plan</h2>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 32
  }}>
    <div style={{
      flex: '1 1 220px',
      minWidth: 220,
      background: '#e3f0ff',
      borderRadius: 12,
      padding: 24,
      boxShadow: '0 2px 8px #b3e5fc44'
    }}>
      <h3 style={{ color: '#1a237e', marginBottom: 8 }}>Basic</h3>
      <div style={{ fontSize: 28, fontWeight: 700, color: '#1976d2', marginBottom: 8 }}>$0</div>
      <ul style={{ listStyle: 'none', padding: 0, color: '#333', fontSize: 15, marginBottom: 0 }}>
        <li>All essential features</li>
        <li>Standard support</li>
        <li>Access to all markets</li>
      </ul>
    </div>
    <div style={{
      flex: '1 1 220px',
      minWidth: 220,
      background: '#ffe3ec',
      borderRadius: 12,
      padding: 24,
      boxShadow: '0 2px 8px #f8bbd044'
    }}>
      <h3 style={{ color: '#c2185b', marginBottom: 8 }}>Pro</h3>
      <div style={{ fontSize: 28, fontWeight: 700, color: '#c2185b', marginBottom: 8 }}>$29<span style={{ fontSize: 16, fontWeight: 400 }}>/mo</span></div>
      <ul style={{ listStyle: 'none', padding: 0, color: '#333', fontSize: 15, marginBottom: 0 }}>
        <li>Lower spreads</li>
        <li>Priority support</li>
        <li>Advanced analytics</li>
      </ul>
    </div>
    <div style={{
      flex: '1 1 220px',
      minWidth: 220,
      background: '#e3ffe3',
      borderRadius: 12,
      padding: 24,
      boxShadow: '0 2px 8px #b2dfdb44'
    }}>
      <h3 style={{ color: '#388e3c', marginBottom: 8 }}>VIP</h3>
      <div style={{ fontSize: 28, fontWeight: 700, color: '#388e3c', marginBottom: 8 }}>$99<span style={{ fontSize: 16, fontWeight: 400 }}>/mo</span></div>
      <ul style={{ listStyle: 'none', padding: 0, color: '#333', fontSize: 15, marginBottom: 0 }}>
        <li>Dedicated account manager</li>
        <li>Exclusive resources</li>
        <li>Highest priority support</li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Body;