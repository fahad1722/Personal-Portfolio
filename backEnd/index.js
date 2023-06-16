const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

const port = 5000;

const nodemailer = require("nodemailer");

// Enable JSON parsing for incoming requests
app.use(express.json());
app.use(cors());

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USERNAME, // Update with your email address
    pass: process.env.GMAIL_PASSWORD, // Update with your email password or an app-specific password
  },
});

// Define a POST route for form submissions
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Compose the email message
  const mailOptions = {
    from: process.env.GMAIL_USERNAME, // Update with your email address
    to: process.env.RECEIVER, // Update with the recipient's email address
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
