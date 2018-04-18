var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
("use strict");
const nodemailer = require("nodemailer");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Console.log req info
router.use(function(req, res, next) {
    console.log(`Request body: ${JSON.stringify(req.body)}'`);
    next();
});

router.post("/", function(req, res, next) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "salcombot@gmail.com",
            pass: "Gummiworm0+"
        }
    });

    const emailBody = req.body;
    const senderName = emailBody.name;
    const senderEmail = emailBody.email;
    const message = emailBody.message;

    const mailOptions = {
        from: '"The Salamander Commander 👻" <salcombot@gmail.com>', // sender address
        to: "salcomwebdesign@gmail.com", // list of receivers
        subject: "Job Request", // Subject line
        html: `<p>${senderName}</p></br><p>${senderEmail}</p></br><p>${message}</p>` // html body
    };

    transporter.sendMail(mailOptions, function(err, res) {
        if (err) {
            console.error("there was an error: ", err);
        } else {
            console.log("here is the res: ", res);
        }
    });
});

// // Create new applicant and application
// router.post("/", function(req, res, next) {
//     const emailBody = req.body;
//     const senderName = emailBody.name;
//     const senderEmail = emailBody.email;
//     const message = emailBody.message;

//     ("use strict");
//     const nodemailer = require("nodemailer");

//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     nodemailer.createTransport({

//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: "salcomwebdesign@gmail.com",
//                 pass: "Lollipop0+"
//             }
//         });

//         // setup email data with unicode symbols
//         let mailOptions = {
//             from: '"The Salamander Commander 👻" <salcomwebdesign@gmail.com>', // sender address
//             to: "salcomwebdesign@gmail.com", // list of receivers
//             subject: "Job Request", // Subject line
//             html: `<p>${senderName}</p></br><p>${senderEmail}</p></br><p>${message}</p>` // html body
//         };

//         // send mail with defined transport object
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return console.log(error);
//             }
//             console.log("Message sent: %s", info.messageId);
//             // Preview only available when sending through an Ethereal account
//             console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

//             // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//             // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//         });
//     });
// });

module.exports = router;
