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
       

const sendMail = async(mailto , sub, template )=>{
        // send e-mail
             const info = await transporter.sendMail({
             from: '"Maddison Foo Koch" merndeveloper2025@gmail.com',
             to: mailto,
             subject: sub,
             html: template, // HTML body
             });

               console.log("Message sent:", info.messageId);
}
   

module.exports = sendMail
