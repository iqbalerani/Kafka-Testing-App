const kafka = require("../config/kafkaConfig");
const producer = kafka.producer();

const sendEmailNotification = async (emailData) => {
  await producer.connect();
  await producer.send({
    topic: "email",
    messages: [{ value: JSON.stringify(emailData) }],
  });
  await producer.disconnect();
};

module.exports = { sendEmailNotification };
