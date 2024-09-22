const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service or API
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword",
  },
});

const sendEmail = async ({ to, subject, body }) => {
  const mailOptions = {
    from: "youremail@gmail.com",
    to,
    subject,
    text: body,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
