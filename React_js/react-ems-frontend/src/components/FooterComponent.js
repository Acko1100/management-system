import React from 'react';

const FooterComponent = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <span className="text-dark">© 2023 Aleksandar Radivojevic</span>
          <span className="contact-info">
            Contact: 
            <a href="mailto:your@email.com"> aleksandar.radivojevic.201@singimail.rs</a>
            <span> | </span>
            Phone: <span>061/1234/567</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
