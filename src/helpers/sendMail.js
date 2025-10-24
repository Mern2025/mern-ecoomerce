const nodemailer = require("nodemailer")
// config node mail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "merndeveloper2025@gmail.com",
    pass: "eesm hxve opnv rrrr",
  },
});
       

const sendMail = async()=>{
        // send mail
             const info = await transporter.sendMail({
             from: '"Maddison Foo Koch" merndeveloper2025@gmail.com',
             to: "ruhulaminstudent990@gmail.com",
             subject: "Hello ✔",
             text: "Hello world?", // plain‑text body
             html: "<b>Hello world?</b>", // HTML body
             });
}
   

module.exports = sendMail
