import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
<p style={{ fontStyle: 'italic', fontWeight: 300 }}>
  Disclaimer: Trading CFDs involves risk and may not be suitable for all investors. Please trade responsibly.
</p>
            {/* <p>&copy; {new Date().getFullYear()} bullcfd. All rights reserved.</p> */}
            <a href="https://www.bullcfd.com/" style={{ margin: '0 10px' }}>Home</a>
            <a href="https://crm.bullcfd.com/front_form/" style={{ margin: '0 10px' }}>Sign Up</a>
        </footer>
    );
};

export default Footer;