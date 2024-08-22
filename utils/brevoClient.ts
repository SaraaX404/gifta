import { TransactionalEmailsApi, SendSmtpEmail, TransactionalEmailsApiApiKeys } from '@getbrevo/brevo';

// Initialize the TransactionalEmailsApi
const apiInstance = new TransactionalEmailsApi();

// Set the API key
apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY as string);

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const sendSmtpEmail = new SendSmtpEmail();
    sendSmtpEmail.to = [{ email: to }];
    sendSmtpEmail.sender = { name: 'Gifta Sri Lanka', email: 'no-reply@gifta.com' };
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.textContent = text;

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email sending failed');
  }
};
