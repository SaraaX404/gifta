// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { GlobalStyle } from '../styles/globalStyles';

const IndexPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        textAlign: 'center', 
        backgroundColor: '#f9f9f9' 
      }}>
        <h1>Welcome to Gifta</h1>
        <p>Select your role:</p>
        <Link href="/influencer-signup" passHref>
          <span
            style={{
              display: 'block',
              width: '200px',
              padding: '15px',
              margin: '10px',
              fontSize: '18px',
              color: 'white',
              backgroundColor: '#0070f3',
              textDecoration: 'none',
              borderRadius: '5px',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005bb5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
          >
            Influencers
          </span>
        </Link>
        <Link href="/brand-signup" passHref>
          <span
            style={{
              display: 'block',
              width: '200px',
              padding: '15px',
              margin: '10px',
              fontSize: '18px',
              color: 'white',
              backgroundColor: '#0070f3',
              textDecoration: 'none',
              borderRadius: '5px',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005bb5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
          >
            Brands
          </span>
        </Link>
      </div>
    </>
  );
};

export default IndexPage;