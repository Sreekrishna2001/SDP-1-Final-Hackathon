var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreply.b4eat@gmail.com',
    pass: 'kittu2001'
  }
});

var mailOptions = {
  from: 'noreply.b4eat@gmail.com',
  to: 'sriharsha.9554@gmail.com',
  subject: 'TEST APPLICATION',
  text: `HI,
            Here is conformation of your table booking.
            Thank you.
            B4EAT. `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports=[mailOptions]