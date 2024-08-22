// pages/thankyou.tsx
import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
`;

const ThankYouMessage = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #0070f3;
`;

const HomeLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  font-size: 18px;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const ThankYouPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThankYouContainer>
        <ThankYouMessage>Thank you for signing up!</ThankYouMessage>
        <p>We will be in touch with you soon.</p>
        <HomeLink href="/">Go back to the home page</HomeLink>
      </ThankYouContainer>
    </>
  );
};

export default ThankYouPage;
