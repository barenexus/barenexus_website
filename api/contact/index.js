// Azure Functions (Node 18) — SendGrid email on contact form submit
const sgMail = require("@sendgrid/mail");

module.exports = async function (context, req) {
  try {
    const { name, email, company, message } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      context.res = {
        status: 400,
        headers: { "Content-Type": "application/json" },
        body: { success: false, error: "Missing required fields" }
      };
      return;
    }

    // Configure SendGrid
    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.SENDGRID_TO;
    const fromEmail = process.env.SENDGRID_FROM;
    const subjectPrefix = process.env.SENDGRID_SUBJECT_PREFIX || "Contact";

    if (!apiKey || !toEmail || !fromEmail) {
      context.log.error("Missing SendGrid configuration.");
      context.res = {
        status: 500,
        headers: { "Content-Type": "application/json" },
        body: { success: false, error: "Email not configured" }
      };
      return;
    }

    sgMail.setApiKey(apiKey);

    const subject = `${subjectPrefix}: ${name}`;
    const plain = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "N/A"}`,
      `Message:`,
      message
    ].join("\n");

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    await sgMail.send({ to: toEmail, from: fromEmail, subject, text: plain, html });

    // ✅ Always respond using context.res
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { success: true, message: "Form submitted and email sent successfully!" }
    };
  } catch (err) {
    context.log.error("SendGrid error:", err?.response?.body || err);
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: { success: false, error: "Could not send email" }
    };
  }
};

// Simple HTML escape to avoid accidental HTML injection in emails
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
