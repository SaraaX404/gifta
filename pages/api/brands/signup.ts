import type { NextApiRequest, NextApiResponse } from 'next';
import * as SibApiV3Sdk from '@sendinblue/client';

interface BrandSignupData {
  firstName: string;
  secondName: string;
  email: string;
  country: string;
  companyName: string;
  companyType: string;
  businessCategory: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  if (req.method === 'POST') {
    const {
      firstName, secondName, email, country,
      companyName, companyType, businessCategory
    }: BrandSignupData = req.body;
    
    try {
      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
      
      // Configure API key authorization: api-key
      apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY as string);
      
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
      
      sendSmtpEmail.subject = "New Brand Signup";
      sendSmtpEmail.htmlContent = `
        <html>
          <body>
            <h1>New Brand Signup</h1>
            <p>First Name: ${firstName}</p>
            <p>Second Name: ${secondName}</p>
            <p>Email: ${email}</p>
            <p>Country: ${country}</p>
            <p>Company Name: ${companyName}</p>
            <p>Company Type: ${companyType}</p>
            <p>Business Category: ${businessCategory}</p>
          </body>
        </html>
      `;
      sendSmtpEmail.sender = { name: "Gifta", email: "gifta4617@gmail.com" };
      sendSmtpEmail.to = [{ email: "gifta4617@gmail.com" }];
      
      const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

      console.log(result);
      
      res.status(200).json({ message: 'Brand signup successful', result });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error processing brand signup' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}