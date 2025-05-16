import { sendMails } from "../Middlewere/email.js";

export const addReview = async (req, res) => {
  try {
    const { name, message, rating, email } = req.body;
   

    const emailData = { name, review_email: email, message, rating };
    sendMails(emailData);
    res
      .status(200)
      .json({ massage: "Review added Successfull", status: 1, data: [] });
  } catch (error) {
    res.status(200).json({ status: 0, data: [], massage: error.message });
  }
};
