import nodemailer from "nodemailer";
import { StatusCodes } from "http-status-codes";

const PASSWORD = process.env.password;
const FROM_EMAIL = process.env.From_Email;
const TO_EMAIL = process.env.To_Email;

const Contact = (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: FROM_EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  const Data = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: subject,
    text: message,
    html: `
    <h1 style="text-align:center">PERSONAL PORTFOLIO</h1>
    <p>------------You have a new contact request------------</p>
    <h3>Contact details</h3>
    <ul>
    <li style="margin-bottom:5px;">Name : ${name}</li>
    <li>Email : ${email}</li>
    </ul>

    <h3>Message</h3>
    <p>- ${message}</p>
    `,
  };

  transporter.sendMail(Data, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    } else {
      console.log(info);
      res.status(StatusCodes.OK).send();
    }
  });
};

export default Contact;
