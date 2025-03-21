/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 443;

// Middleware

// LOCAL TESTING
// app.use(cors({
//   origin: 'http://localhost:5173', // Replace with your frontend URL
//   methods: ['POST'],
//   allowedHeaders: ['Content-Type'],
//   credentials: true
// }));

// PRODUCTION
app.use(cors({
  origin: 'https:/www.gandjgutters.com',
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
})); 

app.use(bodyParser.json());

// Email sending route
app.post('/api/send-email', (req, res) => {
    const { name, email, service, message } = req.body;

    const recipient = process.env.MYEMAIL;  // Hardcoded recipient YOUR EMAIL

    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',  // SMTP server for PrivateEmail
      port: 465, 
      secure: true,
      auth: {
        // Your business email creds
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,   // business email
      to: recipient,
      subject: `G&J Seamless Gutters Customer Inquiry`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nService: ${service}`,
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f9;">
        <header style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #4CAF50;">New Message from G&J Seamless Gutters Customer</h1>
        </header>

        <section style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <p style="font-size: 16px; margin-bottom: 15px;">You have received a new message from your website contact form:</p>

          <h3 style="font-size: 18px; color: #4CAF50; margin-bottom: 10px;">Customer Information:</h3>
          
          <p style="font-size: 16px; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>

          <h3 style="font-size: 18px; color: #4CAF50; margin-bottom: 10px;">Service:</h3>
          <p style="font-size: 16px; margin-bottom: 15px;">${service}</p>

          <h3 style="font-size: 18px; color: #4CAF50; margin-bottom: 10px;">Message:</h3>
          <p style="font-size: 16px; margin-bottom: 15px;">${message}</p>

          <p style="font-size: 16px; margin-bottom: 15px;">Please review the details and get in touch with the customer as soon as possible.</p>

          <footer style="text-align: center; margin-top: 30px; font-size: 14px; color: #888;">
            <p>&copy; 2025 G&J Seamless Gutters | All rights reserved</p>
          </footer>
        </section>
      </div>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send(error.toString());
      }
      console.log('Email sent: ', info.response);

      // Send confirmation email to the user
      const confirmationMailOptions = {
        from: process.env.EMAIL_USER, // your email
        to: email,  // Send confirmation to the user's email
        subject: 'G&J Seamless Gutters Message Received!',  // Confirmation subject
        text: 'Thank you for your message! We have received it and will get back to you shortly.\nBest regards,\nG&J Seamless Gutters Team',  // Confirmation message
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f9;">
            <header style="text-align: center; margin-bottom: 20px;">
              <h1 style="color: #4CAF50;">G&J Seamless Gutters</h1>
              <p style="font-size: 18px; color: #888;">Thank you for reaching out!</p>
            </header>
        
            <section style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <p style="font-size: 16px; margin-bottom: 15px;">Hi,</p>
              
              <p style="font-size: 16px; margin-bottom: 15px;">Thank you for your message. We have received it and will get back to you shortly. Our team is reviewing your submission and will respond as soon as possible.</p>
        
              <p style="font-size: 16px; margin-bottom: 15px;">Here are the details of your message:</p>
        
              <p style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">Name: ${name}</p>
              <p style="font-size: 16px; margin-bottom: 10px;">Service: ${service}</p>
              <p style="font-size: 16px; margin-bottom: 10px;">Message: ${message}</p>
        
              <p style="font-size: 16px; margin-bottom: 15px;">We appreciate your interest and look forward to connecting with you soon!</p>
        
              <footer style="text-align: center; margin-top: 30px; font-size: 14px; color: #888;">
                <p>&copy; 2025 G&J Seamless Gutters | All rights reserved</p>
              </footer>
            </section>
          </div>
        `    
      };
      transporter.sendMail(confirmationMailOptions, (error, info) => {
        if (error) {
          console.error('Error sending confirmation email:', error);
          return res.status(500).send(error.toString());
        }
        console.log('Confirmation email sent: ', info.response);
        res.status(200).send('Email sent: ' + info.response);
      });
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});