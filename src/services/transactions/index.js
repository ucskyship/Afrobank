import Axios from "../index";

const transfer = async (payload) => {
  const { recipient, amount, pin } = payload;
  const body = {
    recipient,
    amount,
    pin,
  };
  try {
    const response = await Axios.post("/transfer", body);
    console.log(response);
  } catch (error) {
    throw error;
  }
};

const transactionHistory = async (accountNumber) => {
  try {
    const resp = await Axios.get(`/history/${accountNumber}`);
    console.log(resp);
  } catch (error) {
    throw error;
  }
};

export { transactionHistory, transfer };
