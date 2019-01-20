var nodemailer = require('nodemailer');
var fs = require("fs")

var emails = {

  submissionThanksGCS: function (emailObj) {
    fs.readFile("./app/email/public/conf-GCS.html", "utf8", function (err, HTMLContent) {
      console.log(HTMLContent)
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "gifthubsite@gmail.com",
          pass: "Project2!"
        }
      });
      var mailOptions = {
        from: 'Gift Hub <gifthubsite@gmail.com>',
        to: emailObj.email,
        subject: 'Your Profile Has Been Created',
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