import axios from "axios";

export async function POST(request) {
  const formData = await request.json();

  const payload = {
    text: "📩 New Contact Form Submission!",
    attachments: [
      {
        fallback: `New Message from ${formData.fullName}: ${formData.message}`, // Fallback text for notifications.
        color: "#36a64f", // Color bar on the left side.
        author_name: formData.fullName,
        author_icon: "https://via.placeholder.com/48", // You can use a default avatar or integrate with Gravatar, for example.
        title: "Contact Form Details",
        fields: [
          {
            title: "Name",
            value: formData.fullName,
            short: true, // Short fields appear side-by-side.
          },
          {
            title: "Email",
            value: formData.email || "N/A",
            short: true,
          },
          {
            title: "Phone Number",
            value: formData.phoneNumber || "N/A",
            short: true,
          },
          {
            title: "Message",
            value: formData.message,
            short: false, // Long fields appear full width.
          },
        ],
        footer: "Contact Form Submission",
        footer_icon: "https://via.placeholder.com/16",
        ts: Date.now() / 1000, // Unix timestamp for footer.
      },
    ],
  };

  try {
    const response = await axios.post(process.env.SLACK_WEBHOOK_URL, payload);
    return new Response("Message sent successfully", {
      status: response.status,
    });
  } catch (error) {
    return new Response("Failed to send message", {
      status: error.response?.status || 500,
    });
  }
}
