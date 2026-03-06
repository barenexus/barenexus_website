const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {

  const { name, email, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info@barenexus.com",
      pass: "APP_PASSWORD"
    }
  });

  await transporter.sendMail({
    from: email,
    to: "info@barenexus.com",
    subject: "New Contact Message",
    html: `
      <h2>New Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Message:</b> ${message}</p>
    `
  });

  res.json({ success: true });

});

app.listen(5000);