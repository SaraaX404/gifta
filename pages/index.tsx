import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        backgroundColor: '#ffffff' 
      }}>
        <Image src="/gifta-01.png" alt="Gifta Logo" width={200} height={100} />
        <h1 style={{ color: '#068F9A' }}>Welcome to Gifta</h1>
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
              backgroundColor: '#068F9A',
              textDecoration: 'none',
              borderRadius: '5px',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#056d77'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#068F9A'}
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
              backgroundColor: '#068F9A',
              textDecoration: 'none',
              borderRadius: '5px',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#056d77'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#068F9A'}
          >
            Brands
          </span>
        </Link>
      </div>
    </>
  );
};

export default IndexPage;