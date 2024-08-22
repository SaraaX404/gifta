// pages/influencer-signup.tsx
import React from 'react';
import InfluencerSignupForm from '../components/InfluencerSignupForm';
import { GlobalStyle } from '../styles/globalStyles';

const InfluencerSignupPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <InfluencerSignupForm />
    </>
  );
};

export default InfluencerSignupPage;
