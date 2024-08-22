var nodemailer = require('nodemailer');

var transporter = new nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'abroxus14@gmail.com',
        pass : 'Gowtham#1404'
    }
})

var options = {
    from : 'abroxus14@gmail.com',
    to : 'varepalli05@gmail.com',
    subject : 'testing mail',
    text : 'Sent from Node'
}

transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Email is sent '+info.response)
    }
});

