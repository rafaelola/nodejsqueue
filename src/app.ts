import express from "express";
import bodyParser from "body-parser";
import {initiateEmailJob} from "./job/emailJob";
import Queue from "bull";

const app = express();
const PORT = process.env.PORT || 3002;
app.use(bodyParser.json());

interface mailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;

}

const queue = new Queue("rymm-ware-email-queue");


const emailToQueue = async (mailOptions: mailOptions) => {
    queue.add(mailOptions);
};

queue.process(initiateEmailJob);

app.post("/email/test",  async (req, res) => {
    const {from, to, subject, text} = req.body;

    await emailToQueue({from, to, subject, text});
    console.log("Added to queue");

    res.json({
        message: "Email Sent",
    });


});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
