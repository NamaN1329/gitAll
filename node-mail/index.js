require('dotenv').config();

const mailer = require("nodemailer");
let body ={
    from: 'FooDeliY',
    to: 'namanthapa1212@gmail.com',
    subject: 'This is subject',
    html: '<h2>The html content</h2><br>',
}

const transporter = mailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS
    }
})

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

transporter.sendMail(body,(err, result) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(result);
    console.log("email sent");
})