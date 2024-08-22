// pages/brand-signup.tsx
import React from 'react';
import BrandSignupForm from '../components/BrandSignupForm';
import { GlobalStyle } from '../styles/globalStyles';

const BrandSignupPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrandSignupForm />
    </>
  );
};

export default BrandSignupPage;
