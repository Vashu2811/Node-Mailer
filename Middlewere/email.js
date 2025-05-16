import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const YoyrEmail = "mandoravashu57@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: YoyrEmail,
    pass: "frog ypgf tgix xoqv",
  },
  logger: true,
  debug: true, // set to true to see more logs
});

export const sendMails = async (data, File = {}) => {
  try {
    if (data && data.review_email) {
      // await transporter.sendMail(optionReviewEmail(data), (error, info) => {
      //   if (error) {
      //     console.log("Error:", error);
      //   } else {
      //     console.log("Email sent:", info.response);
      //   }
      // });
      await new Promise((resolve, reject) => {
        transporter.sendMail(optionReviewEmail(data), (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
          }
        });
      });
    } else {
      if (data && data.comp_email) {
        await transporter.sendMail(candidateDetailsEmail(data, File));
      }
      await transporter.sendMail(applicantEmail(data));
    }
    console.log("mail sent");
  } catch (error) {
    console.log("error catch", error);
  }
};

const optionReviewEmail = (data) => {

  return {
    from: {
      name: "Woyce Tech pvt ltd",
      address: YoyrEmail,
    },
    to:"mandoravashu57@gmail.com",
    subject:
      "Thank You for Sharing Your Feedback on Woyce Tech",
    text: `Hello ${data.name}, Your message has been submitted successfully. We will message it and get back to you soon.`,
    html: `
     

<div style="
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 550px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-left: 6px solid #4caf50;
">
  <p style="margin: 0 0 12px; font-size: 16px;">
    <strong style="color: #4caf50;">Name:</strong> ${data.name}
  </p>
  <p style="margin: 0 0 12px; font-size: 16px;">
    <strong style="color: #4caf50;">Email:</strong> ${data.review_email}
  </p>
  <p style="margin: 0; font-size: 16px;">
    <strong style="color: #4caf50;">Message:</strong> ${data.message}
  </p>
</div>
    `,
  };
};

