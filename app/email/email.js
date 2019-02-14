var nodemailer = require('nodemailer');
var fs = require("fs")

var emails = {

  acctCreated: function (to) {
    fs.readFile("./app/email/public/conf.html", "utf8", function (err, HTMLContent) {
      console.log(HTMLContent)
      HTMLContent = HTMLContent.replace("{{firstName}}", to.firstName)
      HTMLContent = HTMLContent.replace("{{lastName}}",  to.lastName)
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "scionmatches@gmail.com",
          pass: process.env.EMAIL_PW
        }
      });
      var mailOptions = {
        from: 'Scion <scionmatches@gmail.com',
        to: to.email,
        subject: 'Your Account Has Been Created',
        html: HTMLContent
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    })
  },

  matched: function (to) {
    fs.readFile("./app/email/public/matched.html", "utf8", function (err, HTMLContent) {
      console.log(HTMLContent)
      HTMLContent = HTMLContent.replace("{{firstName}}", to.firstName)
      HTMLContent = HTMLContent.replace("{{lastName}}",  to.lastName)
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "scionmatches@gmail.com",
          pass: process.env.EMAIL_PW
        }
      });
      var mailOptions = {
        from: 'Scion <scionmatches@gmail.com',
        to: to.email,
        subject: 'Your Account Has Been Created',
        html: HTMLContent
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    })
  }
};
module.exports = emails