import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const BrandSignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    country: '',
    companyName: '',
    companyType: '',
    businessCategory: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/brands/signup', formData);
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
      backgroundColor: '#f9f9f9', 
      borderRadius: '10px' 
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
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
        Brands and Agencies - Get in Touch
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>First Name:</label>
          <input 
            name="firstName" 
            value={formData.firstName}
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
          <label style={{ display: 'block', marginBottom: '5px' }}>Second Name:</label>
          <input 
            name="secondName" 
            value={formData.secondName}
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
          <label style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
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
          <label style={{ display: 'block', marginBottom: '5px' }}>Country:</label>
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
          <label style={{ display: 'block', marginBottom: '5px' }}>Company Name:</label>
          <input 
            name="companyName" 
            value={formData.companyName}
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
          <label style={{ display: 'block', marginBottom: '5px' }}>Company Type:</label>
          <select 
            name="companyType" 
            value={formData.companyType}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }}>
            <option value="Brand">Brand</option>
            <option value="Agency">Agency</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Business Category:</label>
          <select 
            name="businessCategory" 
            value={formData.businessCategory}
            onChange={handleChange} 
            style={{ 
              padding: '10px', 
              width: '100%',
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              fontSize: '16px' 
            }}>
            <option value="Animals">Animals</option>
            <option value="Automotive">Automotive</option>
            <option value="Beauty and Personal Care">Beauty and Personal Care</option>
            <option value="Business, Finance and Insurance">Business, Finance and Insurance</option>
            <option value="Children and Family">Children and Family</option>
            <option value="Education and Books">Education and Books</option>
            <option value="Entertainment and Events">Entertainment and Events</option>
            <option value="Fashion">Fashion</option>
            <option value="Food and Drink">Food and Drink</option>
            <option value="Health, Fitness and Sport">Health, Fitness and Sport</option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="Photography, Art and Design">Photography, Art and Design</option>
            <option value="Restaurant, Bars and Hotels">Restaurant, Bars and Hotels</option>
            <option value="Social Enterprise and Not for Profit">Social Enterprise and Not for Profit</option>
            <option value="Social Media, Web and Tech">Social Media, Web and Tech</option>
            <option value="Travel and Destinations">Travel and Destinations</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            width:'100%',
            marginTop:30,
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

export default BrandSignupForm;