const sender = require("../config/email.config");
const { TicketRepository } = require("../repository/index");


const repo = new TicketRepository();

const sendBasicMail = (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
    } catch (error) {
        console.log("Something went wrong in service layer");
        throw error;
    }
}


const fetchPendingEmails = async (timeStamps) => {
    try {
        const ticket = await repo.get({ status: "PENDING" });
        return ticket;
    } catch (error) {
        console.log("Something went wrong in service layer");
        throw error;
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log("Something went wrong in service layer");
        throw error;
    }
}


const createNotification = async (data) => {
    try {
        const response = await repo.createTicket(data);
        return response;
    } catch (error) {
        console.log("Something went wrong in service layer");
        throw error;
    }
}





module.exports = {
    sendBasicMail,
    fetchPendingEmails,
    createNotification,
    updateTicket,
}



/**
 * SMTP → a@b.com
 * receiver → d@e.com
 *
 * from: support@noti.com
*/
