const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend("re_3sgJd1aB_4N8zKG7KFpdGDeZ5LqKcGw6G"); // <-- paste your API key

app.post("/send-email", async (req, Tres) => {
  const { name, email, phone, age,weight, gender, nationality, city, goal } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // default testing sender
      to: "movicbanks18@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Age: ${age}</p>
         <p>Weight: ${weight}</p>
        <p>Gender: ${gender}</p>
        <p>Nationality: ${nationality}</p>
        <p>City: ${city}</p>
        <p>Goal: ${goal}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

