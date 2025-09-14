const sender = require("../config/email.config");

const sendBasicMail = (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    sendBasicMail
}



/**
 * SMTP → a@b.com
 * receiver → d@e.com
 *
 * from: support@noti.com
*/
