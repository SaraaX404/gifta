import type { NextApiRequest, NextApiResponse } from 'next';
import * as SibApiV3Sdk from '@sendinblue/client';

interface InfluencerSignupData {
  instagramHandle: string;
  facebookHandle: string;
  tikTokHandle: string;
  youtube: string;
  name: string;
  dob: string;
  country: string;
  email: string;
  contactNumber: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  console.log(req.body)

  if (req.method === 'POST') {
    const { 
      instagramHandle, facebookHandle, tikTokHandle, youtube,
      name, dob, country, email, contactNumber 
    }: InfluencerSignupData = req.body;
    
    try {
      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
      
      // Configure API key authorization: api-key
      apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY as string);
      
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
      
      sendSmtpEmail.subject = "New Influencer Signup";
      sendSmtpEmail.htmlContent = `
        <html>
          <body>
            <h1>New Influencer Signup</h1>
            <p>Instagram Handle: ${instagramHandle}</p>
            <p>Facebook Handle: ${facebookHandle}</p>
            <p>TikTok Handle: ${tikTokHandle}</p>
            <p>YouTube: ${youtube}</p>
            <p>Name: ${name}</p>
            <p>Date of Birth: ${dob}</p>
            <p>Country: ${country}</p>
            <p>Email: ${email}</p>
            <p>Contact Number: ${contactNumber}</p>
          </body>
        </html>
      `;
      sendSmtpEmail.sender = { name: "Gifta", email: "gifta4617@gmail.com" };
      sendSmtpEmail.to = [{ email: "gifta4617@gmail.com" }];
      
      const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

      console.log(result)
      
      res.status(200).json({ message: 'Influencer signup successful', result });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error processing influencer signup' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}