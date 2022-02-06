const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mail = require('nodemailer');
const { json } = require('body-parser');
const { attachment } = require('express/lib/response');
const app = express();
const port = process.env.PORT || 3000;
let transporter = mail.createTransport({
    service: 'gmail',
    auth:{
        user:'origuy2021',
        pass: 'Oo0547520899'
    }
})
app.use(bodyParser.urlencoded({extended:true}))
app.listen(port, () => {
    console.log(`Welcome the server is running on port: ${port}`);
})
app.use(express.static("public"));

app.get('/', (request, respond) => {
    respond.sendFile(__dirname + '/index.html');
})
app.post('/',(request,respond) => {
    let firstName = request.body.fname;
    let lastName = request.body.lname;
    let email = request.body.email;
    let newMember = {
        fullName: `${firstName} ${lastName}`,
        email: `${email}`,
        status: `Subscribe`
    }
    console.log(newMember);
    let mailOption = {
        from: 'origuy2021@gmail.com',
        to: 'origuy2021@gmail.com',
        subject: 'New Test SignUp Form',
        text: `Full Name: ${firstName} ${lastName} \n Email: ${email}`
    }
    transporter.sendMail(mailOption, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      respond.sendFile(__dirname + '/public/html/success.html')
})
