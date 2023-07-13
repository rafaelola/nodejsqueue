import {Job} from "bull";
import nodemailer from "nodemailer";

const initiateEmailJob =  async (job: Job) => {

    // create a test account
    const testAccount = await nodemailer.createTestAccount();
    // create a transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        secure: false,
        port: 587,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    // get the data from the job
    const { from, to, subject, text } = job.data;
    console.log("Sending mail to %s", to);
    try {
        // send the mail
        const info = await transporter.sendMail({from,to,subject,text,html: `<strong>${text}</strong>`,});
        console.log(info);
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log(error);
    }
};
export {initiateEmailJob} ;
