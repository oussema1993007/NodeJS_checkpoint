var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'oussemaarmani@gmail.com',
    pass: 'ctab jbnd uqtk hdlr'
  },
  tls: {
    rejectUnauthorized: false
  }
});

var mailOptions = {
  from: 'oussemaarmani@gmail.com',
  to: 'oussemaarmani@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'aslema gingel'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('Error:', error.message);
  } else {
    console.log('Email sent: ' + info.response);
  }
});