export async function onRequestPost(context) {
  const { request, env } = context;
  const data = await request.json();

  const { name, email, company, message } = data;

  const sendRequest = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: "info@barenexus.com", name: "BareNexus" }],
        },
      ],
      from: {
        email: "info@barenexus.com",
        name: "BareNexus Website",
      },
      subject: "New Contact Form Submission",
      content: [
        {
          type: "text/html",
          value: `
                  <h2>New Contact Form Message</h2>
                  <p><b>Name:</b> ${name}</p>
                  <p><b>Email:</b> ${email}</p>
                  <p><b>Company:</b> ${company}</p>
                  <p><b>Message:</b> ${message}</p>
                `,
        },
      ],
    }),
  });

  if (sendRequest.ok) {
    return new Response(JSON.stringify({ success: true }), {
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: false }), {
    status: 500,
  });
}
s;
