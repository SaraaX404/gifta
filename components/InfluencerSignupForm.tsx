import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const InfluencerSignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    instagramHandle: '',
    facebookHandle: '',
    tikTokHandle: '',
    youtube: '',
    name: '',
    dob: '',
    country: '',
    email: '',
    contactNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/influencer/signup', formData);
      if (response.status === 200) {
        router.push('/thankyou')
      } else {
        alert('Sign up failed!');
      }
    } catch (error) {
      console.error('Sign up failed:', error);
      alert('Sign up failed!');
    }
  };

  const mainColor = '#068F9A';

  return (
    <div style={{ 
      display: 'flex', 
      gap: 10,
      flexDirection: 'column', 
      maxWidth: '600px', 
      margin: 'auto', 
      marginTop: 120,
      padding: '60px', 
      backgroundColor: '#ffffff', 
      borderRadius: '10px' 
    }}>
     <div style={{ textAlign: 'center', marginBottom: '20px', display:'flex',alignItems:'center', justifyContent:'center' }}>
        <Image 
          src="/gifta-01.png"
          alt="Gifta Logo"
          width={150}
          height={150}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h1 style={{
        fontSize: '36px', 
        color: mainColor, 
        marginBottom: '20px', 
        textAlign: 'center' 
      }}>
        Welcome to Gifta
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'black' }}>Instagram Handle:</label>
          <input 
            name="instagramHandle" 
            value={formData.instagramHandle}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'black' }}>Facebook Handle:</label>
          <input 
            name="facebookHandle" 
            value={formData.facebookHandle}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'black' }}>TikTok Handle:</label>
          <input 
            name="tikTokHandle" 
            value={formData.tikTokHandle}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'black' }}>YouTube:</label>
          <input 
            name="youtube" 
            value={formData.youtube}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'black' }}>Name:</label>
          <input 
            name="name" 
            value={formData.name}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'black' }}>Date of Birth:</label>
          <input 
            name="dob" 
            type="date"
            value={formData.dob}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'black' }}>Country:</label>
          <input 
            name="country" 
            value={formData.country}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'black' }}>Email:</label>
          <input 
            name="email" 
            type="email"
            value={formData.email}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'black' }}>Contact Number:</label>
          <input 
            name="contactNumber" 
            type="tel"
            value={formData.contactNumber}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }} 
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            width: '100%',
            marginTop: 30,
            backgroundColor: mainColor, 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontSize: '16px' 
          }} 
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#056b74'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = mainColor}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InfluencerSignupForm;