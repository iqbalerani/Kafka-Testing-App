const EmailConsumer = require("./consumers/emailConsumer"); // Adjust the path as needed
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "notification-app",
  brokers: ["localhost:9092"],
});

function startConsumers() {
  const emailConsumer = new EmailConsumer();
  emailConsumer.run();
  // ... other consumers
}

startConsumers();
