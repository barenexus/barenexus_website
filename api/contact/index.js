// Azure Functions (Node 18) — SendGrid email on contact form submit
const sgMail = require("@sendgrid/mail");

module.exports = async function (context, req) {
  try {
    const { name, email, company, message } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      return { status: 400, body: { success: false, error: "Missing required fields" } };
    }

    // Configure SendGrid
    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.SENDGRID_TO;
    const fromEmail = process.env.SENDGRID_FROM;
    const subjectPrefix = process.env.SENDGRID_SUBJECT_PREFIX || "Contact";

    if (!apiKey || !toEmail || !fromEmail) {
      context.log.error("Missing SendGrid configuration.");
      return { status: 500, body: { success: false, error: "Email not configured" } };
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

    // Optional auto-reply to the sender
    // await sgMail.send({ to: email, from: fromEmail, subject: "We got your message",
    //   text: "Thanks! Our team will contact you soon.", html: "<p>Thanks! Our team will contact you soon.</p>" });

    return { status: 200, body: { success: true, message: "Form submitted and email sent successfully!" } };
  } catch (err) {
    // Common errors: verified sender mismatch, domain not authenticated, daily limit reached
    context.log.error("SendGrid error:", err?.response?.body || err);
    return { status: 500, body: { success: false, error: "Could not send email" } };
  }
};

// Simple HTML escape to avoid accidental HTML injection in emails
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
