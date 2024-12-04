import React from 'react';
import Header from '../Header/Header.js';
import FooterNav from '../FooterNav/FooterNav.js';
import Footer from '../Footer/Footer.js';

function Layout({ children }) {
  return (
    <div>
      <Header />

      {children}
      <FooterNav />
      <Footer />
    </div>
  );
}

export default Layout;
