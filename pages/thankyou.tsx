import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import { useRouter } from 'next/router';

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
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

const TermsContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ThankYouPage: React.FC = () => {
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(event.target.checked);
  };

  const router = useRouter();

  const handleSubmit = () => {
    if (termsAccepted) {
      router.push('/');
      console.log("Terms accepted and submitted");
    }
  };

  return (
    <>
      <GlobalStyle />
      <ThankYouContainer>
        <ThankYouMessage>Thank you for applying!</ThankYouMessage>
        <p>We will be in touch with you shortly.</p>
        <TermsContainer>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
            I accept the Terms and Conditions
          </CheckboxLabel>
        </TermsContainer>
        <SubmitButton disabled={!termsAccepted} onClick={handleSubmit}>
          Submit
        </SubmitButton>
        <HomeLink href="/">Go back to the home page</HomeLink>
      </ThankYouContainer>
    </>
  );
};

export default ThankYouPage;